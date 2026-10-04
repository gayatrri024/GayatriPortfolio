import React from 'react';
import { MapPin, Target, Sparkles, GraduationCap, Briefcase, Terminal } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const About: React.FC = () => {
  const toolSnapshot = [
    'AWS & GCP',
    'Kubernetes & Helm',
    'Terraform / OpenTofu',
    'Docker',
    'Jenkins & GitHub Actions',
    'Prometheus & Grafana',
    'Linux Shell & Python',
    'AI-Augmented Tooling'
  ];

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
              I’m an <strong style={{ color: '#FFFFFF' }}>MCA graduate specializing in Cloud Computing</strong> with
              a passion for building reliable, scalable technology solutions. My experience spans cloud platforms,
              CI/CD pipeline automation, application deployments, and infrastructure operations — rooted in{' '}
              <strong style={{ color: '#FFFFFF' }}>over two years of high-volume operational troubleshooting at Amazon</strong>.
              Investigating critical workflows under strict SLAs and earning{' '}
              <strong style={{ color: 'var(--accent-soft)' }}>2nd Runner-Up in Amazon’s Bug-Bust</strong> event crystallized
              my direction: I didn’t just want to support systems; I wanted to build and automate the infrastructure beneath them.
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0
              }}
            >
              Currently, I work as a <strong style={{ color: '#FFFFFF' }}>DevOps & Infrastructure Engineer Intern at Akiyam Solution</strong>,
              where I contribute to cloud operations, deployment automation, access management, and platform reliability for{' '}
              <strong style={{ color: '#FFFFFF' }}>50+ microservices running on Kubernetes</strong>. Through production internships
              and hands-on projects, I’ve engineered solutions ranging from declarative multi-tier AWS infrastructure with{' '}
              <strong style={{ color: 'var(--accent-soft)' }}>Terraform & OpenTofu</strong> and Helm packaging, to secure GCP data pipelines
              (<strong style={{ color: '#FFFFFF' }}>Habot Secure Cloud</strong> with BigQuery & GCS), automated Jenkins/GitHub Actions CI/CD,
              and observability via <strong style={{ color: 'var(--accent-soft)' }}>Prometheus & Grafana</strong>.
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0
              }}
            >
              I’m deeply comfortable in the terminal, fluent with <strong style={{ color: '#FFFFFF' }}>Docker, Kubernetes, and GitHub Actions</strong>,
              and I actively lean on modern <strong style={{ color: 'var(--accent-soft)' }}>AI tooling</strong> to prototype faster,
              debug smarter, and automate repetitive tasks without cutting corners on reliability.
            </p>

            {/* Core Toolchain Snapshot */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '0.75rem',
                padding: '1rem 1.15rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  color: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
              >
                <Terminal size={13} />
                <span>// SNAPSHOT OF WHAT I WORK WITH</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {toolSnapshot.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '0.375rem',
                      backgroundColor: 'rgba(56, 189, 248, 0.08)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      color: 'var(--text-primary)',
                      display: 'inline-flex',
                      alignItems: 'center'
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

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
              (Pune-based or Remote), eager to bring relentless curiosity, operational discipline, and production ownership to an ambitious team.
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
