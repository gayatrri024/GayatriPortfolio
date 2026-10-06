import React from 'react';
import { RECRUITER_SNAPSHOT } from '../data/portfolioData';

export const About: React.FC = () => {
  const coreTech = [
    'AWS',
    'Kubernetes',
    'Terraform',
    'OpenTofu',
    'Docker',
    'Helm',
    'Jenkins',
    'GitHub Actions',
    'Argo CD',
    'Prometheus',
    'Grafana',
    'Linux',
    'Python',
    'Bash'
  ];

  return (
    <section className="section about" id="about">
      <header className="section__head reveal">
        <h2 className="section__title">About</h2>
        <span className="section__rule" aria-hidden="true" />
      </header>

      <div className="about__grid">
        {/* Left Column: Human, Defensible Narrative */}
        <div className="about__bio reveal">
          <p>
            I’m an engineer specializing in cloud infrastructure, Kubernetes, and automated software delivery.
            My journey began in high-volume operations at <strong>Amazon</strong>, where troubleshooting customer-impacting
            workflows taught me how systems break under scale and grounded me in structured root-cause analysis (RCA).
            During my time there, I automated weekly operational reporting with Excel Macros and Pivot tables,
            slashing manual tracking effort by <strong>60%</strong> while maintaining a sustained <strong>98% quality benchmark</strong>.
          </p>

          <p>
            Currently, I work as a <strong>DevOps & Infrastructure Engineer Intern at Akiyam Solution</strong> in Pune.
            Here, I contribute to cloud operations and deployment workflows for <strong>50+ microservices running on Kubernetes</strong>.
            My work centers on OpenTofu/Terraform infrastructure modules, Helm package parameterization,
            automated CI/CD pipelines in Jenkins and GitHub Actions, and cluster observability using Prometheus and Grafana.
          </p>

          <p>
            I’m comfortable in the terminal, fluent with container lifecycles, and deliberate about automating away manual toil.
            <strong>Long-term focus: Infrastructure as Code & Platform Engineering</strong> — engineering resilient cloud foundations
            and self-service delivery platforms that empower engineering teams.
          </p>

          {/* Technology Badges */}
          <ul className="about__tags" aria-label="Core technologies">
            {coreTech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        {/* Right Column: Sticky Recruiter Snapshot Card */}
        <aside className="about__card reveal" aria-label="At a glance">
          <h3 className="about__card-title">// at a glance</h3>
          <dl className="about__facts">
            <div>
              <dt>Location</dt>
              <dd>Pune, Maharashtra</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>DevOps · Cloud Infra</dd>
            </div>
            <div>
              <dt>Current</dt>
              <dd>Akiyam Solution</dd>
            </div>
            <div>
              <dt>Target Roles</dt>
              <dd>{RECRUITER_SNAPSHOT.targetRoles}</dd>
            </div>
            <div>
              <dt>Experience</dt>
              <dd>{RECRUITER_SNAPSHOT.experience}</dd>
            </div>
            <div>
              <dt>Open for</dt>
              <dd>Full-time · Hybrid / Remote</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
};
