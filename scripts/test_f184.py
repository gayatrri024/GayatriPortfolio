import cv2
import numpy as np

# Let's inspect if any cursor touches the character or if it's strictly in the red background
cap = cv2.VideoCapture("public/character.mp4")

# Red background color
# Let's get the exact median background color from the 4 corners across all frames
corners_bgr = []
for i in range(0, 240, 20):
    cap.set(cv2.CAP_PROP_POS_FRAMES, i)
    ret, frame = cap.read()
    if ret:
        corners_bgr.append(frame[10, 10])
        corners_bgr.append(frame[10, 1260])

median_bg_bgr = np.median(corners_bgr, axis=0).astype(np.uint8)
print(f"Median background BGR: {median_bg_bgr}, RGB: [{median_bg_bgr[2]}, {median_bg_bgr[1]}, {median_bg_bgr[0]}], HEX: #{median_bg_bgr[2]:02x}{median_bg_bgr[1]:02x}{median_bg_bgr[0]:02x}")

# Let's check frame 184 (which had a prominent white cursor in the contact sheet)
cap.set(cv2.CAP_PROP_POS_FRAMES, 184)
ret, f184 = cap.read()

# Let's inspect where the cursor is in f184
# In the contact sheet, around F:184, near the top right of the character or left
cv2.imwrite("scripts/f184_raw.png", f184)

# Let's clean the background:
# If a pixel is far from character and is an isolated component on the red background,
# replacing it with median_bg_bgr cleans it completely!
cap.release()
print("Saved f184_raw.png")
