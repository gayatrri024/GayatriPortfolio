import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section className="section education" id="education">
      <header className="section__head reveal">
        <h2 className="section__title">Education &amp; Credentials</h2>
        <span className="section__rule" aria-hidden="true" />
      </header>

      {/* Formal Degree Timeline */}
      <ol className="timeline">
        {EDUCATION.map((edu, idx) => (
          <li className="tl-item reveal" key={idx}>
            <div className="tl-node tl-node--edu" aria-hidden="true" />
            <div className="tl-card">
              <p className="tl-date">{edu.period}</p>
              <h3 className="tl-role">{edu.degree}</h3>
              <p className="tl-org">{edu.institution} · GPA: {edu.gpa}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Certifications Grid */}
      <div className="leadership reveal" style={{ marginTop: '3rem' }}>
        <h3 className="leadership__title">// certifications</h3>
        <div className="cert-grid">
          {CERTIFICATIONS.map((cert) => {
            const isInProgress = cert.status === 'IN PROGRESS';

            return (
              <div className="cert-card" key={cert.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '.92rem', color: 'var(--text)', margin: 0 }}>
                    {cert.name}
                  </h4>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '.68rem',
                      fontWeight: 700,
                      padding: '.15rem .5rem',
                      borderRadius: '4px',
                      backgroundColor: isInProgress ? 'rgba(245, 158, 11, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                      color: isInProgress ? '#FBBF24' : '#34D399',
                      border: isInProgress ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid rgba(16, 185, 129, 0.3)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {cert.status}
                  </span>
                </div>
                <p style={{ fontSize: '.8rem', color: 'var(--muted)', margin: 0, fontFamily: 'var(--font-mono)' }}>
                  {cert.code}
                </p>
                <p style={{ fontSize: '.84rem', color: 'var(--muted)', margin: '.2rem 0 0 0', lineHeight: 1.5 }}>
                  {cert.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
