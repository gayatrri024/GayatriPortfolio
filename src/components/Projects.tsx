import React, { useState } from 'react';
import { ArrowUpRight, GitBranch, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const current = PROJECTS[selectedIdx] || PROJECTS[0];

  // Specific workflow stages for GreenDot storytelling
  const greendotWorkflow = [
    { step: '01', name: 'SOURCE', tool: 'GitHub Repo' },
    { step: '02', name: 'CI / TEST', tool: 'GitHub Actions' },
    { step: '03', name: 'BUILD', tool: 'Docker Build' },
    { step: '04', name: 'CONTAINER', tool: 'Linux OCI' },
    { step: '05', name: 'REGISTRY', tool: 'Docker Hub' },
    { step: '06', name: 'KUBERNETES', tool: 'EKS / Helm / K8s' },
    { step: '07', name: 'MONITORING', tool: 'Prometheus & Grafana' }
  ];

  // Specific workflow stages for PulseRDS storytelling
  const pulserdsWorkflow = [
    { step: '01', name: 'TERRAFORM IAC', tool: 'Declarative Code' },
    { step: '02', name: 'AWS RDS', tool: 'Managed DB' },
    { step: '03', name: 'PARAM UPGRADE', tool: 'Zero-Downtime Test' },
    { step: '04', name: 'HEALTH AUDIT', tool: 'Endpoint Validation' },
    { step: '05', name: 'COST TELEMETRY', tool: 'Cost Explorer & Budgets' },
    { step: '06', name: 'AUTOMATION', tool: 'Python / Bash Scripts' }
  ];

  const activeWorkflow = current.id === 'greendot' ? greendotWorkflow : pulserdsWorkflow;

  return (
    <section id="projects" className="presentation-page">
      <div className="page-inner page-content-anim">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>04 // PROJECTS</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>ENGINEERING WORKFLOWS</span>
          </div>

          <div className="projects-header-row">
            <div>
              <h2 className="editorial-title">Featured Projects</h2>
              <p className="editorial-subtitle">
                Production infrastructure workflows, automated CI/CD pipelines, and cost-aware cloud database operations.
              </p>
            </div>

            {/* Quick Project Selector Tabs (Strictly 2 Projects) */}
            <div className="project-switcher">
              {PROJECTS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`project-tab-btn ${selectedIdx === idx ? 'active' : ''}`}
                  aria-label={`Select Project ${p.number} ${p.name}`}
                >
                  <span className="tab-num">{p.number}</span>
                  <span className="tab-name">{p.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Editorial Showcase Layout (No heavy cards or bloated boxes) */}
        <div className="project-editorial-layout">
          {/* Top Bar: Project Identifier, Subtitle & GitHub Link */}
          <div className="project-editorial-top">
            <div className="project-editorial-titles">
              <span className="project-num-label">PROJECT {current.number} // {current.id.toUpperCase()}</span>
              <h3 className="project-display-title">{current.name}</h3>
              <p className="project-display-subtitle">{current.subtitle}</p>
            </div>

            <div className="project-external-actions">
              <a
                href={current.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github-link"
              >
                <GithubIcon size={16} />
                <span>View Repository</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Workflow Pipeline Flowchart */}
          <div className="project-workflow-section">
            <div className="workflow-title-label">
              <GitBranch size={13} style={{ color: 'var(--accent-soft)' }} />
              <span>ENGINEERING PIPELINE WORKFLOW</span>
            </div>

            <div className="workflow-pipeline-strip">
              {activeWorkflow.map((stage, sIdx) => {
                const isLast = sIdx === activeWorkflow.length - 1;
                return (
                  <React.Fragment key={stage.step}>
                    <div className="workflow-node">
                      <span className="workflow-node-step">{stage.step}</span>
                      <span className="workflow-node-name">{stage.name}</span>
                      <span className="workflow-node-tool">{stage.tool}</span>
                    </div>
                    {!isLast && <div className="workflow-arrow">→</div>}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Two-Column Engineering Breakdown */}
          <div className="project-breakdown-grid">
            {/* Left: Engineering Implementation Highlights */}
            <div className="project-highlights-col">
              <div className="breakdown-col-header">
                <Terminal size={14} style={{ color: 'var(--accent-soft)' }} />
                <span>TECHNICAL EXECUTION</span>
              </div>
              <ul className="project-bullets-list">
                {current.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="project-bullet-row">
                    <span className="bullet-point-dash">—</span>
                    <span className="bullet-point-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Technologies & Architecture Scope */}
            <div className="project-tech-col">
              <div className="breakdown-col-header">
                <CheckCircle2 size={14} style={{ color: 'var(--accent-soft)' }} />
                <span>KEY TECHNOLOGIES</span>
              </div>

              <div className="project-tech-list">
                {current.technologies.map((tech) => (
                  <div key={tech} className="tech-editorial-item">
                    <span className="tech-item-dot">•</span>
                    <span className="tech-item-name">{tech}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Switch Hint */}
              <div className="project-switch-hint">
                <span className="hint-label">NEXT PROJECT:</span>
                <button
                  onClick={() => setSelectedIdx(selectedIdx === 0 ? 1 : 0)}
                  className="hint-link-btn"
                >
                  {selectedIdx === 0 ? '02 PulseRDS →' : '01 GreenDot →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
