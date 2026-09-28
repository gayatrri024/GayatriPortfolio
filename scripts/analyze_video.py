import cv2
import os
import numpy as np

video_path = os.path.join("public", "character.mp4")
cap = cv2.VideoCapture(video_path)

if not cap.isOpened():
    print(f"Error opening video: {video_path}")
    exit(1)

fps = cap.get(cv2.CAP_PROP_FPS)
total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
duration = total_frames / fps if fps > 0 else 0

print(f"Video Stats:")
print(f"  Resolution: {width}x{height}")
print(f"  FPS: {fps}")
print(f"  Total Frames: {total_frames}")
print(f"  Duration: {duration:.2f} seconds")

# Sample background color from corners
ret, first_frame = cap.read()
if ret:
    # Corner pixels (BGR)
    corners = [
        first_frame[5, 5],
        first_frame[5, width - 6],
        first_frame[height - 6, 5],
        first_frame[height - 6, width - 6],
        first_frame[10, width // 2]
    ]
    avg_bgr = np.mean(corners, axis=0)
    avg_rgb = [int(avg_bgr[2]), int(avg_bgr[1]), int(avg_bgr[0])]
    hex_color = f"#{avg_rgb[0]:02x}{avg_rgb[1]:02x}{avg_rgb[2]:02x}"
    print(f"  Background RGB: {avg_rgb}")
    print(f"  Background HEX: {hex_color}")

cap.release()
