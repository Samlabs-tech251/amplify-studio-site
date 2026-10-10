import { FormEvent, useState } from "react";
import { CalendarDays, Mail, MessageCircle, Send } from "lucide-react";
import { PageIntro, whatsappUrl } from "../components/AmplifyShell";
import { PremiumFaqSection, StudioPromiseSection } from "../components/PremiumSections";

const CALENDLY_LINK = "PASTE-YOUR-CALENDLY-LINK-HERE";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "e3117c8b-4083-431e-9fd7-3573979b5345";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const form = event.currentTarget;
    setSending(true);
    setFormStatus("idle");

    const formData = new FormData(form);
    formData.set("access_key", WEB3FORMS_ACCESS_KEY);
    formData.set("subject", "New inquiry from Amplify Studio website");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const result = await response.json().catch(() => null);

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Unable to send message");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    } finally {
      setSending(false);
    }
  }

  return (
    <div id="contact" className="page inner-page contact-page">
      <PageIntro kicker="Contact / Your next move" title={<>Let’s make<br /><em>it real.</em></>} description="Tell us what you are building, what feels unclear or what you want people to notice first. Choose the route that suits you and we will take it from there." />
      <section className="contact-options motion-section">
        <a className="contact-option contact-option-whatsapp" data-reveal href={whatsappUrl()} target="_blank" rel="noreferrer"><span className="contact-option-icon"><MessageCircle size={23} /></span><p className="eyebrow">Fastest route</p><h2>Message us<br /><em>on WhatsApp.</em></h2><p>Send the rough brief, a link, or just a sentence about what you need. We keep the first conversation simple, direct and personal.</p><span className="button button-primary">Open WhatsApp <span>↗</span></span></a>
        <div className="contact-option contact-option-calendar" data-reveal><span className="contact-option-icon"><CalendarDays size={23} /></span><p className="eyebrow">Prefer a time slot?</p><h2>Book<br /><em>a call.</em></h2><p>Choose a time that works for you and come with the questions you want answered. The calendar below is the easiest way to put a proper conversation on the books.</p><div className="calendly-empty-state" data-calendly-link={CALENDLY_LINK}><CalendarDays size={28} /><strong>Calendly link coming soon.</strong><span>We are preparing the booking calendar. Check back here shortly.</span><code>{CALENDLY_LINK}</code></div></div>
        <div className="contact-option contact-option-email" data-reveal><span className="contact-option-icon"><Mail size={23} /></span><p className="eyebrow">Prefer email?</p><h2>Send<br /><em>an email.</em></h2><p>Share a little context and we will get back to you with a clear next step. No polished brief required.</p><form className="contact-form" onSubmit={handleSubmit}><input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} /><input type="hidden" name="subject" value="New inquiry from Amplify Studio website" /><input type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} /><label><span>Name</span><input name="name" type="text" placeholder="Your name" required /></label><label><span>Email</span><input name="email" type="email" placeholder="you@example.com" required /></label><label><span>Message</span><textarea name="message" placeholder="Tell us what you are working on" rows={4} required /></label><button className="button button-primary" type="submit" disabled={sending}><Send size={16} /> {sending ? "Sending..." : "Send message"} <ArrowUpRightFallback /></button>{formStatus === "success" && <p className="form-status form-status-success" role="status">Message sent — we’ll be in touch soon.</p>}{formStatus === "error" && <p className="form-status form-status-error" role="alert">Something went wrong. Please try again or message us on WhatsApp.</p>}</form></div>
      </section>
      <div id="faq"><PremiumFaqSection /></div>
      <StudioPromiseSection />
    </div>
  );
}

function ArrowUpRightFallback() {
  return <span aria-hidden="true">↗</span>;
}
