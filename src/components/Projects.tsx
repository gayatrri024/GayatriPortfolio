import React, { useState } from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 15 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<0 | 1>(0);

  const projects = [
    {
      num: '01',
      name: 'GreenDot',
      subtitle: 'Ultimate End-to-End DevOps Project',
      description:
        'Designed and implemented an end-to-end DevOps workflow for deploying containerized microservices from source control to a Kubernetes environment.',
      stack: ['Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Helm', 'Prometheus', 'Grafana', 'Git'],
      highlights: [
        'Automated application testing, Docker image builds, and image publishing using GitHub Actions.',
        'Provisioned and managed cloud infrastructure using Terraform, following Infrastructure as Code practices for repeatable deployments.',
        'Deployed containerized services to Kubernetes with health checks, service configuration, and rolling-update strategies.',
        'Implemented Prometheus and Grafana monitoring to track application and infrastructure health.',
        'Maintained application and infrastructure configurations using Git/GitHub with version-controlled deployment workflows and documentation.',
        'Packaged and modified a Helm chart to parameterize environment-specific values, eliminating hand-edited manifests per environment.'
      ]
    },
    {
      num: '02',
      name: 'PulseRDS',
      subtitle: 'Cost-Aware Database Operations',
      description:
        'A hands-on AWS infrastructure project focused on Infrastructure as Code, database operations, automation and cost awareness.',
      stack: ['AWS RDS', 'Terraform', 'AWS Cost Explorer', 'AWS Budgets', 'Python', 'Bash'],
      highlights: [
        'Provisioned RDS via Terraform and performed a live parameter group change plus a minor version upgrade, validating connectivity and query behavior before and after.',
        'Configured AWS Cost Explorer on a multi-region deployment and AWS Budgets against the account and used several days of real spend data to identify an oversized, underutilized instance as a rightsizing opportunity.',
        'Wrote a Python/Bash script to automate scheduled RDS snapshots and endpoint health checks, replacing a manual operational task.'
      ]
    }
  ];

  const current = projects[selectedProject];

  return (
    <section id="projects" className="presentation-page">
      <div className="page-inner page-content-anim">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>04 // ENGINEERING</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>FEATURED WORK</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 className="editorial-title">Projects</h2>

            {/* Quick Switcher Between the 2 Projects */}
            <div
              style={{
                display: 'inline-flex',
                padding: '0.25rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '9999px'
              }}
            >
              {projects.map((p, idx) => (
                <button
                  key={p.num}
                  onClick={() => setSelectedProject(idx as 0 | 1)}
                  style={{
                    padding: '0.35rem 0.95rem',
                    borderRadius: '9999px',
                    border: 'none',
                    background: selectedProject === idx ? 'var(--accent-primary)' : 'transparent',
                    color: selectedProject === idx ? '#ffffff' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    fontWeight: selectedProject === idx ? 600 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  PROJECT {p.num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Large Editorial Project Showcase Layout */}
        <div
          className="editorial-card"
          style={{
            padding: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1.25fr)',
            gap: '3rem',
            alignItems: 'start'
          }}
          id="project-layout-grid"
        >
          {/* Left Column: Number, Title, Overview, Tech Stack, Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--accent-soft)',
                  letterSpacing: '0.1em'
                }}
              >
                PROJECT {current.num}
              </span>
              <span style={{ color: 'var(--border-medium)' }}>/</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {selectedProject === 0 ? 'KUBERNETES & CI/CD' : 'AWS & COST OPTIMIZATION'}
              </span>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                  margin: '0 0 0.4rem 0'
                }}
              >
                {current.name}
              </h3>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--accent-soft)',
                  fontWeight: 500,
                  letterSpacing: '0.04em'
                }}
              >
                {current.subtitle}
              </div>
            </div>

            <p
              style={{
                fontSize: '0.98rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                margin: 0
              }}
            >
              {current.description}
            </p>

            {/* Tech Stack Chips */}
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}
              >
                Technology Stack
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {current.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.65rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '6px',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Real GitHub Link */}
            <div style={{ marginTop: '0.5rem' }}>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  padding: '0.55rem 1.25rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <GithubIcon size={15} />
                <span>VIEW REPOSITORY ARCHIVE</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Engineering Highlights */}
          <div
            style={{
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '1rem',
              padding: '1.75rem'
            }}
          >
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
              <Terminal size={14} />
              <span>KEY ENGINEERING HIGHLIGHTS</span>
            </div>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.9rem'
              }}
            >
              {current.highlights.map((h, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55
                  }}
                >
                  <span
                    style={{
                      color: 'var(--accent-primary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      marginTop: '0.15rem',
                      flexShrink: 0
                    }}
                  >
                    0{idx + 1}
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #project-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
