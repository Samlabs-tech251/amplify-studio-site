import { ArrowUpRight, MessageCircle, Quote } from "lucide-react";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";

export default function About() {
  return (
    <div className="page inner-page about-page">
      <PageIntro kicker="About / The why behind the work" title={<>Small team.<br /><em>Big signal.</em></>} description="Amplify Studio is a Nigerian creative studio helping small businesses grow online — with a little more clarity and a lot more character." />
      <section className="about-story motion-section">
        <div className="about-pullquote" data-reveal><Quote size={24} /><p>Presentation should be the bridge between how good you are and how good you look online.</p><span>— Amplify Studio</span></div>
        <div className="about-copy" data-reveal>
          <p>Amplify Studio started with a simple idea: most small businesses don&apos;t lose customers because their product is weak — they lose them because their presentation doesn&apos;t match their quality.</p>
          <p>We fix that gap. Right now, Amplify Studio is a small, focused operation built around fast, personal service — every project goes straight through WhatsApp, no long forms or waiting on hold.</p>
          <p>As it grows, the goal stays the same: make it easy for businesses to look as credible online as they already are in person.</p>
        </div>
      </section>
      <section className="about-cta motion-section"><div data-reveal><p className="eyebrow">Let’s make your next move count</p><h2>Ready to sound<br /><em>louder?</em></h2></div><a className="button button-primary" data-reveal href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Talk to us <ArrowUpRight size={16} /></a></section>
    </div>
  );
}
