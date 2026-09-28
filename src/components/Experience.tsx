import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Briefcase size={14} />
            <span>Professional Career Journey</span>
          </div>
          <h2 className="section-title">Experience & Systems Impact</h2>
          <p className="section-desc">
            A track record spanning Amazon scale operations, root-cause troubleshooting, and hands-on Kubernetes,
            OpenTofu/Terraform, and CI/CD engineering at Akiyam Solution.
          </p>
        </div>

        {/* Experience Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              className="card-luxury"
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 320px) minmax(0, 1fr)',
                gap: '2.5rem',
                position: 'relative'
              }}
            >
              {/* Left Column: Role, Company, Period, Badge */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  borderRight: '1px solid var(--border-subtle)',
                  paddingRight: '1.5rem'
                }}
                className="exp-sidebar"
              >
                {exp.badge && (
                  <div>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        backgroundColor: 'var(--crimson-subtle)',
                        color: 'var(--text-accent)',
                        border: '1px solid var(--border-accent)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 700
                      }}
                    >
                      {exp.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      lineHeight: 1.25,
                      marginBottom: '0.35rem'
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: '#ffffff'
                    }}
                  >
                    {exp.company}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={14} color="var(--text-accent)" />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={14} color="var(--text-accent)" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {exp.note && (
                  <div
                    style={{
                      marginTop: 'auto',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.75rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45,
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.4rem'
                    }}
                  >
                    <Sparkles size={14} color="var(--rose-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{exp.note}</span>
                  </div>
                )}
              </div>

              {/* Right Column: Responsibilities List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    marginBottom: '0.25rem'
                  }}
                >
                  Core Engineering & Operational Responsibilities
                </h4>

                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.9rem'
                  }}
                >
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.95rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.55
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--crimson-pure)',
                          boxShadow: '0 0 8px var(--crimson-pure)',
                          flexShrink: 0,
                          marginTop: '0.55rem'
                        }}
                      />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
