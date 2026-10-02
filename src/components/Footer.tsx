import React from 'react';
import { ArrowUp, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        backgroundColor: 'rgba(7, 11, 20, 0.95)',
        padding: '2.5rem 2rem 3rem 2rem',
        marginTop: '3rem',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}
      >
        {/* Left: Identity & Copyright */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 6px #10B981'
              }}
            />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#34D399', fontWeight: 600 }}>
              PORTFOLIO INFRASTRUCTURE ACTIVE
            </span>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0 }}>
            Designed & built by <strong style={{ color: '#FFFFFF' }}>Gayatri Ashok Shinde</strong> · Pune, India
          </p>
        </div>

        {/* Center / Right: Social Links & Back to Top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}
            className="footer-link-hover"
          >
            <GithubIcon size={14} />
            <span>GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}
            className="footer-link-hover"
          >
            <LinkedinIcon size={14} />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}
            className="footer-link-hover"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download={PERSONAL_INFO.resumeFilename}
            style={{ color: 'var(--accent-soft)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}
            className="footer-link-hover"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              marginLeft: '0.5rem',
              transition: 'background-color 0.2s ease'
            }}
            aria-label="Back to Top"
            title="Back to Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-link-hover:hover {
          color: var(--accent-soft) !important;
        }
      `}</style>
    </footer>
  );
};
