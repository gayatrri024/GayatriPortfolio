import cv2
import numpy as np

img = cv2.imread("scripts/f184_raw.png")
h, w = img.shape[:2]

# Accurate background color
top_strip = img[:30, :]
bg_color = np.median(top_strip.reshape(-1, 3), axis=0).astype(np.uint8)

# Calculate difference from pure background
diff = np.linalg.norm(img.astype(float) - bg_color.astype(float), axis=2)

# Non-bg mask: any pixel that differs by even 10
is_non_bg = (diff > 12).astype(np.uint8)

num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(is_non_bg, connectivity=8)

# Find character
main_char_label = -1
max_area = 0
for lbl in range(1, num_labels):
    area = stats[lbl, cv2.CC_STAT_AREA]
    top = stats[lbl, cv2.CC_STAT_TOP]
    bottom = top + stats[lbl, cv2.CC_STAT_HEIGHT]
    if area > max_area and bottom >= h - 10:
        max_area = area
        main_char_label = lbl

# Create artifact mask (everything non-bg that is not the main character)
artifact_mask = np.zeros((h, w), dtype=np.uint8)
for lbl in range(1, num_labels):
    if lbl != main_char_label:
        artifact_mask[labels == lbl] = 255

# Dilate artifact mask by 5 pixels to catch compression halo around cursors
kernel = np.ones((7, 7), np.uint8)
dilated_artifact = cv2.dilate(artifact_mask, kernel)

# Ensure dilated artifact doesn't eat into the character
dilated_artifact[labels == main_char_label] = 0

cleaned = img.copy()
# Replace artifacts with clean background
cleaned[dilated_artifact > 0] = bg_color

cv2.imwrite("scripts/f184_perfect.png", cleaned)
print("Saved scripts/f184_perfect.png")
