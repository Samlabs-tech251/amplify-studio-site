import { ArrowRight, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { whatsappUrl } from "../components/AmplifyShell";

export default function Home() {
  return (
    <div className="page page-home">
      <section className="hero-section">
        <div className="hero-copy">
          <div className="status-pill"><span className="status-dot" /> Lagos / working worldwide</div>
          <p className="eyebrow hero-eyebrow">Creative direction for the next chapter</p>
          <h1 className="display-title hero-title">Turn up your brand&apos;s <em>volume.</em></h1>
          <p className="hero-subtext">Amplify Studio designs flyers, builds websites, writes captions and edits video for small businesses ready to look as good online as they are in person.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noreferrer">
              <MessageCircle size={17} /> Start a conversation
            </a>
            <Link className="button button-quiet" href="/portfolio">See our work <ArrowUpRight size={16} /></Link>
          </div>
        </div>

        <div className="hero-art" aria-label="Amplify Studio growth mark">
          <div className="art-grid" />
          <div className="art-caption">AMPLIFY / 01</div>
          <div className="signal-bars" aria-hidden="true">
            <span className="bar bar-one" /><span className="bar bar-two" /><span className="bar bar-three" /><span className="bar bar-four" /><span className="bar bar-five" />
          </div>
          <div className="hero-mark-card">
            <svg viewBox="0 0 240 240" aria-hidden="true">
              <path d="M46,214 L72,214 L118,66 L94,66 Z" fill="#A97719" />
              <path d="M86.9,166 L153.1,166 L148.1,150 L91.9,150 Z" fill="#A97719" />
              <path d="M194,214 L168,214 L122,66 L113,73 L117,14 L155,59 L146,66 Z" fill="#F2CE6B" />
            </svg>
          </div>
          <span className="orbit-label">Small business<br />big presence</span>
          <span className="hero-stamp">SINCE<br /><strong>2024</strong></span>
        </div>
      </section>

      <section className="home-intro-band">
        <div className="band-label"><Sparkles size={15} /> What we do</div>
        <p>Good work deserves a good entrance. We make the digital part feel as considered as the real thing.</p>
        <Link href="/services" className="text-link">Explore services <ArrowRight size={15} /></Link>
      </section>

      <section className="home-services-preview">
        <div className="section-heading-row">
          <div><p className="eyebrow">The offering</p><h2 className="section-title">A sharper signal.</h2></div>
          <span className="section-index">01 — 04</span>
        </div>
        <div className="mini-service-grid">
          {[
            ["01", "Graphics design", "Make the scroll stop."],
            ["02", "Website design", "Look credible online."],
            ["03", "Caption writing", "Say it like you mean it."],
            ["04", "Video editing", "Hold attention longer."],
          ].map(([number, title, line]) => (
            <Link className="mini-service" href="/services" key={number}>
              <span className="mini-service-number">{number}</span>
              <div><h3>{title}</h3><p>{line}</p></div>
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
