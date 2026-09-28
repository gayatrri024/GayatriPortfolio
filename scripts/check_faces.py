import cv2
import numpy as np

# Let's inspect eye positions or head direction
# In the face area (y: 150..350, x: 500..780), let's crop the face and eyes across frames 0, 10, 20, 30... 230
cap = cv2.VideoCapture("public/character.mp4")

face_crops = []
indices = list(range(0, 240, 10))

for idx in indices:
    cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
    ret, frame = cap.read()
    if not ret:
        break
    # Face crop
    face = frame[120:340, 520:760]
    cv2.putText(face, f"F:{idx}", (10, 25), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
    face_crops.append(face)

cap.release()

# Save grid of faces
r1 = np.hstack(face_crops[:6])
r2 = np.hstack(face_crops[6:12])
r3 = np.hstack(face_crops[12:18])
r4 = np.hstack(face_crops[18:24])
face_grid = np.vstack([r1, r2, r3, r4])
cv2.imwrite("scripts/face_grid.jpg", face_grid)
print("Saved face_grid.jpg")
