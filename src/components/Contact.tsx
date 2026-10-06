import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!isEmail(formData.email.trim())) {
      newErrors.email = 'That email looks off.';
    }
    if (!formData.message.trim()) newErrors.message = 'Add a short message.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '4c177ea6-12ee-43d3-93db-96805342c1c2';

    if (!accessKey) {
      // Fallback: If no key yet, open mailto pre-filled so message is not lost
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `Portfolio inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 8000);
      return;
    }

    setIsSubmitting(true);
    try {
      const formElement = e.currentTarget as HTMLFormElement;
      const data = new FormData(formElement);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: data,
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 8000);
      } else {
        setSubmitError(result.message || 'Unable to deliver message right now.');
      }
    } catch {
      setSubmitError('Network error. Please email directly at ' + PERSONAL_INFO.email);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section contact" id="contact">
      <header className="section__head reveal">
        <h2 className="section__title">Contact</h2>
        <span className="section__rule" aria-hidden="true" />
      </header>

      <div className="contact__grid">
        {/* Left Column: Direct Links & Info */}
        <div className="contact__intro reveal">
          <p className="contact__lead">Let's build something reliable.</p>
          <p className="contact__text">
            I'm open to DevOps, Cloud Infrastructure, Cloud Administrator, and Platform Engineering roles.
            Drop a message or reach me directly — I reply quickly.
          </p>

          <ul className="contact__links">
            <li>
              <a href={`mailto:${PERSONAL_INFO.email}`}>
                {PERSONAL_INFO.email}
              </a>
            </li>
            <li>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}>
                {PERSONAL_INFO.phone}
              </a>
            </li>
            <li>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column: Interactive Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact__form reveal"
          id="contactForm"
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            type="hidden"
            name="access_key"
            value="4c177ea6-12ee-43d3-93db-96805342c1c2"
          />
          <input
            type="hidden"
            name="from_name"
            value="Gayatri Shinde Portfolio"
          />
          <input
            type="hidden"
            name="subject"
            value="New Portfolio Message from Gayatri's Website"
          />

          <div className={`field ${errors.name ? 'has-error' : ''}`}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            {errors.name && <span className="field__error">{errors.name}</span>}
          </div>

          <div className={`field ${errors.email ? 'has-error' : ''}`}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            {errors.email && <span className="field__error">{errors.email}</span>}
          </div>

          <div className={`field ${errors.message ? 'has-error' : ''}`}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            {errors.message && <span className="field__error">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className="btn btn--primary btn--full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending message...' : 'Send message'}
          </button>

          {isSuccess && (
            <p className="form__success" role="status">
              ✓ Thanks! Your message was delivered — I'll get back to you soon.
            </p>
          )}

          {submitError && (
            <p className="form__error" role="alert" style={{ color: '#EF4444', marginTop: '0.75rem', fontSize: '0.875rem' }}>
              ⚠ {submitError}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
