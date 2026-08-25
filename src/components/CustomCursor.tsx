import React, { useEffect, useRef } from 'react';

// ─── Smoke particle type ──────────────────────────────────────────────────────
interface SmokeParticle {
  x: number;
  y: number;
  vx: number;        // horizontal drift
  vy: number;        // upward velocity
  radius: number;
  opacity: number;
  decay: number;     // how fast opacity falls each frame
  grow: number;      // how fast radius expands
  color: string;     // rgb string
}

// ─── Cursor dot parts ─────────────────────────────────────────────────────────
interface CursorState {
  x: number;
  y: number;
  visible: boolean;
}

const SMOKE_COLORS = [
  '214, 185, 76',   // gold  (#D6B94C)
  '101, 199, 232',  // blue  (#65C7E8)
  '180, 175, 160',  // dust/tan
  '255, 255, 255',  // faint white wisps
];

// Smoke spawns only when the mouse has been still for this long (ms)
const IDLE_THRESHOLD_MS = 320;
// Particles spawned per frame while idle
const SPAWN_RATE = 0.9; // fractional — use accumulator

export const CustomCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const stateRef = useRef<CursorState>({ x: -200, y: -200, visible: false });
  const particlesRef = useRef<SmokeParticle[]>([]);
  const lastMoveRef = useRef<number>(performance.now());
  const spawnAccRef = useRef<number>(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursorEl = cursorRef.current;
    if (!canvas || !cursorEl) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // ── resize ──────────────────────────────────────────────────────────────
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── mouse tracking ───────────────────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      stateRef.current.x = e.clientX;
      stateRef.current.y = e.clientY;
      stateRef.current.visible = true;
      lastMoveRef.current = performance.now();

      // Move the SVG cursor overlay
      cursorEl.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const onMouseEnter = () => { stateRef.current.visible = true; };
    const onMouseLeave = () => { stateRef.current.visible = false; };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // ── spawn helper ─────────────────────────────────────────────────────────
    const spawnSmoke = (x: number, y: number) => {
      const color = SMOKE_COLORS[Math.floor(Math.random() * SMOKE_COLORS.length)];
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 4,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(Math.random() * 0.8 + 0.4),   // always rises
        radius: Math.random() * 4 + 3,
        opacity: Math.random() * 0.35 + 0.2,
        decay: Math.random() * 0.006 + 0.004,
        grow: Math.random() * 0.12 + 0.06,
        color,
      });
    };

    // ── render loop ──────────────────────────────────────────────────────────
    const render = () => {
      const now = performance.now();
      const idle = now - lastMoveRef.current > IDLE_THRESHOLD_MS;
      const { x, y, visible } = stateRef.current;

      // Clear canvas each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn smoke when idle
      if (idle && visible) {
        spawnAccRef.current += SPAWN_RATE;
        while (spawnAccRef.current >= 1) {
          spawnSmoke(x, y);
          spawnAccRef.current -= 1;
        }
      } else {
        spawnAccRef.current = 0;
      }

      // Update & draw particles
      particlesRef.current = particlesRef.current.filter((p) => p.opacity > 0.01);

      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.99;          // slight drag
        p.vy *= 0.995;
        p.radius += p.grow;
        p.opacity -= p.decay;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, `rgba(${p.color}, ${p.opacity})`);
        grad.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Smoke canvas — sits just above the background particles (z-1) */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1] w-full h-full"
      />

      {/* Custom crosshair cursor — sits on top of everything except modals */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{ transform: 'translate(-200px, -200px)' }}
      >
        {/* Outer ring */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block' }}
        >
          {/* Crosshair lines */}
          <line x1="18" y1="2"  x2="18" y2="12" stroke="#D6B94C" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="18" y1="24" x2="18" y2="34" stroke="#D6B94C" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="2"  y1="18" x2="12" y2="18" stroke="#D6B94C" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="24" y1="18" x2="34" y2="18" stroke="#D6B94C" strokeWidth="1.2" strokeLinecap="round" />

          {/* Corner brackets (top-left, top-right, bottom-left, bottom-right) */}
          <path d="M11 7 L7 7 L7 11"  stroke="#D6B94C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          <path d="M25 7 L29 7 L29 11" stroke="#D6B94C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          <path d="M11 29 L7 29 L7 25"  stroke="#D6B94C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
          <path d="M25 29 L29 29 L29 25" stroke="#D6B94C" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />

          {/* Center dot */}
          <circle cx="18" cy="18" r="1.8" fill="#D6B94C" />
        </svg>
      </div>
    </>
  );
};
