import { ArrowUpRight, MessageCircle, Quote } from "lucide-react";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";
import { aboutContent } from "../data/siteData";

export default function About() {
  return (
    <div id="about" className="page inner-page about-page">
      <PageIntro kicker="About / The why behind the work" title={<>Small team.<br /><em>Big signal.</em></>} description="Amplify Studio is a Nigerian creative studio helping small businesses grow online — with a little more clarity and a lot more character. We bring strategy, design and practical digital thinking together so the quality of the business is easier to see." />
      <section className="about-story motion-section">
        <div className="about-pullquote" data-reveal><Quote size={24} /><p>Presentation should be the bridge between how good you are and how good you look online.</p><span>— Amplify Studio</span></div>
        <div className="about-copy" data-reveal>
          <p>{aboutContent.story}</p>
          <p>Amplify Studio started with a simple idea: most small businesses don&apos;t lose customers because their product is weak — they lose them because their presentation doesn&apos;t match their quality.</p>
          <p>We fix that gap. Right now, Amplify Studio is a small, focused operation built around fast, personal service — every project goes straight through WhatsApp, no long forms or waiting on hold.</p>
        </div>
      </section>
      <section className="about-tools motion-section" aria-labelledby="tools-title"><div data-reveal><p className="eyebrow">The toolkit / Practical by design</p><h2 id="tools-title" className="section-title">Made with the<br /><em>right tools.</em></h2></div><div className="tool-chip-row" data-reveal>{aboutContent.tools.map((tool) => <span className="tool-chip" key={tool}>{tool}</span>)}</div></section>
      <section className="about-principles motion-section" aria-labelledby="principles-title"><div className="about-portrait-slot" data-reveal aria-label="Portrait placeholder"><span>AS</span></div><div className="principles-content"><div data-reveal><p className="eyebrow">The principles / What stays true</p><h2 id="principles-title" className="section-title">Simple things,<br /><em>done properly.</em></h2></div><div className="principles-grid">{aboutContent.principles.map((principle) => <article className="principle-card" data-reveal key={principle.title}><span>✦</span><h3>{principle.title}</h3><p>{principle.body}</p></article>)}</div></div></section>
      <section className="about-cta motion-section"><div data-reveal><p className="eyebrow">Let’s make your next move count</p><h2>Ready to sound<br /><em>louder?</em></h2><p className="cta-copy">You do not need a perfect brief to begin. Bring the idea, the problem or the next milestone and we will help turn it into a clearer piece of work.</p></div><a className="button button-primary" data-reveal href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Talk to us <ArrowUpRight size={16} /></a></section>
    </div>
  );
}
