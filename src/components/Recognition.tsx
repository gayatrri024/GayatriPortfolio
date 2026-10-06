import React from 'react';
import { Award, ShieldCheck, GraduationCap, Trophy, CheckCircle2, Clock } from 'lucide-react';
import { AWARDS, CERTIFICATIONS, EDUCATION } from '../data/portfolioData';

export const Recognition: React.FC = () => {
  return (
    <section id="recognition" className="presentation-page section-block">
      <div className="page-inner">
        {/* Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>// 06 · RECOGNITION & CREDENTIALS</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>AWARDS & EDUCATION</span>
          </div>
          <h2 className="editorial-title">Honors, Certifications & Education</h2>
          <p className="editorial-subtitle">
            Hackathon achievements, enterprise operational recognitions at Amazon, ongoing cloud certifications, and academic background.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 0.95fr)',
            gap: '2.5rem',
            alignItems: 'start',
            width: '100%'
          }}
          className="recognition-grid-responsive"
        >
          {/* Left Column: Honors & Competitive Recognition */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {AWARDS.map((item) => {
                const isChampion = item.isStrongest;

                return (
                  <div
                    key={item.num}
                    style={{
                      backgroundColor: isChampion ? 'rgba(37, 99, 235, 0.12)' : 'rgba(13, 21, 39, 0.75)',
                      border: isChampion ? '1.5px solid rgba(56, 189, 248, 0.5)' : '1px solid var(--border-subtle)',
                      borderRadius: '0.85rem',
                      padding: isChampion ? '1.35rem 1.5rem' : '1.1rem 1.35rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                      transition: 'border-color 0.2s ease',
                      backdropFilter: 'blur(10px)',
                      boxShadow: isChampion ? '0 10px 30px -10px rgba(37, 99, 235, 0.3)' : 'none'
                    }}
                    className="honor-card-hover"
                  >
                    {/* Top Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        {isChampion && <Trophy size={16} style={{ color: '#FBBF24' }} />}
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: isChampion ? '1.05rem' : '0.94rem',
                            fontWeight: 800,
                            color: '#FFFFFF'
                          }}
                        >
                          {item.title}
                        </span>
                      </div>

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: isChampion ? '#38BDF8' : 'var(--accent-soft)',
                          backgroundColor: isChampion ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                          border: isChampion ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid var(--border-subtle)',
                          padding: '0.15rem 0.55rem',
                          borderRadius: '9999px'
                        }}
                      >
                        {item.award}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.76rem', color: 'var(--accent-soft)', fontFamily: 'var(--font-mono)' }}>
                      {item.org}
                    </div>

                    <div style={{ fontSize: '0.86rem', color: isChampion ? '#F1F5F9' : 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {item.detail}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Certifications & Compact Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {CERTIFICATIONS.map((cert) => {
                  const isInProgress = cert.status === 'IN PROGRESS';

                  return (
                    <div
                      key={cert.name}
                      style={{
                        backgroundColor: 'rgba(13, 21, 39, 0.75)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '0.85rem',
                        padding: '1.1rem 1.35rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.4rem',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <div>
                          <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.94rem', fontWeight: 700, color: '#FFFFFF' }}>
                            {cert.name}
                          </div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                            {cert.code}
                          </div>
                        </div>

                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            padding: '0.18rem 0.55rem',
                            borderRadius: '4px',
                            backgroundColor: isInProgress ? 'rgba(245, 158, 11, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                            color: isInProgress ? '#FBBF24' : '#34D399',
                            border: isInProgress ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid rgba(16, 185, 129, 0.3)',
                            whiteSpace: 'nowrap',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem'
                          }}
                        >
                          {isInProgress && <Clock size={11} />}
                          <span>{cert.status}</span>
                        </span>
                      </div>

                      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                        {cert.detail}
                      </p>
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
                <span>AWS CCP is actively in progress with mock tests; not claimed as completed.</span>
              </div>
            </div>

            {/* Compact Education Block (Compact footprint: experience dominates) */}
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
                <span>EDUCATION</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {EDUCATION.map((edu, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: 'rgba(13, 21, 39, 0.65)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '0.75rem',
                      padding: '0.85rem 1.15rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.2rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#FFFFFF' }}>
                        {edu.degree}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-soft)', fontWeight: 600 }}>
                        GPA: {edu.gpa}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {edu.institution} · <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{edu.period}</span>
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
          border-color: rgba(56, 189, 248, 0.45) !important;
        }
      `}</style>
    </section>
  );
};
