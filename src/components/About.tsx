import React from 'react';
import { GraduationCap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="presentation-page">
      <div className="page-inner page-content-anim">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>02 // PROFILE</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>BACKGROUND & CREDENTIALS</span>
          </div>
          <h2 className="editorial-title">About Gayatri Ashok Shinde</h2>
        </div>

        {/* Concise Quote / Overview */}
        <div
          style={{
            borderLeft: '2px solid var(--accent-primary)',
            paddingLeft: '1.5rem',
            marginBottom: '2.5rem',
            maxWidth: '960px'
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.15rem, 1.6vw, 1.45rem)',
              lineHeight: 1.55,
              color: 'var(--text-primary)',
              fontWeight: 400
            }}
          >
            "DevOps Engineer with <strong style={{ color: '#ffffff', fontWeight: 600 }}>2.5+ years of experience at Amazon</strong> across cloud operations, infrastructure, and technical support, with hands-on experience in Terraform/OpenTofu, AWS, Kubernetes, Helm, Docker, Jenkins and CI/CD automation."
          </p>
        </div>

        {/* Factual Highlights Visual Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2.5rem'
          }}
        >
          <div className="editorial-card" style={{ padding: '1.5rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 3.2vw, 3.2rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.0,
                marginBottom: '0.4rem'
              }}
            >
              2.5+
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.35rem'
              }}
            >
              Years Amazon Experience
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              Cloud operations, infrastructure problem solving & technical workflows.
            </div>
          </div>

          <div className="editorial-card" style={{ padding: '1.5rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 3.2vw, 3.2rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.0,
                marginBottom: '0.4rem'
              }}
            >
              50+
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.35rem'
              }}
            >
              Microservices
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              Kubernetes-based deployment management across staging and production.
            </div>
          </div>

          <div className="editorial-card" style={{ padding: '1.5rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 3.2vw, 3.2rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.0,
                marginBottom: '0.4rem'
              }}
            >
              98%
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.35rem'
              }}
            >
              Quality Score
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              Amazon operational benchmark maintained across high-volume queues.
            </div>
          </div>

          <div className="editorial-card" style={{ padding: '1.5rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 3.2vw, 3.2rem)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.0,
                marginBottom: '0.4rem'
              }}
            >
              60%
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.35rem'
              }}
            >
              Less Manual Tracking
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
              Automated reporting pipelines reducing recurring operational overhead.
            </div>
          </div>
        </div>

        {/* Lower Split: Education & Professional Direction */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
            gap: '1.75rem'
          }}
          className="about-split-grid"
        >
          {/* Professional Trajectory & Accurate Distinction */}
          <div className="editorial-card" style={{ padding: '1.75rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}
            >
              // CURRENT FOCUS & DIRECTION
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem'
              }}
            >
              CURRENTLY BUILDING TOWARD: INFRASTRUCTURE AS CODE ENGINEERING
            </h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              My career combines operational discipline learned at Amazon scale with hands-on DevOps engineering practiced in production Kubernetes environments, Terraform provisioning, and automated CI/CD pipelines.
            </p>
            <div
              style={{
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <strong style={{ color: 'var(--text-secondary)' }}>Note:</strong> Amazon experience reflects cloud operations, infrastructure workflows and technical support. DevOps engineering reflects current internship and hands-on infrastructure projects.
            </div>
          </div>

          {/* Formal Education */}
          <div className="editorial-card" style={{ padding: '1.75rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <GraduationCap size={15} />
              <span>EDUCATION</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Master of Computer Applications (MCA)
                  </h4>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-soft)' }}>
                    GPA 8.92 / 10
                  </span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  MES's Institute of Management and Career Courses (IMCC), Pune
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  September 2024 – May 2026
                </div>
              </div>

              <div style={{ height: '1px', backgroundColor: 'var(--border-subtle)' }} />

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <h4 style={{ fontSize: '0.98rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    Bachelor of Business Administration — Computer Applications (BBA-CA)
                  </h4>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-soft)' }}>
                    GPA 7.75 / 10
                  </span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  Brihan Maharashtra College of Commerce (BMCC), Pune
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  August 2020 – May 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
