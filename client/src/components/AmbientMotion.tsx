import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; r: number; speed: number; alpha: number; phase: number };

export function AmbientMotion() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    let frame = 0;
    let width = 0;
    let height = 0;
    let scrollY = window.scrollY;
    let particles: Particle[] = [];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = width < 600 ? 28 : 40;
      particles = Array.from({ length: count }, () => ({ x: Math.random() * width, y: Math.random() * height, r: Math.random() * 1.4 + .35, speed: Math.random() * .18 + .03, alpha: Math.random() * .35 + .08, phase: Math.random() * Math.PI * 2 }));
    };
    const onScroll = () => { scrollY = window.scrollY; };
    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        const y = (particle.y + time * particle.speed * (reduced ? .22 : 1) + scrollY * .018) % (height + 30) - 15;
        const x = particle.x + Math.sin(time * .00025 + particle.phase) * (reduced ? 2 : 8);
        context.beginPath();
        context.fillStyle = `rgba(212,162,76,${particle.alpha})`;
        context.arc(x, y, particle.r, 0, Math.PI * 2);
        context.fill();
      });
      frame = requestAnimationFrame(draw);
    };
    resize();
    frame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("scroll", onScroll); };
  }, []);
  return <div className="ambient-motion" aria-hidden="true"><div className="ambient-blob ambient-blob-one" /><div className="ambient-blob ambient-blob-two" /><div className="ambient-blob ambient-blob-three" /><canvas ref={canvasRef} className="ambient-particles" /></div>;
}
