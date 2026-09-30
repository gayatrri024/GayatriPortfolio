import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Recognition } from './components/Recognition';
import { Contact } from './components/Contact';
import { ResumeModal } from './components/ResumeModal';

const TOTAL_PAGES = 7;

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const lastWheelTimeRef = useRef<number>(0);
  const touchStartRef = useRef<{ x: number; y: number; time: number }>({ x: 0, y: 0, time: 0 });
  const currentPageRef = useRef<number>(0);

  // Keep ref synchronized with state for event listeners
  useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);

  const goToPage = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_PAGES) return;
    setCurrentPage(index);
  }, []);

  const boundaryDeltaRef = useRef<number>(0);
  const lastBoundaryTimeRef = useRef<number>(0);

  // Desktop Mouse Wheel / Trackpad navigation with intelligent scroll-boundary check
  // Keeps sections comfortably scrollable so users can read content naturally
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (resumeOpen) return;

      const deltaY = e.deltaY;
      const absY = Math.abs(deltaY);
      const absX = Math.abs(e.deltaX);

      // Effective delta: prioritize dominant axis
      const effectiveDelta = absY >= absX ? deltaY : e.deltaX;
      if (Math.abs(effectiveDelta) < 15) return;

      const now = Date.now();
      if (now - lastWheelTimeRef.current < 600) {
        return;
      }

      // Find if the target or its ancestor is scrollable vertically
      const findScrollable = (target: EventTarget | null): HTMLElement | null => {
        let el = target as HTMLElement | null;
        while (el && el !== document.body && el !== document.documentElement) {
          const style = window.getComputedStyle(el);
          const canScroll = style.overflowY === 'auto' || style.overflowY === 'scroll';
          if (canScroll && el.scrollHeight > el.clientHeight + 8) {
            return el;
          }
          el = el.parentElement;
        }

        // Fallback: check if the active page container itself is vertically scrollable
        const activePage = document.querySelector('.page-slide.page-active .presentation-page') as HTMLElement | null;
        if (activePage && activePage.scrollHeight > activePage.clientHeight + 8) {
          return activePage;
        }
        return null;
      };

      const scrollable = findScrollable(e.target);

      if (scrollable) {
        const atBottom = scrollable.scrollHeight - scrollable.scrollTop - scrollable.clientHeight <= 10;
        const atTop = scrollable.scrollTop <= 10;

        // Still scrolling down inside content -> let browser scroll naturally
        if (effectiveDelta > 0 && !atBottom) {
          boundaryDeltaRef.current = 0;
          return;
        }

        // Still scrolling up inside content -> let browser scroll naturally
        if (effectiveDelta < 0 && !atTop) {
          boundaryDeltaRef.current = 0;
          return;
        }

        // Reached top/bottom boundary: require intentional gesture past boundary
        if (now - lastBoundaryTimeRef.current > 400) {
          boundaryDeltaRef.current = 0;
        }
        lastBoundaryTimeRef.current = now;
        boundaryDeltaRef.current += effectiveDelta;

        const BOUNDARY_THRESHOLD = 150;

        if (effectiveDelta > 0 && atBottom) {
          if (boundaryDeltaRef.current < BOUNDARY_THRESHOLD) {
            return; // Absorb momentum at boundary
          }
        } else if (effectiveDelta < 0 && atTop) {
          if (boundaryDeltaRef.current > -BOUNDARY_THRESHOLD) {
            return; // Absorb momentum at boundary
          }
        }
      }

      // Intentional page turn triggered
      if (effectiveDelta > 0) {
        if (currentPageRef.current < TOTAL_PAGES - 1) {
          goToPage(currentPageRef.current + 1);
          lastWheelTimeRef.current = now;
          boundaryDeltaRef.current = 0;
        }
      } else {
        if (currentPageRef.current > 0) {
          goToPage(currentPageRef.current - 1);
          lastWheelTimeRef.current = now;
          boundaryDeltaRef.current = 0;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [goToPage, resumeOpen]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (resumeOpen) return;

      const activeTag = (document.activeElement as HTMLElement)?.tagName?.toLowerCase();
      if (activeTag === 'input' || activeTag === 'textarea') return;

      if (
        e.key === 'ArrowRight' ||
        e.key === 'PageDown' ||
        (e.key === ' ' && !e.shiftKey)
      ) {
        e.preventDefault();
        goToPage(currentPageRef.current + 1);
      } else if (
        e.key === 'ArrowLeft' ||
        e.key === 'PageUp' ||
        (e.key === ' ' && e.shiftKey)
      ) {
        e.preventDefault();
        goToPage(currentPageRef.current - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToPage(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToPage(TOTAL_PAGES - 1);
      } else if (e.key >= '1' && e.key <= '7') {
        const pageNum = parseInt(e.key, 10) - 1;
        goToPage(pageNum);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPage, resumeOpen]);

  // Mobile Touch Swipe Handling (horizontal swipe flips pages)
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1 || resumeOpen) return;
      touchStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        time: Date.now()
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (resumeOpen) return;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaX = touchEndX - touchStartRef.current.x;
      const deltaY = touchEndY - touchStartRef.current.y;
      const duration = Date.now() - touchStartRef.current.time;

      if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2 && duration < 600) {
        if (deltaX < 0) {
          // Swipe left -> next page
          goToPage(currentPageRef.current + 1);
        } else {
          // Swipe right -> prev page
          goToPage(currentPageRef.current - 1);
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [goToPage, resumeOpen]);

  // Exact 7 presentation pages in the requested sequence:
  // 01 HOME, 02 ABOUT, 03 EXPERIENCE, 04 PROJECTS, 05 SKILLS, 06 RECOGNITION, 07 CONTACT
  const pages = [
    {
      id: '01',
      component: (
        <Hero
          onGoToProjects={() => goToPage(3)}
          onGoToContact={() => goToPage(6)}
          onOpenResume={() => setResumeOpen(true)}
        />
      )
    },
    {
      id: '02',
      component: <About />
    },
    {
      id: '03',
      component: <Experience />
    },
    {
      id: '04',
      component: <Projects />
    },
    {
      id: '05',
      component: <Skills />
    },
    {
      id: '06',
      component: <Recognition />
    },
    {
      id: '07',
      component: <Contact onOpenResume={() => setResumeOpen(true)} />
    }
  ];

  return (
    <div className="presentation-viewport">
      {/* Website-controlled Custom Cursor */}
      <CustomCursor />

      {/* Top Editorial Navigation Bar & Bottom Status Indicator */}
      <Navigation
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onSelectPage={goToPage}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Presentation Pages Stage */}
      <main style={{ position: 'relative', width: '100%', height: '100%' }}>
        {pages.map((p, idx) => {
          let stateClass = 'page-slide ';
          if (idx === currentPage) {
            stateClass += 'page-active';
          } else if (idx < currentPage) {
            stateClass += 'page-prev';
          } else {
            stateClass += 'page-next';
          }

          return (
            <div
              key={p.id}
              className={stateClass}
              aria-hidden={idx !== currentPage}
              style={{
                pointerEvents: idx === currentPage ? 'auto' : 'none'
              }}
            >
              {p.component}
            </div>
          );
        })}
      </main>

      {/* Resume Modal Dialog */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
};

export default App;
