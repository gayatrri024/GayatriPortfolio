import React from 'react';
import { ArrowRight, FileText, MessageSquare, Terminal, ShieldCheck, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="presentation-page hero-section"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - var(--nav-height))',
        paddingTop: 'calc(var(--nav-height) + 1.75rem)',
        paddingBottom: '3.5rem',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Atmospheric Blue Backlight */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '8%',
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 75%)',
          borderRadius: '50%',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="page-inner" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {/* Main Hero Container */}
        <div className="hero-layout-container">
          {/* 1. EYEBROW & IDENTITY */}
          <div className="hero-order-identity" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'var(--accent-primary)',
                  borderRadius: '2px',
                  boxShadow: '0 0 10px var(--accent-primary)'
                }}
              />
              01 // GAYATRI SHINDE
            </div>

            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.22rem 0.7rem',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: '9999px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: '#34D399',
                letterSpacing: '0.04em'
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  boxShadow: '0 0 8px #10B981'
                }}
              />
              OPEN TO CLOUD & DEVOPS ROLES
            </span>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--text-muted)'
              }}
            >
              Pune, India · Hybrid / Remote
            </span>
          </div>

          {/* 2. HEADLINE & SUPPORTING LINE */}
          <div className="hero-order-headline" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.35rem, 4.4vw, 3.9rem)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.08,
                letterSpacing: '-0.025em',
                margin: 0
              }}
            >
              <span style={{ display: 'block' }}>I BUILD THE SYSTEMS</span>
              <span
                style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #FFFFFF 30%, #93C5FD 80%, #38BDF8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                BEHIND RELIABLE SOFTWARE.
              </span>
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.86rem, 1.15vw, 1.02rem)',
                fontWeight: 600,
                color: 'var(--accent-soft)',
                letterSpacing: '0.02em',
                margin: 0
              }}
            >
              Cloud Infrastructure · Kubernetes · Automation · Platform Reliability
            </p>
          </div>

          {/* 3. PROMINENT EDITORIAL PORTRAIT (DESKTOP: RIGHT COL / MOBILE: 3RD IN ORDER) */}
          <div className="hero-order-portrait">
            <div className="portrait-card-wrapper">
              {/* Refined Technical Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, rgba(13, 21, 39, 0.85) 0%, #070B14 100%)',
                  border: '1px solid rgba(56, 189, 248, 0.22)',
                  boxShadow: '0 24px 60px -15px rgba(0, 0, 0, 0.7), 0 0 45px -10px rgba(37, 99, 235, 0.25)'
                }}
              >
                {/* Header Meta Bar on Portrait */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.7rem 1rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                    background: 'rgba(7, 11, 20, 0.65)',
                    backdropFilter: 'blur(8px)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '0.06em'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-soft)' }}>
                    <ShieldCheck size={13} />
                    <span>HUMAN IDENTITY // GAYATRI SHINDE</span>
                  </div>
                  <span style={{ color: '#34D399', fontWeight: 600 }}>SYS.ID: GS-024</span>
                </div>

                {/* Gayatri's Real Professional Photograph */}
                <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
                  <img
                    src="/gayatri_portrait_perfect.webp"
                    alt="Gayatri Shinde — Cloud & DevOps Infrastructure Engineer"
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'cover',
                      filter: 'contrast(1.02) brightness(1.02)',
                      transition: 'transform 0.5s ease'
                    }}
                    loading="eager"
                  />

                  {/* Subtle Gradient Fog at bottom to ground the portrait */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '85px',
                      background: 'linear-gradient(to top, #070B14 0%, rgba(7, 11, 20, 0.6) 50%, transparent 100%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Floating Glassmorphic Identity Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '1rem',
                      left: '1rem',
                      right: '1rem',
                      background: 'rgba(9, 14, 26, 0.82)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      borderRadius: '0.75rem',
                      padding: '0.75rem 0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.75rem',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          color: '#FFFFFF',
                          lineHeight: 1.2
                        }}
                      >
                        Gayatri Shinde
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--accent-soft)',
                          marginTop: '0.15rem'
                        }}
                      >
                        Cloud & DevOps Engineer
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        color: '#34D399',
                        background: 'rgba(16, 185, 129, 0.12)',
                        padding: '0.25rem 0.55rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(16, 185, 129, 0.25)'
                      }}
                    >
                      <Sparkles size={11} />
                      <span>REAL PROFILE</span>
                    </div>
                  </div>
                </div>

                {/* Footer Micro-strip with Tech Progression */}
                <div
                  style={{
                    padding: '0.65rem 1rem',
                    background: 'rgba(7, 11, 20, 0.95)',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span style={{ color: 'var(--accent-soft)' }}>AWS · K8S · TERRAFORM</span>
                  <span>IMCC PUNE (MCA)</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. SHORT INTRODUCTION & PERSONAL POSITIONING */}
          <div className="hero-order-intro" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', maxWidth: '600px' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1.05rem, 1.3vw, 1.2rem)',
                lineHeight: 1.55,
                color: '#FFFFFF',
                fontWeight: 500,
                margin: 0
              }}
            >
              Operations taught me how systems fail. DevOps taught me how to engineer them better.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.94rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                margin: 0
              }}
            >
              My journey began troubleshooting high-volume production queues at{' '}
              <strong style={{ color: '#FFFFFF' }}>Amazon</strong>, where I developed an obsession for root-cause analysis and eliminating manual toil.
              Today at <strong style={{ color: '#FFFFFF' }}>Akiyam Solution</strong>, I support{' '}
              <strong style={{ color: '#FFFFFF' }}>50+ microservices on Kubernetes</strong> with Terraform/OpenTofu, Helm, CI/CD pipelines, and real-time observability.
            </p>

            {/* Subtle Career Progression Breadcrumb */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                flexWrap: 'wrap',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.73rem',
                color: 'var(--text-muted)',
                paddingTop: '0.2rem'
              }}
            >
              <Terminal size={12} style={{ color: 'var(--accent-soft)' }} />
              <span>Amazon Ops</span>
              <span style={{ color: 'var(--accent-soft)' }}>→</span>
              <span>Troubleshooting</span>
              <span style={{ color: 'var(--accent-soft)' }}>→</span>
              <span>Automation</span>
              <span style={{ color: 'var(--accent-soft)' }}>→</span>
              <span>Kubernetes</span>
              <span style={{ color: 'var(--accent-soft)' }}>→</span>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Infrastructure as Code</span>
            </div>
          </div>

          {/* 5. CONCISE CTA AREA */}
          <div className="hero-order-cta" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
            <a
              href="#projects"
              className="btn btn-accent"
              style={{
                padding: '0.85rem 1.65rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              aria-label="View Engineering Projects"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight size={15} />
            </a>

            <a
              href="#contact"
              className="btn btn-secondary"
              style={{
                padding: '0.85rem 1.45rem',
                fontSize: '0.88rem',
                fontWeight: 500,
                letterSpacing: '0.02em',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              aria-label="Connect with Gayatri"
            >
              <MessageSquare size={15} />
              <span>LET'S CONNECT</span>
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download={PERSONAL_INFO.resumeFilename}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                padding: '0.5rem 0.75rem',
                borderRadius: '0.375rem',
                transition: 'color 0.2s ease'
              }}
              className="hover-accent"
              aria-label="Download Resume PDF"
            >
              <FileText size={14} />
              <span>RESUME (PDF)</span>
            </a>

            {/* Social Links Mini-pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginLeft: 'auto' }}>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  transition: 'color 0.2s ease'
                }}
                className="hover-accent"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  transition: 'color 0.2s ease'
                }}
                className="hover-accent"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* 6. SMALL ENGINEERING PROOF STRIP */}
          <div className="hero-order-proof">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1.25rem',
                paddingTop: '1.5rem',
                marginTop: '0.5rem',
                borderTop: '1px solid var(--border-subtle)',
                width: '100%'
              }}
              className="hero-proof-grid"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1
                  }}
                >
                  2+ YEARS
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Operations & Technical Support
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1
                  }}
                >
                  50+
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Microservices on Kubernetes
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.4rem, 2vw, 1.85rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1
                  }}
                >
                  98%
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Amazon Quality Score
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 1.7vw, 1.55rem)',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1
                  }}
                >
                  2nd RUNNER-UP
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Amazon Bug-Bust Event
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop Asymmetric 2-Part Layout */
        .hero-layout-container {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.95fr);
          grid-template-areas:
            "identity portrait"
            "headline portrait"
            "intro    portrait"
            "cta      portrait"
            "proof    proof";
          column-gap: 3.5rem;
          row-gap: 1.35rem;
          align-items: center;
          width: 100%;
        }

        .hero-order-identity { grid-area: identity; }
        .hero-order-headline { grid-area: headline; }
        .hero-order-portrait {
          grid-area: portrait;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .hero-order-intro    { grid-area: intro; }
        .hero-order-cta      { grid-area: cta; }
        .hero-order-proof    { grid-area: proof; width: 100%; }

        .portrait-card-wrapper {
          width: 100%;
          max-width: 440px;
        }

        /* Responsive Mobile Layout (Strict requested order)
           1. identity/name
           2. headline
           3. photograph
           4. short introduction
           5. CTA
           6. proof metrics
        */
        @media (max-width: 960px) {
          .hero-layout-container {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .hero-order-identity { order: 1; }
          .hero-order-headline { order: 2; }
          .hero-order-portrait {
            order: 3;
            width: 100%;
            margin: 0.5rem 0;
          }
          .hero-order-intro    { order: 4; }
          .hero-order-cta      { order: 5; }
          .hero-order-proof    { order: 6; }

          .portrait-card-wrapper {
            max-width: 380px;
            margin: 0 auto;
          }

          .hero-proof-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          .portrait-card-wrapper {
            max-width: 100%;
          }
        }

        .hover-accent:hover {
          color: var(--accent-soft) !important;
        }
      `}</style>
    </section>
  );
};
