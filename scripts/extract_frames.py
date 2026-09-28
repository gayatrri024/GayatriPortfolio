import cv2
import numpy as np
import os
import json
import math
from PIL import Image

def clean_frame(frame, bg_color):
    """
    Cleans isolated background artifacts (Flow-generated cursors, corner sparkles, halos)
    without affecting the character's hair, body, or face.
    """
    h, w = frame.shape[:2]
    # Difference from background color
    diff = np.linalg.norm(frame.astype(float) - bg_color.astype(float), axis=2)
    is_non_bg = (diff > 12).astype(np.uint8)
    
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(is_non_bg, connectivity=8)
    
    # Character is the massive component touching the bottom of the frame
    main_char_label = -1
    max_area = 0
    for lbl in range(1, num_labels):
        area = stats[lbl, cv2.CC_STAT_AREA]
        top = stats[lbl, cv2.CC_STAT_TOP]
        bottom = top + stats[lbl, cv2.CC_STAT_HEIGHT]
        if area > max_area and bottom >= h - 10:
            max_area = area
            main_char_label = lbl

    artifact_mask = np.zeros((h, w), dtype=np.uint8)
    for lbl in range(1, num_labels):
        if lbl != main_char_label:
            artifact_mask[labels == lbl] = 255

    # Dilate artifact mask by 9 pixels to clear compression halos around cursors
    kernel = np.ones((9, 9), np.uint8)
    dilated_artifact = cv2.dilate(artifact_mask, kernel)
    dilated_artifact[labels == main_char_label] = 0

    cleaned = frame.copy()
    cleaned[dilated_artifact > 0] = bg_color
    return cleaned

def interpolate_frame_index(target_angle_rad, anchors):
    """
    Given a target angle in [-pi, pi], find the interpolated frame index
    between anchor points.
    Anchors are list of (angle_rad, frame_index) sorted by angle_rad from -pi to +pi.
    """
    # Normalize target_angle to [-pi, pi]
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

    fps = cap.get(cv2.CAP_PROP_FPS)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    duration = total_frames / fps if fps > 0 else 0

    print("========================================")
    print("CHARACTER VIDEO ANALYSIS & FRAME EXTRACTOR")
    print("========================================")
    print(f"  Source Asset: {video_path}")
    print(f"  Resolution:   {width}x{height}")
    print(f"  FPS:          {fps}")
    print(f"  Frame Count:  {total_frames}")
    print(f"  Duration:     {duration:.2f}s")

    # Sample reference background color from top corners
    ret, f0 = cap.read()
    top_strip = f0[:30, :]
    bg_bgr = np.median(top_strip.reshape(-1, 3), axis=0).astype(np.uint8)
    bg_rgb = [int(bg_bgr[2]), int(bg_bgr[1]), int(bg_bgr[0])]
    bg_hex = f"#{bg_rgb[0]:02x}{bg_rgb[1]:02x}{bg_rgb[2]:02x}"

    print(f"  Detected Background RGB: {bg_rgb}")
    print(f"  Detected Background HEX: {bg_hex}")

    # Center frame is frame 232
    print("\n[1/3] Extracting and cleaning center.webp (frame 232)...")
    cap.set(cv2.CAP_PROP_POS_FRAMES, 232)
    ret, center_frame = cap.read()
    center_cleaned = clean_frame(center_frame, bg_bgr)
    center_rgb = cv2.cvtColor(center_cleaned, cv2.COLOR_BGR2RGB)
    center_pil = Image.fromarray(center_rgb)
    center_path = os.path.join(out_dir, "center.webp")
    center_pil.save(center_path, "WEBP", quality=90, method=4)
    print(f"  Saved {center_path} ({os.path.getsize(center_path)/1024:.1f} KB)")

    # Define anchor points for circular tracking
    # angle in radians -> video frame index
    # atan2 convention:
    # 0 = Right, pi/2 = Down, pi / -pi = Left, -pi/2 = Up
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
    print(f"\n[2/3] Extracting {NUM_FRAMES} directional WebP frames around 360° circle...")

    manifest_frames = []
    
    for i in range(NUM_FRAMES):
        # Target angle in [-pi, pi)
        angle_rad = -math.pi + (i / NUM_FRAMES) * (2 * math.pi)
        angle_deg = math.degrees(angle_rad)
        frame_idx = interpolate_frame_index(angle_rad, anchors)
        
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_idx)
        ret, frame = cap.read()
        if not ret:
            print(f"Warning: Failed reading frame {frame_idx}")
            continue

        cleaned = clean_frame(frame, bg_bgr)
        rgb = cv2.cvtColor(cleaned, cv2.COLOR_BGR2RGB)
        pil_img = Image.fromarray(rgb)

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

    cap.release()

    print(f"  Extracted and cleaned {len(manifest_frames)} frames successfully.")

    # Save manifest.json
    manifest = {
        "totalFrames": NUM_FRAMES,
        "centerFrame": "frames/center.webp",
        "backgroundColorHex": bg_hex,
        "backgroundColorRgb": bg_rgb,
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

    print(f"\n[3/3] Created {manifest_path}")
    print(f"Frame extraction complete! All frames placed in {out_dir}")

if __name__ == "__main__":
    main()
