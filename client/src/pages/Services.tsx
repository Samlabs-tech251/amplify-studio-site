import { ArrowUpRight, ChevronDown, Globe2, MessageCircle, Paintbrush, PlaySquare, Quote } from "lucide-react";
import { useState } from "react";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";

const services = [
  { number: "01", title: "Website Development", icon: Globe2, description: "Fast, mobile-friendly websites that make your business easier to trust, find and choose.", detail: "We shape the structure, visual rhythm and calls to action around what your customers actually need to know. The result is a focused digital home that feels like your business, not a template.", message: "Hi, I'm interested in your website development services", featured: true },
  { number: "02", title: "Graphics Design", icon: Paintbrush, description: "Flyers, posters and social designs that stop the scroll without losing the message.", detail: "We turn offers, launches and everyday business moments into visuals with a clear hierarchy. Every piece is made to be understood quickly and remembered longer.", message: "Hi, I'm interested in your graphics design services" },
  { number: "03", title: "Video Editing", icon: PlaySquare, description: "Reels and promo videos edited to hold attention from the first second.", detail: "We cut for pace, clarity and the platform where the video will live. You bring the raw moments; we help them land with more energy and intention.", message: "Hi, I'm interested in your video editing services", tag: "Now booking" },
  { number: "04", title: "Caption Writing", icon: Quote, description: "Captions that sound like your brand and actually get read.", detail: "We find the useful angle in what you are offering, then write with enough personality to feel human and enough clarity to move someone to act.", message: "Hi, I'm interested in your caption writing services" },
];

export default function Services() {
  const [open, setOpen] = useState(0);
  return (
    <div className="page inner-page services-page">
      <PageIntro kicker="Services / 04 ways to be seen" title={<>Make the right<br /><em>kind</em> of noise.</>} description="Our focus is building a stronger digital presence from the ground up, then supporting it with the creative pieces that keep your business visible. Choose one service or combine a few into a clearer signal." />
      <section className="service-list motion-section" aria-label="Amplify Studio services">
        {services.map(({ number, title, icon: Icon, description, detail, message, tag, featured }, index) => {
          const isOpen = open === index;
          return (
            <article className={`service-card service-full-section ${featured ? "service-card-featured" : ""} ${isOpen ? "is-open" : ""}`} data-reveal key={title}>
              <Icon className="service-watermark" aria-hidden="true" strokeWidth={0.7} />
              <button className="service-card-trigger" type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : index)}>
                <span className="service-number">{number}</span>
                <span className="service-icon service-icon-animated"><Icon size={25} strokeWidth={1.35} /></span>
                <span className="service-body"><span className="service-title-line"><h2>{title}</h2>{tag && <span className="tag">{tag}</span>}</span><p>{description}</p></span>
                <ChevronDown className="service-arrow" size={22} strokeWidth={1.4} />
              </button>
              <div className="service-detail" aria-hidden={!isOpen}><p>{detail}</p><a className="button button-primary" href={whatsappUrl(message)} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Ask about {title.toLowerCase()} <ArrowUpRight size={15} /></a></div>
            </article>
          );
        })}
      </section>
      <div className="page-note" data-reveal><span>Open a service to see the detail, then take the next step on WhatsApp.</span><span className="note-rule" /></div>
    </div>
  );
}
