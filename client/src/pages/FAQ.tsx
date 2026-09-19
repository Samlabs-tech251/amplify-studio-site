import { ArrowUpRight } from "lucide-react";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";

const questions = [
  ["What services do you offer?", "Graphics design, static website design, caption writing, and video editing."],
  ["How much does it cost?", "Depends on the project — message us on WhatsApp for a direct quote."],
  ["How long does a project take?", "Most flyers/graphics in 24–48 hours; websites take longer depending on content readiness."],
  ["I’m not in Nigeria, can I still work with you?", "Yes, everything is handled through WhatsApp."],
  ["How do I get started?", "Tap any WhatsApp button on this page."],
];

export default function FAQ() {
  return (
    <div className="page inner-page faq-page">
      <PageIntro kicker="FAQ / Good questions" title={<>Let’s clear<br /><em>the air.</em></>} description="The short version of what you need to know before we make something good together." />
      <section className="faq-list" aria-label="Frequently asked questions">
        {questions.map(([question, answer], index) => (
          <details className="faq-item" key={question} open={index === 0}>
            <summary><span className="faq-number">0{index + 1}</span><span>{question}</span><span className="faq-plus">+</span></summary>
            <div className="faq-answer"><p>{answer}</p></div>
          </details>
        ))}
      </section>
      <section className="faq-footer-card"><div><p className="eyebrow">Still curious?</p><h2>Let’s talk it<br /><em>through.</em></h2></div><a className="text-link" href={whatsappUrl()} target="_blank" rel="noreferrer">Message us on WhatsApp <ArrowUpRight size={16} /></a></section>
    </div>
  );
}
