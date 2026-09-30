import React from 'react';

interface SkillEditorialGroup {
  num: string;
  category: string;
  primary?: string;
  lines: string[];
}

const SKILL_GROUPS: SkillEditorialGroup[] = [
  {
    num: '01',
    category: 'INFRASTRUCTURE AS CODE',
    lines: ['Terraform · OpenTofu · Jenkins · GitHub Actions · GitOps / Argo CD']
  },
  {
    num: '02',
    category: 'CLOUD',
    primary: 'AWS',
    lines: [
      'EC2 · EKS · S3 · VPC · IAM · RDS · CloudWatch',
      'Security Groups · Load Balancers · Cost Explorer / Budgets',
      'Azure (Basics) · Google Cloud Platform'
    ]
  },
  {
    num: '03',
    category: 'CONTAINERS & ORCHESTRATION',
    lines: ['Docker · Kubernetes (EKS) · Kustomize · Helm']
  },
  {
    num: '04',
    category: 'NETWORKING',
    lines: [
      'VPCs · Routing · DNS · Transit Gateways',
      'Load Balancers · AWS Networking Fundamentals'
    ]
  },
  {
    num: '05',
    category: 'MONITORING & OBSERVABILITY',
    lines: ['Prometheus · Grafana · CloudWatch']
  },
  {
    num: '06',
    category: 'PROGRAMMING & SCRIPTING',
    lines: ['Python · Linux Shell Scripting · PowerShell · Bash · Java']
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="presentation-page">
      <div className="page-inner page-content-anim">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>05 // SKILLS</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="editorial-title">Skills & Technologies</h2>
          <p className="editorial-subtitle">
            Curated infrastructure stack focused on declarative automation, container runtimes, cloud networking, and production reliability.
          </p>
        </div>

        {/* Clean Editorial Two-Column Typographic Layout (NO Cards, NO Boxes, NO Progress Bars) */}
        <div className="skills-editorial-grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.num} className="skills-editorial-block">
              {/* Number and Category Header */}
              <div className="skills-group-top">
                <span className="skills-group-num">{group.num}</span>
                <span className="skills-group-divider">/</span>
                <h3 className="skills-group-title">{group.category}</h3>
              </div>

              {/* Sub-header if specific cloud provider like AWS */}
              {group.primary && (
                <div className="skills-group-primary">{group.primary}</div>
              )}

              {/* Clean Readable Skill Lines */}
              <div className="skills-group-lines">
                {group.lines.map((line, lIdx) => (
                  <p key={lIdx} className="skills-line-text">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
