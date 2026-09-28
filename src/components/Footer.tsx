import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#060608',
        borderTop: '1px solid var(--border-subtle)',
        padding: '4rem 0 3rem 0',
        color: 'var(--text-secondary)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem'
          }}
        >
          {/* Identity */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#ffffff'
              }}
            >
              {PERSONAL_INFO.name}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.825rem',
                color: 'var(--text-accent)'
              }}
            >
              {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
            </div>
            <div
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)'
              }}
            >
              {PERSONAL_INFO.focusAreas}
            </div>
          </div>

          {/* Quick Domain Links & Scroll to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)'
              }}
            >
              {PERSONAL_INFO.portfolioUrl}
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="btn btn-outline-dark"
              style={{
                padding: '0.6rem 1rem',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span>TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div
          style={{
            marginTop: '3rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.04)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Gayatri Ashok Shinde. Built with React, TypeScript & HTML Canvas.
          </div>
          <div>
            Engineered for high-availability & zero-downtime reliability.
          </div>
        </div>
      </div>
    </footer>
  );
};
