import { ArrowDown, ArrowRight, ArrowUpRight, Globe2, MessageCircle, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { whatsappUrl } from "../components/AmplifyShell";

const proofImages = [
  ["StyleInLagos", "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/styleinlagos.jpg"],
  ["Just Eat & Chill", "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/justeatchill.jpg"],
  ["Mayor Beauty Place", "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/mayorbeauty.jpg"],
  ["Nana Clothing", "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/nanaclothing.jpg"],
  ["Hatz Gadgets Store", "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/hatzgadgets.jpg"],
] as const;

const services = [
  ["01", "Website Development", "Build a digital home that makes your business easier to trust, find and choose."],
  ["02", "Graphics Design", "Make the scroll stop with a clearer visual signal."],
  ["03", "Video Editing", "Give your best moments more pace, polish and staying power."],
  ["04", "Caption Writing", "Say the right thing in a voice that sounds like you."],
];

function ProofStrip() {
  const items = [...proofImages, ...proofImages];
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    let pressed = false;
    let startX = 0;
    let startScroll = 0;
    const down = (event: PointerEvent) => {
      pressed = true;
      startX = event.clientX;
      startScroll = rail.scrollLeft;
      rail.setPointerCapture(event.pointerId);
      rail.classList.add("is-dragging");
    };
    const move = (event: PointerEvent) => {
      if (!pressed) return;
      rail.scrollLeft = startScroll - (event.clientX - startX);
    };
    const up = () => {
      pressed = false;
      rail.classList.remove("is-dragging");
    };
    rail.addEventListener("pointerdown", down);
    rail.addEventListener("pointermove", move);
    rail.addEventListener("pointerup", up);
    rail.addEventListener("pointercancel", up);
    return () => {
      rail.removeEventListener("pointerdown", down);
      rail.removeEventListener("pointermove", move);
      rail.removeEventListener("pointerup", up);
      rail.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <section className="proof-section motion-section" aria-labelledby="proof-title">
      <div className="section-heading-row proof-heading" data-reveal>
        <div>
          <p className="eyebrow">Selected work / proof of work</p>
          <h2 id="proof-title" className="section-title">Good ideas, in public.</h2>
          <p className="section-lede">A few recent pieces made for businesses that wanted to show up with more confidence. The point is not decoration; it is making the quality easier to see.</p>
        </div>
        <Link href="/portfolio" className="text-link">View full portfolio <ArrowUpRight size={15} /></Link>
      </div>
      <div className="proof-rail" ref={railRef} aria-label="Portfolio preview">
        <div className="proof-track">
          {items.map(([title, image], index) => (
            <Link className="proof-card" data-reveal href="/portfolio" key={`${title}-${index}`}>
              <div className="proof-card-image"><img src={image} alt={title} loading="lazy" /></div>
              <span>{title}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="page page-home">
      <section className="hero-section hero-minimal motion-section">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-minimal-copy" data-reveal>
          <p className="eyebrow hero-eyebrow">Creative direction for the next chapter</p>
          <h1 className="display-title hero-title">Make your business<br /><em>impossible to miss.</em></h1>
          <p className="hero-subtext">Amplify Studio builds the visual and digital presence small businesses need to look credible, clear and ready for what is next.</p>
          <div className="hero-actions"><a className="button button-primary" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Start a project</a></div>
        </div>
        <a className="hero-scroll-cue" href="#proof-of-work" aria-label="Scroll to proof of work"><span>Scroll to explore</span><ArrowDown size={15} /></a>
      </section>

      <div id="proof-of-work"><ProofStrip /></div>

      <section className="home-services-preview motion-section" aria-labelledby="offering-title">
        <div className="section-heading-row" data-reveal>
          <div><p className="eyebrow">The offering / 04 ways to be seen</p><h2 id="offering-title" className="section-title">A sharper signal.</h2><p className="section-lede">The right combination depends on where your business is today. We can strengthen one visible touchpoint or build the system that connects all of them.</p></div>
          <Link href="/services" className="text-link">Explore services <ArrowRight size={15} /></Link>
        </div>
        <div className="mini-service-grid">
          {services.map(([number, title, line]) => (
            <Link className="mini-service" data-reveal href="/services" key={number}>
              <span className="mini-service-number">{number}</span>
              <div><h3>{title}</h3><p>{line}</p></div>
              <ArrowUpRight size={17} />
            </Link>
          ))}
        </div>
      </section>

      <section className="website-focus motion-section" data-reveal>
        <div className="website-focus-mark"><Globe2 size={27} /></div>
        <div><p className="eyebrow">Our primary focus / website development</p><h2>Build the place<br /><em>your brand belongs.</em></h2><p>Social media can introduce you, but a website gives people somewhere calm and credible to land. We design fast, mobile-friendly sites that turn attention into understanding, and understanding into action.</p></div>
        <Link className="button button-quiet" href="/services">See website development <ArrowUpRight size={15} /></Link>
      </section>

      <section className="about-cta home-cta motion-section"><div data-reveal><p className="eyebrow">Ready when you are</p><h2>Let’s make your next move count.</h2><p className="cta-copy">Bring the rough idea, the half-finished brief or simply the feeling that your business should look sharper online. We will help turn it into a clear next step.</p></div><a className="button button-primary" data-reveal href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Start a conversation <ArrowUpRight size={16} /></a></section>
    </div>
  );
}
