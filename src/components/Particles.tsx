import { useEffect, useRef } from 'react';

type P = { x: number; y: number; r: number; vy: number; sway: number; phase: number; el: HTMLSpanElement };

/**
 * Floating ingredient-inspired particles (leaves / dots) drifting upward.
 * Lightweight DOM-based animation, no canvas. Pauses when offscreen.
 */
export default function Particles() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const COUNT = 14;
    const particles: P[] = [];
    const colors = ['rgba(16,185,129,0.35)', 'rgba(132,204,22,0.3)', 'rgba(34,197,94,0.25)'];

    for (let i = 0; i < COUNT; i++) {
      const el = document.createElement('span');
      el.style.position = 'absolute';
      el.style.borderRadius = '9999px';
      el.style.pointerEvents = 'none';
      el.style.background = colors[i % colors.length];
      el.style.filter = 'blur(1px)';
      container.appendChild(el);
      const r = 3 + Math.random() * 6;
      particles.push({
        x: Math.random() * 100,
        y: 100 + Math.random() * 20,
        r,
        vy: 0.08 + Math.random() * 0.18,
        sway: 0.5 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
        el,
      });
      el.style.width = `${r * 2}px`;
      el.style.height = `${r * 2}px`;
    }

    let raf = 0;
    const tick = () => {
      for (const p of particles) {
        p.y -= p.vy;
        p.phase += 0.01;
        const x = p.x + Math.sin(p.phase) * p.sway;
        p.el.style.left = `${x}%`;
        p.el.style.top = `${p.y}%`;
        p.el.style.opacity = String(Math.min(1, p.y / 100) * 0.7);
        if (p.y < -10) {
          p.y = 110;
          p.x = Math.random() * 100;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      particles.forEach((p) => p.el.remove());
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[3] overflow-hidden"
      aria-hidden
    />
  );
}
