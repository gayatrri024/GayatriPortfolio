import React, { useState } from 'react';
import { FileText, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { PAGE_NAMES, PERSONAL_INFO } from '../data/portfolioData';

interface NavigationProps {
  currentPage: number;
  totalPages: number;
  onSelectPage: (index: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  totalPages,
  onSelectPage
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
          padding: '0 2rem',
          backgroundColor: 'rgba(7, 11, 20, 0.82)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-subtle)',
          transition: 'background-color 0.3s ease'
        }}
      >
        {/* Brand Name / Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => onSelectPage(0)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              color: 'var(--text-primary)',
              textAlign: 'left'
            }}
            aria-label="Go to Home"
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1.5px solid var(--border-accent)',
                backgroundColor: 'var(--bg-secondary)',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 10px rgba(56, 189, 248, 0.25)'
              }}
            >
              <img
                src="/frames/center.webp"
                alt="Gayatri Shinde Avatar"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '0.96rem',
                  letterSpacing: '-0.01em',
                  color: '#ffffff',
                  display: 'block'
                }}
              >
                GAYATRI SHINDE
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                fontWeight: 600,
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
            gap: '0.25rem',
            padding: '0.25rem 0.4rem',
            backgroundColor: 'rgba(13, 21, 39, 0.85)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '9999px',
            backdropFilter: 'blur(12px)'
          }}
          className="desktop-nav"
          aria-label="Primary presentation navigation"
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
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all 0.2s var(--ease-editorial)',
                  boxShadow: isActive ? '0 2px 10px var(--accent-glow)' : 'none'
                }}
                aria-label={`Jump to ${page.title}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span style={{ opacity: isActive ? 1 : 0.6, fontSize: '0.68rem' }}>{page.num}</span>
                <span>{page.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action: Resume Modal & Mobile Menu Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{
              padding: '0.4rem 1rem',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em',
              borderRadius: '9999px',
              textDecoration: 'none'
            }}
            aria-label="View Resume on Google Drive"
          >
            <FileText size={13} />
            <span>RESUME</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'transparent',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              padding: '0.4rem',
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
            backgroundColor: 'rgba(7, 11, 20, 0.98)',
            borderBottom: '1px solid var(--border-subtle)',
            backdropFilter: 'blur(20px)',
            zIndex: 89,
            padding: '1.25rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.45rem'
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
                  padding: '0.65rem 0.95rem',
                  fontSize: '0.86rem',
                  fontFamily: 'var(--font-mono)',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  cursor: 'pointer'
                }}
              >
                <span style={{ color: 'var(--accent-soft)', fontWeight: 700 }}>{page.num}</span>
                <span>{page.title}</span>
              </button>
            );
          })}

          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: 'var(--cyan-subtle)',
              color: 'var(--accent-soft)',
              border: '1px solid var(--border-accent)',
              borderRadius: '8px',
              padding: '0.65rem 0.95rem',
              fontSize: '0.86rem',
              fontFamily: 'var(--font-mono)',
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              marginTop: '0.35rem'
            }}
          >
            <FileText size={16} />
            <span>VIEW / DOWNLOAD RESUME</span>
          </a>
        </div>
      )}

      {/* Bottom Status & Pager Bar */}
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: 'var(--bottom-bar-height)',
          zIndex: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          backgroundColor: 'rgba(7, 11, 20, 0.85)',
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
              fontSize: '0.76rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              color: 'var(--text-secondary)'
            }}
          >
            <span style={{ color: '#ffffff', fontWeight: 700 }}>
              {PAGE_NAMES[currentPage]?.num}
            </span>
            <span style={{ color: 'var(--text-muted)', margin: '0 0.35rem' }}>/</span>
            <span>0{totalPages}</span>
            <span style={{ marginLeft: '0.75rem', color: 'var(--accent-soft)', fontWeight: 600 }} className="desktop-only">
              — {PAGE_NAMES[currentPage]?.title}
            </span>
          </div>

          {/* Thin Progress Line */}
          <div
            style={{
              width: '85px',
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
                backgroundColor: 'var(--accent-soft)',
                transition: 'width 0.3s ease'
              }}
            />
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em'
            }}
            className="desktop-only"
          >
            [SCROLL OR USE ARROW KEYS]
          </div>
        </div>

        {/* Right: Quick Turn Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <button
            onClick={() => onSelectPage(Math.max(0, currentPage - 1))}
            disabled={currentPage === 0}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: currentPage === 0 ? 'var(--text-muted)' : 'var(--text-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              opacity: currentPage === 0 ? 0.35 : 1,
              transition: 'all 0.2s ease'
            }}
            aria-label="Previous Page"
          >
            <ChevronLeft size={14} />
            <span className="desktop-only">PREV</span>
          </button>

          <button
            onClick={() => onSelectPage(Math.min(totalPages - 1, currentPage + 1))}
            disabled={currentPage === totalPages - 1}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              background: currentPage === totalPages - 1 ? 'rgba(255, 255, 255, 0.05)' : 'var(--accent-primary)',
              border: currentPage === totalPages - 1 ? '1px solid var(--border-subtle)' : 'none',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: currentPage === totalPages - 1 ? 'not-allowed' : 'pointer',
              opacity: currentPage === totalPages - 1 ? 0.35 : 1,
              boxShadow: currentPage === totalPages - 1 ? 'none' : '0 2px 12px var(--accent-glow)',
              transition: 'all 0.2s ease'
            }}
            aria-label="Next Page"
          >
            <span className="desktop-only">NEXT</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </footer>

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
