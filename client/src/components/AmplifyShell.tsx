import { ReactNode, useEffect, useRef, useState } from "react";
import { CalendarDays, CircleHelp, Grid2X2, Home, Menu, MessageCircle, Palette, UserRound, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { BrandMark } from "./BrandMark";
import { InstallPrompt } from "./InstallPrompt";
import { StandaloneSplash } from "./StandaloneSplash";

export const WHATSAPP_NUMBER = "2349014350492";

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

const directNavItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Palette },
  { href: "/portfolio", label: "Portfolio", icon: Grid2X2 },
  { href: "/about", label: "About", icon: UserRound },
  { href: "/contact", label: "Contact", icon: CalendarDays },
];

const menuItems = [
  { href: "/faq", label: "FAQ", icon: CircleHelp },
  { href: "/reviews", label: "Reviews", icon: MessageCircle },
];

export function AmplifyShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeOnOutside = (event: PointerEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("pointerdown", closeOnOutside);
    return () => document.removeEventListener("pointerdown", closeOnOutside);
  }, []);

  return (
    <div className="site-frame">
      <header className="site-header">
        <Link href="/" aria-label="Amplify Studio home" onClick={() => setMenuOpen(false)}><BrandMark /></Link>
        <nav className="top-nav-links" aria-label="Primary navigation">
          {directNavItems.map(({ href, label }) => <Link href={href} key={href} className={location === href ? "active" : undefined} aria-current={location === href ? "page" : undefined}>{label}</Link>)}
        </nav>
        <div className="site-header-actions">
          <a className="header-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Chat with Amplify Studio on WhatsApp"><MessageCircle size={17} strokeWidth={1.8} /><span>Let’s talk</span></a>
          <div className="menu-wrap" ref={menuRef}>
            <button className={`menu-toggle ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <X size={20} /> : <Menu size={21} />}</button>
            {menuOpen && <div className="top-menu" role="menu">{menuItems.map(({ href, label, icon: Icon }) => <Link href={href} key={href} role="menuitem" className={location === href ? "active" : undefined} onClick={() => setMenuOpen(false)}><Icon size={16} /><span>{label}</span></Link>)}</div>}
          </div>
        </div>
      </header>

      <main className="site-main">{children}</main>
      <InstallPrompt />
      <StandaloneSplash />
    </div>
  );
}

export function PageIntro({ kicker, title, description }: { kicker: string; title: ReactNode; description?: ReactNode }) {
  return (
    <div className="page-intro motion-section">
      <p className="eyebrow" data-reveal>{kicker}</p>
      <h1 className="display-title" data-reveal>{title}</h1>
      {description && <p className="intro-copy" data-reveal>{description}</p>}
    </div>
  );
}
