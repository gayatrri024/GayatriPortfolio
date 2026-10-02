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
            Bridging operational troubleshooting rigor with declarative cloud automation.
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              style={{
                borderLeft: '3px solid var(--accent-primary)',
                paddingLeft: '1.25rem'
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)',
                  lineHeight: 1.6,
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  margin: 0
                }}
              >
                "I enjoy the engine room of technology — provisioning repeatable environments,
                automating operational workflows, breaking things in staging, and making sure they don’t break the same way twice."
              </p>
            </div>

            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0
              }}
            >
              My journey began in high-volume operations at <strong style={{ color: '#FFFFFF' }}>Amazon</strong>,
              where I spent over two years troubleshooting complex workflows, conducting root-cause analysis (RCA),
              and building automation scripts to cut manual effort. Earning 2nd Runner-Up in Amazon's Bug-Bust event
              crystallized my passion: I didn’t just want to support systems; I wanted to build and automate the infrastructure beneath them.
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0
              }}
            >
              Currently, as a DevOps & Infrastructure Engineer Intern at{' '}
              <strong style={{ color: '#FFFFFF' }}>Akiyam Solution</strong>, I manage staging and production environments
              running 50+ microservices on Kubernetes, supporting AWS cloud infrastructure with Terraform/OpenTofu,
              Helm, Docker, and Jenkins pipelines.
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0
              }}
            >
              I am targeting early-career <strong style={{ color: 'var(--accent-soft)' }}>Cloud Engineer</strong>,{' '}
              <strong style={{ color: 'var(--accent-soft)' }}>DevOps Engineer</strong>, and{' '}
              <strong style={{ color: 'var(--accent-soft)' }}>Platform / Infrastructure</strong> roles across India
              (Pune-based or Remote), where I can take ownership of real infrastructure reliability.
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
                Cloud Infrastructure · Kubernetes · Terraform IaC · CI/CD Automation
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
