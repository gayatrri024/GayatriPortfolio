import cv2
import numpy as np
import math

# In the face crop (y: 160..300, x: 540..740)
# Let's locate the two pupils across all frames
# In each eye, the pupil is the darkest circular region inside the eye sclera (white)

cap = cv2.VideoCapture("public/character.mp4")

# Let's define eye bounding boxes from F:232 (center frame)
# Left eye (viewer's left): x: 550..635, y: 195..265
# Right eye (viewer's right): x: 645..730, y: 195..265

trajectory = []

for f in range(240):
    ret, frame = cap.read()
    if not ret:
        break
    
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Left eye ROI
    leye = gray[190:265, 550:635]
    # Right eye ROI
    reye = gray[190:265, 645:730]
    
    # Pupils are the darkest pixels
    # Let's find min location in left eye and right eye
    min_val_l, _, min_loc_l, _ = cv2.minMaxLoc(cv2.GaussianBlur(leye, (7, 7), 0))
    min_val_r, _, min_loc_r, _ = cv2.minMaxLoc(cv2.GaussianBlur(reye, (7, 7), 0))
    
    # Center reference from F:232
    # In F:232, let's find the centers
    trajectory.append({
        "frame": f,
        "lx": min_loc_l[0], "ly": min_loc_l[1],
        "rx": min_loc_r[0], "ry": min_loc_r[1]
    })

cap.release()

# Let's print reference in F:232:
f232 = trajectory[232]
print(f"F:232 Left eye min: {f232['lx']}, {f232['ly']}; Right eye min: {f232['rx']}, {f232['ry']}")

# Let's calculate dx and dy relative to F:232 for all frames
angles = []
for item in trajectory:
    f = item["frame"]
    dx = ((item["lx"] - f232["lx"]) + (item["rx"] - f232["rx"])) / 2.0
    dy = ((item["ly"] - f232["ly"]) + (item["ry"] - f232["ry"])) / 2.0
    dist = math.hypot(dx, dy)
    angle = math.atan2(dy, dx)
    angle_deg = math.degrees(angle)
    angles.append((f, dx, dy, dist, angle_deg))

# Print every 10 frames
for item in angles[::10]:
    print(f"Frame {item[0]:3d}: dx={item[1]:+5.1f}, dy={item[2]:+5.1f}, dist={item[3]:4.1f}, angle={item[4]:+6.1f}°")
