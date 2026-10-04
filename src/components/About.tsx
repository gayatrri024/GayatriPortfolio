import React from 'react';
import { MapPin, Target, Sparkles, GraduationCap, Briefcase } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="presentation-page section-block">
      <div className="page-inner">
        {/* Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>// 01 · PROFILE</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>ENGINEERING IDENTITY</span>
          </div>
          <h2 className="editorial-title">About Me</h2>
          <p className="editorial-subtitle">
            I build the infrastructure behind reliable software.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.85fr)',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="about-grid-responsive"
        >
          {/* Left Column: Human, Technically Grounded Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
            <div
              style={{
                borderLeft: '3px solid var(--accent-primary)',
                paddingLeft: '1.25rem'
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.2rem, 1.6vw, 1.45rem)',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.35,
                  margin: '0 0 0.5rem 0'
                }}
              >
                I build the infrastructure behind reliable software.
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'var(--accent-soft)',
                  letterSpacing: '0.04em',
                  margin: 0
                }}
              >
                Cloud • Kubernetes • Infrastructure as Code • Automation
              </p>
            </div>

            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                margin: 0
              }}
            >
              I started on the operations side, troubleshooting high-volume systems at{' '}
              <strong style={{ color: '#FFFFFF' }}>Amazon</strong>. That experience taught me to think beyond{' '}
              <em>“how do we fix this?”</em> and start asking <em>“how do we engineer it so it doesn't happen again?”</em>
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                margin: 0
              }}
            >
              Today, I work across <strong style={{ color: '#FFFFFF' }}>Kubernetes, AWS, Terraform/OpenTofu, CI/CD and observability</strong> — turning manual infrastructure and deployment workflows into repeatable systems.
            </p>

            {/* Progression Strip */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '0.75rem',
                padding: '0.9rem 1.15rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                flexWrap: 'wrap',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem'
              }}
            >
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>2+ years operations</span>
              <span style={{ color: 'var(--accent-soft)' }}>→</span>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>50+ microservices</span>
              <span style={{ color: 'var(--accent-soft)' }}>→</span>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Infrastructure as Code</span>
              <span style={{ color: 'var(--accent-soft)' }}>→</span>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>CI/CD</span>
              <span style={{ color: 'var(--accent-soft)' }}>→</span>
              <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Observability</span>
            </div>

            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.75,
                margin: 0
              }}
            >
              I'm building toward becoming an <strong style={{ color: 'var(--accent-soft)' }}>Infrastructure as Code Engineer</strong>, with a focus on cloud platforms, Kubernetes and platform reliability.
            </p>
          </div>

          {/* Right Column: "At a Glance" Structured Card */}
          <div
            style={{
              backgroundColor: 'rgba(13, 21, 39, 0.75)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '1rem',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.08em',
                color: 'var(--accent-soft)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}
            >
              <Sparkles size={14} />
              <span>// AT A GLANCE</span>
            </div>

            {/* Location */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  marginBottom: '0.2rem'
                }}
              >
                <MapPin size={12} />
                <span>LOCATION</span>
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#FFFFFF' }}>
                Pune, Maharashtra, India
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)' }} />

            {/* Target Focus */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  marginBottom: '0.2rem'
                }}
              >
                <Target size={12} />
                <span>PRIMARY FOCUS</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                Cloud Infrastructure · Kubernetes · Terraform IaC · CI/CD Automation · Observability
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)' }} />

            {/* Current Status */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  marginBottom: '0.2rem'
                }}
              >
                <Briefcase size={12} />
                <span>CURRENT ROLE</span>
              </div>
              <div style={{ fontSize: '0.88rem', color: '#FFFFFF', fontWeight: 600 }}>
                DevOps & Infrastructure Intern
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--accent-soft)' }}>
                Akiyam Solution Private Limited
              </div>
            </div>

            <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)' }} />

            {/* Education Summary */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  marginBottom: '0.35rem'
                }}
              >
                <GraduationCap size={13} />
                <span>EDUCATION</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {EDUCATION.map((edu, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#FFFFFF' }}>
                      {edu.degree}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-soft)' }}>
                      GPA: {edu.gpa} ({edu.period})
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
          .about-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
