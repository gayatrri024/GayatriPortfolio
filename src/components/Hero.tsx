import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Compass } from 'lucide-react';
import { CharacterCanvas } from './CharacterCanvas';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [hintVisible, setHintVisible] = useState(true);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#f50806',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '6rem',
        paddingBottom: '3rem'
      }}
    >
      {/* Background Subtle Luxury Accents (Seamless Red on Red) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
          backgroundImage: `
            radial-gradient(circle at 80% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 15% 85%, rgba(0, 0, 0, 0.12) 0%, transparent 50%)
          `
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)',
          alignItems: 'center',
          gap: '2.5rem',
          minHeight: 'calc(100vh - 9rem)'
        }}
      >
        {/* Left Column: Editorial Typography & Engineering Identity */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.5rem',
            paddingRight: '1rem'
          }}
        >
          {/* Eyebrow Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.4rem 0.95rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                backdropFilter: 'blur(10px)'
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 0 10px #ffffff'
                }}
              />
              DEVOPS & INFRASTRUCTURE ENGINEER
            </span>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'rgba(255, 255, 255, 0.85)',
                letterSpacing: '0.04em'
              }}
            >
              Pune, India
            </span>
          </div>

          {/* Headline Name */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.88)',
                letterSpacing: '0.04em',
                marginBottom: '0.25rem'
              }}
            >
              Hi, I'm
            </span>

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
                  fontSize: 'clamp(3.5rem, 7vw, 6.2rem)',
                  fontWeight: 400,
                  color: '#ffffff',
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
                  fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
                  fontWeight: 800,
                  color: 'rgba(255, 255, 255, 0.95)',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.02em',
                  marginTop: '-0.2rem'
                }}
              >
                Ashok Shinde
              </span>
            </h1>
          </div>

          {/* Role & Focus Area Pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '0.06em',
                textTransform: 'uppercase'
              }}
            >
              {PERSONAL_INFO.focusAreas}
            </p>

            {/* Concise Supporting Copy from source of truth */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.92)',
                maxWidth: '560px',
                fontWeight: 400
              }}
            >
              Building and automating reliable infrastructure with AWS, Kubernetes and Infrastructure as Code.
            </p>
          </div>

          {/* Call to Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginTop: '0.5rem'
            }}
          >
            <button
              onClick={onOpenResume}
              className="btn btn-primary"
              style={{
                padding: '0.95rem 2rem',
                fontSize: '1rem',
                fontWeight: 700,
                color: '#000000',
                backgroundColor: '#ffffff'
              }}
            >
              <span>View Resume</span>
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </button>

            <a
              href="#contact"
              className="btn btn-secondary"
              style={{
                padding: '0.95rem 2rem',
                fontSize: '1rem',
                fontWeight: 600
              }}
            >
              <MessageSquare size={17} />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Quick Technical Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              marginTop: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>
                2.5+ Yrs
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-mono)' }}>
                Amazon Experience
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>
                50+
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-mono)' }}>
                Microservices (GSA-SIP)
              </div>
            </div>

            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700 }}>
                Terraform
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.8)', fontFamily: 'var(--font-mono)' }}>
                OpenTofu & AWS
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Centerpiece — Interactive 3D Character */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(440px, 68vh, 680px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <CharacterCanvas onFirstInteraction={() => setHintVisible(false)} />

          {/* Hint Badge at the bottom of character */}
          {hintVisible && (
            <div
              style={{
                position: 'absolute',
                bottom: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(0, 0, 0, 0.45)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                backdropFilter: 'blur(10px)',
                pointerEvents: 'none',
                animation: 'pulse 2s infinite ease-in-out'
              }}
            >
              <Compass size={14} />
              <span>Interactive 3D Gaze • Follows Cursor</span>
            </div>
          )}
        </div>
      </div>

      {/* Hero Bottom Organic Transition into Deep Velvet Charcoal */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(to bottom, transparent, var(--bg-primary))',
          pointerEvents: 'none'
        }}
      />
    </section>
  );
};
