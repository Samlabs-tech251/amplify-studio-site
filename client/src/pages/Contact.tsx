import { CalendarDays, MessageCircle } from "lucide-react";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";

export default function Contact() {
  return (
    <div className="page inner-page contact-page">
      <PageIntro kicker="Contact / Your next move" title={<>Let’s make<br /><em>it real.</em></>} description="Tell us what you are building, what feels unclear or what you want people to notice first. Choose the route that suits you and we will take it from there." />
      <section className="contact-options motion-section">
        <a className="contact-option contact-option-whatsapp" data-reveal href={whatsappUrl()} target="_blank" rel="noreferrer"><span className="contact-option-icon"><MessageCircle size={23} /></span><p className="eyebrow">Fastest route</p><h2>Message us<br /><em>on WhatsApp.</em></h2><p>Send the rough brief, a link, or just a sentence about what you need. We keep the first conversation simple, direct and personal.</p><span className="text-link">Open WhatsApp <span>↗</span></span></a>
        <div className="contact-option contact-option-calendar" data-reveal><span className="contact-option-icon"><CalendarDays size={23} /></span><p className="eyebrow">Prefer a time slot?</p><h2>Book<br /><em>a call.</em></h2><p>Choose a time that works for you and come with the questions you want answered. The calendar below is the easiest way to put a proper conversation on the books.</p><div className="calendly-inline-widget" data-url="https://calendly.com/amplifystudio" style={{ minWidth: "280px", height: "620px" }}><iframe title="Book a call with Amplify Studio" src="https://calendly.com/amplifystudio?hide_gdpr_banner=1" width="100%" height="620" frameBorder="0" /></div></div>
      </section>
    </div>
  );
}
