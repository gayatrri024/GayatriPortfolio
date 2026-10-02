import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Credentials', href: '#recognition' },
  { label: 'Contact', href: '#contact' }
];

export const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'recognition', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-height)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          backgroundColor: scrolled ? 'rgba(7, 11, 20, 0.92)' : 'rgba(7, 11, 20, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-subtle)',
          transition: 'background-color 0.25s ease, border-color 0.25s ease'
        }}
      >
        {/* Brand Terminal Style (clean & unpretentious) */}
        <a
          href="#hero"
          style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            color: '#FFFFFF'
          }}
          aria-label="Home"
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: 'rgba(37, 99, 235, 0.2)',
              border: '1.5px solid var(--border-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 800,
              color: 'var(--accent-soft)'
            }}
          >
            GS
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.45rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.96rem',
                letterSpacing: '-0.01em',
                color: '#FFFFFF'
              }}
            >
              GAYATRI SHINDE
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.66rem',
                fontWeight: 600,
                color: 'var(--accent-soft)',
                letterSpacing: '0.04em'
              }}
              className="desktop-only"
            >
              [DEVOPS]
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            padding: '0.25rem 0.4rem',
            backgroundColor: 'rgba(13, 21, 39, 0.75)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '9999px',
            backdropFilter: 'blur(10px)'
          }}
          className="desktop-nav"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isCurrent = activeSection === item.href.replace('#', '');

            return (
              <a
                key={item.label}
                href={item.href}
                style={{
                  color: isCurrent ? '#FFFFFF' : 'var(--text-secondary)',
                  background: isCurrent ? 'var(--accent-primary)' : 'transparent',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.76rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: isCurrent ? 700 : 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  boxShadow: isCurrent ? '0 2px 10px var(--accent-glow)' : 'none'
                }}
                aria-current={isCurrent ? 'page' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA: Download Resume */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <a
            href={PERSONAL_INFO.resumeUrl}
            download={PERSONAL_INFO.resumeFilename}
            className="btn btn-secondary"
            style={{
              padding: '0.4rem 1rem',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em',
              borderRadius: '9999px',
              textDecoration: 'none'
            }}
            aria-label="Download Resume (PDF)"
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
            zIndex: 99,
            padding: '1.25rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-primary)',
                padding: '0.65rem 0.95rem',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-mono)',
                textDecoration: 'none',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.02)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{item.label}</span>
              <ArrowUpRight size={14} style={{ opacity: 0.5 }} />
            </a>
          ))}

          <a
            href={PERSONAL_INFO.resumeUrl}
            download={PERSONAL_INFO.resumeFilename}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              background: 'var(--accent-primary)',
              color: '#FFFFFF',
              borderRadius: '8px',
              padding: '0.75rem 1rem',
              fontSize: '0.88rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.55rem',
              marginTop: '0.5rem'
            }}
          >
            <FileText size={16} />
            <span>DOWNLOAD RESUME (PDF)</span>
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
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
