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
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Palette },
  { href: "/portfolio", label: "Portfolio", shortLabel: "Work", icon: Grid2X2 },
  { href: "/about", label: "About", icon: UserRound },
  { href: "/contact", label: "Contact", icon: CalendarDays },
];
const menuItems = [...directNavItems, { href: "/faq", label: "FAQ", icon: CircleHelp }, { href: "/reviews", label: "Reviews", icon: MessageCircle }];

export function AmplifyShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <div className="site-frame">
      <AmbientMotion />
      <InteractiveIntroLoader />
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <header className={`site-header ${navHidden ? "nav-hidden" : ""}`}>
        <Link href="/" aria-label="Amplify Studio home"><BrandMark /></Link>
        <nav className="top-nav-links" aria-label="Primary navigation">{directNavItems.map(({ href, label }) => <Link href={href} key={href} className={location === href ? "active" : undefined} aria-current={location === href ? "page" : undefined}>{label}</Link>)}</nav>
        <div className="site-header-actions">
          <a className="header-project-button" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={15} /> <span>Start a project</span></a>
          <div className="menu-wrap" ref={menuRef}><button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={21} />}</button></div>
        </div>
      </header>
      {menuOpen && <div className="menu-overlay" role="dialog" aria-label="Amplify Studio menu"><div className="menu-overlay-inner"><div className="menu-overlay-kicker">Menu / Choose a direction</div><nav className="menu-overlay-links">{menuItems.map(({ href, label }, index) => <Link href={href} key={href} className={location === href ? "active" : ""} style={{ "--menu-index": index } as CSSProperties}>{label}<span>↗</span></Link>)}</nav><div className="menu-overlay-footer"><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a><a href="mailto:samstudiohub@gmail.com">samstudiohub@gmail.com</a></div></div></div>}
      <main className="site-main">{children}</main>
      <nav className="mobile-bottom-dock" aria-label="Mobile navigation">{directNavItems.map(({ href, label, shortLabel, icon: Icon }) => <Link href={href} key={href} className={location === href ? "active" : ""}><Icon size={16} /><span>{shortLabel || label}</span></Link>)}</nav>
      <InstallPrompt />
    </div>
  );
}

export function PageIntro({ kicker, title, description }: { kicker: string; title: ReactNode; description?: ReactNode }) { return <div className="page-intro motion-section"><p className="eyebrow" data-reveal>{kicker}</p><h1 className="display-title" data-reveal>{title}</h1>{description && <p className="intro-copy" data-reveal>{description}</p>}</div>; }
