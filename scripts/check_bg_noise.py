import cv2
import numpy as np

cap = cv2.VideoCapture("public/character.mp4")
ret, frame = cap.read()
# Look at frame 0 and frame 16
# Let's save a crop of the background on the left and right
cv2.imwrite("scripts/crop_f0_left.png", frame[:, :200])

# Let's find what pixel values exist in the left 200px
left_area = frame[:, :200]
unique_colors = np.unique(left_area.reshape(-1, 3), axis=0)
print(f"Frame 0 left 200px has {len(unique_colors)} unique colors")
print(f"Top 5 most common colors (BGR):")
colors, counts = np.unique(left_area.reshape(-1, 3), axis=0, return_counts=True)
top_idx = np.argsort(counts)[::-1]
for i in range(min(10, len(top_idx))):
    idx = top_idx[i]
    print(f"  BGR: {colors[idx]}, Count: {counts[idx]}")

# Let's check where pixels are NOT the dominant red color
dominant_bgr = colors[top_idx[0]]
diff = np.linalg.norm(left_area.astype(float) - dominant_bgr.astype(float), axis=2)
anomaly_mask = diff > 30
print(f"Number of anomaly pixels (diff > 30) in left 200px: {np.sum(anomaly_mask)}")

# Let's see what those anomaly pixels look like
if np.sum(anomaly_mask) > 0:
    anomaly_pixels = left_area[anomaly_mask]
    print("Sample anomaly pixels (BGR):", anomaly_pixels[:10])

cap.release()
