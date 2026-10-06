import React from 'react';
import { EXPERIENCES, AWARDS } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section className="section experience" id="experience">
      <header className="section__head reveal">
        <h2 className="section__title">Experience</h2>
        <span className="section__rule" aria-hidden="true" />
      </header>

      {/* Pipeline-styled timeline */}
      <ol className="timeline">
        {EXPERIENCES.map((exp) => (
          <li className="tl-item reveal" key={exp.number}>
            <div className="tl-node" aria-hidden="true" />
            <div className="tl-card">
              <p className="tl-date">{exp.period}</p>
              <h3 className="tl-role">{exp.role}</h3>
              <p className="tl-org">{exp.company} · {exp.location}</p>
              <ul className="tl-points">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      {/* Honors & Recognition (Styled exactly like Reference's // leadership) */}
      <div className="leadership reveal">
        <h3 className="leadership__title">// honors &amp; recognition</h3>
        <ul className="leadership__list">
          {AWARDS.map((item) => (
            <li key={item.num}>
              <strong>{item.title}</strong> — {item.award} ({item.org}). {item.detail}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
