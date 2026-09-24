import { ArrowUpRight, MessageCircle } from "lucide-react";
import { PageIntro } from "../components/AmplifyShell";

const FORMSPREE_ENDPOINT = "PASTE-YOUR-FORMSPREE-ENDPOINT-HERE";

export default function Reviews() {
  return (
    <div className="page inner-page reviews-page">
      <PageIntro kicker="Reviews / From the people we’ve helped" title={<>Good work<br /><em>speaks back.</em></>} description="We are collecting honest feedback from the businesses we work with. Send your experience through the form below and we will review it privately before adding anything to this page." />
      <section className="reviews-layout motion-section">
        <div className="review-form-card" data-reveal>
          <span className="contact-option-icon"><MessageCircle size={23} /></span>
          <p className="eyebrow">Share your experience</p>
          <h2>A few honest<br /><em>words help.</em></h2>
          <form className="contact-form review-form" action={FORMSPREE_ENDPOINT} method="POST">
            <label><span>Business name</span><input name="business_name" type="text" placeholder="Your business name" required /></label>
            <label><span>Your review</span><textarea name="review" placeholder="Tell us what it was like working with Amplify Studio" rows={7} required /></label>
            <button className="button button-primary" type="submit">Send review <ArrowUpRight size={16} /></button>
          </form>
          <p className="review-privacy">Your review is sent to our inbox for approval. It will not appear publicly until we add it manually.</p>
        </div>
        <div className="reviews-empty" data-reveal>
          <p className="eyebrow">Published reviews / 00</p>
          <h2>Nothing here<br /><em>yet.</em></h2>
          <p>We are leaving this space intentionally empty until real feedback comes in. No placeholders, no invented praise — just the words of businesses we have actually helped.</p>
        </div>
      </section>
    </div>
  );
}
