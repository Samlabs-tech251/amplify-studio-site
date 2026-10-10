import { ArrowUpRight } from "lucide-react";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";
import { faqQuestions } from "../data/siteData";

export default function FAQ() {
  return (
    <div id="faq" className="page inner-page faq-page">
      <PageIntro kicker="FAQ / Good questions" title={<>Let’s clear<br /><em>the air.</em></>} description="The short version of what you need to know before we make something good together. If your question is not here, send it anyway — a quick WhatsApp conversation is usually the fastest way to get a useful answer." />
      <section className="faq-list motion-section" aria-label="Frequently asked questions">
        {faqQuestions.map((item, index) => (
          <details className="faq-item" data-reveal key={item.question} open={index === 0}>
            <summary><span className="faq-number">0{index + 1}</span><span>{item.question}</span><span className="faq-plus">+</span></summary>
            <div className="faq-answer"><p>{item.answer}</p></div>
          </details>
        ))}
      </section>
      <section className="faq-footer-card motion-section"><div data-reveal><p className="eyebrow">Still curious?</p><h2>Let’s talk it<br /><em>through.</em></h2><p className="cta-copy">A good first conversation can be short, specific and completely low-pressure. Tell us what you are trying to make clearer and we will point you in the right direction.</p></div><a className="text-link" data-reveal href={whatsappUrl()} target="_blank" rel="noreferrer">Message us on WhatsApp <ArrowUpRight size={16} /></a></section>
    </div>
  );
}
