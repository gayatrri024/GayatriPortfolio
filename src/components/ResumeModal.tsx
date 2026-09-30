import React from 'react';
import { X, Printer, MapPin, Mail, Phone, Award } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, ACHIEVEMENTS, CERTIFICATIONS } from '../data/portfolioData';

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
        backgroundColor: 'rgba(5, 8, 17, 0.9)',
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
          maxWidth: '860px',
          maxHeight: '90vh',
          backgroundColor: '#090E1A',
          border: '1px solid var(--border-medium)',
          borderRadius: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9)',
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
            padding: '1rem 1.75rem',
            borderBottom: '1px solid var(--border-subtle)',
            backgroundColor: 'rgba(11, 18, 32, 0.95)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span className="editorial-badge">CURRICULUM VITAE</span>
            <h3
              id="resume-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: '#ffffff',
                margin: 0
              }}
            >
              Gayatri Shinde — Curriculum Vitae
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={handlePrint}
              aria-label="Print or save as PDF"
              className="btn btn-secondary"
              style={{
                padding: '0.35rem 0.85rem',
                fontSize: '0.76rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <Printer size={13} />
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
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          style={{
            padding: '2rem 2.25rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.6rem'
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
                fontSize: '1.8rem',
                fontWeight: 800,
                color: '#ffffff',
                margin: '0 0 0.25rem 0',
                textTransform: 'uppercase'
              }}
            >
              {PERSONAL_INFO.name}
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.86rem',
                fontWeight: 600,
                color: 'var(--accent-soft)',
                margin: '0 0 0.6rem 0'
              }}
            >
              {PERSONAL_INFO.title}
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Mail size={12} /> {PERSONAL_INFO.email}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Phone size={12} /> {PERSONAL_INFO.phone}
              </span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <MapPin size={12} /> {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.45rem'
              }}
            >
              // PROFESSIONAL SUMMARY
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.85rem'
              }}
            >
              // WORK EXPERIENCE
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {EXPERIENCES.map((exp) => (
                <div key={exp.number} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)', margin: 0 }}>
                      {exp.role} — <span style={{ color: 'var(--accent-soft)' }}>{exp.company}</span>
                    </h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                      {exp.period} | {exp.location}
                    </span>
                  </div>

                  <ul style={{ paddingLeft: '1.2rem', marginTop: '0.25rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {exp.bullets.map((r, rIdx) => (
                      <li key={rIdx} style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
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
                fontSize: '0.74rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.65rem'
              }}
            >
              // EDUCATION
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {EDUCATION.map((edu, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.88rem' }}>
                      {edu.degree}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {edu.institution}
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--accent-soft)', textAlign: 'right' }}>
                    <div>GPA: {edu.gpa}</div>
                    <div style={{ color: 'var(--text-muted)' }}>{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.65rem'
              }}
            >
              // CREDENTIALS & CONTINUOUS LEARNING
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {CERTIFICATIONS.map((c, idx) => (
                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>{c.name}</span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>({c.code})</span>
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      backgroundColor: c.status === 'ONGOING' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.05)',
                      color: c.status === 'ONGOING' ? 'var(--accent-soft)' : 'var(--text-secondary)',
                      border: c.status === 'ONGOING' ? '1px solid var(--border-accent)' : 'none'
                    }}
                  >
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Honors & Recognition */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.65rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <Award size={13} />
              <span>// HONORS & RECOGNITION</span>
            </h2>
            <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', margin: 0 }}>
              {ACHIEVEMENTS.map((ach, idx) => (
                <li key={idx} style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{ach.title}</strong> — {ach.award}: {ach.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
