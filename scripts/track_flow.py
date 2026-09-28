import cv2
import numpy as np
import math

cap = cv2.VideoCapture("public/character.mp4")

# Character face center approx (640, 260)
face_center = (640, 260)

# Detect cursor in all 240 frames
# A cursor in Google Flow is a small white/black graphic or arrow moving on the background
# Let's inspect the entire frame outside the face region
frame_data = []

# Red background color standard
bg_bgr = np.array([4, 7, 244])

for i in range(240):
    ret, frame = cap.read()
    if not ret:
        break
    
    # Calculate difference from pure red
    diff = np.linalg.norm(frame.astype(float) - bg_bgr.astype(float), axis=2)
    non_bg = diff > 40
    
    # Let's find connected components in non_bg that are SMALL (cursor candidates)
    # Background components will be tiny isolated items of size 10 to 800 pixels
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(non_bg.astype(np.uint8))
    
    cursors_in_frame = []
    for lbl in range(1, num_labels):
        area = stats[lbl, cv2.CC_STAT_AREA]
        cx, cy = centroids[lbl]
        # A cursor is small: between 8 and 1000 pixels
        if 8 <= area <= 1200:
            # Check if this component is separate from the main character body
            # The character is a huge connected component of area > 100,000 pixels
            cursors_in_frame.append({
                "lbl": lbl,
                "area": area,
                "x": stats[lbl, cv2.CC_STAT_LEFT],
                "y": stats[lbl, cv2.CC_STAT_TOP],
                "w": stats[lbl, cv2.CC_STAT_WIDTH],
                "h": stats[lbl, cv2.CC_STAT_HEIGHT],
                "cx": cx,
                "cy": cy
            })
            
    frame_data.append((i, cursors_in_frame))

cap.release()

# Let's print summary
has_small_comps = [f for f, c in frame_data if len(c) > 0]
print(f"Frames with small isolated components: {len(has_small_comps)}")
for f, c in frame_data[:20]:
    if c:
        print(f"Frame {f}: {len(c)} candidates: {[ (int(item['cx']), int(item['cy']), item['area']) for item in c ]}")

for f, c in frame_data[100:120]:
    if c:
        print(f"Frame {f}: {len(c)} candidates: {[ (int(item['cx']), int(item['cy']), item['area']) for item in c ]}")
