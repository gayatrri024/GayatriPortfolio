import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="presentation-page">
      <div className="page-inner page-content-anim">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>03 // CAREER</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>PROFESSIONAL TIMELINE</span>
          </div>
          <h2 className="editorial-title">Work Experience</h2>
          <p className="editorial-subtitle">
            Hands-on DevOps engineering and Amazon-scale cloud operations track record.
          </p>
        </div>

        {/* Editorial Vertical Timeline */}
        <div
          style={{
            position: 'relative',
            paddingLeft: '1.5rem',
            borderLeft: '1.5px solid var(--border-subtle)',
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
            maxWidth: '1050px'
          }}
          className="experience-timeline"
        >
          {/* 01: Akiyam Solution Private Limited */}
          <div style={{ position: 'relative' }}>
            {/* Timeline Node */}
            <div
              style={{
                position: 'absolute',
                left: '-1.95rem',
                top: '0.35rem',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-primary)',
                boxShadow: '0 0 10px var(--accent-primary)',
                border: '2px solid var(--bg-primary)'
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent-soft)',
                    fontWeight: 600
                  }}
                >
                  01
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  Akiyam Solution Private Limited
                </h3>
                <span className="editorial-badge">CURRENT ROLE</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  flexWrap: 'wrap',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)'
                }}
              >
                <span style={{ color: '#ffffff', fontWeight: 600 }}>DevOps & Infrastructure Engineer Intern</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)' }}>
                  <MapPin size={13} /> Pune
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)' }}>
                  <Calendar size={13} /> March 2026 – Present
                </span>
              </div>

              {/* Bullets */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0.75rem 0 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.55rem'
                }}
              >
                {[
                  'Managed infrastructure and deployment for GSA-SIP (GeoSim Intelligence Platform), a Kubernetes-based platform running 50+ microservices across staging and production environments.',
                  'Supported AWS cloud infrastructure using OpenTofu/Terraform, Docker, Helm, and Kustomize across staging and production.',
                  'Maintained Jenkins CI/CD pipelines for code validation, security checks, container builds, and deployment workflows.',
                  'Monitored application and infrastructure health using Prometheus and Grafana, investigating logs, alerts, and deployment issues.',
                  'Troubleshot infrastructure, networking, CI/CD, and Kubernetes issues, performing root-cause analysis and documenting resolutions.',
                  'Automated recurring infrastructure and operational tasks using scripting and DevOps tooling to improve deployment and troubleshooting workflows.',
                  'Used Cursor and Claude to accelerate code understanding, scripting, troubleshooting, and infrastructure tasks, while reviewing and validating outputs before implementation.'
                ].map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55
                    }}
                  >
                    <span style={{ color: 'var(--accent-primary)', marginTop: '0.35rem', flexShrink: 0 }}>•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Subtle Tech Tags */}
              <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginTop: '0.6rem' }}>
                {['Kubernetes', 'AWS', 'OpenTofu/Terraform', 'Helm', 'Kustomize', 'Docker', 'Jenkins', 'Prometheus', 'Grafana'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '0.18rem 0.55rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '4px',
                      color: 'var(--text-muted)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 02: Amazon Development Center — Abuse Prevention */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                left: '-1.95rem',
                top: '0.35rem',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--text-muted)',
                border: '2px solid var(--bg-primary)'
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600
                  }}
                >
                  02
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  Amazon Development Center
                </h3>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  2+ YEARS AT AMAZON
                </span>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  flexWrap: 'wrap',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)'
                }}
              >
                <span style={{ color: '#ffffff', fontWeight: 600 }}>
                  Operations Support Associate — Consumer Abuse Prevention
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)' }}>
                  <MapPin size={13} /> Pune
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)' }}>
                  <Calendar size={13} /> June 2024 – March 2026
                </span>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0.75rem 0 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.55rem'
                }}
              >
                {[
                  'Served as SME, supporting new hires with process training, knowledge sharing, and guidance on internal workflows.',
                  'Managed high-volume operational queues while maintaining SLA compliance and structured escalation workflows across global marketplaces.',
                  'Investigated recurring processing issues using RCA and partnered with cross-functional teams to implement long-term process improvements.',
                  'Used internal monitoring and operational tools to identify processing bottlenecks and reduce high-impact operational risks.'
                ].map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55
                    }}
                  >
                    <span style={{ color: 'var(--accent-primary)', marginTop: '0.35rem', flexShrink: 0 }}>•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 03: Amazon Development Center — Digital Devices & Alexa */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                left: '-1.95rem',
                top: '0.35rem',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--text-muted)',
                border: '2px solid var(--bg-primary)'
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600
                  }}
                >
                  03
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    margin: 0
                  }}
                >
                  Amazon Development Center
                </h3>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  flexWrap: 'wrap',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)'
                }}
              >
                <span style={{ color: '#ffffff', fontWeight: 600 }}>
                  Digital Devices & Alexa Support Associate
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)' }}>
                  <MapPin size={13} /> Pune
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)' }}>
                  <Calendar size={13} /> September 2023 – February 2024
                </span>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0.75rem 0 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.55rem'
                }}
              >
                {[
                  'Designed and automated weekly reports using Excel Macros and Pivot Tables, reducing manual tracking effort by 60%.',
                  'Troubleshot device and software configuration issues, identifying root causes and managing ticket lifecycle in partnership with internal teams for escalations.'
                ].map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.65rem',
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55
                    }}
                  >
                    <span style={{ color: 'var(--accent-primary)', marginTop: '0.35rem', flexShrink: 0 }}>•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
