import React from 'react';
import { X, Printer } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        backgroundColor: 'rgba(5, 10, 20, 0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="editorial-card"
        style={{
          width: '100%',
          maxWidth: '880px',
          maxHeight: '90vh',
          backgroundColor: '#0F172A',
          border: '1px solid var(--border-medium)',
          borderRadius: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.85)',
          overflow: 'hidden',
          padding: 0
        }}
      >
        {/* Modal Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.1rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'rgba(11, 18, 32, 0.85)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="editorial-badge">CURRICULUM VITAE</span>
            <h3
              id="resume-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0
              }}
            >
              Gayatri Ashok Shinde — Resume
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handlePrint}
              aria-label="Print or save as PDF"
              className="btn btn-secondary"
              style={{
                padding: '0.4rem 0.85rem',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <Printer size={14} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close resume preview"
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
                cursor: 'pointer'
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Resume Content */}
        <div
          style={{
            padding: '2rem 2.5rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem'
          }}
        >
          {/* Header Info */}
          <div
            style={{
              paddingBottom: '1.25rem',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.85rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '0.2rem'
              }}
            >
              {PERSONAL_INFO.name.toUpperCase()}
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--accent-soft)',
                marginBottom: '0.6rem'
              }}
            >
              {PERSONAL_INFO.title} • {PERSONAL_INFO.focusAreas}
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}
            >
              // PROFESSIONAL SUMMARY
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience Section */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '1rem'
              }}
            >
              // EXPERIENCE
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {exp.role} — <span style={{ color: 'var(--accent-soft)' }}>{exp.company}</span>
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {exp.period} | {exp.location}
                    </span>
                  </div>

                  <ul style={{ paddingLeft: '1.2rem', marginTop: '0.35rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}
            >
              // EDUCATION
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                      {edu.degree}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      {edu.institution}
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-soft)', textAlign: 'right' }}>
                    <div>GPA: {edu.gpa}</div>
                    <div style={{ color: 'var(--text-muted)' }}>{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.75rem'
              }}
            >
              // HONORS & RECOGNITION
            </h2>
            <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {ACHIEVEMENTS.map((ach, idx) => (
                <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{ach.title}</strong> — {ach.award}: {ach.details}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
