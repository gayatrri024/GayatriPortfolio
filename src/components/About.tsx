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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
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
              My journey into tech wasn’t about chasing buzzwords — it started in the trenches of high-volume operations at{' '}
              <strong style={{ color: '#FFFFFF' }}>Amazon</strong>. For over two years, I lived in production queues:
              troubleshooting failure modes under strict SLAs, untangling operational bottlenecks with root-cause analysis (RCA),
              and writing automation scripts to kill repetitive manual toil. Placing{' '}
              <strong style={{ color: 'var(--accent-soft)' }}>2nd Runner-Up in Amazon’s Bug-Bust</strong> sparked a defining shift:
              I realized I didn’t just want to fight fires at the application surface; I wanted to architect and automate the infrastructure so the fires never start.
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0
              }}
            >
              That drive led me to dive deep into Cloud & DevOps. Today, as a DevOps & Infrastructure Engineer Intern at{' '}
              <strong style={{ color: '#FFFFFF' }}>Akiyam Solution</strong>, I work at the intersection of scale and reliability — managing
              staging and production environments running <strong style={{ color: '#FFFFFF' }}>50+ microservices on Kubernetes</strong>.
              From codifying AWS infrastructure with <strong style={{ color: 'var(--accent-soft)' }}>Terraform & OpenTofu</strong> and
              packaging Helm charts to building resilient <strong style={{ color: 'var(--accent-soft)' }}>Jenkins & GitHub Actions</strong> pipelines,
              my daily mission is turning complex manual deployments into boringly predictable automation.
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0
              }}
            >
              To ensure systems fail loudly and recover quickly, I instrument observability using{' '}
              <strong style={{ color: 'var(--accent-soft)' }}>Prometheus & Grafana</strong>. I also stay intentionally multi-cloud — recently
              delivering secure GCP infrastructure (BigQuery, Cloud Storage) with automated CI/CD security validation for the{' '}
              <strong style={{ color: '#FFFFFF' }}>Habot Secure Cloud</strong> project.
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
              (Pune-based or Remote), eager to bring relentless curiosity, operational grit, and true infrastructure ownership to an ambitious team.
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
