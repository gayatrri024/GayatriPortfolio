import React from 'react';
import { PHILOSOPHY_PRINCIPLES } from '../data/portfolioData';
import { Compass } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <div className="section-tag">
            <Compass size={14} />
            <span>Guiding Principles</span>
          </div>
          <h2 className="section-title">Engineering Philosophy</h2>
          <p className="section-desc">
            Core tenets governing infrastructure reliability, operational rigor, and system scalability.
          </p>
        </div>

        {/* Philosophy Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {PHILOSOPHY_PRINCIPLES.map((principle) => (
            <div
              key={principle.num}
              className="card-luxury"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.02)'
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-accent)'
                }}
              >
                // {principle.num}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)'
                }}
              >
                {principle.title}
              </h3>

              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.55
                }}
              >
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
