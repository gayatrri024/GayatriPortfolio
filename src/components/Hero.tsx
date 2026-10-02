import React from 'react';
import { ArrowRight, FileText, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { CloudTopologyCanvas } from './CloudTopologyCanvas';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="presentation-page"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 'calc(100vh - var(--nav-height))',
        paddingTop: 'calc(var(--nav-height) + 2rem)',
        paddingBottom: '3.5rem'
      }}
    >
      <div className="page-inner">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: '3rem',
            alignItems: 'center',
            width: '100%'
          }}
          className="hero-grid-responsive"
        >
          {/* Left Column: Clear Technical Identity & Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Status Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.25rem 0.75rem',
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

            {/* Name & Title */}
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.08,
                  letterSpacing: '-0.02em',
                  margin: 0
                }}
              >
                Gayatri Ashok Shinde
              </h1>
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                  fontWeight: 600,
                  color: 'var(--accent-soft)',
                  margin: '0.5rem 0 0 0',
                  letterSpacing: '0.02em'
                }}
              >
                Cloud & DevOps Infrastructure Engineer
              </h2>
            </div>

            {/* Human & Transparent Intro (What I do & How I can be useful) */}
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                margin: 0,
                maxWidth: '560px'
              }}
            >
              MCA graduate specializing in AWS cloud infrastructure, Kubernetes orchestration,
              Terraform automation, and automated CI/CD pipelines. Currently interning at{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Akiyam Solution</strong> managing
              deployments across 50+ microservices, backed by{' '}
              <strong style={{ color: 'var(--text-primary)' }}>2+ years at Amazon</strong> in
              high-volume operational troubleshooting, RCA, and workflow automation.
            </p>

            {/* Direct Recruiter Action CTAs */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                flexWrap: 'wrap',
                marginTop: '0.5rem'
              }}
            >
              <a
                href={PERSONAL_INFO.resumeUrl}
                download={PERSONAL_INFO.resumeFilename}
                className="btn btn-accent"
                style={{
                  padding: '0.8rem 1.65rem',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  textDecoration: 'none'
                }}
                aria-label="Download Resume (PDF)"
              >
                <FileText size={15} />
                <span>DOWNLOAD RESUME</span>
              </a>

              <a
                href="#projects"
                className="btn btn-secondary"
                style={{
                  padding: '0.8rem 1.45rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none'
                }}
                aria-label="View Engineering Projects"
              >
                <span>View Projects</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#contact"
                className="btn btn-secondary"
                style={{
                  padding: '0.8rem 1.25rem',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                  textDecoration: 'none'
                }}
                aria-label="Jump to Contact"
              >
                <MessageSquare size={14} />
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginTop: '0.2rem' }}>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  transition: 'color 0.2s ease'
                }}
                className="hover-accent"
              >
                <GithubIcon size={14} />
                <span>github.com/gayatrri024</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  transition: 'color 0.2s ease'
                }}
                className="hover-accent"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Honest, Hard Numbers Highlight Row */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
                paddingTop: '1.25rem',
                marginTop: '0.5rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
              className="hero-metrics-grid"
            >
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF' }}>
                  50+
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  K8s Microservices
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF' }}>
                  2+ Yrs
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  Amazon Operations
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF' }}>
                  8.92
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  MCA Distinction
                </div>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF' }}>
                  1st
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  TechnoFest Winner
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Cloud Architecture Visual */}
          <div style={{ width: '100%', position: 'relative' }}>
            <CloudTopologyCanvas />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hero-metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.25rem !important;
          }
        }
        .hover-accent:hover {
          color: var(--accent-soft) !important;
        }
      `}</style>
    </section>
  );
};
