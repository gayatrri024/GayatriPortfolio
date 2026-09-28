import cv2
import numpy as np

cap = cv2.VideoCapture("public/character.mp4")
indices = list(range(200, 235, 2))
crops = []
for idx in indices:
    cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
    ret, frame = cap.read()
    if ret:
        face = frame[120:340, 520:760]
        cv2.putText(face, f"F:{idx}", (10, 25), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
        crops.append(face)

cap.release()

# Save in 3 rows
r1 = np.hstack(crops[:6])
r2 = np.hstack(crops[6:12])
r3 = np.hstack(crops[12:] + [np.zeros_like(crops[0])] * (6 - len(crops[12:])))
grid = np.vstack([r1, r2, r3])
cv2.imwrite("scripts/return_path.jpg", grid)
print("Saved scripts/return_path.jpg")
