import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import {
  Layers,
  Cpu,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Terminal
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'greendot' | 'pulserds'>('all');

  const filteredProjects =
    activeTab === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.id === activeTab);

  return (
    <section id="work" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>Engineering Case Studies</span>
          </div>
          <h2 className="section-title">Production DevOps Architectures</h2>
          <p className="section-desc">
            Deep-dive case studies detailing real infrastructure implementations, Kubernetes orchestration,
            cost-aware cloud management, and automated continuous delivery.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              border: activeTab === 'all' ? '1px solid var(--crimson-pure)' : '1px solid var(--border-subtle)',
              backgroundColor: activeTab === 'all' ? 'var(--crimson-pure)' : 'var(--bg-card)',
              color: '#ffffff',
              transition: 'all 0.2s ease'
            }}
          >
            All Case Studies ({PROJECTS.length})
          </button>
          {PROJECTS.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setActiveTab(proj.id as any)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: activeTab === proj.id ? '1px solid var(--crimson-pure)' : '1px solid var(--border-subtle)',
                backgroundColor: activeTab === proj.id ? 'var(--crimson-pure)' : 'var(--bg-card)',
                color: '#ffffff',
                transition: 'all 0.2s ease'
              }}
            >
              {proj.number} // {proj.title}
            </button>
          ))}
        </div>

        {/* Case Studies List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="card-luxury"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
                gap: '3rem',
                padding: '3rem'
              }}
            >
              {/* Left Column: Problem, Overview & Implementation */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {/* Header */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      color: 'var(--text-accent)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    <span>CASE STUDY {project.number}</span>
                    <span style={{ color: 'var(--border-medium)' }}>/</span>
                    <span style={{ color: 'var(--text-secondary)' }}>{project.subtitle}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.75rem, 3vw, 2.4rem)',
                      fontWeight: 700,
                      lineHeight: 1.15,
                      color: 'var(--text-primary)'
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '1.05rem',
                      color: 'var(--text-secondary)',
                      marginTop: '0.85rem',
                      lineHeight: 1.6
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Problem Statement */}
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    borderLeft: '3px solid var(--crimson-pure)',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '0 0.75rem 0.75rem 0'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem'
                    }}
                  >
                    <AlertTriangle size={14} color="#ff6b6b" />
                    <span>The Challenge & Problem</span>
                  </div>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {project.problem}
                  </p>
                </div>

                {/* Technical Implementation Checklist */}
                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--text-primary)',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}
                  >
                    <Terminal size={15} color="var(--text-accent)" />
                    <span>Engineering Implementation Details</span>
                  </h4>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem'
                    }}
                  >
                    {project.implementation.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          fontSize: '0.925rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="#2ed573"
                          style={{ flexShrink: 0, marginTop: '0.2rem' }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: Architecture & Engineering Outcome */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.75rem',
                  justifyContent: 'space-between',
                  backgroundColor: 'rgba(10, 10, 15, 0.45)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '1.25rem',
                  padding: '2rem'
                }}
              >
                {/* Architecture Deep Dive */}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: 'var(--text-accent)',
                      textTransform: 'uppercase',
                      marginBottom: '0.65rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}
                  >
                    <Cpu size={14} />
                    <span>System Architecture</span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.architecture}
                  </p>

                  {/* Technologies Stack Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '0.35rem 0.8rem',
                          borderRadius: '9999px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-subtle)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--text-primary)',
                          fontWeight: 500
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quantifiable Engineering Outcome */}
                <div
                  style={{
                    backgroundColor: 'rgba(245, 8, 6, 0.08)',
                    border: '1px solid rgba(245, 8, 6, 0.25)',
                    borderRadius: '1rem',
                    padding: '1.35rem'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      marginBottom: '0.4rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem'
                    }}
                  >
                    <Activity size={14} color="#ff4747" />
                    <span>Verified Engineering Outcome</span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.925rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: 1.5,
                      fontWeight: 500
                    }}
                  >
                    {project.outcome}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .card-luxury {
            grid-template-columns: 1fr !important;
            padding: 2rem !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
