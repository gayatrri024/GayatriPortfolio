import React from 'react';
import { MapPin, Target, Sparkles, GraduationCap } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="presentation-page">
      <div className="page-inner page-content-anim">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>02 // PROFILE</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>ENGINEERING IDENTITY</span>
          </div>
          <h2 className="editorial-title">About</h2>
        </div>

        {/* Editorial 2-Column Balanced Composition */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.85fr)',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="about-editorial-grid"
        >
          {/* Left Column: Editorial Voice & Statements */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            {/* Large Lead Introductory Statement */}
            <div
              style={{
                borderLeft: '2px solid var(--accent-primary)',
                paddingLeft: '1.25rem'
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1.1rem, 1.45vw, 1.35rem)',
                  lineHeight: 1.6,
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  margin: 0
                }}
              >
                "DevOps & Infrastructure Engineer who genuinely enjoys the behind-the-scenes part of technology — building environments, automating repetitive work, breaking things, figuring out why they broke, and making sure they don’t break the same way twice."
              </p>
            </div>

            {/* Supporting Paragraph 1: Current Playground */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0
              }}
            >
              My current playground includes AWS, Docker, Kubernetes, Terraform/OpenTofu, CI/CD, Linux, and monitoring. I’m especially interested in infrastructure automation, cloud platforms, containers, and the kind of troubleshooting that makes you forget what time it is.
            </p>

            {/* Supporting Paragraph 2: Goals & Target Roles */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0
              }}
            >
              I’m currently looking for opportunities where I can learn fast, take ownership, and work on real infrastructure problems — DevOps, Cloud, Kubernetes, Platform, or Infrastructure Engineering roles across India, with a preference for remote or Pune-based opportunities.
            </p>
          </div>

          {/* Right Column: Structured Editorial Metadata & Education */}
          <div
            style={{
              backgroundColor: 'rgba(11, 18, 32, 0.75)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '1rem',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              backdropFilter: 'blur(12px)'
            }}
          >
            {/* Based In */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-soft)',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '0.35rem'
                }}
              >
                <MapPin size={13} />
                <span>BASED IN</span>
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 600, color: '#ffffff' }}>
                Pune, India
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)' }} />

            {/* Focus */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-soft)',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '0.35rem'
                }}
              >
                <Target size={13} />
                <span>FOCUS</span>
              </div>
              <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                DevOps • Cloud • Kubernetes • Infrastructure as Code
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)' }} />

            {/* Currently */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-soft)',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '0.35rem'
                }}
              >
                <Sparkles size={13} />
                <span>CURRENTLY</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Building deeper hands-on experience in infrastructure automation and cloud engineering.
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)' }} />

            {/* Education */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  color: 'var(--accent-soft)',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '0.5rem'
                }}
              >
                <GraduationCap size={14} />
                <span>EDUCATION</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {EDUCATION.map((edu, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                      {edu.degree}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {edu.period} • GPA {edu.gpa}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-editorial-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
