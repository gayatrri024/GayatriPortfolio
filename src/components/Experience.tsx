import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="presentation-page">
      <div className="page-inner page-content-anim">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>03 // EXPERIENCE</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>PROFESSIONAL TIMELINE</span>
          </div>
          <h2 className="editorial-title">Work Experience</h2>
          <p className="editorial-subtitle">
            2.5+ years across DevOps engineering, cloud infrastructure, and Amazon-scale operational reliability.
          </p>
        </div>

        {/* Editorial Vertical Timeline (NO Cards, NO Boxes) */}
        <div className="experience-timeline">
          {EXPERIENCES.map((exp, idx) => {
            const isLast = idx === EXPERIENCES.length - 1;
            const isCurrent = exp.period.includes('Present');

            return (
              <div key={exp.number} className="timeline-item">
                {/* Left Spine / Indicator */}
                <div className="timeline-spine">
                  <div className={`timeline-node ${isCurrent ? 'active' : ''}`}>
                    <span className="timeline-node-num">{exp.number}</span>
                  </div>
                  {!isLast && <div className="timeline-line" />}
                </div>

                {/* Main Content Area */}
                <div className="timeline-body">
                  {/* Top Rule with Company & Meta */}
                  <div className="timeline-header-row">
                    <div className="timeline-title-wrap">
                      <div className="timeline-rule-tag">
                        <span className="timeline-idx-prefix">{exp.number} ───────────────</span>
                        {exp.badge && (
                          <span className="timeline-badge">{exp.badge}</span>
                        )}
                      </div>
                      <h3 className="timeline-company">{exp.company}</h3>
                      <div className="timeline-role">{exp.role}</div>
                    </div>

                    <div className="timeline-meta-box">
                      <span className="timeline-period">{exp.period}</span>
                      <span className="timeline-meta-sep">•</span>
                      <span className="timeline-location">{exp.location}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="timeline-bullets">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="timeline-bullet-item">
                        <span className="bullet-dash">—</span>
                        <span className="bullet-text">{bullet}</span>
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
