import cv2
import numpy as np
import os
import json
import math
from PIL import Image

def fill_holes(binary_mask):
    h, w = binary_mask.shape
    flood = binary_mask.copy().astype(np.uint8)
    h_pad, w_pad = h + 2, w + 2
    mask = np.zeros((h_pad, w_pad), np.uint8)
    cv2.floodFill(flood, mask, (0, 0), 255)
    return (flood != 255).astype(np.uint8)

def process_frame_to_rgba(frame):
    h, w = frame.shape[:2]
    img_f = frame.astype(np.float32)
    b, g, r = img_f[:, :, 0], img_f[:, :, 1], img_f[:, :, 2]

    # Sample reference background color from top strip corners
    top_strip = frame[:25, :80]
    bg_bgr = np.median(top_strip.reshape(-1, 3), axis=0).astype(np.float32)
    diff = np.linalg.norm(img_f - bg_bgr, axis=2)

    # Despill ONLY hair / edge pixels where g < 45 and b < 45
    # Hair is dark brown/black; removes red bounce/bleed
    is_hair_or_bg_fringe = (g < 45) & (b < 45)
    excess_red = np.maximum(0, r - np.maximum(g, b) * 1.15 - 8)
    r_despilled = np.where(is_hair_or_bg_fringe, r - excess_red, r)
    img_despilled = np.dstack([b, g, r_despilled])

    # Foreground thresholding
    is_pure_red = (r > 130) & (g < 42) & (b < 40)
    fg = (diff > 45) & (~is_pure_red)
    fg = fg.astype(np.uint8)
    
    # Exclude bottom corners outside the sweater silhouette
    fg[600:, :270] = 0
    fg[600:, 1010:] = 0

    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(fg, connectivity=8)
    main_char_label = -1
    max_area = 0
    for lbl in range(1, num_labels):
        area = stats[lbl, cv2.CC_STAT_AREA]
        top = stats[lbl, cv2.CC_STAT_TOP]
        bottom = top + stats[lbl, cv2.CC_STAT_HEIGHT]
        cx = centroids[lbl][0]
        # Main character is centered and touches the bottom of the frame
        if area > max_area and bottom >= h - 10 and 400 <= cx <= 880:
            max_area = area
            main_char_label = lbl

    char_raw = (labels == main_char_label).astype(np.uint8)
    # Fill internal holes (eyes, nostrils, lips, inner hair)
    char_solid = fill_holes(char_raw)

    # Smooth boundary of char_solid for clean anti-aliasing
    char_solid_f = char_solid.astype(np.float32)
    alpha_blurred = cv2.GaussianBlur(char_solid_f, (5, 5), 1.0)

    # Erode to find solid core
    kernel_erode = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    core = cv2.erode(char_solid, kernel_erode)

    alpha_final = np.where(core == 1, 1.0, alpha_blurred)
    # Outside reach is strictly 0 (no floating artifacts / cursors)
    kernel_reach = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    reach = cv2.dilate(char_solid, kernel_reach)
    alpha_final[reach == 0] = 0.0
    alpha_final = np.clip(alpha_final, 0, 1)

    # Convert to PIL Image RGBA
    rgb = cv2.cvtColor(np.clip(img_despilled, 0, 255).astype(np.uint8), cv2.COLOR_BGR2RGB)
    alpha_channel = (alpha_final * 255).astype(np.uint8)
    rgba = np.dstack([rgb, alpha_channel])
    return Image.fromarray(rgba)

def interpolate_frame_index(target_angle_rad, anchors):
    while target_angle_rad < -math.pi:
        target_angle_rad += 2 * math.pi
    while target_angle_rad > math.pi:
        target_angle_rad -= 2 * math.pi
        
    for i in range(len(anchors) - 1):
        a1, f1 = anchors[i]
        a2, f2 = anchors[i + 1]
        if a1 <= target_angle_rad <= a2:
            t = (target_angle_rad - a1) / (a2 - a1) if a2 != a1 else 0
            return int(round(f1 + t * (f2 - f1)))
            
    return int(round(anchors[-1][1]))

def main():
    video_path = os.path.join("public", "character.mp4")
    out_dir = os.path.join("public", "frames")
    os.makedirs(out_dir, exist_ok=True)

    cap = cv2.VideoCapture(video_path)
    if not cap.isOpened():
        print(f"Error opening video: {video_path}")
        return

    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

    print("========================================")
    print("TRANSPARENT CHARACTER FRAME EXTRACTOR")
    print("========================================")

    # 1. Center frame (frame 232)
    print("\n[1/3] Extracting transparent center.webp (frame 232)...")
    cap.set(cv2.CAP_PROP_POS_FRAMES, 232)
    ret, center_frame = cap.read()
    center_pil = process_frame_to_rgba(center_frame)
    center_path = os.path.join(out_dir, "center.webp")
    center_pil.save(center_path, "WEBP", quality=88, method=4)
    print(f"  Saved {center_path} ({os.path.getsize(center_path)/1024:.1f} KB)")

    # 2. Anchors for 360-degree tracking
    anchors = [
        (-math.pi, 185),           # Left (-180°)
        (-3 * math.pi / 4, 208),   # Up-Left (-135°)
        (-math.pi / 2, 28),        # Up (-90°)
        (-math.pi / 4, 50),        # Up-Right (-45°)
        (0.0, 75),                 # Right (0°)
        (math.pi / 4, 105),        # Down-Right (+45°)
        (math.pi / 2, 135),        # Down (+90°)
        (3 * math.pi / 4, 160),    # Down-Left (+135°)
        (math.pi, 185)             # Left (+180°)
    ]

    NUM_FRAMES = 64
    print(f"\n[2/3] Extracting {NUM_FRAMES} transparent directional WebP frames...")

    manifest_frames = []
    for i in range(NUM_FRAMES):
        angle_rad = -math.pi + (i / NUM_FRAMES) * (2 * math.pi)
        angle_deg = math.degrees(angle_rad)
        frame_idx = interpolate_frame_index(angle_rad, anchors)

        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_idx)
        ret, frame = cap.read()
        if not ret:
            print(f"Warning: Failed reading frame {frame_idx}")
            continue

        pil_img = process_frame_to_rgba(frame)
        filename = f"frame_{i:02d}.webp"
        file_path = os.path.join(out_dir, filename)
        pil_img.save(file_path, "WEBP", quality=88, method=4)

        manifest_frames.append({
            "index": i,
            "filename": f"frames/{filename}",
            "angleRad": round(angle_rad, 4),
            "angleDeg": round(angle_deg, 2),
            "sourceVideoFrame": frame_idx
        })
        if (i + 1) % 16 == 0 or i == NUM_FRAMES - 1:
            print(f"  Processed {i + 1}/{NUM_FRAMES} frames...")

    cap.release()

    # 3. Update manifest.json
    manifest = {
        "totalFrames": NUM_FRAMES,
        "centerFrame": "frames/center.webp",
        "backgroundColorHex": "#0B1220",
        "backgroundColorRgb": [11, 18, 32],
        "isTransparent": True,
        "resolution": {
            "width": width,
            "height": height
        },
        "deadzoneRatio": 0.12,
        "smoothingFactor": 0.22,
        "frames": manifest_frames
    }

    manifest_path = os.path.join(out_dir, "manifest.json")
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2)

    print(f"\n[3/3] Successfully created transparent frames & updated {manifest_path}")

if __name__ == "__main__":
    main()
