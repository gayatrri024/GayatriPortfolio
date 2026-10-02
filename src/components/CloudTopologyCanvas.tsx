import React, { useEffect, useRef } from 'react';

interface Node {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  color: string;
  size: number;
}

export const CloudTopologyCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    // Core Cloud & DevOps Architecture Nodes
    const nodes: Node[] = [
      { id: 'aws', label: 'AWS CLOUD', sub: 'us-east-1 // VPC', x: 0.5, y: 0.48, baseX: 0.5, baseY: 0.48, color: '#38BDF8', size: 36 },
      { id: 'k8s', label: 'KUBERNETES', sub: 'Control Plane', x: 0.22, y: 0.28, baseX: 0.22, baseY: 0.28, color: '#60A5FA', size: 28 },
      { id: 'iac', label: 'TERRAFORM', sub: 'OpenTofu IaC', x: 0.78, y: 0.26, baseX: 0.78, baseY: 0.26, color: '#818CF8', size: 28 },
      { id: 'cicd', label: 'CI / CD', sub: 'GitHub Actions', x: 0.18, y: 0.72, baseX: 0.18, baseY: 0.72, color: '#34D399', size: 26 },
      { id: 'docker', label: 'DOCKER', sub: 'OCI Containers', x: 0.82, y: 0.70, baseX: 0.82, baseY: 0.70, color: '#38BDF8', size: 26 },
      { id: 'obs', label: 'METRICS', sub: 'Prometheus & Grafana', x: 0.5, y: 0.85, baseX: 0.5, baseY: 0.85, color: '#F472B6', size: 25 },
      { id: 'sec', label: 'IAM / SEC', sub: 'Role Policies', x: 0.5, y: 0.16, baseX: 0.5, baseY: 0.16, color: '#FBBF24', size: 24 }
    ];

    // Node Connections (Network Edges)
    const links = [
      ['sec', 'aws'],
      ['k8s', 'aws'],
      ['iac', 'aws'],
      ['cicd', 'k8s'],
      ['docker', 'k8s'],
      ['cicd', 'aws'],
      ['docker', 'aws'],
      ['iac', 'docker'],
      ['obs', 'aws'],
      ['obs', 'k8s']
    ];

    // Data packet particles moving along connections
    interface Packet {
      fromIdx: number;
      toIdx: number;
      progress: number;
      speed: number;
      color: string;
    }

    const packets: Packet[] = [
      { fromIdx: 1, toIdx: 0, progress: 0.1, speed: 0.006, color: '#38BDF8' },
      { fromIdx: 2, toIdx: 0, progress: 0.4, speed: 0.005, color: '#818CF8' },
      { fromIdx: 3, toIdx: 1, progress: 0.7, speed: 0.007, color: '#34D399' },
      { fromIdx: 4, toIdx: 1, progress: 0.2, speed: 0.006, color: '#38BDF8' },
      { fromIdx: 0, toIdx: 5, progress: 0.5, speed: 0.008, color: '#F472B6' },
      { fromIdx: 6, toIdx: 0, progress: 0.3, speed: 0.004, color: '#FBBF24' }
    ];

    const resize = () => {
      if (!containerRef.current || !canvas) return;
      const rect = containerRef.current.getBoundingClientRect();
      width = rect.width;
      height = Math.max(rect.height, 460);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    let frame = 0;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinate interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Update node positions with gentle floating movement + subtle mouse parallax
      nodes.forEach((n, idx) => {
        const floatX = Math.sin(frame * 0.015 + idx * 1.2) * 5;
        const floatY = Math.cos(frame * 0.018 + idx * 0.9) * 5;

        const currentPixelX = n.baseX * width + floatX;
        const currentPixelY = n.baseY * height + floatY;

        const dx = mouse.x - currentPixelX;
        const dy = mouse.y - currentPixelY;
        const dist = Math.hypot(dx, dy);

        let repelX = 0;
        let repelY = 0;
        if (dist < 120 && dist > 0) {
          const force = (120 - dist) / 120;
          repelX = -(dx / dist) * force * 15;
          repelY = -(dy / dist) * force * 15;
        }

        n.x = currentPixelX + repelX;
        n.y = currentPixelY + repelY;
      });

      // 1. Draw Network Connections
      links.forEach(([fromId, toId]) => {
        const fromNode = nodes.find((n) => n.id === fromId);
        const toNode = nodes.find((n) => n.id === toId);
        if (!fromNode || !toNode) return;

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);

        const grad = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y);
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
        grad.addColorStop(1, 'rgba(37, 99, 235, 0.12)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // 2. Draw Traveling Data Packets
      packets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const from = nodes[p.fromIdx];
        const to = nodes[p.toIdx];
        if (!from || !to) return;

        const px = from.x + (to.x - from.x) * p.progress;
        const py = from.y + (to.y - from.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 3. Draw Nodes (Hardware & Cloud Control Blocks)
      nodes.forEach((n) => {
        // Outer Pulsing Glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size + 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(13, 21, 39, 0.85)';
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
        ctx.strokeStyle = n.color;
        ctx.lineWidth = 1.6;
        ctx.stroke();
        ctx.fill();

        // Inner glowing core
        ctx.beginPath();
        ctx.arc(n.x, n.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Node Label
        ctx.font = '600 10px "JetBrains Mono", monospace';
        ctx.textAlign = 'center';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(n.label, n.x, n.y + n.size + 15);

        // Node Subtitle
        ctx.font = '400 8.5px "Plus Jakarta Sans", sans-serif';
        ctx.fillStyle = 'rgba(148, 163, 184, 0.85)';
        ctx.fillText(n.sub, n.x, n.y + n.size + 27);
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '440px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
        borderRadius: '1.25rem',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        overflow: 'hidden'
      }}
      aria-label="Interactive Cloud Architecture Topology Graph"
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%'
        }}
      />

      {/* Floating Telemetry Badges */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.3rem 0.65rem',
          background: 'rgba(7, 11, 20, 0.75)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '9999px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: '#34D399',
          backdropFilter: 'blur(8px)'
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#34D399',
            boxShadow: '0 0 6px #34D399'
          }}
        />
        <span>INFRASTRUCTURE: 100% HEALTHY</span>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1.25rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: 'var(--text-muted)',
          background: 'rgba(7, 11, 20, 0.75)',
          padding: '0.25rem 0.6rem',
          borderRadius: '6px',
          border: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        AWS · K8S · TERRAFORM
      </div>
    </div>
  );
};
