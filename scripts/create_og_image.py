import os
from PIL import Image, ImageDraw, ImageFont

def generate_og_image():
    width = 1200
    height = 630

    # Create base dark navy image
    img = Image.new("RGBA", (width, height), (7, 11, 20, 255))
    draw = ImageDraw.Draw(img)

    # Add subtle blue ambient glow on right
    for r in range(400, 50, -15):
        alpha = int(35 * (1 - r / 400.0))
        glow_box = [850 - r, 315 - r, 850 + r, 315 + r]
        draw.ellipse(glow_box, fill=(37, 99, 235, alpha))

    # Add subtle grid lines
    grid_color = (255, 255, 255, 6)
    for x in range(0, width, 60):
        draw.line([(x, 0), (x, height)], fill=grid_color, width=1)
    for y in range(0, height, 60):
        draw.line([(0, y), (width, y)], fill=grid_color, width=1)

    # Load and place portrait
    portrait_path = "public/gayatri_portrait_perfect.webp"
    if os.path.exists(portrait_path):
        portrait = Image.open(portrait_path).convert("RGBA")
        # Resize portrait to fit nicely on the right
        target_h = 490
        target_w = int(portrait.width * (target_h / portrait.height))
        portrait_resized = portrait.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        # Position portrait on right side
        pos_x = 780
        pos_y = 70

        # Frame border around portrait
        draw.rounded_rectangle(
            [pos_x - 6, pos_y - 6, pos_x + target_w + 6, pos_y + target_h + 6],
            radius=18,
            fill=(13, 21, 39, 230),
            outline=(56, 189, 248, 80),
            width=2
        )

        # Paste portrait
        # Create rounded mask for portrait
        mask = Image.new('L', (target_w, target_h), 0)
        mask_draw = ImageDraw.Draw(mask)
        mask_draw.rounded_rectangle([0, 0, target_w, target_h], radius=14, fill=255)
        img.paste(portrait_resized, (pos_x, pos_y), mask)

    # Fonts
    font_bold = None
    font_regular = None
    font_mono = None
    font_large = None
    font_sub = None

    # Try Windows standard fonts
    try:
        font_large = ImageFont.truetype("segoeuib.ttf", 60)
        font_bold = ImageFont.truetype("segoeuib.ttf", 32)
        font_regular = ImageFont.truetype("segoeui.ttf", 24)
        font_mono = ImageFont.truetype("consola.ttf", 20)
        font_sub = ImageFont.truetype("segoeuib.ttf", 26)
    except Exception:
        font_large = ImageFont.load_default()
        font_bold = ImageFont.load_default()
        font_regular = ImageFont.load_default()
        font_mono = ImageFont.load_default()
        font_sub = ImageFont.load_default()

    # Left content positioning
    lx = 80

    # Status Pill: OPEN TO CLOUD & DEVOPS ROLES
    pill_w = 340
    pill_h = 36
    draw.rounded_rectangle([lx, 90, lx + pill_w, 90 + pill_h], radius=18, fill=(16, 185, 129, 25), outline=(16, 185, 129, 90), width=1)
    draw.ellipse([lx + 16, 90 + 13, lx + 26, 90 + 23], fill=(16, 185, 129, 255))
    draw.text((lx + 36, 98), "OPEN TO CLOUD & DEVOPS ROLES", fill=(52, 211, 153), font=font_mono)

    # Name
    draw.text((lx, 155), "GAYATRI SHINDE", fill=(255, 255, 255), font=font_large)

    # Title
    draw.text((lx, 240), "DevOps / Cloud Infrastructure Engineer", fill=(56, 189, 248), font=font_bold)

    # Core stack strip
    draw.text((lx, 290), "AWS  •  Kubernetes  •  Terraform / OpenTofu  •  CI/CD", fill=(203, 213, 225), font=font_sub)

    # Experience proof note
    desc_text = "2+ years Amazon operations & cloud support experience combined with\nhands-on microservices & Kubernetes infrastructure at Akiyam."
    draw.text((lx, 345), desc_text, fill=(148, 163, 184), font=font_regular, spacing=8)

    # Stats cards
    stats = [
        ("2+ YEARS", "Operations & Cloud Support"),
        ("50+ SERVICES", "Kubernetes / Microservices"),
        ("98%", "Quality Achievement")
    ]
    card_x = lx
    card_y = 445
    card_w = 190
    card_h = 95
    for stat_val, stat_lbl in stats:
        draw.rounded_rectangle(
            [card_x, card_y, card_x + card_w, card_y + card_h],
            radius=10,
            fill=(13, 21, 39, 200),
            outline=(255, 255, 255, 25),
            width=1
        )
        draw.text((card_x + 16, card_y + 16), stat_val, fill=(255, 255, 255), font=font_sub)
        # Wrap or split label
        parts = stat_lbl.split(" / ")
        draw.text((card_x + 16, card_y + 50), parts[0], fill=(148, 163, 184), font=font_mono)
        card_x += card_w + 16

    # Bottom bar
    draw.line([(lx, 580), (width - 80, 580)], fill=(255, 255, 255, 20), width=1)
    draw.text((lx, 592), "gayatrishinde-portfolio.vercel.app  •  Pune, India", fill=(100, 116, 139), font=font_mono)

    # Convert to RGB and save
    final_img = img.convert("RGB")
    final_img.save("public/og-image.png", "PNG", quality=95)
    print("Generated public/og-image.png successfully!")

if __name__ == "__main__":
    generate_og_image()
