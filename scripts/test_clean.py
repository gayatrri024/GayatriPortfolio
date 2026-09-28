import cv2
import numpy as np

# Let's test cleaning f184
img = cv2.imread("scripts/f184_raw.png")
h, w = img.shape[:2]

# The pure background color
# Let's get the median color of the top edge where there is only red background
top_strip = img[:30, :]
bg_color = np.median(top_strip.reshape(-1, 3), axis=0).astype(np.uint8)
print(f"Detected background BGR: {bg_color}")

# A pixel is background if its color is close to bg_color
# In HSV or RGB distance:
diff = np.linalg.norm(img.astype(float) - bg_color.astype(float), axis=2)

# Notice: hair is dark brown/black, sweater is white, skin is peachy.
# Mouse cursor is white arrow with black border, or sparkle in bottom right.
# Notice: Cursors and sparkles are detached islands surrounded by red background!
# Let's verify this!
# The character is one huge connected component rooted at the bottom edge (sweater at y=719)
# The sweater spans roughly x: 300 to 950 at the bottom.

# Let's create a binary mask of "not background"
is_non_bg = (diff > 25).astype(np.uint8)

# Find connected components
num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(is_non_bg, connectivity=8)

# Find the label that contains the main character body
# The main character will have the largest area and will touch the bottom edge
main_char_label = -1
max_area = 0
for lbl in range(1, num_labels):
    area = stats[lbl, cv2.CC_STAT_AREA]
    top = stats[lbl, cv2.CC_STAT_TOP]
    bottom = top + stats[lbl, cv2.CC_STAT_HEIGHT]
    if area > max_area and bottom >= h - 10:
        max_area = area
        main_char_label = lbl

print(f"Main character component label: {main_char_label}, area: {max_area}")

# Any other component is an unwanted artifact (cursor, sparkle, trail, etc.)!
cleaned = img.copy()
for lbl in range(1, num_labels):
    if lbl != main_char_label:
        # Check if it's an artifact or loose hair strand
        # If it's the sparkle at bottom right or cursor
        area = stats[lbl, cv2.CC_STAT_AREA]
        cx, cy = centroids[lbl]
        
        # Replace this component with clean background color!
        cleaned[labels == lbl] = bg_color

cv2.imwrite("scripts/f184_cleaned.png", cleaned)
print("Saved scripts/f184_cleaned.png")
