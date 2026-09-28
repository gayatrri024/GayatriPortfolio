import cv2

cap = cv2.VideoCapture("public/character.mp4")
ret, frame = cap.read()
# Crop around x: 1100..1250, y: 550..650
crop = frame[550:650, 1100:1250]
cv2.imwrite("scripts/crop_bottom_right.png", crop)
cap.release()
print("Saved crop_bottom_right.png")
