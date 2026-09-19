import { ArrowUpRight } from "lucide-react";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";

const projects = [
  {
    image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/styleinlagos.jpg",
    title: "StyleInLagos",
    description: "Fashion campaign flyer with pricing and delivery info built in.",
    className: "portfolio-card-tall",
  },
  {
    image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/justeatandchill.jpg",
    title: "Just Eat & Chill",
    description: "Four-tier festive food package flyer, priced and easy to compare.",
    className: "portfolio-card-wide",
  },
  {
    image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/mayorbeautyplace.jpg",
    title: "Mayor Beauty Place",
    description: "Before/after lash flyer with UK and Nigeria pricing side by side.",
    className: "",
  },
  {
    image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/nanaclothing.jpg",
    title: "Nana Clothing",
    description: "Moody, high-end gown campaign built around one striking photo.",
    className: "portfolio-card-tall",
  },
  {
    image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/hatzgadgets.jpg",
    title: "Hatz Gadgets Store",
    description: "Product flyer built to highlight price and trust info fast.",
    className: "",
  },
];

function markImageUnavailable(event: React.SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.style.display = "none";
  event.currentTarget.parentElement?.classList.add("image-error");
}

export default function Portfolio() {
  return (
    <div className="page inner-page portfolio-page">
      <PageIntro kicker="Selected work / 05 pieces" title={<>Proof, not<br /><em>promises.</em></>} description="A few ways we’ve helped small businesses show up with more clarity, confidence and character." />
      <section className="portfolio-grid" aria-label="Selected Amplify Studio work">
        {projects.map(({ image, title, description, className }) => (
          <figure className={`portfolio-card ${className}`} key={title}>
            <div className="portfolio-image-wrap">
              <div className="portfolio-fallback" aria-hidden="true"><span>AMP / {title.slice(0, 2).toUpperCase()}</span><strong>{title}</strong></div>
              <img src={image} alt={title} loading="lazy" onError={markImageUnavailable} />
              <span className="portfolio-view">View <ArrowUpRight size={15} /></span>
            </div>
            <figcaption><div><h2>{title}</h2><p>{description}</p></div><span className="portfolio-caption-mark">✳</span></figcaption>
          </figure>
        ))}
      </section>
      <div className="portfolio-note"><p>Website, caption and video samples are shared directly — message us to see more.</p><a className="text-link" href={whatsappUrl()} target="_blank" rel="noreferrer">Ask for more <ArrowUpRight size={15} /></a></div>
    </div>
  );
}
