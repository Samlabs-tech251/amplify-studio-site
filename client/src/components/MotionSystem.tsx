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
    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 8;
    element.style.setProperty("--tilt-x", `${rotateX}deg`);
    element.style.setProperty("--tilt-y", `${rotateY}deg`);
    element.classList.add("is-tilting");
  };
  const onLeave = () => {
    element.classList.remove("is-tilting");
    element.style.removeProperty("--tilt-x");
    element.style.removeProperty("--tilt-y");
  };
  element.addEventListener("pointermove", onMove);
  element.addEventListener("pointerleave", onLeave);
  return () => {
    element.removeEventListener("pointermove", onMove);
    element.removeEventListener("pointerleave", onLeave);
  };
}

export function MotionSystem() {
  const [location] = useLocation();

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.1,
    });
    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      ScrollTrigger.update();
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const context = gsap.context(() => {
      const revealGroups = gsap.utils.toArray<HTMLElement>(".motion-section");
      revealGroups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-reveal]");
        gsap.fromTo(items,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.72,
            ease: "power3.out",
            stagger: 0.09,
            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          },
        );
      });

      const heroCard = document.querySelector<HTMLElement>(".hero-mark-card");
      if (heroCard) {
        gsap.to(heroCard, {
          rotateX: 12,
          rotateY: -18,
          rotateZ: -3,
          transformPerspective: 900,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    const rippleTargets = Array.from(document.querySelectorAll<HTMLElement>(".button, .text-link, .header-whatsapp"));
    rippleTargets.forEach((target) => target.addEventListener("click", addRipple));
    const tiltCleanups = Array.from(document.querySelectorAll<HTMLElement>(".mini-service, .service-row, .service-card, .portfolio-card, .proof-card, .contact-option")).map(addTilt);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      context.revert();
      rippleTargets.forEach((target) => target.removeEventListener("click", addRipple));
      tiltCleanups.forEach((cleanup) => cleanup());
    };
  }, [location]);

  return null;
}
