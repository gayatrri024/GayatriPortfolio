import React from 'react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: '☁',
      title: 'Cloud Infrastructure (AWS)',
      items: [
        'AWS — EC2, S3, VPC, IAM, RDS, EKS, CloudWatch',
        'Networking — Subnets, Route Tables, NAT, Security Groups',
        'Cost Telemetry — AWS Cost Explorer & AWS Budgets'
      ]
    },
    {
      icon: '⟲',
      title: 'Containers & Orchestration',
      items: [
        'Docker — Multi-stage builds, Dockerfiles, OCI optimization',
        'Kubernetes — Deployments, Services, Probes, Pod scheduling',
        'Packaging — Helm charts (values parameterization), Kustomize'
      ]
    },
    {
      icon: '⚡',
      title: 'Infrastructure as Code',
      items: [
        'Terraform & OpenTofu — Modules, State, Declarative AWS resources',
        'GitOps — Declarative manifests, Argo CD sync workflows',
        'Configuration drift detection & repeatable environments'
      ]
    },
    {
      icon: '⇄',
      title: 'CI/CD & Delivery',
      items: [
        'GitHub Actions — Automated test, build & Docker Hub publish',
        'Jenkins — Declarative pipelines, build validation, deployment stages',
        'Release workflows — Staging & production deployment pipelines'
      ]
    },
    {
      icon: '◉',
      title: 'Observability & Monitoring',
      items: [
        'Prometheus — Exporters, metric scrapers, container resource metrics',
        'Grafana — Cluster dashboards, memory/CPU visualization',
        'CloudWatch Metrics, Alarms & Grafana OnCall'
      ]
    },
    {
      icon: '>_',
      title: 'Scripting & Systems',
      items: [
        'Linux — Ubuntu, Amazon Linux, systemd, SSH, permissions',
        'Shell Scripting — Bash automation & PowerShell',
        'Python — Automation scripts, boto3 AWS SDK, data parsing'
      ]
    }
  ];

  return (
    <section className="section skills" id="skills">
      <header className="section__head reveal">
        <h2 className="section__title">Skills</h2>
        <span className="section__rule" aria-hidden="true" />
      </header>

      <div className="skills__grid">
        {skillCategories.map((cat) => (
          <article className="skill-card reveal" key={cat.title}>
            <h3 className="skill-card__title">
              <span aria-hidden="true">{cat.icon}</span> {cat.title}
            </h3>
            <ul className="skill-card__list">
              {cat.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
