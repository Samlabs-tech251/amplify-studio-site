import { ArrowUpRight } from "lucide-react";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";

const projects = [
  ["https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/styleinlagos.jpg", "StyleInLagos", "Fashion campaign flyer with pricing and delivery info built in."],
  ["https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/justeatchill.jpg", "Just Eat & Chill", "Four-tier festive food package flyer, priced and easy to compare."],
  ["https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/mayorbeauty.jpg", "Mayor Beauty Place", "Before/after lash flyer with UK and Nigeria pricing side by side."],
  ["https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/nanaclothing.jpg", "Nana Clothing", "Moody, high-end gown campaign built around one striking photo."],
  ["https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/hatzgadgets.jpg", "Hatz Gadgets Store", "Product flyer built to highlight price and trust info fast."],
] as const;

export default function Portfolio() {
  return (
    <div className="page inner-page portfolio-page">
      <PageIntro kicker="Selected work / 05 pieces" title={<>Proof, not<br /><em>promises.</em></>} description="A few ways we’ve helped small businesses show up with more clarity, confidence and character. Each piece starts with the same question: what should someone understand or feel within the first few seconds?" />
      <section className="portfolio-grid motion-section" aria-label="Selected Amplify Studio work">
        {projects.map(([image, title, description]) => (
          <figure className="portfolio-card" data-reveal key={title}>
            <div className="portfolio-image-wrap"><img src={image} alt={title} loading="lazy" /><span className="portfolio-view">View <ArrowUpRight size={15} /></span></div>
            <figcaption><div><h2>{title}</h2><p>{description}</p></div><span className="portfolio-caption-mark">✳</span></figcaption>
          </figure>
        ))}
      </section>
      <div className="portfolio-note" data-reveal><p>Website, caption and video samples are shared directly — message us to see more. We can also talk through the kind of work your own business needs next.</p><a className="text-link" href={whatsappUrl()} target="_blank" rel="noreferrer">Ask for more <ArrowUpRight size={15} /></a></div>
    </div>
  );
}
