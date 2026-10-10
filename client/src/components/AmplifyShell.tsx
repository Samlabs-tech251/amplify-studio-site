import { ReactNode, useEffect, useRef, useState, type CSSProperties } from "react";
import { CalendarDays, CircleHelp, Grid2X2, Home, Menu, MessageCircle, Palette, UserRound, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { BrandMark } from "./BrandMark";
import { InstallPrompt } from "./InstallPrompt";
import { AmbientMotion } from "./AmbientMotion";
import { InteractiveIntroLoader } from "./InteractiveIntroLoader";

export const WHATSAPP_NUMBER = "2349014350492";
export function whatsappUrl(message?: string) { const base = `https://wa.me/${WHATSAPP_NUMBER}`; return message ? `${base}?text=${encodeURIComponent(message)}` : base; }

const directNavItems = [
  { href: "/", sectionId: "home", label: "Home", icon: Home },
  { href: "/services", sectionId: "services", label: "Services", icon: Palette },
  { href: "/portfolio", sectionId: "portfolio", label: "Portfolio", shortLabel: "Work", icon: Grid2X2 },
  { href: "/about", sectionId: "about", label: "About", icon: UserRound },
  { href: "/contact", sectionId: "contact", label: "Contact", icon: CalendarDays },
];
const menuItems = [...directNavItems, { href: "/faq", sectionId: "faq", label: "FAQ", icon: CircleHelp }, { href: "/reviews", sectionId: "reviews", label: "Reviews", icon: MessageCircle }];

type LenisWindow = Window & { __amplifyLenis?: { scrollTo: (target: HTMLElement, options?: { offset?: number; duration?: number }) => void; start: () => void; stop: () => void } };

export function AmplifyShell({ children }: { children: ReactNode }) {
  const [location, navigate] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef<HTMLDivElement>(null);

  const goToSection = (event: React.MouseEvent, href: string, sectionId: string) => {
    event.preventDefault();
    (window as LenisWindow).__amplifyLenis?.start();
    const target = document.getElementById(sectionId);
    if (target && location === href) {
      (window as LenisWindow).__amplifyLenis?.scrollTo(target, { offset: -104, duration: 0.8 });
      if (!(window as LenisWindow).__amplifyLenis) target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      sessionStorage.setItem("amplify-pending-section", sectionId);
      navigate(href);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const closeOnOutside = (event: PointerEvent) => { if (menuRef.current && !menuRef.current.contains(event.target as Node)) setMenuOpen(false); };
    document.addEventListener("pointerdown", closeOnOutside);
    let previous = window.scrollY;
    let ticking = false;
    const update = () => { const max = document.documentElement.scrollHeight - window.innerHeight; setProgress(max > 0 ? (window.scrollY / max) * 100 : 0); setNavHidden(window.scrollY > 90 && window.scrollY > previous); previous = window.scrollY; ticking = false; };
    const onScroll = () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { document.removeEventListener("pointerdown", closeOnOutside); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    const pending = sessionStorage.getItem("amplify-pending-section");
    if (!pending) return;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(pending);
      if (target) {
        (window as LenisWindow).__amplifyLenis?.scrollTo(target, { offset: -104, duration: 0.8 });
        if (!(window as LenisWindow).__amplifyLenis) target.scrollIntoView({ behavior: "smooth", block: "start" });
        sessionStorage.removeItem("amplify-pending-section");
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location]);

  useEffect(() => {
    const body = document.body;
    if (menuOpen) {
      body.classList.add("menu-open");
      (window as LenisWindow).__amplifyLenis?.stop();
    } else {
      body.classList.remove("menu-open");
      (window as LenisWindow).__amplifyLenis?.start();
    }
    return () => body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("#home, #services, #portfolio, #about, #contact, #faq, #reviews"));
    if (!sections.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-28% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location]);

  return (
    <div className="site-frame">
      <AmbientMotion />
      <InteractiveIntroLoader />
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <header className={`site-header ${navHidden ? "nav-hidden" : ""}`}>
        <Link href="/" aria-label="Amplify Studio home"><BrandMark /></Link>
          <nav className="top-nav-links" aria-label="Primary navigation">{directNavItems.map(({ href, sectionId, label }) => <Link href={href} key={href} onClick={(event) => goToSection(event, href, sectionId)} className={location === href || activeSection === sectionId ? "active" : undefined} aria-current={location === href || activeSection === sectionId ? "page" : undefined}>{label}</Link>)}</nav>
        <div className="site-header-actions">
          <a className="header-project-button" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={15} /> <span>Start a project</span></a>
          <div className="menu-wrap" ref={menuRef}><button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={21} />}</button></div>
        </div>
      </header>
      {menuOpen && <div className="menu-overlay" role="dialog" aria-label="Amplify Studio menu"><div className="menu-overlay-inner"><div className="menu-overlay-kicker">Menu / Choose a direction</div><nav className="menu-overlay-links">{menuItems.map(({ href, sectionId, label }, index) => <Link href={href} key={href} onClick={(event) => goToSection(event, href, sectionId)} className={location === href || activeSection === sectionId ? "active" : ""} style={{ "--menu-index": index } as CSSProperties}>{label}<span>↗</span></Link>)}</nav><div className="menu-overlay-footer"><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a><a href="mailto:samstudiohub@gmail.com">samstudiohub@gmail.com</a></div></div></div>}
      <main className="site-main">{children}</main>
      <nav className="mobile-bottom-dock" aria-label="Mobile navigation">{directNavItems.map(({ href, sectionId, label, shortLabel, icon: Icon }) => <Link href={href} key={href} onClick={(event) => goToSection(event, href, sectionId)} className={location === href || activeSection === sectionId ? "active" : ""}><Icon size={16} /><span>{shortLabel || label}</span></Link>)}</nav>
      <InstallPrompt />
    </div>
  );
}

export function PageIntro({ kicker, title, description }: { kicker: string; title: ReactNode; description?: ReactNode }) { return <div className="page-intro motion-section"><p className="eyebrow" data-reveal>{kicker}</p><h1 className="display-title" data-reveal>{title}</h1>{description && <p className="intro-copy" data-reveal>{description}</p>}</div>; }
