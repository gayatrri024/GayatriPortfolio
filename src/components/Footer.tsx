import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__note">
          Designed &amp; built by Gayatri Ashok Shinde · {currentYear}
        </p>

        <ul className="footer__social">
          <li>
            <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={`mailto:${PERSONAL_INFO.email}`}>
              Email
            </a>
          </li>
          <li>
            <a href={PERSONAL_INFO.resumeUrl} download={PERSONAL_INFO.resumeFilename}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
