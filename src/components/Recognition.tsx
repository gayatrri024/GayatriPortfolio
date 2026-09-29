import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

export const Recognition: React.FC = () => {
  const awards = [
    {
      num: '01',
      title: 'TECHNOFEST 2025',
      award: '1st Place — Project Presentation',
      org: 'Sarhad College',
      detail: 'Architecture and technical operations of TravVO application.'
    },
    {
      num: '02',
      title: 'AMAZON BUG-BUST',
      award: '2nd Runner-Up',
      org: 'Amazon',
      detail: "17 system bugs identified and resolved during Amazon's annual month-long Bug-Bust event."
    },
    {
      num: '03',
      title: 'AMAZON EXCEPTIONAL TRAINER',
      award: 'Q3 Award',
      org: 'Amazon',
      detail: 'Recognized for outstanding training delivery and operational impact.'
    },
    {
      num: '04',
      title: 'QUALITY EXCELLENCE',
      award: '98% Quality Score Benchmark',
      org: 'Amazon',
      detail: 'Achieved a sustained 98% quality score across operational queues.'
    },
    {
      num: '05',
      title: 'VOIS GIRLSINSTEM PROGRAM',
      award: 'Selected Participant',
      org: 'Vodafone Intelligent Solutions',
      detail: 'Successfully completed HTML/CSS Web Development course with hands-on responsive page development.'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Cloud Practitioner',
      code: 'CLF-C02',
      status: 'ONGOING',
      detail: 'Active preparation and practice in progress. (Not claimed as completed).'
    },
    {
      name: 'IBM Data Science Professional Specialization',
      code: 'Completed',
      status: 'COMPLETED',
      detail: 'Professional specialization credentials via IBM / Coursera.'
    },
    {
      name: 'Amazon Skill Builder',
      code: 'Credential',
      status: 'PLATFORM CREDENTIAL',
      detail: 'Amazon Web Services continuous learning platform coursework and skill milestones.'
    }
  ];

  return (
    <section id="recognition" className="presentation-page">
      <div className="page-inner page-content-anim">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>06 // HONORS</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>AWARDS & CREDENTIALS</span>
          </div>
          <h2 className="editorial-title">Recognition & Certifications</h2>
          <p className="editorial-subtitle">
            Formal engineering awards, Amazon operational benchmarks, and active credentials.
          </p>
        </div>

        {/* Editorial Layout: Numbered List on Left, Certifications on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
            gap: '2.5rem',
            alignItems: 'start'
          }}
          className="recognition-split-grid"
        >
          {/* Left: Editorial Numbered Recognition List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}
            >
              <Award size={14} />
              <span>AWARDS & OPERATIONAL RECOGNITION</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {awards.map((item) => (
                <div
                  key={item.num}
                  className="editorial-card"
                  style={{
                    padding: '1.1rem 1.4rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1.25rem'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--accent-soft)',
                      lineHeight: 1.2
                    }}
                  >
                    {item.num}
                  </span>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <h4
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          margin: 0
                        }}
                      >
                        {item.title}
                      </h4>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--accent-soft)',
                          fontWeight: 600
                        }}
                      >
                        {item.award}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                      {item.detail}
                    </div>

                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {item.org}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Distinct Certifications Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                color: 'var(--accent-soft)',
                textTransform: 'uppercase',
                marginBottom: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}
            >
              <ShieldCheck size={14} />
              <span>CERTIFICATIONS & CONTINUOUS LEARNING</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {certifications.map((cert) => {
                const isOngoing = cert.status === 'ONGOING';
                return (
                  <div
                    key={cert.name}
                    className="editorial-card"
                    style={{
                      padding: '1.25rem 1.4rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem',
                      borderLeft: isOngoing ? '2px solid var(--accent-soft)' : '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.98rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          margin: 0
                        }}
                      >
                        {cert.name}
                      </h4>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          padding: '0.15rem 0.5rem',
                          borderRadius: '4px',
                          backgroundColor: isOngoing ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                          color: isOngoing ? 'var(--accent-soft)' : 'var(--text-secondary)',
                          border: isOngoing ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)'
                        }}
                      >
                        {cert.status}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      {cert.detail}
                    </div>

                    {cert.code && (
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                        Track: {cert.code}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Note on factual accuracy */}
            <div
              style={{
                padding: '0.9rem 1.1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '8px',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.78rem',
                color: 'var(--text-muted)',
                lineHeight: 1.5,
                fontFamily: 'var(--font-mono)'
              }}
            >
              Credentials reflect verified achievements and active ongoing examination preparations without exaggeration.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .recognition-split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
