import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, Globe2, MessageCircle, Paintbrush, PlaySquare, Quote } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";

const services = [
  { number: "01", title: "Website Development", icon: Globe2, description: "Fast, mobile-friendly websites that make your business easier to trust, find and choose.", detail: "We shape the structure, visual rhythm and calls to action around what your customers actually need to know. The result is a focused digital home that feels like your business, not a template.", message: "Hi, I'm interested in your website development services", featured: true },
  { number: "02", title: "Graphics Design", icon: Paintbrush, description: "Flyers, posters and social designs that stop the scroll without losing the message.", detail: "We turn offers, launches and everyday business moments into visuals with a clear hierarchy. Every piece is made to be understood quickly and remembered longer.", message: "Hi, I'm interested in your graphics design services" },
  { number: "03", title: "Video Editing", icon: PlaySquare, description: "Reels and promo videos edited to hold attention from the first second.", detail: "We cut for pace, clarity and the platform where the video will live. You bring the raw moments; we help them land with more energy and intention.", message: "Hi, I'm interested in your video editing services", tag: "Now booking" },
  { number: "04", title: "Caption Writing", icon: Quote, description: "Captions that sound like your brand and actually get read.", detail: "We find the useful angle in what you are offering, then write with enough personality to feel human and enough clarity to move someone to act.", message: "Hi, I'm interested in your caption writing services" },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const velocity = useRef(0);
  const timer = useRef<number | null>(null);
  const radius = useMemo(() => (typeof window !== "undefined" && window.innerWidth < 600 ? 215 : 360), []);
  const move = (direction: number) => setActive((current) => (current + direction + services.length) % services.length);
  useEffect(() => { timer.current = window.setInterval(() => setActive((current) => (current + 1) % services.length), 6500); return () => { if (timer.current) window.clearInterval(timer.current); }; }, []);
  const pause = () => { if (timer.current) window.clearInterval(timer.current); timer.current = null; };
  const resume = () => { if (!timer.current) timer.current = window.setInterval(() => setActive((current) => (current + 1) % services.length), 6500); };
  return (
    <div className="page inner-page services-page service-carousel-page">
      <PageIntro kicker="Services / 04 ways to be seen" title={<>Make the right<br /><em>kind</em> of noise.</>} description="Our focus is building a stronger digital presence from the ground up, then supporting it with the creative pieces that keep your business visible. Choose one service or combine a few into a clearer signal." />
      <div className="service-marquee" aria-hidden="true"><div>Website Development <span>✦</span> Graphics Design <span>✦</span> Video Editing <span>✦</span> Caption Writing <span>✦</span> Website Development <span>✦</span> Graphics Design <span>✦</span> Video Editing <span>✦</span> Caption Writing <span>✦</span></div></div>
      <section className="service-ring-section motion-section" aria-label="Amplify Studio services" onPointerEnter={pause} onPointerLeave={resume} onTouchStart={pause} onTouchEnd={resume}>
        <div className="service-ring-viewport" onPointerDown={(event) => { setDragging(true); startX.current = event.clientX; lastX.current = event.clientX; lastTime.current = performance.now(); velocity.current = 0; event.currentTarget.setPointerCapture(event.pointerId); }} onPointerMove={(event) => { if (!dragging) return; const now = performance.now(); velocity.current = (event.clientX - lastX.current) / Math.max(now - lastTime.current, 1); lastX.current = event.clientX; lastTime.current = now; }} onPointerUp={(event) => { const delta = event.clientX - startX.current; if (Math.abs(delta) > 38 || Math.abs(velocity.current) > .45) { const direction = delta < 0 || velocity.current < 0 ? 1 : -1; move(direction); if (Math.abs(delta) > 150 || Math.abs(velocity.current) > 1.2) window.setTimeout(() => move(direction), 90); } setDragging(false); }}>
          <div className={`service-ring ${dragging ? "is-dragging" : ""}`} style={{ "--service-radius": `${radius}px` } as React.CSSProperties}>
            {services.map(({ number, title, icon: Icon, description, tag }, index) => {
              const delta = (index - active + services.length) % services.length;
              const signedDelta = delta > services.length / 2 ? delta - services.length : delta;
              const isActive = index === active;
              return <button key={title} type="button" className={`service-ring-card ${isActive ? "is-focused" : ""}`} style={{ "--ring-index": signedDelta } as React.CSSProperties} onClick={() => setActive(index)} aria-label={`Focus ${title}`} aria-pressed={isActive}><span className="service-ring-number">{number}</span><span className="service-ring-icon"><Icon size={38} strokeWidth={1.2} /></span><strong>{title}</strong><small>{tag || description}</small></button>;
            })}
          </div>
          <button className="service-ring-arrow service-ring-arrow-left" type="button" onClick={() => move(-1)} aria-label="Previous service"><ArrowLeft size={19} /></button>
          <button className="service-ring-arrow service-ring-arrow-right" type="button" onClick={() => move(1)} aria-label="Next service"><ArrowRight size={19} /></button>
        </div>
        <div className="service-ring-dots" role="tablist" aria-label="Choose service">{services.map((service, index) => <button key={service.title} type="button" className={index === active ? "is-active" : ""} onClick={() => setActive(index)} aria-label={`Show ${service.title}`} aria-selected={index === active} role="tab" />)}</div>
        <article className="service-ring-detail" data-reveal><div><p className="eyebrow">{services[active].number} / {services[active].tag || "Available now"}</p><h2>{services[active].title}</h2><p>{services[active].detail}</p></div><div className="service-ring-action"><span className="service-ring-price">From N...</span><a className="button button-primary" href={whatsappUrl(services[active].message)} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Ask about {services[active].title.toLowerCase()} <ArrowUpRight size={15} /></a></div></article>
      </section>
      <div className="page-note" data-reveal><span>Swipe, drag or choose a card to focus a service, then take the next step on WhatsApp.</span><span className="note-rule" /></div>
    </div>
  );
}
