import cv2
import numpy as np
import math

cap = cv2.VideoCapture("public/character.mp4")

# Character face center approx (640, 260)
face_center = (640, 260)

# Check all frames for cursor
cursor_data = []

# Top background strip
ret, f0 = cap.read()
bg_color = np.median(f0[:30, :].reshape(-1, 3), axis=0).astype(np.uint8)
cap.set(cv2.CAP_PROP_POS_FRAMES, 0)

for i in range(240):
    ret, frame = cap.read()
    if not ret:
        break
    
    diff = np.linalg.norm(frame.astype(float) - bg_color.astype(float), axis=2)
    is_non_bg = (diff > 15).astype(np.uint8)
    
    num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(is_non_bg, connectivity=8)
    
    # Character label: largest area touching bottom
    main_char_lbl = -1
    max_area = 0
    for lbl in range(1, num_labels):
        a = stats[lbl, cv2.CC_STAT_AREA]
        bot = stats[lbl, cv2.CC_STAT_TOP] + stats[lbl, cv2.CC_STAT_HEIGHT]
        if a > max_area and bot >= 710:
            max_area = a
            main_char_lbl = lbl
            
    # Look for cursor: small component (15 to 1000 px) that is NOT the bottom-right sparkle (x > 1050, y > 500)
    found_cursor = None
    for lbl in range(1, num_labels):
        if lbl == main_char_lbl:
            continue
        cx, cy = centroids[lbl]
        a = stats[lbl, cv2.CC_STAT_AREA]
        # Exclude bottom right sparkle
        if cx > 1050 and cy > 500:
            continue
        if 15 <= a <= 1500:
            found_cursor = (cx, cy, a)
            break
            
    cursor_data.append((i, found_cursor))

cap.release()

detected = [(i, c) for i, c in cursor_data if c is not None]
print(f"Detected simulated cursor in {len(detected)} frames out of 240.")
for i, c in detected[::5]:
    dx = c[0] - face_center[0]
    dy = c[1] - face_center[1]
    ang = math.degrees(math.atan2(dy, dx))
    print(f"Frame {i:3d}: cursor at ({c[0]:.1f}, {c[1]:.1f}), dx={dx:+5.1f}, dy={dy:+5.1f}, angle={ang:+6.1f}°")
