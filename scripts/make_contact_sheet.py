import cv2
import os
import numpy as np

sample_dir = os.path.join("scripts", "samples")
files = sorted([f for f in os.listdir(sample_dir) if f.endswith(".jpg")])

rows = []
row_items = []
for i, f in enumerate(files):
    img = cv2.imread(os.path.join(sample_dir, f))
    row_items.append(img)
    if len(row_items) == 5:
        rows.append(np.hstack(row_items))
        row_items = []

if row_items:
    # pad
    while len(row_items) < 5:
        row_items.append(np.zeros_like(rows[0][:, :320]))
    rows.append(np.hstack(row_items))

grid = np.vstack(rows)
cv2.imwrite("scripts/contact_sheet.jpg", grid)
print(f"Contact sheet saved to scripts/contact_sheet.jpg with size {grid.shape}")
