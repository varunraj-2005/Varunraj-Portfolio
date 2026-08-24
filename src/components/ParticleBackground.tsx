import React, { useEffect, useRef } from 'react';

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle desert dust & chemical gas particles
    const particleCount = Math.min(35, Math.floor(window.innerWidth / 35));
    const particles = Array.from({ length: particleCount }, () => {
      const isBlue = Math.random() > 0.75;
      const isYellow = !isBlue && Math.random() > 0.5;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: -Math.random() * 0.35 - 0.05,
        opacity: Math.random() * 0.4 + 0.1,
        color: isBlue ? '101, 199, 232' : isYellow ? '214, 185, 76' : '180, 175, 160',
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height + 5;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="ambient-lab-particles"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60"
      aria-hidden="true"
    />
  );
};
