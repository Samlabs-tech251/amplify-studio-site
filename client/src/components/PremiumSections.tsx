import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { whatsappUrl } from "./AmplifyShell";
import { impactStats, packages, premiumFaqs, processSteps, selectedWork, testimonials } from "../data/siteData";

export function SelectedWorkSection() {
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const startIndex = useRef(0);
  const next = () => setActive((value) => (value + 1) % selectedWork.length);
  const previous = () => setActive((value) => (value - 1 + selectedWork.length) % selectedWork.length);
  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => { setDragging(true); startX.current = event.clientX; startIndex.current = active; event.currentTarget.setPointerCapture(event.pointerId); };
  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => { if (Math.abs(event.clientX - startX.current) > 42) setActive(Math.max(0, Math.min(selectedWork.length - 1, startIndex.current + (event.clientX < startX.current ? 1 : -1)))); setDragging(false); };
  return <section className="premium-section work-section motion-section" aria-labelledby="selected-work-title">
    <div className="premium-section-heading" data-reveal><div><p className="eyebrow">Selected work / In motion</p><h2 id="selected-work-title" className="section-title">Work that<br /><em>moves people.</em></h2></div><div className="carousel-controls"><button type="button" aria-label="Previous project" onClick={previous}><ArrowLeft size={16} /></button><button type="button" aria-label="Next project" onClick={next}><ArrowRight size={16} /></button></div></div>
    <div className={`work-carousel ${dragging ? "is-dragging" : ""}`} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={() => setDragging(false)}>
      <div className="work-track" style={{ transform: `translateX(calc(-${active} * (min(76vw, 520px) + 18px)))` }}>{selectedWork.map((project, index) => <article className={`work-card ${index === active ? "is-active" : ""} ${Math.abs(index - active) === 1 ? "is-neighbor" : ""}`} data-reveal key={project.title}><div className="work-card-image"><img src={project.image} alt={project.title} loading="lazy" /></div><div className="work-card-copy"><div><span className="work-chip">{project.category}</span><h3>{project.title}</h3><p>{project.result}</p></div><ArrowUpRight size={19} /></div></article>)}</div>
    </div>
    <div className="carousel-dots" aria-label="Selected work slides">{selectedWork.map((project, index) => <button type="button" key={project.title} className={index === active ? "is-active" : ""} aria-label={`Show ${project.title}`} onClick={() => setActive(index)} />)}</div>
  </section>;
}

export function StatsSection() {
  return <section className="premium-section stats-section motion-section" aria-label="Amplify Studio impact"><div className="stats-grid">{impactStats.map((stat) => <Stat key={stat.label} {...stat} />)}</div></section>;
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) return; let start = 0; const timer = window.setInterval(() => { start += Math.max(1, Math.ceil(value / 22)); if (start >= value) { setCount(value); window.clearInterval(timer); } else setCount(start); }, 38); observer.disconnect(); return () => window.clearInterval(timer); }, { threshold: .45 }); observer.observe(node); return () => observer.disconnect(); }, [value]);
  return <div className="stat-item" ref={ref} data-reveal><strong>{count}{suffix}</strong><span>{label}</span></div>;
}

export function ProcessSection() {
  return <section className="premium-section process-section motion-section" aria-labelledby="process-title"><div className="process-intro" data-reveal><p className="eyebrow">The process / Clear by design</p><h2 id="process-title" className="section-title">From rough idea<br /><em>to ready.</em></h2><p className="section-lede">A good process keeps the work feeling focused. Each step gives the next one something stronger to build on.</p></div><div className="process-stack">{processSteps.map((step, index) => <article className="process-card" style={{ "--step-index": index } as CSSProperties} data-reveal key={step.number}><span className="process-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.body}</p></div><span className="process-marker">✦</span></article>)}</div></section>;
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => { if (paused) return; const timer = window.setInterval(() => setActive((value) => (value + 1) % testimonials.length), 4800); return () => window.clearInterval(timer); }, [paused]);
  return <section className="premium-section testimonials-section motion-section" aria-labelledby="testimonials-title"><div className="premium-section-heading" data-reveal><div><p className="eyebrow">Kind words / When the work lands</p><h2 id="testimonials-title" className="section-title">Leave room for<br /><em>real proof.</em></h2></div></div><div className="testimonial-viewport" onPointerDown={() => setPaused(true)} onPointerUp={() => setPaused(false)} onPointerCancel={() => setPaused(false)}><div className="testimonial-track" style={{ transform: `translateX(-${active * 100}%)` }}>{testimonials.map((item) => <article className="testimonial-card" data-reveal key={item.name}><span className="testimonial-mark">“</span><p>{item.quote}</p><strong>{item.name}</strong><small>{item.business}</small></article>)}</div></div><div className="carousel-dots">{testimonials.map((item, index) => <button type="button" key={item.name} className={index === active ? "is-active" : ""} aria-label={`Show testimonial ${index + 1}`} onClick={() => setActive(index)} />)}</div></section>;
}

export function PackagesSection() {
  return <section className="premium-section packages-section motion-section" aria-labelledby="packages-title"><div className="premium-section-heading" data-reveal><div><p className="eyebrow">Packages / A place to begin</p><h2 id="packages-title" className="section-title">Choose the<br /><em>right scale.</em></h2><p className="section-lede">Every business starts from a different place. These are simple starting points for a conversation, not rigid boxes.</p></div></div><div className="packages-grid">{packages.map((pack, index) => <article className={`package-card ${index === 1 ? "is-popular" : ""}`} data-reveal key={pack.name}>{index === 1 && <span className="popular-tag">Most popular</span>}<p className="eyebrow">{pack.name}</p><h3>{pack.hint}</h3><div className="package-price">N...</div><ul>{pack.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul><a className="button button-quiet" href={whatsappUrl(pack.message)} target="_blank" rel="noreferrer">Choose on WhatsApp <ArrowUpRight size={15} /></a></article>)}</div></section>;
}

export function PremiumFaqSection() {
  const [open, setOpen] = useState(0);
  return <section className="premium-section premium-faq-section motion-section" aria-labelledby="premium-faq-title"><div className="premium-section-heading" data-reveal><div><p className="eyebrow">FAQ / Before we begin</p><h2 id="premium-faq-title" className="section-title">The useful<br /><em>answers.</em></h2></div></div><div className="premium-faq-list">{premiumFaqs.map((item, index) => <div className={`premium-faq-item ${open === index ? "is-open" : ""}`} data-reveal key={item.question}><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>0{index + 1}</span><strong>{item.question}</strong><i>+</i></button><div className="premium-faq-answer"><p>{item.answer}</p></div></div>)}</div></section>;
}

export function FinalCtaFooter() {
  return <><section className="premium-final-cta motion-section" data-reveal><p className="eyebrow">Ready when you are</p><h2>Let’s build something<br /><em>people remember.</em></h2><a className="button button-primary magnetic" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Start a conversation <ArrowUpRight size={16} /></a></section><footer className="premium-footer"><div><Link href="/" className="footer-brand">Amplify<span>Studio</span></Link><p>Visual and digital presence for businesses ready for what is next.</p></div><div className="footer-links"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a><a href="mailto:samstudiohub@gmail.com"><Mail size={15} /> Email</a></div><small>© {new Date().getFullYear()} Amplify Studio</small></footer></>;
}
