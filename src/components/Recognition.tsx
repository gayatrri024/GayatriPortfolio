import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { AWARDS, CERTIFICATIONS } from '../data/portfolioData';

export const Recognition: React.FC = () => {
  return (
    <section id="recognition" className="presentation-page">
      <div className="page-inner page-content-anim">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>06 // RECOGNITION</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>HONORS & CREDENTIALS</span>
          </div>
          <h2 className="editorial-title">Awards & Certifications</h2>
          <p className="editorial-subtitle">
            Competitive technical project distinctions, Amazon operational awards, and verified cloud credentials.
          </p>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="recognition-editorial-layout">
          {/* Left Column: Awards & Distinctions (All entries using the exact same uniform styling) */}
          <div className="recognition-awards-col">
            <div className="certs-section-header">
              <Award size={15} style={{ color: 'var(--accent-soft)' }} />
              <span>HONORS & COMPETITIVE AWARDS</span>
            </div>

            <div className="other-honors-list">
              {AWARDS.map((item) => (
                <div key={item.num} className="honor-editorial-item">
                  <div className="honor-header-row">
                    <span className="honor-title">{item.title}</span>
                    <span className="honor-award-tag">{item.award}</span>
                  </div>
                  <div className="honor-org">{item.org}</div>
                  <div className="honor-detail">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications (Strictly Separate) */}
          <div className="recognition-certs-col">
            <div className="certs-section-header">
              <ShieldCheck size={15} style={{ color: 'var(--accent-soft)' }} />
              <span>CERTIFICATIONS & CONTINUOUS LEARNING</span>
            </div>

            <div className="certs-editorial-list">
              {CERTIFICATIONS.map((cert) => {
                const isOngoing = cert.status === 'ONGOING';

                return (
                  <div key={cert.name} className="cert-editorial-item">
                    <div className="cert-top-row">
                      <h4 className="cert-name">{cert.name}</h4>
                      <span className={`cert-status-badge ${isOngoing ? 'ongoing' : 'completed'}`}>
                        {cert.status}
                      </span>
                    </div>
                    <div className="cert-code">{cert.code}</div>
                    <p className="cert-detail">{cert.detail}</p>
                  </div>
                );
              })}
            </div>

            {/* Factual Integrity Verification Note */}
            <div className="factual-integrity-note">
              <span className="note-dot" />
              <span>
                Factual integrity commitment: AWS Certified Cloud Practitioner is currently ongoing with active preparation and practice tests (not claimed as completed).
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
