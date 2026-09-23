import { CalendarDays, Mail, MessageCircle, Send } from "lucide-react";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";

const CALENDLY_LINK = "PASTE-YOUR-CALENDLY-LINK-HERE";
const FORMSPREE_ENDPOINT = "PASTE-YOUR-FORMSPREE-ENDPOINT-HERE";

export default function Contact() {
  return (
    <div className="page inner-page contact-page">
      <PageIntro kicker="Contact / Your next move" title={<>Let’s make<br /><em>it real.</em></>} description="Tell us what you are building, what feels unclear or what you want people to notice first. Choose the route that suits you and we will take it from there." />
      <section className="contact-options motion-section">
        <a className="contact-option contact-option-whatsapp" data-reveal href={whatsappUrl()} target="_blank" rel="noreferrer"><span className="contact-option-icon"><MessageCircle size={23} /></span><p className="eyebrow">Fastest route</p><h2>Message us<br /><em>on WhatsApp.</em></h2><p>Send the rough brief, a link, or just a sentence about what you need. We keep the first conversation simple, direct and personal.</p><span className="text-link">Open WhatsApp <span>↗</span></span></a>
        <div className="contact-option contact-option-calendar" data-reveal><span className="contact-option-icon"><CalendarDays size={23} /></span><p className="eyebrow">Prefer a time slot?</p><h2>Book<br /><em>a call.</em></h2><p>Choose a time that works for you and come with the questions you want answered. The calendar below is the easiest way to put a proper conversation on the books.</p><div className="calendly-empty-state" data-calendly-link={CALENDLY_LINK}><CalendarDays size={28} /><strong>Calendly link coming soon.</strong><span>We are preparing the booking calendar. Check back here shortly.</span><code>{CALENDLY_LINK}</code></div></div>
        <div className="contact-option contact-option-email" data-reveal><span className="contact-option-icon"><Mail size={23} /></span><p className="eyebrow">Prefer email?</p><h2>Send<br /><em>an email.</em></h2><p>Share a little context and we will get back to you with a clear next step. No polished brief required.</p><form className="contact-form" action={FORMSPREE_ENDPOINT} method="POST"><label><span>Name</span><input name="name" type="text" placeholder="Your name" required /></label><label><span>Email</span><input name="email" type="email" placeholder="you@example.com" required /></label><label><span>Message</span><textarea name="message" placeholder="Tell us what you are working on" rows={4} required /></label><button className="button button-primary" type="submit"><Send size={16} /> Send message <ArrowUpRightFallback /></button></form></div>
      </section>
    </div>
  );
}

function ArrowUpRightFallback() {
  return <span aria-hidden="true">↗</span>;
}
