import cv2
import numpy as np

# Let's check frame by frame where connected components resembling a mouse cursor exist on the red background
cap = cv2.VideoCapture("public/character.mp4")

# Red background color is around BGR [4, 7, 244]
# Any pixel with R > 200 and G < 30 and B < 30 is red background.
# Any pixel that is NOT red background and is OUTSIDE the character is an anomaly/cursor!

# Let's find the bounding box/mask of the character across all frames:
# By taking the median or min red background mask
character_masks = []
for i in range(0, 240, 10):
    cap.set(cv2.CAP_PROP_POS_FRAMES, i)
    ret, frame = cap.read()
    if not ret:
        break
    b, g, r = frame[:, :, 0], frame[:, :, 1], frame[:, :, 2]
    # Red background mask
    is_bg = (r > 180) & (g < 40) & (b < 40)
    character_masks.append(~is_bg)

# Union of character regions
character_envelope = np.any(character_masks, axis=0)

# Dilate character envelope slightly (e.g. 20 pixels) to avoid hair strands
kernel = np.ones((25, 25), np.uint8)
dilated_char = cv2.dilate(character_envelope.astype(np.uint8), kernel)

print(f"Character envelope determined.")

# Now for every frame, check outside the dilated character envelope:
# Is there ANY non-background pixel (e.g., cursor arrow)?
cap.set(cv2.CAP_PROP_POS_FRAMES, 0)
cursor_locations = {}

for f_idx in range(240):
    ret, frame = cap.read()
    if not ret:
        break
    b, g, r = frame[:, :, 0], frame[:, :, 1], frame[:, :, 2]
    is_bg = (r > 180) & (g < 40) & (b < 40)
    
    # Anomaly outside character
    anomaly = (~is_bg) & (dilated_char == 0)
    anomaly_count = np.sum(anomaly)
    
    if anomaly_count > 15: # A cursor is typically 50-300 pixels
        # Find centroid of anomaly
        y_indices, x_indices = np.where(anomaly)
        cx = int(np.mean(x_indices))
        cy = int(np.mean(y_indices))
        cursor_locations[f_idx] = (cx, cy, int(anomaly_count))

print(f"Frames with cursor outside character envelope: {len(cursor_locations)}")
print(f"Sample frames with cursor: {list(cursor_locations.items())[:15]}")
print(f"Frames WITHOUT cursor: {[i for i in range(240) if i not in cursor_locations]}")

cap.release()
