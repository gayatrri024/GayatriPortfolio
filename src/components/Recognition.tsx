import React from 'react';
import { Award, ShieldCheck, GraduationCap, CheckCircle2 } from 'lucide-react';
import { AWARDS, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export const Recognition: React.FC = () => {
  return (
    <section id="recognition" className="presentation-page section-block">
      <div className="page-inner">
        {/* Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>// 05 · CREDENTIALS & ACHIEVEMENTS</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>AWARDS & EDUCATION</span>
          </div>
          <h2 className="editorial-title">Honors, Education & Certifications</h2>
          <p className="editorial-subtitle">
            Competitive project hackathons, internal operational recognitions, and continuous cloud certifications.
          </p>
        </div>

        {/* 2-Column Clean Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: '2rem',
            alignItems: 'start',
            width: '100%'
          }}
          className="recognition-grid-responsive"
        >
          {/* Left: Honors & Competitive Recognition */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent-soft)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                letterSpacing: '0.06em'
              }}
            >
              <Award size={15} />
              <span>HONORS & COMPETITIVE AWARDS</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {AWARDS.map((item) => (
                <div
                  key={item.num}
                  style={{
                    backgroundColor: 'rgba(13, 21, 39, 0.75)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '0.75rem',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.35rem',
                    transition: 'border-color 0.2s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                  className="honor-card-hover"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF' }}>
                      {item.title}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        color: 'var(--accent-soft)'
                      }}
                    >
                      {item.award}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {item.org}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education & Certifications */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Certifications Block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  letterSpacing: '0.06em'
                }}
              >
                <ShieldCheck size={15} />
                <span>CERTIFICATIONS & CONTINUOUS LEARNING</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {CERTIFICATIONS.map((cert) => {
                  const isOngoing = cert.status === 'ONGOING';

                  return (
                    <div
                      key={cert.name}
                      style={{
                        backgroundColor: 'rgba(13, 21, 39, 0.75)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '0.75rem',
                        padding: '1rem 1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.35rem',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.92rem', fontWeight: 700, color: '#FFFFFF' }}>
                            {cert.name}
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {cert.code}
                          </div>
                        </div>

                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.66rem',
                            fontWeight: 700,
                            padding: '0.15rem 0.5rem',
                            borderRadius: '4px',
                            backgroundColor: isOngoing ? 'rgba(56, 189, 248, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                            color: isOngoing ? 'var(--accent-soft)' : '#34D399',
                            border: isOngoing ? '1px solid var(--border-accent)' : '1px solid rgba(16, 185, 129, 0.3)',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {cert.status}
                        </span>
                      </div>

                      {cert.detail && (
                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: '0.2rem 0 0 0' }}>
                          {cert.detail}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Factual Integrity Note */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 0.85rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(56, 189, 248, 0.05)',
                  border: '1px solid rgba(56, 189, 248, 0.15)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-secondary)'
                }}
              >
                <CheckCircle2 size={13} style={{ color: 'var(--accent-soft)', flexShrink: 0 }} />
                <span>Commitment: AWS CCP is active ongoing preparation (not claimed as completed).</span>
              </div>
            </div>

            {/* Education Block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  letterSpacing: '0.06em'
                }}
              >
                <GraduationCap size={15} />
                <span>FORMAL EDUCATION</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(13, 21, 39, 0.75)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0.75rem',
                      padding: '1rem 1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.25rem'
                    }}
                  >
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#FFFFFF' }}>
                      {edu.degree}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                      {edu.institution}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--accent-soft)', marginTop: '0.15rem' }}>
                      GPA: {edu.gpa} • {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .recognition-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        .honor-card-hover:hover {
          border-color: var(--border-accent) !important;
        }
      `}</style>
    </section>
  );
};
