import { useEffect, useRef, useState } from "react";
import { BrandMark } from "./BrandMark";

type Particle = { x: number; y: number; vx: number; vy: number; r: number; alpha: number };

function makeParticles(width: number, height: number) {
  const count = width < 600 ? 28 : 42;
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.18,
    vy: (Math.random() - 0.5) * 0.18,
    r: Math.random() * 1.8 + 0.5,
    alpha: Math.random() * 0.45 + 0.2,
  }));
}

export function InteractiveIntroLoader() {
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const pointerRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    try {
      if (sessionStorage.getItem("amplify-intro-v2-seen") === "1") return;
      sessionStorage.setItem("amplify-intro-v2-seen", "1");
    } catch {
      // Continue with the loader if session storage is unavailable.
    }

    setVisible(true);
    const timeout = window.setTimeout(() => setVisible(false), 4500);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!visible || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      particlesRef.current = makeParticles(width, height);
    };
    const animate = () => {
      context.clearRect(0, 0, width, height);
      const pointer = pointerRef.current;
      particlesRef.current.forEach((particle) => {
        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const distance = Math.hypot(dx, dy);
        if (pointer.active && distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx -= (dx / Math.max(distance, 1)) * force * 0.06;
          particle.vy -= (dy / Math.max(distance, 1)) * force * 0.06;
        }
        particle.vx *= 0.985;
        particle.vy *= 0.985;
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
        context.beginPath();
        context.fillStyle = `rgba(212,162,76,${particle.alpha})`;
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();
      });
      frame = requestAnimationFrame(animate);
    };
    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, [visible]);

  if (!visible) return null;
  const skip = () => setVisible(false);
  const updatePointer = (clientX: number, clientY: number) => { pointerRef.current = { x: clientX, y: clientY, active: true }; };
  return (
    <div className="intro-loader-v2" role="dialog" aria-label="Loading Amplify Studio" onPointerMove={(event) => updatePointer(event.clientX, event.clientY)} onPointerDown={(event) => updatePointer(event.clientX, event.clientY)} onPointerLeave={() => { pointerRef.current.active = false; }}>
      <canvas ref={canvasRef} className="intro-loader-canvas" aria-hidden="true" />
      <div className="intro-loader-aurora" aria-hidden="true" />
      <div className="intro-loader-content">
        <BrandMark compact />
        <span className="intro-loader-line" aria-hidden="true"><i /></span>
        <p>Turn up your brand&apos;s volume.</p>
        <span className="intro-loader-dot" aria-hidden="true" />
      </div>
      <button className="intro-loader-skip" type="button" onClick={skip}>Tap to skip</button>
    </div>
  );
}
