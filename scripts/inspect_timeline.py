import cv2
import os

video_path = os.path.join("public", "character.mp4")
cap = cv2.VideoCapture(video_path)
out_dir = os.path.join("scripts", "samples")
os.makedirs(out_dir, exist_ok=True)

total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

# Let's save a contact sheet or individual sampled frames every 5 or 10 frames
# and also look closely at frames 0 to 240
frame_idx = 0
saved = []
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    if frame_idx % 8 == 0:  # 30 samples across the 10 seconds
        thumb = cv2.resize(frame, (320, 180))
        cv2.putText(thumb, f"F:{frame_idx}", (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)
        cv2.imwrite(os.path.join(out_dir, f"frame_{frame_idx:03d}.jpg"), thumb)
        saved.append(frame_idx)
    frame_idx += 1

cap.release()
print(f"Saved {len(saved)} sample frames to {out_dir}: {saved}")
