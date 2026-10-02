import React from 'react';
import { Cloud, Box, GitBranch, Terminal } from 'lucide-react';

interface SkillCardData {
  title: string;
  icon: React.ReactNode;
  tag: string;
  items: string[];
}

const SKILL_CARDS: SkillCardData[] = [
  {
    title: 'Cloud Infrastructure (AWS)',
    icon: <Cloud size={18} style={{ color: '#38BDF8' }} />,
    tag: 'Core Platform',
    items: [
      'Compute & Storage: EC2, S3, EBS, Elastic Load Balancing (ALB)',
      'Networking & Security: VPC, Subnets, Route Tables, NAT Gateways, Security Groups, IAM Roles & Policies',
      'Database: AWS RDS (PostgreSQL / MySQL), Automated Snapshots',
      'Telemetry & Cost: CloudWatch Metrics & Alarms, AWS Cost Explorer, AWS Budgets'
    ]
  },
  {
    title: 'Containers & Orchestration',
    icon: <Box size={18} style={{ color: '#60A5FA' }} />,
    tag: 'Cloud-Native Runtimes',
    items: [
      'Docker: Multi-stage builds, Dockerfiles, OCI container image optimization',
      'Kubernetes: Deployments, Services, ConfigMaps, Secrets, Ingress, Pod scheduling & health probes',
      'Packaging & Config: Helm charts, values parameterization, Kustomize overlays',
      'Environments: Minikube (local testing), Staging & Production cluster operations'
    ]
  },
  {
    title: 'IaC & CI/CD Pipelines',
    icon: <GitBranch size={18} style={{ color: '#34D399' }} />,
    tag: 'Delivery Automation',
    items: [
      'Infrastructure as Code: Terraform & OpenTofu (Modules, State Management, Declarative AWS resources)',
      'CI/CD Workflows: GitHub Actions (automated test, build, Docker publish)',
      'Enterprise Pipelines: Jenkins (declarative pipelines, build validation, deployment stages)',
      'GitOps Principles: Declarative manifests, version-controlled infrastructure'
    ]
  },
  {
    title: 'Scripting, Linux & Observability',
    icon: <Terminal size={18} style={{ color: '#F472B6' }} />,
    tag: 'Systems & Reliability',
    items: [
      'Operating Systems: Linux (Ubuntu / Amazon Linux), systemd, file permissions, SSH keys',
      'Automation Scripting: Bash Shell Scripting, Python (boto3 / automation scripts), PowerShell',
      'Monitoring & Metrics: Prometheus (scraping & exporters), Grafana dashboards',
      'Troubleshooting: Root-Cause Analysis (RCA), log investigation, endpoint health checks'
    ]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="presentation-page section-block">
      <div className="page-inner">
        {/* Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>// 02 · TECHNICAL CAPABILITIES</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>STACK AUDIT</span>
          </div>
          <h2 className="editorial-title">Skills & Technologies</h2>
          <p className="editorial-subtitle">
            Curated and defensible infrastructure tooling proven in live staging environments and production microservices.
          </p>
        </div>

        {/* 4 Clean Scannable Cards Grid (Exact Akhilesh-style clarity) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            width: '100%'
          }}
          className="skills-grid-responsive"
        >
          {SKILL_CARDS.map((card) => (
            <div
              key={card.title}
              style={{
                backgroundColor: 'rgba(13, 21, 39, 0.75)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '1rem',
                padding: '1.6rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
                backdropFilter: 'blur(10px)'
              }}
              className="skill-card-hover"
            >
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      margin: 0
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    color: 'var(--accent-soft)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(56, 189, 248, 0.08)',
                    border: '1px solid rgba(56, 189, 248, 0.15)'
                  }}
                >
                  {card.tag}
                </span>
              </div>

              {/* Items List */}
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
                {card.items.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '0.55rem',
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55
                    }}
                  >
                    <span style={{ color: 'var(--accent-soft)', fontWeight: 700, flexShrink: 0 }}>—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .skills-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
        }
        .skill-card-hover:hover {
          border-color: var(--border-accent) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
