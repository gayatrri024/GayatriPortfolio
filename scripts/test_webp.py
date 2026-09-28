import cv2
import numpy as np
import os
from PIL import Image

# Test cleaning and saving frame 232 as center.webp
cap = cv2.VideoCapture("public/character.mp4")
cap.set(cv2.CAP_PROP_POS_FRAMES, 232)
ret, frame = cap.read()
cap.release()

h, w = frame.shape[:2]
top_strip = frame[:30, :]
bg_color = np.median(top_strip.reshape(-1, 3), axis=0).astype(np.uint8)

diff = np.linalg.norm(frame.astype(float) - bg_color.astype(float), axis=2)
is_non_bg = (diff > 12).astype(np.uint8)
num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(is_non_bg, connectivity=8)

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

kernel = np.ones((9, 9), np.uint8)
dilated_artifact = cv2.dilate(artifact_mask, kernel)
dilated_artifact[labels == main_char_label] = 0

cleaned = frame.copy()
cleaned[dilated_artifact > 0] = bg_color

# Convert BGR to RGB
rgb = cv2.cvtColor(cleaned, cv2.COLOR_BGR2RGB)
pil_img = Image.fromarray(rgb)

os.makedirs("scripts/test_webp", exist_ok=True)
webp_path = "scripts/test_webp/center.webp"
pil_img.save(webp_path, "WEBP", quality=90, method=4)

size_bytes = os.path.getsize(webp_path)
print(f"Saved {webp_path}, size: {size_bytes / 1024:.1f} KB")
