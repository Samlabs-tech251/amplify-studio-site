import { ArrowDown, ArrowRight, MessageCircle, RotateCcw, Sparkles } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { whatsappUrl } from "./AmplifyShell";
import { conversationalHero } from "../data/siteData";

type Answer = { label: string; value: string };

function Avatar({ reaction, pointer }: { reaction: boolean; pointer: { x: number; y: number } }) {
  return <div className={`guided-avatar ${reaction ? "is-reacting" : ""}`} aria-label="Amplify Studio guide" role="img">
    <div className="avatar-halo" />
    <svg viewBox="0 0 260 260" aria-hidden="true">
      <defs><radialGradient id="orbFill" cx="35%" cy="25%"><stop offset="0" stopColor="#F2E9DA" stopOpacity=".92" /><stop offset=".42" stopColor="#D4A24C" stopOpacity=".74" /><stop offset="1" stopColor="#5B3299" stopOpacity=".92" /></radialGradient><filter id="orbBlur"><feGaussianBlur stdDeviation="8" /></filter></defs>
      <circle cx="130" cy="130" r="91" fill="url(#orbFill)" opacity=".9" />
      <circle cx="106" cy="91" r="30" fill="#F2E9DA" opacity=".16" filter="url(#orbBlur)" />
      <g className="avatar-face" style={{ transform: `translate(${pointer.x * 8}px, ${pointer.y * 6}px)` }}>
        <ellipse cx="101" cy="121" rx="10" ry="14" fill="#07060D" /><ellipse cx="159" cy="121" rx="10" ry="14" fill="#07060D" />
        <circle cx="104" cy="117" r="3.5" fill="#F2E9DA" /><circle cx="162" cy="117" r="3.5" fill="#F2E9DA" />
        <path d="M113 164 Q130 176 147 164" fill="none" stroke="#07060D" strokeWidth="5" strokeLinecap="round" />
      </g>
      <circle cx="207" cy="65" r="7" fill="#D4A24C" /><circle cx="207" cy="65" r="18" fill="none" stroke="#D4A24C" strokeOpacity=".35" strokeWidth="4" />
    </svg>
    <span className="avatar-sparkle avatar-sparkle-one">✦</span><span className="avatar-sparkle avatar-sparkle-two">✦</span>
  </div>;
}

export function GuidedHero() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [typed, setTyped] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [reaction, setReaction] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const typingTimer = useRef<number | null>(null);
  const currentStep = conversationalHero.steps[step];
  const isResult = step >= conversationalHero.steps.length;
  const recommendation = useMemo(() => {
    const goal = (answers.goal?.value || "not-sure") as keyof typeof conversationalHero.recommendations;
    const base = conversationalHero.recommendations[goal] || conversationalHero.recommendations["not-sure"];
    const business = answers.business?.label || "your business";
    const timing = answers.timing?.label || "when you are ready";
    return { ...base, business, timing };
  }, [answers]);

  useEffect(() => {
    setTyped(""); setTypingDone(false);
    if (isResult) return;
    let index = 0;
    typingTimer.current = window.setInterval(() => {
      index += 1;
      setTyped(currentStep.question.slice(0, index));
      if (index >= currentStep.question.length) { if (typingTimer.current) window.clearInterval(typingTimer.current); setTypingDone(true); }
    }, 28);
    return () => { if (typingTimer.current) window.clearInterval(typingTimer.current); };
  }, [currentStep?.question, isResult]);

  const choose = (answer: Answer) => {
    setAnswers((current) => ({ ...current, [currentStep.key]: answer }));
    setReaction(true);
    window.setTimeout(() => setReaction(false), 620);
    window.setTimeout(() => setStep((current) => current + 1), 260);
  };
  const startOver = () => { setAnswers({}); setStep(0); };
  const whatsappMessage = `Hi, I'd like to continue with Amplify Studio.\n\nWhat I want to build: ${answers.goal?.label}\nBusiness type: ${answers.business?.label}\nTimeline: ${answers.timing?.label}\n\nRecommendation: ${recommendation.package} — ${recommendation.title.replace("{business}", recommendation.business)}`;

  return <section className={`hero-section guided-hero hero-step-${Math.min(step, conversationalHero.steps.length)} motion-section`} aria-labelledby="guided-hero-title" onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); setPointer({ x: (event.clientX - (rect.left + rect.width / 2)) / rect.width, y: (event.clientY - (rect.top + rect.height / 2)) / rect.height }); }}>
    <div className="hero-glow" aria-hidden="true" /><div className="guided-hero-orbit guided-hero-orbit-one" aria-hidden="true" /><div className="guided-hero-orbit guided-hero-orbit-two" aria-hidden="true" />
    <div className="guided-hero-inner">
      <p className="eyebrow guided-hero-eyebrow">Creative direction for the next chapter</p>
      <p id="guided-hero-title" className="guided-headline">Make your business <em>impossible to miss.</em></p>
      <div className="guided-conversation" aria-live="polite">
      {!isResult ? <><div className="guided-bubble"><span>{typed}</span><i className={!typingDone ? "is-typing" : ""} /></div><Avatar reaction={reaction} pointer={pointer} /><div className={`guided-chips ${typingDone ? "is-ready" : ""}`} aria-label={currentStep.question}>{currentStep.options.map((option) => <button className="hero-chip" type="button" key={option.value} onClick={() => choose(option)} disabled={!typingDone}>{option.label}</button>)}</div></> : <div className="guided-result"><div className="guided-result-kicker"><Sparkles size={15} /> Here&apos;s what I&apos;d build for you</div><h2>{recommendation.title.replace("{business}", recommendation.business)}</h2><p>{recommendation.body.replace("{business}", recommendation.business).replace("{timing}", recommendation.timing)}</p><div className="guided-result-package"><span>Recommended package</span><strong>{recommendation.package}</strong></div><a className="button button-primary magnetic" href={whatsappUrl(whatsappMessage)} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Continue on WhatsApp <ArrowRight size={16} /></a><button className="guided-start-over" type="button" onClick={startOver}><RotateCcw size={13} /> Start over</button></div>}
      </div>
      <div className="guided-progress" aria-label={`Step ${Math.min(step + 1, conversationalHero.steps.length)} of ${conversationalHero.steps.length}`}><span><i style={{ width: `${((Math.min(step, conversationalHero.steps.length) / conversationalHero.steps.length) * 100) || 8}%` }} /></span><small>{isResult ? "Ready" : `0${step + 1} / 0${conversationalHero.steps.length}`}</small></div>
      <a className="guided-skip" href="#proof-of-work">Skip, show me the work <ArrowDown size={13} /></a>
    </div>
  </section>;
}
