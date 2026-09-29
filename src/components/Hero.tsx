import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { CharacterCanvas } from './CharacterCanvas';

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
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Subtle Luxury Ambient Lighting */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: `
            radial-gradient(circle at 75% 45%, rgba(99, 102, 241, 0.08) 0%, transparent 55%),
            radial-gradient(circle at 20% 70%, rgba(15, 23, 42, 0.9) 0%, transparent 60%)
          `
        }}
      />

      <div
        className="page-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
         gridTemplateColumns: 'minmax(0, 0.78fr) minmax(0, 1.22fr)',
          alignItems: 'center',
          gap: '3rem',
          minHeight: 'calc(100vh - var(--nav-height) - 5rem)'
        }}
      >
        {/* Left / Center: Name & Editorial Identity */}
        <div
          className="page-content-anim"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.4rem'
          }}
        >
          {/* Small Professional Positioning Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className="editorial-badge">
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary)',
                  boxShadow: '0 0 8px var(--accent-primary)'
                }}
              />
              DEVOPS • CLOUD • INFRASTRUCTURE AS CODE
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em'
              }}
            >
              Pune, India
            </span>
          </div>

          {/* Large Display Typography: Gayatri Ashok Shinde */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1
              style={{
                margin: 0,
                lineHeight: 1.0,
                letterSpacing: '-0.03em'
              }}
            >
              <span
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'clamp(3.8rem, 6.8vw, 6.6rem)',
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
                  fontSize: 'clamp(2.2rem, 4.4vw, 4.2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  marginTop: '-0.3rem'
                }}
              >
                Ashok Shinde
              </span>
            </h1>
          </div>

          {/* Concise Positioning Statement */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              fontWeight: 400
            }}
          >
            Building reliable infrastructure, automated delivery pipelines, and cloud-native systems.
          </p>

          {/* Call to Actions: VIEW MY WORK (Primary) & LET'S CONNECT (Secondary) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '0.75rem'
            }}
          >
            <button
              onClick={onGoToProjects}
              className="btn btn-accent"
              style={{
                padding: '0.85rem 2rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                letterSpacing: '0.04em'
              }}
              aria-label="View My Work (Projects)"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight size={17} />
            </button>

            <button
              onClick={onGoToContact}
              className="btn btn-secondary"
              style={{
                padding: '0.85rem 1.85rem',
                fontSize: '0.95rem',
                fontWeight: 500,
                letterSpacing: '0.04em'
              }}
              aria-label="Let's Connect (Contact)"
            >
              <MessageSquare size={16} />
              <span>LET'S CONNECT</span>
            </button>
          </div>

          {/* Key Engineering Credentials Summary */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              marginTop: '1.25rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-subtle)',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                2.5+ Yrs
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Amazon Operations
              </div>
            </div>

            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-subtle)' }} />

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                50+
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Microservices (K8s)
              </div>
            </div>

            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-subtle)' }} />

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Terraform
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                AWS Infrastructure
              </div>
            </div>
          </div>
        </div>

        {/* Right: Character Hero Visual (Seamlessly Floating on #0B1220) */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: '600px',
maxHeight: 'calc(100vh - var(--nav-height) - 2rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          className="character-hero-wrapper"
        >
          <CharacterCanvas />
        </div>
      </div>

      {/* Responsive layout styles */}
      <style>{`
        @media (max-width: 900px) {
          #hero-cover .page-inner {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding-top: 1rem;
          }
          .character-hero-wrapper {
            min-height: 320px !important;
            max-height: 400px !important;
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};
