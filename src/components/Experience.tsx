import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="presentation-page section-block">
      <div className="page-inner">
        {/* Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>// 04 · PROFESSIONAL TIMELINE</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>EXPERIENCE & RELIABILITY</span>
          </div>
          <h2 className="editorial-title">Work Experience</h2>
          <p className="editorial-subtitle">
            Hands-on Kubernetes and cloud infrastructure internship combined with 2+ years of enterprise operational troubleshooting, RCA, and automation at Amazon.
          </p>
        </div>

        {/* Clean Vertical Pipeline Timeline (Linear, Clear, Unpretentious) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '980px' }}>
          {EXPERIENCES.map((exp, idx) => {
            const isCurrent = exp.period.includes('Present');

            return (
              <div
                key={exp.number}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  position: 'relative'
                }}
                className="timeline-row-responsive"
              >
                {/* Left Node & Connector */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flexShrink: 0,
                    width: '32px'
                  }}
                  className="timeline-spine-col"
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isCurrent ? 'var(--accent-primary)' : 'rgba(13, 21, 39, 0.9)',
                      border: isCurrent ? '2px solid var(--accent-soft)' : '1px solid var(--border-medium)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: isCurrent ? '#FFFFFF' : 'var(--text-secondary)',
                      boxShadow: isCurrent ? '0 0 14px var(--accent-glow)' : 'none'
                    }}
                  >
                    {exp.number}
                  </div>
                  {idx !== EXPERIENCES.length - 1 && (
                    <div
                      style={{
                        width: '2px',
                        flex: 1,
                        backgroundColor: 'var(--border-subtle)',
                        margin: '6px 0'
                      }}
                    />
                  )}
                </div>

                {/* Main Content Card */}
                <div
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(13, 21, 39, 0.75)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '1rem',
                    padding: '1.6rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {/* Top Header Row */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.15rem',
                            fontWeight: 700,
                            color: '#FFFFFF',
                            margin: 0
                          }}
                        >
                          {exp.company}
                        </h3>

                        {exp.badge && (
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.66rem',
                              fontWeight: 600,
                              padding: '0.15rem 0.55rem',
                              borderRadius: '9999px',
                              backgroundColor: isCurrent ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.05)',
                              border: isCurrent ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                              color: isCurrent ? 'var(--accent-soft)' : 'var(--text-secondary)'
                            }}
                          >
                            {exp.badge}
                          </span>
                        )}
                      </div>

                      <div
                        style={{
                          fontSize: '0.92rem',
                          fontWeight: 600,
                          color: 'var(--accent-soft)',
                          marginTop: '0.2rem'
                        }}
                      >
                        {exp.role}
                      </div>
                    </div>

                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem'
                      }}
                    >
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                      <span>•</span>
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Bullets List */}
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    {exp.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: '0.55rem',
                          fontSize: '0.86rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.55
                        }}
                      >
                        <span style={{ color: 'var(--accent-soft)', fontWeight: 700, flexShrink: 0 }}>—</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
