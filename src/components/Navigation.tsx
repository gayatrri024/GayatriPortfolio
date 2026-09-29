import React, { useState } from 'react';
import { FileText, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onSelectPage: (index: number) => void;
  onOpenResume: () => void;
}

const PAGE_NAMES = [
  { num: '01', title: 'COVER' },
  { num: '02', title: 'ABOUT' },
  { num: '03', title: 'EXPERIENCE' },
  { num: '04', title: 'PROJECTS' },
  { num: '05', title: 'SKILLS' },
  { num: '06', title: 'RECOGNITION' },
  { num: '07', title: 'CONTACT' }
];

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  totalPages,
  onSelectPage,
  onOpenResume
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Editorial Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-height)',
          zIndex: 90,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2.5rem',
          backgroundColor: 'rgba(11, 18, 32, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-subtle)',
          transition: 'background-color 0.3s ease'
        }}
      >
        {/* Brand / Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={() => onSelectPage(0)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.6rem',
              color: 'var(--text-primary)',
              textAlign: 'left'
            }}
            aria-label="Go to Home Cover Page"
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '-0.01em',
                color: 'var(--text-primary)'
              }}
            >
              GAYATRI ASHOK SHINDE
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                fontWeight: 500,
                color: 'var(--accent-soft)',
                letterSpacing: '0.08em',
                display: 'inline-block'
              }}
              className="desktop-only"
            >
              [DEVOPS]
            </span>
          </button>
        </div>

        {/* Center Desktop Navigation Pill */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.3rem 0.5rem',
            backgroundColor: 'rgba(17, 24, 39, 0.8)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '9999px',
            backdropFilter: 'blur(12px)'
          }}
          className="desktop-nav"
        >
          {PAGE_NAMES.map((page, idx) => {
            const isActive = currentPage === idx;
            return (
              <button
                key={page.num}
                onClick={() => onSelectPage(idx)}
                style={{
                  background: isActive ? 'var(--accent-primary)' : 'transparent',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.35rem 0.8rem',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s var(--ease-editorial)',
                  boxShadow: isActive ? '0 2px 12px var(--accent-glow)' : 'none'
                }}
                aria-label={`Jump to page ${page.num} ${page.title}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span style={{ opacity: isActive ? 1 : 0.65, fontSize: '0.7rem' }}>{page.num}</span>
                <span>{page.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action: Resume Modal & Mobile Menu Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={onOpenResume}
            className="btn btn-secondary"
            style={{
              padding: '0.45rem 1.1rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em',
              borderRadius: '9999px'
            }}
            aria-label="View Resume"
          >
            <FileText size={14} />
            <span>RESUME</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              padding: '0.45rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            backgroundColor: 'rgba(11, 18, 32, 0.98)',
            borderBottom: '1px solid var(--border-subtle)',
            backdropFilter: 'blur(20px)',
            zIndex: 89,
            padding: '1.25rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          {PAGE_NAMES.map((page, idx) => {
            const isActive = currentPage === idx;
            return (
              <button
                key={page.num}
                onClick={() => {
                  onSelectPage(idx);
                  setMobileMenuOpen(false);
                }}
                style={{
                  background: isActive ? 'var(--accent-subtle)' : 'transparent',
                  color: isActive ? 'var(--accent-soft)' : 'var(--text-primary)',
                  border: isActive ? '1px solid var(--border-accent)' : '1px solid transparent',
                  borderRadius: '8px',
                  padding: '0.75rem 1rem',
                  fontSize: '0.9rem',
                  fontFamily: 'var(--font-mono)',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                <span style={{ color: 'var(--accent-soft)', fontWeight: 600 }}>{page.num}</span>
                <span>{page.title}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Bottom Presentation Status & Pager Bar */}
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3.75rem',
          zIndex: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2.5rem',
          backgroundColor: 'rgba(11, 18, 32, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--border-subtle)',
          pointerEvents: 'auto'
        }}
      >
        {/* Left: Page Counter & Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: 'var(--text-secondary)'
            }}
          >
            <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>
              {PAGE_NAMES[currentPage]?.num}
            </span>
            <span style={{ color: 'var(--text-muted)', margin: '0 0.4rem' }}>/</span>
            <span>0{totalPages}</span>
            <span style={{ marginLeft: '0.75rem', color: 'var(--accent-soft)', fontWeight: 500 }} className="desktop-only">
              — {PAGE_NAMES[currentPage]?.title}
            </span>
          </div>

          {/* Thin Progress Line */}
          <div
            style={{
              width: '90px',
              height: '2px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '2px',
              overflow: 'hidden'
            }}
            className="desktop-only"
          >
            <div
              style={{
                width: `${((currentPage + 1) / totalPages) * 100}%`,
                height: '100%',
                backgroundColor: 'var(--accent-primary)',
                transition: 'width 0.3s ease'
              }}
            />
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em'
            }}
            className="desktop-only"
          >
            [SCROLL OR USE ARROWS TO TURN]
          </div>
        </div>

        {/* Right: Quick Turn Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={() => onSelectPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.4rem 0.9rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: currentPage === 0 ? 'var(--text-muted)' : 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              opacity: currentPage === 0 ? 0.4 : 1,
              transition: 'all 0.2s ease'
            }}
            aria-label="Previous Page"
          >
            <ChevronLeft size={15} />
            <span className="desktop-only">PREV</span>
          </button>

          <button
            onClick={() => onSelectPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.4rem 0.9rem',
              borderRadius: '9999px',
              background: currentPage === totalPages - 1 ? 'rgba(255, 255, 255, 0.05)' : 'var(--accent-primary)',
              border: currentPage === totalPages - 1 ? '1px solid var(--border-subtle)' : 'none',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
              opacity: currentPage === totalPages - 1 ? 0.4 : 1,
              boxShadow: currentPage === totalPages - 1 ? 'none' : '0 2px 14px var(--accent-glow)',
              transition: 'all 0.2s ease'
            }}
            aria-label="Next Page"
          >
            <span className="desktop-only">NEXT</span>
            <ChevronRight size={15} />
          </button>
        </div>
      </footer>

      {/* Responsive CSS for navigation */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
