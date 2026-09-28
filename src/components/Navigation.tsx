import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onOpenResume: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenResume }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'WORK', href: '#work' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Section spy
      const sections = ['hero', 'work', 'experience', 'skills', 'about', 'contact'];
      for (const sectionId of sections.reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '1.25rem',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        pointerEvents: 'none'
      }}
    >
      <nav
        aria-label="Main Navigation"
        className="glass-panel"
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '0.55rem 1.1rem 0.55rem 1.35rem',
          borderRadius: '9999px',
          background: scrolled
            ? 'rgba(15, 15, 20, 0.75)'
            : 'rgba(255, 255, 255, 0.12)',
          border: scrolled
            ? '1px solid rgba(255, 255, 255, 0.12)'
            : '1px solid rgba(255, 255, 255, 0.28)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: scrolled
            ? '0 16px 36px rgba(0, 0, 0, 0.4)'
            : '0 8px 32px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Logo / Monogram */}
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, '#hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.9rem',
            letterSpacing: '-0.02em',
            marginRight: '0.5rem'
          }}
        >
          <span
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)'
            }}
          >
            GS
          </span>
          <span style={{ fontFamily: 'var(--font-display)', display: 'none' }} className="brand-title">
            GAYATRI
          </span>
        </a>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => scrollTo(e, item.href)}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  color: isActive
                    ? '#ffffff'
                    : 'rgba(255, 255, 255, 0.72)',
                  backgroundColor: isActive
                    ? 'rgba(255, 255, 255, 0.18)'
                    : 'transparent',
                  transition: 'all 0.2s ease'
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Action Button: View Resume */}
        <button
          onClick={onOpenResume}
          aria-label="View Resume"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.45rem 0.95rem',
            borderRadius: '9999px',
            backgroundColor: '#ffffff',
            color: '#000000',
            border: 'none',
            fontSize: '0.78rem',
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.02em',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          className="resume-pill-btn"
        >
          <span>RESUME</span>
          <ArrowUpRight size={13} strokeWidth={2.5} />
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#ffffff',
            padding: '0.35rem',
            cursor: 'pointer'
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            pointerEvents: 'auto',
            position: 'fixed',
            top: '5rem',
            left: '1rem',
            right: '1rem',
            backgroundColor: 'rgba(15, 15, 20, 0.96)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '1.25rem',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            backdropFilter: 'blur(24px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollTo(e, item.href)}
              style={{
                textDecoration: 'none',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                padding: '0.5rem 0'
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.75rem',
              borderRadius: '9999px',
              backgroundColor: '#ffffff',
              color: '#000000',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              border: 'none',
              marginTop: '0.5rem'
            }}
          >
            VIEW RESUME <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
};
