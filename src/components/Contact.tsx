import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="presentation-page">
      <div className="page-inner page-content-anim">
        {/* Editorial Section Header */}
        <div className="editorial-header">
          <div className="page-number-tag">
            <span>07 // CONTACT</span>
            <span style={{ color: 'var(--border-medium)' }}>•</span>
            <span>DIRECT COMMUNICATION</span>
          </div>
          <h2 className="editorial-title">Direct Contact</h2>
          <p className="editorial-subtitle">
            Available for DevOps, Cloud, Kubernetes, Platform, and Infrastructure Engineering roles across India (Pune-based or Remote).
          </p>
        </div>

        {/* Clean Direct Contact Editorial Container (NO fake form, NO Send Inquiry) */}
        <div className="direct-contact-layout">
          <div className="direct-contact-grid">
            {/* 01: EMAIL */}
            <div className="contact-editorial-item">
              <div className="contact-item-tag">
                <Mail size={14} style={{ color: 'var(--accent-soft)' }} />
                <span>EMAIL</span>
              </div>
              <div className="contact-item-content">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="contact-primary-link"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="contact-copy-btn"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copied ? <Check size={13} /> : <Copy size={13} />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* 02: MOBILE */}
            <div className="contact-editorial-item">
              <div className="contact-item-tag">
                <Phone size={14} style={{ color: 'var(--accent-soft)' }} />
                <span>MOBILE</span>
              </div>
              <div className="contact-item-content">
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="contact-primary-link"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* 03: ENGINEER LOCATION (strictly 'Pune, India') */}
            <div className="contact-editorial-item">
              <div className="contact-item-tag">
                <MapPin size={14} style={{ color: 'var(--accent-soft)' }} />
                <span>ENGINEER LOCATION</span>
              </div>
              <div className="contact-item-content">
                <span className="contact-location-text">Pune, India</span>
              </div>
            </div>

            {/* 04: LINKEDIN */}
            <div className="contact-editorial-item">
              <div className="contact-item-tag">
                <ArrowUpRight size={14} style={{ color: 'var(--accent-soft)' }} />
                <span>LINKEDIN</span>
              </div>
              <div className="contact-item-content">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-primary-link"
                >
                  linkedin.com/in/gayatri-shinde-078a781b8
                  <ArrowUpRight size={14} className="link-arrow-icon" />
                </a>
              </div>
            </div>

            {/* 05: GITHUB */}
            <div className="contact-editorial-item">
              <div className="contact-item-tag">
                <ArrowUpRight size={14} style={{ color: 'var(--accent-soft)' }} />
                <span>GITHUB</span>
              </div>
              <div className="contact-item-content">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-primary-link"
                >
                  github.com/gayatrri024
                  <ArrowUpRight size={14} className="link-arrow-icon" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Actions: View Resume Modal */}
          {onOpenResume && (
            <div className="contact-footer-actions">
              <button
                onClick={onOpenResume}
                className="btn btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem' }}
              >
                <FileText size={16} style={{ color: 'var(--accent-soft)' }} />
                <span>View Full Curriculum Vitae</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
