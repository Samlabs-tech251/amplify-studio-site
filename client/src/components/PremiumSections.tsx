import { useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Mail, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import { whatsappUrl } from "./AmplifyShell";
import { impactStats, packages, premiumFaqs, processSteps, selectedWork, studioPromise } from "../data/siteData";

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

function Stat({ value, label }: { value: string; label: string }) {
  return <div className="stat-item" data-reveal><strong>{value}</strong><span>{label}</span></div>;
}

export function ProcessSection() {
  return <section className="premium-section process-section motion-section" aria-labelledby="process-title"><div className="process-intro" data-reveal><p className="eyebrow">The process / Clear by design</p><h2 id="process-title" className="section-title">From rough idea<br /><em>to ready.</em></h2><p className="section-lede">A good process keeps the work feeling focused. Each step gives the next one something stronger to build on.</p></div><div className="process-stack">{processSteps.map((step, index) => <article className="process-card" style={{ "--step-index": index } as CSSProperties} data-reveal key={step.number}><span className="process-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.body}</p></div><span className="process-marker">✦</span></article>)}</div></section>;
}

export function StudioPromiseSection() {
  return <section id="reviews" className="premium-section promise-section motion-section" aria-labelledby="promise-title"><div className="premium-section-heading" data-reveal><div><p className="eyebrow">Studio promise / How we work</p><h2 id="promise-title" className="section-title">What you can<br /><em>count on.</em></h2><p className="section-lede">A clear, human process matters as much as the final piece. These are the standards we bring to every project, whether it starts with a flyer or a full digital presence.</p></div></div><div className="promise-grid">{studioPromise.map((item) => <article className="promise-card" data-reveal key={item.title}><span className="promise-mark">✦</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div><a className="button button-primary promise-button" href={whatsappUrl("Hi, I'd like to request a free sample")} target="_blank" rel="noreferrer">Request a free sample <ArrowUpRight size={16} /></a></section>;
}

export function PackagesSection() {
  return <section className="premium-section packages-section motion-section" aria-labelledby="packages-title"><div className="premium-section-heading" data-reveal><div><p className="eyebrow">Packages / A place to begin</p><h2 id="packages-title" className="section-title">Choose the<br /><em>right scale.</em></h2><p className="section-lede">Every business starts from a different place. These are simple starting points for a conversation, not rigid boxes.</p></div></div><div className="packages-grid">{packages.map((pack, index) => <article className={`package-card ${index === 1 ? "is-popular" : ""}`} data-reveal key={pack.name}>{index === 1 && <span className="popular-tag">Most popular</span>}<p className="eyebrow">{pack.name}</p><h3>{pack.hint}</h3><div className="package-price"><small>NGN</small>{pack.price}</div><ul>{pack.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}</ul><a className="button button-quiet" href={whatsappUrl(pack.message)} target="_blank" rel="noreferrer">Choose on WhatsApp <ArrowUpRight size={15} /></a></article>)}</div><p className="custom-quote">Need something different? <a href={whatsappUrl("Hi, I need a custom quote for my project")} target="_blank" rel="noreferrer">Ask for a custom quote on WhatsApp.</a></p></section>;
}

export function PremiumFaqSection() {
  const [open, setOpen] = useState(0);
  return <section className="premium-section premium-faq-section motion-section" aria-labelledby="premium-faq-title"><div className="premium-section-heading" data-reveal><div><p className="eyebrow">FAQ / Before we begin</p><h2 id="premium-faq-title" className="section-title">The useful<br /><em>answers.</em></h2></div></div><div className="premium-faq-list">{premiumFaqs.map((item, index) => <div className={`premium-faq-item ${open === index ? "is-open" : ""}`} data-reveal key={item.question}><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}><span>0{index + 1}</span><strong>{item.question}</strong><i>+</i></button><div className="premium-faq-answer"><p>{item.answer}</p></div></div>)}</div></section>;
}

export function FinalCtaFooter() {
  return <><section className="premium-final-cta motion-section" data-reveal><p className="eyebrow">Ready when you are</p><h2>Let’s build something<br /><em>people remember.</em></h2><a className="button button-primary magnetic" href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Start a conversation <ArrowUpRight size={16} /></a></section><footer className="premium-footer"><div><Link href="/" className="footer-brand">Amplify<span>Studio</span></Link><p>Visual and digital presence for businesses ready for what is next.</p></div><div className="footer-links"><a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a><a href="mailto:samstudiohub@gmail.com"><Mail size={15} /> Email</a></div><small>© {new Date().getFullYear()} Amplify Studio</small></footer></>;
}
