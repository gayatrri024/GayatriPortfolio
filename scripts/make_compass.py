import cv2
import numpy as np

# Key direction frame candidates:
directions = {
    "UP": 30,
    "UP_RIGHT": 50,
    "RIGHT": 75,
    "DOWN_RIGHT": 105,
    "DOWN": 135,
    "DOWN_LEFT": 160,
    "LEFT": 185,
    "UP_LEFT": 208,
    "CENTER": 232
}

cap = cv2.VideoCapture("public/character.mp4")

# Also run our perfect cleaner on each to ensure zero cursors/artifacts
def clean_frame(img):
    h, w = img.shape[:2]
    top_strip = img[:30, :]
    bg_color = np.median(top_strip.reshape(-1, 3), axis=0).astype(np.uint8)
    diff = np.linalg.norm(img.astype(float) - bg_color.astype(float), axis=2)
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

    cleaned = img.copy()
    cleaned[dilated_artifact > 0] = bg_color
    return cleaned

cleaned_images = {}
for name, f_idx in directions.items():
    cap.set(cv2.CAP_PROP_POS_FRAMES, f_idx)
    ret, frame = cap.read()
    if ret:
        cleaned = clean_frame(frame)
        cleaned_images[name] = cleaned
        # Save individually
        cv2.imwrite(f"scripts/dir_{name.lower()}.jpg", cv2.resize(cleaned, (640, 360)))

cap.release()

# Create a 3x3 compass grid:
# UP_LEFT    UP          UP_RIGHT
# LEFT       CENTER      RIGHT
# DOWN_LEFT  DOWN        DOWN_RIGHT
row1 = np.hstack([cleaned_images["UP_LEFT"], cleaned_images["UP"], cleaned_images["UP_RIGHT"]])
row2 = np.hstack([cleaned_images["LEFT"], cleaned_images["CENTER"], cleaned_images["RIGHT"]])
row3 = np.hstack([cleaned_images["DOWN_LEFT"], cleaned_images["DOWN"], cleaned_images["DOWN_RIGHT"]])
compass_grid = np.vstack([row1, row2, row3])
compass_thumb = cv2.resize(compass_grid, (1200, 675))
cv2.imwrite("scripts/compass_grid.jpg", compass_thumb)
print("Saved scripts/compass_grid.jpg")
