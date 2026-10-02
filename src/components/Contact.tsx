import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="presentation-page section-block">
      <div className="page-inner">
        {/* Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>// 06 · INITIATE CONTACT</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="editorial-title">Let's Connect</h2>
          <p className="editorial-subtitle">
            Open for full-time Cloud Engineer, DevOps Engineer, and Infrastructure / Platform roles. Reach out directly — I respond promptly.
          </p>
        </div>

        {/* Clean Direct Contact Grid */}
        <div
          style={{
            maxWidth: '920px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.25rem'
            }}
            className="contact-grid-responsive"
          >
            {/* Email Card */}
            <div
              style={{
                backgroundColor: 'rgba(13, 21, 39, 0.75)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '1rem',
                padding: '1.35rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  letterSpacing: '0.06em'
                }}
              >
                <Mail size={13} />
                <span>DIRECT EMAIL</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    fontWeight: 600
                  }}
                  className="contact-hover-link"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '6px',
                    color: copied ? '#34D399' : 'var(--text-secondary)',
                    padding: '0.25rem 0.6rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    cursor: 'pointer'
                  }}
                  aria-label="Copy Email to Clipboard"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* Mobile Phone Card */}
            <div
              style={{
                backgroundColor: 'rgba(13, 21, 39, 0.75)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '1rem',
                padding: '1.35rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  letterSpacing: '0.06em'
                }}
              >
                <Phone size={13} />
                <span>MOBILE PHONE</span>
              </div>

              <div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    fontWeight: 600
                  }}
                  className="contact-hover-link"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div
              style={{
                backgroundColor: 'rgba(13, 21, 39, 0.75)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '1rem',
                padding: '1.35rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  letterSpacing: '0.06em'
                }}
              >
                <LinkedinIcon size={13} />
                <span>LINKEDIN NETWORK</span>
              </div>

              <div>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                  className="contact-hover-link"
                >
                  <span>in/gayatri-shinde</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* GitHub Card */}
            <div
              style={{
                backgroundColor: 'rgba(13, 21, 39, 0.75)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '1rem',
                padding: '1.35rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  letterSpacing: '0.06em'
                }}
              >
                <GithubIcon size={13} />
                <span>GITHUB REPOSITORIES</span>
              </div>

              <div>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}
                  className="contact-hover-link"
                >
                  <span>github.com/gayatrri024</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Fast Action Bar */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '1rem',
              backgroundColor: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid var(--border-accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                Need a copy of my resume?
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0 0' }}>
                Instant 1-click download of my ATS-compliant Curriculum Vitae.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download={PERSONAL_INFO.resumeFilename}
                className="btn btn-accent"
                style={{
                  padding: '0.65rem 1.45rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
                aria-label="Download Resume (PDF)"
              >
                <FileText size={15} />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <a
                href={PERSONAL_INFO.googleDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  padding: '0.65rem 1.15rem',
                  fontSize: '0.85rem',
                  textDecoration: 'none'
                }}
                aria-label="Preview Resume on Google Drive"
              >
                <span>Google Drive Preview</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
        .contact-hover-link:hover {
          color: var(--accent-soft) !important;
        }
      `}</style>
    </section>
  );
};
