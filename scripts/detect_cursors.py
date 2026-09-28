import cv2
import numpy as np
import os

video_path = os.path.join("public", "character.mp4")
cap = cv2.VideoCapture(video_path)

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

# Target red background: BGR around [6, 8, 245]
# Let's inspect where pixels deviate from red in the background region
# Let's define the character bounding box / silhouette
# Character is roughly in the center: x: [350, 930], y: [60, 720]

print(f"Analyzing {total_frames} frames...")

cursor_detected = []
for f_idx in range(total_frames):
    ret, frame = cap.read()
    if not ret:
        break
    
    # Check regions away from character: e.g. left (x: 0..300), right (x: 980..1280), top (y: 0..50)
    bg_regions = [
        frame[:, :300],
        frame[:, 980:],
        frame[:60, :]
    ]
    
    has_anomaly = False
    for r in bg_regions:
        # Distance from pure red [BGR: 6, 8, 245]
        # In BGR: Red channel is index 2, Green is 1, Blue is 0
        b, g, r_chan = r[:, :, 0], r[:, :, 1], r[:, :, 2]
        # Red background has high r_chan (> 200) and low b (< 50) and low g (< 50)
        # Cursors are white or dark arrows: e.g. high b and high g (white) or very dark
        white_pixels = np.sum((b > 150) & (g > 150) & (r_chan > 150))
        dark_pixels = np.sum((r_chan < 100) & (g < 100) & (b < 100))
        if white_pixels > 10 or dark_pixels > 10:
            has_anomaly = True
            break
            
    if has_anomaly:
        cursor_detected.append(f_idx)

print(f"Frames with detected cursor in background: {len(cursor_detected)} frames")
print(f"Frame indices with cursor: {cursor_detected[:20]} ... {cursor_detected[-10:] if cursor_detected else []}")

# Also check clean frames
clean_frames = [i for i in range(total_frames) if i not in cursor_detected]
print(f"Clean frames count: {len(clean_frames)}")
print(f"Clean frame ranges: min={min(clean_frames) if clean_frames else None}, max={max(clean_frames) if clean_frames else None}")

cap.release()
