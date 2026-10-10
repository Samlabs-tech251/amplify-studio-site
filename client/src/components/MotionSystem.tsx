import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useLocation } from "wouter";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function addRipple(event: MouseEvent) {
  const target = event.currentTarget as HTMLElement;
  const rect = target.getBoundingClientRect();
  const ripple = document.createElement("span");
  ripple.className = "click-ripple";
  ripple.style.left = `${event.clientX - rect.left}px`;
  ripple.style.top = `${event.clientY - rect.top}px`;
  target.appendChild(ripple);
  window.setTimeout(() => ripple.remove(), 520);
}

function addTilt(element: HTMLElement) {
  const onMove = (event: PointerEvent) => {
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    element.style.setProperty("--tilt-x", `${(0.5 - y) * 8}deg`);
    element.style.setProperty("--tilt-y", `${(x - 0.5) * 8}deg`);
    element.classList.add("is-tilting");
  };
  const onLeave = () => { element.classList.remove("is-tilting"); element.style.removeProperty("--tilt-x"); element.style.removeProperty("--tilt-y"); };
  element.addEventListener("pointermove", onMove);
  element.addEventListener("pointerleave", onLeave);
  return () => { element.removeEventListener("pointermove", onMove); element.removeEventListener("pointerleave", onLeave); };
}

function addMagnetic(element: HTMLElement) {
  const onMove = (event: PointerEvent) => {
    const rect = element.getBoundingClientRect();
    element.style.setProperty("--mag-x", `${(event.clientX - (rect.left + rect.width / 2)) * 0.14}px`);
    element.style.setProperty("--mag-y", `${(event.clientY - (rect.top + rect.height / 2)) * 0.14}px`);
  };
  const onLeave = () => { element.style.removeProperty("--mag-x"); element.style.removeProperty("--mag-y"); };
  element.addEventListener("pointermove", onMove);
  element.addEventListener("pointerleave", onLeave);
  return () => { element.removeEventListener("pointermove", onMove); element.removeEventListener("pointerleave", onLeave); };
}

export function MotionSystem() {
  const [location] = useLocation();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: !prefersReducedMotion(), touchMultiplier: 1.1 });
    (window as typeof window & { __amplifyLenis?: Lenis }).__amplifyLenis = lenis;
    let frame = 0;
    const raf = (time: number) => { lenis.raf(time); ScrollTrigger.update(); frame = requestAnimationFrame(raf); };
    frame = requestAnimationFrame(raf);

    if (prefersReducedMotion()) {
      return () => { cancelAnimationFrame(frame); lenis.destroy(); delete (window as typeof window & { __amplifyLenis?: Lenis }).__amplifyLenis; };
    }

    const context = gsap.context(() => {
      const revealGroups = gsap.utils.toArray<HTMLElement>(".motion-section");
      revealGroups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-reveal]");
        gsap.fromTo(items, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.72, ease: "power3.out", stagger: 0.09, scrollTrigger: { trigger: group, start: "top 84%", once: true } });
      });
      const heroWords = document.querySelectorAll<HTMLElement>(".hero-word");
      gsap.fromTo(heroWords, { autoAlpha: 0, y: 22, rotateX: -18 }, { autoAlpha: 1, y: 0, rotateX: 0, duration: 0.8, ease: "power3.out", stagger: 0.075, delay: 0.18 });
    });

    const rippleTargets = Array.from(document.querySelectorAll<HTMLElement>(".button, .text-link, .header-whatsapp"));
    rippleTargets.forEach((target) => target.addEventListener("click", addRipple));
    const tiltCleanups = Array.from(document.querySelectorAll<HTMLElement>(".mini-service, .service-row, .portfolio-card, .proof-card, .contact-option")).map(addTilt);
    const magneticCleanups = Array.from(document.querySelectorAll<HTMLElement>(".magnetic")).map(addMagnetic);

    const root = document.documentElement;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const onPointerMove = finePointer ? (event: PointerEvent) => {
      root.style.setProperty("--spot-x", `${event.clientX}px`);
      root.style.setProperty("--spot-y", `${event.clientY}px`);
    } : undefined;
    if (onPointerMove) window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      cancelAnimationFrame(frame); lenis.destroy(); delete (window as typeof window & { __amplifyLenis?: Lenis }).__amplifyLenis; context.revert();
      rippleTargets.forEach((target) => target.removeEventListener("click", addRipple));
      tiltCleanups.forEach((cleanup) => cleanup()); magneticCleanups.forEach((cleanup) => cleanup());
      if (onPointerMove) window.removeEventListener("pointermove", onPointerMove);
    };
  }, [location]);

  return null;
}
