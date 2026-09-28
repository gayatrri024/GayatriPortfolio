import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Boxes,
  Cpu,
  Cloud,
  GitBranch,
  Activity,
  Network,
  Terminal,
  ShieldCheck,
  Search
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [filterText, setFilterText] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Boxes':
        return <Boxes size={20} color="var(--text-accent)" />;
      case 'Cpu':
        return <Cpu size={20} color="var(--text-accent)" />;
      case 'Cloud':
        return <Cloud size={20} color="var(--text-accent)" />;
      case 'GitBranch':
        return <GitBranch size={20} color="var(--text-accent)" />;
      case 'Activity':
        return <Activity size={20} color="var(--text-accent)" />;
      case 'Network':
        return <Network size={20} color="var(--text-accent)" />;
      case 'Terminal':
        return <Terminal size={20} color="var(--text-accent)" />;
      default:
        return <ShieldCheck size={20} color="var(--text-accent)" />;
    }
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div className="section-tag">
              <Cpu size={14} />
              <span>Technical Competencies</span>
            </div>
            <h2 className="section-title">DevOps & Cloud Ecosystem</h2>
            <p className="section-desc">
              Organized by engineering domains across cloud platforms, orchestration, declarative IaC, and observability.
              Structured honestly without artificial percentage bars or generic ratings.
            </p>
          </div>

          {/* Quick Search */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '320px'
            }}
          >
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }}
            />
            <input
              type="text"
              placeholder="Search technologies..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              style={{
                width: '100%',
                padding: '0.65rem 1rem 0.65rem 2.5rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.825rem',
                outline: 'none',
                transition: 'border-color 0.2s ease'
              }}
              onFocus={(e) => (e.target.style.borderColor = 'var(--crimson-pure)')}
              onBlur={(e) => (e.target.style.borderColor = 'var(--border-subtle)')}
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {SKILL_CATEGORIES.map((cat) => {
            const matchingSkills = filterText
              ? cat.skills.filter((s) => s.toLowerCase().includes(filterText.toLowerCase()))
              : cat.skills;

            if (filterText && matchingSkills.length === 0) return null;

            return (
              <div
                key={cat.title}
                className="card-luxury"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1.85rem',
                  gap: '1.25rem'
                }}
              >
                {/* Category Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div
                      style={{
                        padding: '0.5rem',
                        borderRadius: '0.65rem',
                        backgroundColor: 'rgba(245, 8, 6, 0.1)',
                        border: '1px solid rgba(245, 8, 6, 0.2)'
                      }}
                    >
                      {getCategoryIcon(cat.iconName)}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: 'var(--text-primary)'
                        }}
                      >
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {cat.highlight && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '9999px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--rose-gold)'
                      }}
                    >
                      {cat.highlight}
                    </span>
                  )}
                </div>

                {/* Skills Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                  {matchingSkills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '0.4rem 0.85rem',
                        borderRadius: '0.5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        transition: 'all 0.2s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--crimson-pure)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                    >
                      <span
                        style={{
                          width: '4px',
                          height: '4px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--crimson-pure)'
                        }}
                      />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
