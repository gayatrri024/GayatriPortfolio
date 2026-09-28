import cv2
import numpy as np

frames = [12, 14, 16, 18, 226, 228, 230, 232, 234, 236, 238]
crops = []
for f in frames:
    img = cv2.imread(f"scripts/center_candidates/frame_{f:03d}.png")
    # Face crop
    face = img[140:340, 520:760]
    cv2.putText(face, f"F:{f}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
    crops.append(face)

row1 = np.hstack(crops[:6])
row2 = np.hstack(crops[6:] + [np.zeros_like(crops[0])])
grid = np.vstack([row1, row2])
cv2.imwrite("scripts/center_candidates_grid.jpg", grid)
print("Saved scripts/center_candidates_grid.jpg")
