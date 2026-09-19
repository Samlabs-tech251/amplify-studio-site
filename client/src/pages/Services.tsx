import { ArrowUpRight, Monitor, Palette, PenLine, Video } from "lucide-react";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";

const services = [
  {
    number: "01",
    title: "Graphics Design",
    icon: Palette,
    description: "Flyers, posters, motion graphics and social media designs that stop the scroll.",
    message: "Hi Amplify Studio! I'm interested in graphics design (flyers/posters/social media designs). Can you tell me more?",
  },
  {
    number: "02",
    title: "Website Design",
    icon: Monitor,
    description: "Clean, mobile-friendly static websites built to load fast and turn visitors into customers.",
    message: "Hi Amplify Studio! I'm interested in getting a website built for my business. Can we talk?",
  },
  {
    number: "03",
    title: "Caption Writing",
    icon: PenLine,
    description: "Captions that sound like your brand and actually get read.",
    message: "Hi Amplify Studio! I'd like help with caption writing for my business. What's your offer?",
  },
  {
    number: "04",
    title: "Video Editing",
    icon: Video,
    description: "Reels and promo videos edited to hold attention from the first second.",
    message: "Hi Amplify Studio! I'm interested in your video editing service. What's your offer?",
    tag: "Now booking",
  },
];

export default function Services() {
  return (
    <div className="page inner-page">
      <PageIntro kicker="Services / 04 ways to be seen" title={<>Make the right<br /><em>kind</em> of noise.</>} description="Pick the piece you need, tap through, and let’s start a conversation. Everything stays personal, straightforward and on WhatsApp." />
      <section className="service-list" aria-label="Amplify Studio services">
        {services.map(({ number, title, icon: Icon, description, message, tag }) => (
          <a className="service-row" href={whatsappUrl(message)} target="_blank" rel="noreferrer" key={title}>
            <span className="service-number">{number}</span>
            <span className="service-icon"><Icon size={21} strokeWidth={1.5} /></span>
            <span className="service-body"><span className="service-title-line"><h2>{title}</h2>{tag && <span className="tag">{tag}</span>}</span><p>{description}</p></span>
            <ArrowUpRight className="service-arrow" size={22} strokeWidth={1.4} />
          </a>
        ))}
      </section>
      <div className="page-note"><span>Tap any service to open WhatsApp with a ready-made message.</span><span className="note-rule" /></div>
    </div>
  );
}
