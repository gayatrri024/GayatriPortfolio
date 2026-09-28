import React, { useEffect, useRef, useState } from 'react';

interface CharacterCanvasProps {
  className?: string;
  onFirstInteraction?: () => void;
}

export const CharacterCanvas: React.FC<CharacterCanvasProps> = ({
  className,
  onFirstInteraction
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Animation states stored in refs to avoid React re-renders on mousemove
  const mousePosRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false
  });
  const currentAngleRef = useRef<number>(0);
  const targetAngleRef = useRef<number>(0);
  const inDeadzoneRef = useRef<boolean>(true);
  const hasInteractedRef = useRef<boolean>(false);

  // Frames cache
  const centerImageRef = useRef<HTMLImageElement | null>(null);
  const framesCacheRef = useRef<(HTMLImageElement | null)[]>(new Array(64).fill(null));
  const [isLoaded, setIsLoaded] = useState(false);

  // Background color exactly matching video
  const BG_COLOR = '#f50806';
  const TOTAL_FRAMES = 64;
  const SMOOTHING = 0.22;

  useEffect(() => {
    // 1. Preload center image first for instant initial display
    const centerImg = new Image();
    centerImg.src = '/frames/center.webp';
    centerImg.onload = () => {
      centerImageRef.current = centerImg;
      setIsLoaded(true);
      drawFrame(centerImg);
    };

    // 2. Preload 64 directional frames in background
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      const numStr = i < 10 ? `0${i}` : `${i}`;
      img.src = `/frames/frame_${numStr}.webp`;
      img.onload = () => {
        framesCacheRef.current[i] = img;
      };
    }

    // Helper: Draw single image to canvas with retina resolution & correct aspect ratio
    const drawFrame = (img: HTMLImageElement) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { alpha: false });
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();

      // Ensure internal canvas dimensions match display size * DPR
      const targetWidth = Math.round(rect.width * dpr);
      const targetHeight = Math.round(rect.height * dpr);

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }

      ctx.save();
      // Draw background color first
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Fit character image while maintaining aspect ratio (cover / contain)
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = canvas.width / canvas.height;

      let drawWidth = canvas.width;
      let drawHeight = canvas.height;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > imgRatio) {
        drawWidth = canvas.width;
        drawHeight = canvas.width / imgRatio;
        offsetY = (canvas.height - drawHeight) / 2;
      } else {
        drawHeight = canvas.height;
        drawWidth = canvas.height * imgRatio;
        offsetX = (canvas.width - drawWidth) / 2;
      }

      // Draw exactly ONE crisp image frame at 100% opacity
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
    };

    // Check touch device or reduced motion
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Track mouse coordinates globally
    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return;

      if (!hasInteractedRef.current) {
        hasInteractedRef.current = true;
        onFirstInteraction?.();
      }

      mousePosRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true
      };
    };

    const handleMouseLeave = () => {
      // Return to center when mouse leaves viewport
      inDeadzoneRef.current = true;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop using requestAnimationFrame
    let rafId: number;

    const renderLoop = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        rafId = requestAnimationFrame(renderLoop);
        return;
      }

      if (isTouch) {
        // Static center eye contact on touch
        if (centerImageRef.current) {
          drawFrame(centerImageRef.current);
        }
        return;
      }

      const rect = canvas.getBoundingClientRect();

      // Face center coordinates in viewport:
      // Character is centered horizontally (x = 0.5), face is in upper third (y ~ 0.35)
      const faceCenterX = rect.left + rect.width * 0.5;
      const faceCenterY = rect.top + rect.height * 0.36;

      const dx = mousePosRef.current.x - faceCenterX;
      const dy = mousePosRef.current.y - faceCenterY;
      const distance = Math.hypot(dx, dy);

      // Deadzone threshold (approx 12-14% of viewport minimum dimension)
      const viewportMin = Math.min(window.innerWidth, window.innerHeight);
      const deadzone = Math.max(90, viewportMin * 0.13);

      if (distance < deadzone || !mousePosRef.current.active) {
        inDeadzoneRef.current = true;
      } else {
        inDeadzoneRef.current = false;
        targetAngleRef.current = Math.atan2(dy, dx);
      }

      // Smooth shortest-path circular angular interpolation
      if (!inDeadzoneRef.current) {
        let diff = (targetAngleRef.current - currentAngleRef.current) % (Math.PI * 2);
        if (diff < -Math.PI) diff += Math.PI * 2;
        if (diff > Math.PI) diff -= Math.PI * 2;

        currentAngleRef.current += diff * SMOOTHING;
      }

      // Determine which image to draw
      if (inDeadzoneRef.current) {
        // Direct eye contact
        if (centerImageRef.current) {
          drawFrame(centerImageRef.current);
        }
      } else {
        // Map current angle [-PI, PI] to [0, TOTAL_FRAMES - 1]
        let normAngle = currentAngleRef.current + Math.PI;
        while (normAngle < 0) normAngle += Math.PI * 2;
        while (normAngle >= Math.PI * 2) normAngle -= Math.PI * 2;

        const frameIndex = Math.round((normAngle / (Math.PI * 2)) * TOTAL_FRAMES) % TOTAL_FRAMES;
        const targetFrame = framesCacheRef.current[frameIndex];

        if (targetFrame && targetFrame.complete && targetFrame.naturalWidth > 0) {
          drawFrame(targetFrame);
        } else if (centerImageRef.current) {
          drawFrame(centerImageRef.current);
        }
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    rafId = requestAnimationFrame(renderLoop);

    // Resize observer to re-render cleanly on window or layout changes
    const resizeObserver = new ResizeObserver(() => {
      if (centerImageRef.current) {
        drawFrame(centerImageRef.current);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [onFirstInteraction]);

  return (
    <div
      ref={containerRef}
      className={`character-canvas-container ${className || ''}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BG_COLOR,
        overflow: 'hidden'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          backgroundColor: BG_COLOR,
          transform: 'none',
          userSelect: 'none'
        }}
        aria-label="Interactive 3D animated character following mouse direction"
        role="img"
      />

      {/* Subtle initial loading placeholder state */}
      {!isLoaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: BG_COLOR,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem'
          }}
        >
          Loading 3D Engine...
        </div>
      )}
    </div>
  );
};
