import cv2
import numpy as np
import os

# Let's inspect frames around 225-240 and 10-18 to find the perfect center frame
cap = cv2.VideoCapture("public/character.mp4")
out_dir = os.path.join("scripts", "center_candidates")
os.makedirs(out_dir, exist_ok=True)

test_frames = [12, 14, 16, 18, 226, 228, 230, 232, 234, 236, 238]

for f in test_frames:
    cap.set(cv2.CAP_PROP_POS_FRAMES, f)
    ret, frame = cap.read()
    if ret:
        cv2.imwrite(os.path.join(out_dir, f"frame_{f:03d}.png"), frame)

cap.release()
print("Saved candidate center frames.")
