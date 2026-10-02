import React from 'react';
import { ArrowUpRight, GitBranch, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectData {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  badge: string;
  description: string;
  pipeline: string[];
  technologies: string[];
  highlights: string[];
  githubUrl: string;
}

const PROJECTS_LIST: ProjectData[] = [
  {
    id: 'greendot',
    number: '01',
    name: 'GreenDot // End-to-End DevOps Pipeline',
    subtitle: 'Containerized Delivery & Kubernetes Orchestration',
    badge: 'CI/CD & KUBERNETES',
    description:
      'Designed and implemented a production-grade CI/CD pipeline delivering containerized microservices from source control to a Kubernetes environment with continuous monitoring.',
    pipeline: ['Git Push', 'GitHub Actions', 'Docker Build', 'Docker Hub', 'Kubernetes / Helm', 'Prometheus & Grafana'],
    technologies: ['Kubernetes', 'Docker', 'GitHub Actions', 'Helm', 'Prometheus', 'Grafana', 'Terraform', 'Linux'],
    highlights: [
      'Automated testing, multi-stage Docker builds, and image publishing to Docker Hub on every git push via GitHub Actions.',
      'Packaged application manifests into Helm charts with environment parameterization (values.yaml), eliminating hardcoded YAML drifts across environments.',
      'Deployed services to Kubernetes with rolling update strategies, readiness/liveness health probes, and ClusterIP service exposure.',
      'Configured Prometheus telemetry scrapers and Grafana dashboards to monitor container memory pressure, CPU usage, and pod restart counts.',
      'Factual Deployment Note: Implementation validated and running on Kubernetes cluster architecture with Helm automation.'
    ],
    githubUrl: 'https://github.com/gayatrri024/ultimate-devops-project'
  },
  {
    id: 'pulserds',
    number: '02',
    name: 'PulseRDS // Cost-Aware Database Operations',
    subtitle: 'Terraform IaC, RDS Upgrades & Spend Telemetry',
    badge: 'AWS IAC & COST OPTIMIZATION',
    description:
      'Hands-on AWS cloud infrastructure project focused on Infrastructure as Code, database lifecycle operations, cost monitoring, and Python automation.',
    pipeline: ['Terraform IaC', 'AWS RDS PostgreSQL', 'Parameter Group Upgrade', 'Health Verification', 'Cost Explorer & Budgets', 'Python Scripts'],
    technologies: ['AWS RDS', 'Terraform', 'AWS Cost Explorer', 'AWS Budgets', 'Python (boto3)', 'PostgreSQL', 'Bash Shell'],
    highlights: [
      'Declaratively provisioned an AWS RDS PostgreSQL instance with custom security groups, subnets, and parameter groups using modular Terraform.',
      'Conducted a zero-downtime parameter group configuration change and minor version upgrade, validating connectivity and query behavior before and after.',
      'Configured AWS Cost Explorer spend telemetry and AWS Budgets alert thresholds; analyzed real account usage to identify an oversized instance for rightsizing.',
      'Built a lightweight Python & Bash automation script to schedule automated RDS snapshots and perform endpoint health checks, replacing manual operations.'
    ],
    githubUrl: 'https://github.com/gayatrri024'
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="presentation-page section-block">
      <div className="page-inner">
        {/* Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>// 03 · PROOF OF WORK</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>PRODUCTION WORKFLOWS</span>
          </div>
          <h2 className="editorial-title">Featured Projects</h2>
          <p className="editorial-subtitle">
            Demonstrating containerized pipeline delivery, declarative Infrastructure as Code, and cost-aware cloud operations. Both projects shown with technical evidence.
          </p>
        </div>

        {/* Both Projects Rendered Openly (No tabs hiding work!) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', width: '100%' }}>
          {PROJECTS_LIST.map((proj) => (
            <article
              key={proj.id}
              style={{
                backgroundColor: 'rgba(13, 21, 39, 0.75)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '1.25rem',
                padding: '2rem 2.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                backdropFilter: 'blur(12px)',
                position: 'relative'
              }}
              className="project-card-wrap"
            >
              {/* Project Card Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '1.25rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.35rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: 'var(--accent-soft)',
                        letterSpacing: '0.08em'
                      }}
                    >
                      PROJECT {proj.number}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        padding: '0.15rem 0.55rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(37, 99, 235, 0.15)',
                        border: '1px solid var(--border-accent)',
                        color: 'var(--accent-soft)'
                      }}
                    >
                      {proj.badge}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.35rem, 2vw, 1.75rem)',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: '0.1rem 0'
                    }}
                  >
                    {proj.name}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {proj.subtitle}
                  </p>
                </div>

                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.55rem 1.15rem',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'none'
                  }}
                  aria-label={`View ${proj.name} on GitHub`}
                >
                  <GithubIcon size={15} />
                  <span>View Repository</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Pipeline Flow Strip */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    marginBottom: '0.6rem'
                  }}
                >
                  <GitBranch size={13} style={{ color: 'var(--accent-soft)' }} />
                  <span>PIPELINE ARCHITECTURE & WORKFLOW</span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    overflowX: 'auto',
                    paddingBottom: '0.4rem'
                  }}
                >
                  {proj.pipeline.map((step, sIdx) => {
                    const isLast = sIdx === proj.pipeline.length - 1;
                    return (
                      <React.Fragment key={step}>
                        <div
                          style={{
                            padding: '0.4rem 0.75rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '6px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.74rem',
                            color: '#FFFFFF',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <span style={{ color: 'var(--accent-soft)', marginRight: '0.35rem' }}>0{sIdx + 1}</span>
                          {step}
                        </div>
                        {!isLast && (
                          <span style={{ color: 'var(--accent-soft)', opacity: 0.6, fontSize: '0.85rem' }}>→</span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {/* Technical Execution Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1.45fr) minmax(0, 0.95fr)',
                  gap: '2rem',
                  alignItems: 'start'
                }}
                className="project-body-grid"
              >
                {/* Left: Engineering Implementation Highlights */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      marginBottom: '0.65rem'
                    }}
                  >
                    <Terminal size={13} style={{ color: 'var(--accent-soft)' }} />
                    <span>TECHNICAL EVIDENCE & EXECUTION</span>
                  </div>

                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.55rem'
                    }}
                  >
                    {proj.highlights.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.55rem',
                          fontSize: '0.86rem',
                          lineHeight: 1.6,
                          color: bullet.includes('Factual Deployment Note') ? 'var(--accent-soft)' : 'var(--text-secondary)'
                        }}
                      >
                        <span style={{ color: 'var(--accent-soft)', fontWeight: 700, flexShrink: 0 }}>—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Key Technologies Badges */}
                <div
                  style={{
                    backgroundColor: 'rgba(7, 11, 20, 0.5)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '0.75rem',
                    padding: '1.25rem'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      marginBottom: '0.75rem'
                    }}
                  >
                    <CheckCircle2 size={13} style={{ color: 'var(--accent-soft)' }} />
                    <span>TECHNOLOGIES & TOOLS</span>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          color: '#FFFFFF',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.25rem 0.6rem',
                          borderRadius: '6px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-body-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};
