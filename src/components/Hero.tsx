import React from 'react';
import { ArrowRight, MessageSquare, FileText } from 'lucide-react';
import { CharacterCanvas } from './CharacterCanvas';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onGoToProjects: () => void;
  onGoToContact: () => void;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGoToProjects, onGoToContact }) => {
  return (
    <section
      id="hero-cover"
      className="presentation-page"
      style={{
        position: 'relative',
        backgroundColor: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: 'calc(var(--nav-height) + 0.5rem)',
        paddingBottom: '0'
      }}
    >
      {/* Background Subtle Ambient Lighting */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            radial-gradient(circle at 75% 55%, rgba(37, 99, 235, 0.16) 0%, rgba(6, 182, 212, 0.06) 45%, transparent 70%),
            radial-gradient(circle at 15% 65%, rgba(13, 21, 39, 0.95) 0%, transparent 60%)
          `
        }}
      />

      <div
        className="page-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)',
          alignItems: 'end',
          gap: '2.5rem',
          minHeight: 'calc(100vh - var(--nav-height) - var(--bottom-bar-height))',
          paddingBottom: '0'
        }}
      >
        {/* Left: Editorial Engineering Identity & Typography (Refined spacing & placement) */}
        <div
          className="page-content-anim"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.35rem',
            paddingBottom: 'calc(var(--bottom-bar-height) + 1.5rem)'
          }}
        >
          {/* Engineering Positioning Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className="editorial-badge">
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-soft)',
                  boxShadow: '0 0 8px var(--accent-soft)'
                }}
              />
              {PERSONAL_INFO.headline}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em'
              }}
            >
              {PERSONAL_INFO.location}
            </span>
          </div>

          {/* Large Editorial Name Hierarchy (as in blue.png / reference layout) */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1
              style={{
                margin: 0,
                lineHeight: 0.92,
                letterSpacing: '-0.02em'
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(4rem, 6.6vw, 7.2rem)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.01em',
                  fontStyle: 'normal'
                }}
              >
                Gayatri
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 4.6vw, 4.8rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  marginTop: '-0.1rem'
                }}
              >
                ASHOK
              </span>
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.5rem, 4.6vw, 4.8rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  marginTop: '-0.15rem'
                }}
              >
                SHINDE
              </span>
            </h1>
          </div>

          {/* Supporting Technical Statement */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.98rem, 1.2vw, 1.12rem)',
              lineHeight: 1.65,
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              fontWeight: 400,
              margin: 0
            }}
          >
            {PERSONAL_INFO.tagline}
          </p>

          {/* Action CTAs: VIEW MY WORK & LET'S CONNECT */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              flexWrap: 'wrap',
              marginTop: '0.35rem'
            }}
          >
            <button
              onClick={onGoToProjects}
              className="btn btn-accent"
              style={{
                padding: '0.85rem 1.85rem',
                fontSize: '0.92rem',
                fontWeight: 600,
                letterSpacing: '0.04em'
              }}
              aria-label="View My Work"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onGoToContact}
              className="btn btn-secondary"
              style={{
                padding: '0.85rem 1.65rem',
                fontSize: '0.92rem',
                fontWeight: 500,
                letterSpacing: '0.04em'
              }}
              aria-label="Let's Connect"
            >
              <MessageSquare size={15} />
              <span>LET'S CONNECT</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download={PERSONAL_INFO.resumeFilename}
              className="btn btn-secondary"
              style={{
                padding: '0.85rem 1.65rem',
                fontSize: '0.92rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                textDecoration: 'none'
              }}
              aria-label="Download Resume (PDF)"
            >
              <FileText size={15} />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          {/* Key Credentials Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
              marginTop: '0.65rem',
              paddingTop: '1.15rem',
              borderTop: '1px solid var(--border-subtle)',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>
                2.5+ Yrs
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Amazon Operations
              </div>
            </div>

            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-subtle)' }} />

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>
                50+
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Microservices (K8s)
              </div>
            </div>

            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-subtle)' }} />

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}>
                Terraform
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                AWS Infrastructure
              </div>
            </div>
          </div>
        </div>

        {/* Right: Signature Character Visual (Large, Dominant Centerpiece grounded to bottom) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(620px, 88vh, 960px)',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            overflow: 'visible'
          }}
        //  className="character-hero-wrapper"
        >
          {/* Character Canvas with mouse-following tracking */}
          <CharacterCanvas />
        </div>
      </div>

      {/* Responsive layout styles */}
      <style>{`
        @media (max-width: 960px) {
          #hero-cover .page-inner {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding-top: 1rem;
          }
          .character-hero-wrapper {
            min-height: 420px !important;
            max-height: 520px !important;
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};
