import React from 'react';
import { Layers, Cloud, Boxes, Network, Activity, Terminal, ShieldCheck } from 'lucide-react';

export const Skills: React.FC = () => {
  const categories = [
    {
      title: 'INFRASTRUCTURE AS CODE',
      icon: Boxes,
      skills: ['Terraform', 'OpenTofu', 'Jenkins', 'GitHub Actions', 'GitOps / Argo CD'],
      featured: true
    },
    {
      title: 'CLOUD PLATFORMS',
      icon: Cloud,
      skills: [
        'AWS',
        'EC2',
        'EKS',
        'S3',
        'VPC',
        'IAM',
        'RDS',
        'CloudWatch',
        'Security Groups',
        'Load Balancers',
        'Cost Explorer',
        'Budgets',
        'Azure Basics',
        'Google Cloud Platform'
      ],
      featured: true
    },
    {
      title: 'CONTAINERS & ORCHESTRATION',
      icon: Layers,
      skills: ['Docker', 'Kubernetes', 'Amazon EKS', 'Kustomize', 'Helm'],
      featured: false
    },
    {
      title: 'NETWORKING',
      icon: Network,
      skills: [
        'VPCs',
        'Routing',
        'DNS',
        'Transit Gateways',
        'Load Balancers',
        'AWS Networking Fundamentals'
      ],
      featured: false
    },
    {
      title: 'OBSERVABILITY',
      icon: Activity,
      skills: ['Prometheus', 'Grafana', 'CloudWatch'],
      featured: false
    },
    {
      title: 'PROGRAMMING & SCRIPTING',
      icon: Terminal,
      skills: ['Python', 'Linux Shell Scripting', 'PowerShell', 'Bash', 'Java'],
      featured: false
    },
    {
      title: 'SYSTEMS & PRACTICES',
      icon: ShieldCheck,
      skills: ['Linux', 'Windows', 'Git/GitHub', 'Agile/Scrum', 'Cloud Security', 'Cost Optimization'],
      featured: false
    }
  ];

  return (
    <section id="skills" className="presentation-page">
      <div className="page-inner page-content-anim">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>05 // CAPABILITIES</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>TECHNICAL CLUSTERS</span>
          </div>
          <h2 className="editorial-title">Skills & Tooling</h2>
          <p className="editorial-subtitle">
            Categorized technical competencies across modern cloud infrastructure and DevOps automation.
          </p>
        </div>

        {/* Categorized Typography Clusters Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
            alignItems: 'stretch'
          }}
          className="skills-grid"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="editorial-card"
                style={{
                  padding: '1.4rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem'
                }}
              >
                {/* Cluster Title */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: cat.featured ? 'var(--accent-soft)' : 'var(--text-primary)',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '0.6rem'
                  }}
                >
                  <Icon size={14} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                  <span>{cat.title}</span>
                </div>

                {/* Typography Skills Cluster */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.45rem',
                    alignItems: 'center'
                  }}
                >
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        padding: '0.3rem 0.7rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.035)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '6px',
                        color: 'var(--text-primary)',
                        transition: 'border-color 0.2s ease, background-color 0.2s ease'
                      }}
                      className="skill-pill"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .skill-pill:hover {
          border-color: var(--accent-primary) !important;
          background-color: var(--accent-subtle) !important;
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
};
