import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      color: string;
    }[] = [];

    const MAX_PARTICLES = 100;

    const PARTICLE_COLOR = 'rgba(2, 237, 245, 1)';
    const FADE_DISTANCE_FACTOR = 0.8;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let animationFrameId: number;
    let isResizing = false;

    const throttle = (func: Function, delay: number) => {
      let lastTime = 0;
      return (...args: any) => {
        const now = new Date().getTime();
        if (now - lastTime < delay) {
          return;
        }
        lastTime = now;
        func(...args);
      };
    };

    const spawnParticle = () => {
      const edge = Math.random();
      let x, y, vx, vy;

      if (edge < 0.25) {
        x = 0;
        y = Math.random() * h;
        vx = Math.random() * 2 + 0.5;
        vy = Math.random() * 1 - 0.5;
      } else if (edge < 0.5) {
        x = w;
        y = Math.random() * h;
        vx = -(Math.random() * 2 + 0.5);
        vy = Math.random() * 1 - 0.5;
      } else if (edge < 0.75) {
        x = Math.random() * w;
        y = 0;
        vx = Math.random() * 1 - 0.5;
        vy = Math.random() * 2 + 0.5;
      } else {
        x = Math.random() * w;
        y = h;
        vx = Math.random() * 1 - 0.5;
        vy = -(Math.random() * 2 + 0.5);
      }

      particles.push({
        x: x,
        y: y,
        vx: vx * (prefersReducedMotion ? 0.2 : 1),
        vy: vy * (prefersReducedMotion ? 0.2 : 1),
        radius: Math.random() * 1.5 + 0.5,
        opacity: 1,
        color: PARTICLE_COLOR,
      });
    };

    for (let i = 0; i < MAX_PARTICLES; i++) {
      spawnParticle();
    }

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      isResizing = false;
      animate();
    };

    const handleResizeStart = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      isResizing = true;
      throttledResize();
    };

    const throttledResize = throttle(resize, 500);

    window.addEventListener('resize', handleResizeStart);

    const update = () => {
      if (particles.length < MAX_PARTICLES && Math.random() < 0.15) {
        spawnParticle();
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        const distX = Math.abs(p.x - w / 2);
        const distY = Math.abs(p.y - h / 2);
        const dist = distX + distY;
        const maxDist = ((w + h) * FADE_DISTANCE_FACTOR) / 2;

        p.opacity = 1 - dist / maxDist;
        if (p.opacity < 0) p.opacity = 0;

        if (
          p.x < -p.radius ||
          p.x > w + p.radius ||
          p.y < -p.radius ||
          p.y > h + p.radius ||
          p.opacity <= 0
        ) {
          particles.splice(i, 1);
          i--;
          spawnParticle();
        }
      }
    };

    const draw = () => {
      ctx.fillStyle = '#0A192F';
      ctx.fillRect(0, 0, w, h);

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(2, 237, 245, ${p.opacity})`;
        ctx.fill();
      }
    };

    const animate = () => {
      if (isResizing) return;

      if (!prefersReducedMotion) {
        update();
      }
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();

    return () => {
      window.removeEventListener('resize', handleResizeStart);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-40 overflow-hidden">
      <canvas
        ref={canvasRef}
        id="animated-particles"
        className="block w-full h-full bg-[#0A192F]"
        aria-hidden="true"
      ></canvas>
    </div>
  );
};

export default AnimatedBackground;
