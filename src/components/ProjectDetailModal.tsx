import React, { useEffect } from 'react';
import {
  X,
  ArrowUpRight,
  Shield,
  Layers,
  Cpu,
  Activity,
  AlertCircle,
  CheckCircle2,
  GitBranch,
  Server
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectCaseStudy } from '../types';

interface ProjectDetailModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const { details } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        backgroundColor: 'rgba(5, 8, 17, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="editorial-card"
        style={{
          width: '100%',
          maxWidth: '920px',
          maxHeight: '90vh',
          backgroundColor: '#0A101D',
          border: '1px solid var(--border-medium)',
          borderRadius: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 30px 70px rgba(0, 0, 0, 0.9)',
          overflow: 'hidden',
          padding: 0
        }}
      >
        {/* Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.1rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'rgba(11, 18, 32, 0.95)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span className="editorial-badge">PROJECT {project.number}</span>
            <h3
              id="modal-project-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0
              }}
            >
              {project.title}
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{
                padding: '0.4rem 0.85rem',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <GithubIcon size={14} />
              <span>GITHUB</span>
              <ArrowUpRight size={13} />
            </a>

            <button
              onClick={onClose}
              aria-label="Close project details"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: 'none',
                color: '#ffffff',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div
          style={{
            padding: '1.75rem 2rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}
        >
          {/* Subtitle & Problem Statement Banner */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: 'var(--accent-soft)',
                fontWeight: 500,
                marginBottom: '0.4rem'
              }}
            >
              {project.subtitle}
            </div>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              {project.description}
            </p>
          </div>

          {/* Workflow Pipeline Trace */}
          <div
            style={{
              padding: '1rem 1.25rem',
              backgroundColor: 'rgba(15, 23, 42, 0.7)',
              borderRadius: '0.75rem',
              border: '1px solid var(--border-subtle)'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.65rem'
              }}
            >
              VERIFIED ENGINEERING WORKFLOW TRACE
            </div>

            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.45rem' }}>
              {project.workflowSteps.map((step, sIdx) => (
                <React.Fragment key={sIdx}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      padding: '0.25rem 0.65rem',
                      backgroundColor: 'rgba(37, 99, 235, 0.12)',
                      border: '1px solid var(--border-accent)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontWeight: 500
                    }}
                  >
                    {step}
                  </span>
                  {sIdx < project.workflowSteps.length - 1 && (
                    <span style={{ color: 'var(--accent-soft)', fontSize: '0.75rem', fontWeight: 700 }}>
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.technologies.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  padding: '0.2rem 0.55rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '4px',
                  color: 'var(--text-secondary)'
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Detailed Categorical Sections (Only render categories that apply) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {details.problem && (
              <div className="modal-section-card">
                <div className="modal-section-title">
                  <AlertCircle size={15} style={{ color: '#F59E0B' }} />
                  <span>PROBLEM</span>
                </div>
                <p className="modal-section-text">{details.problem}</p>
              </div>
            )}

            {details.approach && (
              <div className="modal-section-card">
                <div className="modal-section-title">
                  <GitBranch size={15} style={{ color: 'var(--accent-soft)' }} />
                  <span>APPROACH</span>
                </div>
                <p className="modal-section-text">{details.approach}</p>
              </div>
            )}

            {details.architecture && (
              <div className="modal-section-card">
                <div className="modal-section-title">
                  <Layers size={15} style={{ color: 'var(--accent-soft)' }} />
                  <span>ARCHITECTURE</span>
                </div>
                <p className="modal-section-text">{details.architecture}</p>
              </div>
            )}

            {details.cicd && (
              <div className="modal-section-card">
                <div className="modal-section-title">
                  <Cpu size={15} style={{ color: 'var(--accent-primary)' }} />
                  <span>CI/CD PIPELINE</span>
                </div>
                <p className="modal-section-text">{details.cicd}</p>
              </div>
            )}

            {details.infrastructure && (
              <div className="modal-section-card">
                <div className="modal-section-title">
                  <Server size={15} style={{ color: 'var(--accent-soft)' }} />
                  <span>INFRASTRUCTURE</span>
                </div>
                <p className="modal-section-text">{details.infrastructure}</p>
              </div>
            )}

            {details.security && (
              <div className="modal-section-card">
                <div className="modal-section-title">
                  <Shield size={15} style={{ color: '#10B981' }} />
                  <span>SECURITY & GATING</span>
                </div>
                <p className="modal-section-text">{details.security}</p>
              </div>
            )}

            {details.observability && (
              <div className="modal-section-card">
                <div className="modal-section-title">
                  <Activity size={15} style={{ color: 'var(--accent-soft)' }} />
                  <span>OBSERVABILITY & TELEMETRY</span>
                </div>
                <p className="modal-section-text">{details.observability}</p>
              </div>
            )}

            {details.result && (
              <div className="modal-section-card" style={{ borderLeft: '2px solid var(--status-healthy)' }}>
                <div className="modal-section-title">
                  <CheckCircle2 size={15} style={{ color: 'var(--status-healthy)' }} />
                  <span>RESULT & VALIDATION</span>
                </div>
                <p className="modal-section-text">{details.result}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .modal-section-card {
          padding: 1rem 1.25rem;
          background-color: rgba(15, 23, 42, 0.55);
          border: 1px solid var(--border-subtle);
          border-radius: 0.65rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .modal-section-title {
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .modal-section-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
        }
      `}</style>
    </div>
  );
};
