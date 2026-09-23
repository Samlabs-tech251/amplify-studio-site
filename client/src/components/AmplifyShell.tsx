import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { CircleHelp, Grid2X2, Home, MessageCircle, Palette, UserRound } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { InstallPrompt } from "./InstallPrompt";
import { StandaloneSplash } from "./StandaloneSplash";

export const WHATSAPP_NUMBER = "2349014350492";

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Palette },
  { href: "/portfolio", label: "Portfolio", icon: Grid2X2 },
  { href: "/about", label: "About", icon: UserRound },
  { href: "/faq", label: "FAQ", icon: CircleHelp },
];

export function AmplifyShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="site-frame">
      <header className="site-header">
        <Link href="/" aria-label="Amplify Studio home">
          <BrandMark />
        </Link>
        <a className="header-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Chat with Amplify Studio on WhatsApp">
          <MessageCircle size={17} strokeWidth={1.8} />
          <span>Let’s talk</span>
        </a>
      </header>

      <main className="site-main">{children}</main>

      <nav className="bottom-nav" aria-label="Primary navigation">
        <div className="bottom-nav-inner">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = location === href;
            return (
              <Link href={href} key={href} className={`nav-item ${active ? "active" : ""}`} aria-current={active ? "page" : undefined}>
                <Icon size={18} strokeWidth={active ? 2.1 : 1.6} />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
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
