import cv2
import numpy as np
import math

# The video sequence follows:
# F: 28  ~ UP (-90 deg)
# F: 50  ~ UP-RIGHT (-45 deg)
# F: 75  ~ RIGHT (0 deg)
# F: 105 ~ DOWN-RIGHT (+45 deg)
# F: 135 ~ DOWN (+90 deg)
# F: 160 ~ DOWN-LEFT (+135 deg)
# F: 185 ~ LEFT (180 deg)
# F: 208 ~ UP-LEFT (-135 deg)
# F: 212 ~ UP-LEFT-UP (-105 deg)
# F: 28  ~ UP (-90 deg)

# Let's inspect the transition points and check if the motion is uniform.
# If we parameterize the cycle:
# Segment 1: UP (f=28, -90°) to RIGHT (f=75, 0°) -> 47 frames for 90° (~0.52 frames/deg)
# Segment 2: RIGHT (f=75, 0°) to DOWN (f=135, +90°) -> 60 frames for 90° (~0.67 frames/deg)
# Segment 3: DOWN (f=135, +90°) to LEFT (f=185, 180°) -> 50 frames for 90° (~0.55 frames/deg)
# Segment 4: LEFT (f=185, 180°) to UP (f=212, -100° / 260°) -> 27 frames for 80° (~0.34 frames/deg)
# From 212 (-100°) to 28 (-90°), f=28 is -90°.

# That means across this continuous circle:
# We can sample 64 target angles evenly spaced from -180° to +180° (step of 360/64 = 5.625°)!
# Or 36 frames (step of 10°)!
# Or 48 frames (step of 7.5°)!
# With 48 or 64 frames, each WebP frame at 85% quality is only ~20-30 KB!
# 48 frames * 25 KB = ~1.2 MB total, loads in 100ms!
# And 48 directional frames gives an extraordinarily smooth 7.5-degree step resolution!

print("Testing angle mapping...")
