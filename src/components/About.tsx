import React from 'react';
import { EDUCATION, ACHIEVEMENTS, CERTIFICATIONS, PERSONAL_INFO } from '../data/portfolioData';
import {
  User,
  GraduationCap,
  Award,
  BookOpen
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <User size={14} />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">Career Progression & Credentials</h2>
          <p className="section-desc">
            Bridging operational excellence at Amazon scale with deep technical engineering in Kubernetes,
            cloud automation, and Infrastructure as Code.
          </p>
        </div>

        {/* Top Grid: Narrative & Education */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.25fr) minmax(0, 1fr)',
            gap: '2.5rem',
            marginBottom: '3.5rem'
          }}
          className="about-top-grid"
        >
          {/* Authentic Career Narrative */}
          <div
            className="card-luxury"
            style={{
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              position: 'relative'
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-accent)'
              }}
            >
              // The Narrative
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                lineHeight: 1.25
              }}
            >
              From Amazon Operational Discipline to Production DevOps
            </h3>

            <div
              style={{
                fontSize: '1.025rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                display: 'flex',
                flexDirection: 'column',
                gap: '1.15rem'
              }}
            >
              <p>
                I started my professional journey at Amazon, working across technical support, operations and
                infrastructure-related problem solving. That experience developed my approach to troubleshooting,
                root-cause analysis, operational discipline and working with systems at scale.
              </p>
              <p>
                I am now focused on DevOps and Infrastructure Engineering, building hands-on experience with AWS,
                Kubernetes, Infrastructure as Code, CI/CD, observability and automation.
              </p>
              <p style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                My focus is on making infrastructure reproducible, deployments reliable, and operational systems
                easier to understand and maintain.
              </p>
            </div>

            <div
              style={{
                marginTop: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  Location:
                </span>
                <p style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 600 }}>{PERSONAL_INFO.location}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  Current Focus:
                </span>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-accent)', fontWeight: 600 }}>
                  AWS • Kubernetes • Terraform
                </p>
              </div>
            </div>
          </div>

          {/* Education & Academic Rigor */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              <GraduationCap size={18} color="var(--text-accent)" />
              <span>Academic Foundation</span>
            </div>

            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="card-luxury"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.65rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {edu.period}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#2ed573',
                      backgroundColor: 'rgba(46, 213, 115, 0.1)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(46, 213, 115, 0.25)'
                    }}
                  >
                    GPA: {edu.gpa}
                  </span>
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)'
                  }}
                >
                  {edu.degree}
                </h4>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{edu.institution}</p>
              </div>
            ))}

            {/* Certifications Box */}
            <div
              className="card-luxury"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                <BookOpen size={16} color="var(--rose-gold)" />
                <span>Certifications & Specialized Credentials</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {CERTIFICATIONS.map((cert, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '0.65rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                        {cert.name}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {cert.issuer} {cert.code ? `• ${cert.code}` : ''}
                      </div>
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                        backgroundColor:
                          cert.status === 'Completed'
                            ? 'rgba(46, 213, 115, 0.1)'
                            : cert.status === 'Ongoing'
                            ? 'rgba(255, 177, 66, 0.12)'
                            : 'rgba(255, 255, 255, 0.06)',
                        color:
                          cert.status === 'Completed'
                            ? '#2ed573'
                            : cert.status === 'Ongoing'
                            ? '#ffb142'
                            : 'var(--text-secondary)',
                        border:
                          cert.status === 'Completed'
                            ? '1px solid rgba(46, 213, 115, 0.25)'
                            : cert.status === 'Ongoing'
                            ? '1px solid rgba(255, 177, 66, 0.3)'
                            : '1px solid var(--border-subtle)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {cert.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}
          >
            <Award size={18} color="var(--text-accent)" />
            <span>Honors & Recognitions</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {ACHIEVEMENTS.map((ach, idx) => (
              <div
                key={idx}
                className="card-luxury"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--rose-gold)',
                      backgroundColor: 'rgba(248, 194, 145, 0.1)',
                      border: '1px solid rgba(248, 194, 145, 0.25)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px'
                    }}
                  >
                    {ach.badge || 'Honor'}
                  </span>
                </div>

                <div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)'
                    }}
                  >
                    {ach.title}
                  </h4>
                  <div
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--text-accent)',
                      marginTop: '0.2rem'
                    }}
                  >
                    {ach.award}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    marginTop: 'auto'
                  }}
                >
                  {ach.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
