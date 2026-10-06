import React, { useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    
    let nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      label?: string;
    }> = [];
    let raf: number;

    const getAccent = () => {
      return (
        getComputedStyle(document.documentElement)
          .getPropertyValue('--accent')
          .trim() || '#38BDF8'
      );
    };

    const size = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const techLabels = ['AWS', 'K8s', 'IaC', 'Docker', 'CI/CD', 'Helm', 'Prometheus', 'Grafana'];

    const seed = () => {
      const count = Math.max(12, Math.round((w * h) / 14000));
      nodes = Array.from({ length: Math.min(count, 24) }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 2.2 + 2.5,
        label: i < techLabels.length ? techLabels[i] : undefined
      }));
    };

    const step = () => {
      ctx.clearRect(0, 0, w, h);
      const accent = getAccent();

      // Draw connection lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 140;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.strokeStyle = accent;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes and labels
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;

        // Outer glow
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = accent;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        // Inner center
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 0.45, 0, Math.PI * 2);
        ctx.fill();

        // Node technical label if assigned
        if (n.label) {
          ctx.globalAlpha = 0.55;
          ctx.font = '9px "JetBrains Mono", monospace';
          ctx.fillStyle = '#E6EDF6';
          ctx.fillText(n.label, n.x + 8, n.y + 3);
        }
      }

      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(step);
    };

    size();
    seed();
    step();

    const handleResize = () => {
      size();
      seed();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__grid">
        {/* Left Column: Typography, Copy, CTAs, Proof Stats */}
        <div className="hero__copy">
          <p className="hero__eyebrow reveal">
            // DEVOPS & CLOUD INFRASTRUCTURE
          </p>

          <h1 className="hero__name reveal">
            Gayatri<br />Shinde
          </h1>

          <h2 className="hero__title reveal">
            <span className="accent">DevOps & Cloud</span> Infrastructure Engineer
          </h2>

          <p className="hero__intro reveal">
            I work with cloud technologies, Kubernetes, infrastructure automation, and reliable software delivery.
            With <strong>2+ years of operations and cloud-support experience at Amazon</strong> and hands-on DevOps at <strong>Akiyam Solution</strong>,
            I build the systems behind reliable software.
          </p>

          <div className="hero__cta reveal">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              className="btn btn--ghost"
              download={PERSONAL_INFO.resumeFilename}
            >
              Download Resume
            </a>
          </div>

          {/* Quick Stats Strip */}
          <ul className="hero__stats reveal" aria-label="Key Highlights">
            <li>
              <strong>2+</strong>
              <span>Years Operations</span>
            </li>
            <li>
              <strong>50+</strong>
              <span>Microservices (K8s)</span>
            </li>
            <li>
              <strong>98%</strong>
              <span>Quality Score</span>
            </li>
            <li>
              <strong>60%</strong>
              <span>Manual Toil Reduced</span>
            </li>
          </ul>
        </div>

        {/* Right Column: Signature Cloud Topology Canvas & Photo Ring */}
        <div className="hero__visual reveal">
          <canvas
            ref={canvasRef}
            id="topology"
            className="hero__canvas"
            aria-hidden="true"
          />

          <div className="hero__photo-ring">
            <img
              src="/WhatsApp%20Image%202026-10-05%20at%2012.38.53%20PM.jpeg"
              alt="Portrait of Gayatri Shinde"
              className="hero__photo"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Hero Scroll Down Indicator */}
      <a href="#about" className="hero__scroll" aria-label="Scroll to About">
        <span /> scroll
      </a>
    </section>
  );
};
