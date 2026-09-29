import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouch(true);
      return;
    }

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsTouch(true);
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let auraX = mouseX;
    let auraY = mouseY;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = !!target.closest(
          'a, button, input, textarea, select, [role="button"], .interactive, .editorial-card'
        );
        setIsHovering(isInteractive);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth animation loop for trailing aura
    const animate = () => {
      const ease = 0.18;
      auraX += (mouseX - auraX) * ease;
      auraY += (mouseY - auraY) * ease;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${auraX}px, ${auraY}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (isTouch) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.25s ease'
      }}
      aria-hidden="true"
    >
      {/* Soft Trailing Aura with subtle indigo accent highlight on hover */}
      <div
        ref={auraRef}
        style={{
          position: 'absolute',
          top: -22,
          left: -22,
          width: 44,
          height: 44,
          borderRadius: '50%',
          backgroundColor: isHovering ? 'rgba(99, 102, 241, 0.14)' : 'rgba(255, 255, 255, 0.06)',
          border: isHovering ? '1.5px solid rgba(129, 140, 248, 0.6)' : '1px solid rgba(255, 255, 255, 0.22)',
          boxShadow: isHovering
            ? '0 0 25px rgba(99, 102, 241, 0.45), inset 0 0 15px rgba(99, 102, 241, 0.2)'
            : '0 0 14px rgba(255, 255, 255, 0.1)',
          transform: 'translate3d(-100px, -100px, 0)',
          transformOrigin: 'center center',
          transition:
            'width 0.22s ease, height 0.22s ease, top 0.22s ease, left 0.22s ease, background-color 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease',
          pointerEvents: 'none',
          willChange: 'transform',
          ...(isHovering ? { width: 58, height: 58, top: -29, left: -29 } : {})
        }}
      />

      {/* Small Glowing Center Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'absolute',
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#F8FAFC',
          boxShadow: isHovering ? '0 0 10px #818CF8, 0 0 18px #6366F1' : '0 0 8px #ffffff',
          transform: 'translate3d(-100px, -100px, 0)',
          pointerEvents: 'none',
          willChange: 'transform',
          transition: 'transform 0.04s linear, box-shadow 0.2s ease'
        }}
      />
    </div>
  );
};
