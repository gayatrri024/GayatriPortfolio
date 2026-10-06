import React, { useState } from 'react';
import { PROJECTS, DetailedProject } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState<DetailedProject | null>(null);

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Kubernetes', value: 'kubernetes' },
    { label: 'Cloud IaC', value: 'iac' },
    { label: 'CI/CD', value: 'cicd' }
  ];

  const getCategories = (id: string) => {
    if (id === 'greendot') return 'kubernetes cicd all';
    if (id === 'pulserds') return 'iac all';
    return 'all';
  };

  return (
    <section className="section projects" id="projects">
      <header className="section__head reveal">
        <h2 className="section__title">Projects</h2>
        <span className="section__rule" aria-hidden="true" />
      </header>

      {/* Filter Tabs */}
      <div className="filters reveal" role="tablist" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter ${activeFilter === f.value ? 'is-active' : ''}`}
            onClick={() => setActiveFilter(f.value)}
            role="tab"
            aria-selected={activeFilter === f.value}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects__grid" id="projectsGrid">
        {PROJECTS.map((proj) => {
          const categories = getCategories(proj.id);
          const isVisible = activeFilter === 'all' || categories.includes(activeFilter);

          return (
            <article
              key={proj.id}
              className={`project reveal ${!isVisible ? 'is-hidden' : ''}`}
              data-category={categories}
            >
              {/* Thumbnail / Architecture Preview Header */}
              <div className="project__thumb">
                <div className="project__thumb-fallback" style={{ display: 'flex' }}>
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: 'var(--accent)' }}
                  >
                    {proj.id === 'greendot' ? (
                      <>
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </>
                    ) : (
                      <>
                        <ellipse cx="12" cy="5" rx="9" ry="3" />
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      </>
                    )}
                  </svg>
                  <span>{proj.name} // Case Study</span>
                </div>
              </div>

              {/* Project Body */}
              <div className="project__body">
                <p className="project__kicker">{proj.badge}</p>
                <h3 className="project__title">{proj.name} — {proj.subtitle}</h3>
                <p className="project__desc">{proj.problem}</p>

                {/* Architecture Pipeline Flow Strip */}
                <div className="project__workflow" title="Architecture Pipeline Flow">
                  {proj.workflow.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span>{step}</span>
                      {idx !== proj.workflow.length - 1 && (
                        <span className="project__workflow-arrow">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Tech Pills */}
                <ul className="project__tech" aria-label="Technologies used">
                  {proj.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>

                {/* Links */}
                <div className="project__links">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project__link"
                    aria-label={`View ${proj.name} source repository`}
                  >
                    {proj.hasDedicatedRepo ? 'Repository ↗' : 'GitHub Profile ↗'}
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(proj)}
                    className="project__link"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    Engineering Details ↗
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Engineering Details Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(5, 8, 17, 0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModalProject(null);
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--panel)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              maxWidth: '840px',
              width: '100%',
              maxHeight: '88vh',
              overflowY: 'auto',
              padding: '2rem',
              boxShadow: 'var(--shadow)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.4rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '.75rem', color: 'var(--accent)', textTransform: 'uppercase' }}>
                  {activeModalProject.badge}
                </p>
                <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', color: 'var(--text)', margin: '.2rem 0' }}>
                  {activeModalProject.name} — {activeModalProject.subtitle}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="btn btn--ghost"
                style={{ padding: '.4rem .8rem', fontSize: '.8rem' }}
                aria-label="Close modal"
              >
                Close ✕
              </button>
            </div>

            {/* Architecture Flow */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '.85rem', color: 'var(--muted)', marginBottom: '.5rem' }}>
                // ARCHITECTURE WORKFLOW
              </h4>
              <div className="project__workflow" style={{ padding: '.8rem 1rem' }}>
                {activeModalProject.workflow.map((step, idx) => (
                  <React.Fragment key={step}>
                    <span>{step}</span>
                    {idx !== activeModalProject.workflow.length - 1 && (
                      <span className="project__workflow-arrow">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Implementation Highlights */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '.85rem', color: 'var(--muted)', marginBottom: '.5rem' }}>
                // IMPLEMENTATION HIGHLIGHTS
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '.45rem' }}>
                {activeModalProject.implementation.map((bullet, idx) => (
                  <li key={idx} style={{ fontSize: '.9rem', color: 'var(--muted)', paddingLeft: '1.2rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {/* Engineering Decisions (if GreenDot) */}
            {activeModalProject.engineeringDecisions && (
              <div>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '.85rem', color: 'var(--muted)', marginBottom: '.65rem' }}>
                  // ENGINEERING DECISIONS & TRADE-OFFS
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '.85rem' }}>
                  {activeModalProject.engineeringDecisions.map((dec) => (
                    <div
                      key={dec.topic}
                      style={{
                        background: 'var(--bg-soft)',
                        border: '1px solid var(--border)',
                        borderRadius: '8px',
                        padding: '.85rem'
                      }}
                    >
                      <strong style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '.78rem', color: 'var(--text)', marginBottom: '.25rem' }}>
                        {dec.topic}
                      </strong>
                      <p style={{ fontSize: '.82rem', color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>
                        {dec.reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What I Learned */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '.85rem', color: 'var(--muted)', marginBottom: '.35rem' }}>
                // WHAT I LEARNED
              </h4>
              <p style={{ fontSize: '.9rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                {activeModalProject.whatILearned}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                style={{ fontSize: '.85rem' }}
              >
                Open on GitHub ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
