export const selectedWork = [
  { title: "Maison Crumb", category: "Website Development", filter: "websites", tag: "Live sample", result: "Haute patisserie presented through an arched hero, bestseller highlight and cart.", image: "/portfolio/maison-crumb.webp", challenge: "The patisserie needed a refined mobile storefront that made its products feel special at first glance.", approach: "We centered the experience on an arched hero photo, a Fresh at 5am badge and a clear bestseller moment.", deliverables: "A haute patisserie site with product storytelling, bestseller highlighting and cart access.", liveUrl: "https://maison-crumb-omega.vercel.app/", beforeAfter: null },
  { title: "Kings & Co.", category: "Website Development", filter: "websites", tag: "Live sample", result: "Lagos barbershop site with open-hours context, booking actions and a floating booking button.", image: "/portfolio/kings-and-co.webp", challenge: "The barbershop needed a direct mobile path from seeing the offer to booking a cut.", approach: "We made the open-hours badge and booking actions visible around a focused barbershop introduction.", deliverables: "A Lagos barbershop site with Book a cut, View services and floating booking actions.", liveUrl: "https://kingsandco-nine.vercel.app/", beforeAfter: null },
  { title: "GreenElec", category: "Website Development", filter: "websites", tag: "Live sample", result: "Commercial solar site for Lagos with savings and site-survey actions up front.", image: "/portfolio/green-elec.webp", challenge: "The commercial solar offer needed to explain its value clearly to Lagos businesses and institutions.", approach: "We placed the commercial solar message, location context and two practical next steps high in the page.", deliverables: "A commercial solar site with Estimate My Savings and Request a Site Survey actions.", liveUrl: "https://green-elec.vercel.app/", beforeAfter: null },
  { title: "Noir Blades", category: "Website Development", filter: "websites", tag: "Live sample", result: "A dark barbershop experience with an appointment call to action and services marquee.", image: "/portfolio/noir-blades.webp", challenge: "The barbershop needed a bold digital identity that could move visitors toward an appointment.", approach: "We used the dark red visual direction, a strong opening statement and repeated service cues.", deliverables: "A barbershop site with an appointment call to action and services marquee.", liveUrl: "https://noir-blades.vercel.app/", beforeAfter: null },
  { title: "Maison Aurelia", category: "Website Development", filter: "websites", tag: "Live sample", result: "Couture boutique site with an atmospheric hero, wishlist, cart and Book a visit action.", image: "/portfolio/maison-aurelia.webp", challenge: "The couture boutique needed an atmospheric digital space for browsing and private-visit intent.", approach: "We led with an editorial hero and kept wishlist, cart and visit actions close to the collection.", deliverables: "A couture boutique site with atmospheric presentation, wishlist, cart and Book a visit.", liveUrl: "https://maison-aurelia-mauve.vercel.app/", beforeAfter: null },
  { title: "Power Dressing Poster", category: "Poster Design", filter: "flyers", tag: "", result: "A bold fashion promo poster with clear pricing and a WhatsApp call to action.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/styleinlagos.jpg", challenge: "The fashion promotion needed its offer, pricing and contact action to read quickly.", approach: "We gave the fashion message a bold hierarchy and kept the pricing and WhatsApp action prominent.", deliverables: "A fashion promo poster with clear pricing and a WhatsApp call to action.", liveUrl: "", beforeAfter: null },
  { title: "Just Eat & Chill", category: "Flyer Design", filter: "flyers", tag: "", result: "Clear packages that made the festive offer easier to choose.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/justeatchill.jpg", challenge: "Several food packages needed to be understood at a glance.", approach: "We organized the offer into a visual hierarchy that lets the eye move from choice to detail.", deliverables: "A promotional flyer with structured package information and a clear next step.", liveUrl: "", beforeAfter: null },
  { title: "Mayor Beauty Place", category: "Poster Design", filter: "flyers", tag: "", result: "Before-and-after pricing made instantly understandable.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/mayorbeauty.jpg", challenge: "The service and pricing information needed to feel simpler to compare.", approach: "We gave the key offer a stronger order and kept supporting details easy to scan.", deliverables: "A beauty promotion poster with clear pricing and visual emphasis.", liveUrl: "", beforeAfter: null },
  { title: "Nana Clothing", category: "Social Graphics", filter: "branding", tag: "", result: "A stronger visual mood for a premium clothing launch.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/nanaclothing.jpg", challenge: "The launch needed a visual direction that felt considered and ownable.", approach: "We led with a focused mood, image treatment and typography that could carry across social content.", deliverables: "A social campaign direction with a cohesive visual language.", liveUrl: "", beforeAfter: null },
  { title: "Hatz Gadgets Store", category: "Product Graphics", filter: "branding", tag: "", result: "Trust and price information brought forward at a glance.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/hatzgadgets.jpg", challenge: "Product details and pricing needed a cleaner visual signal.", approach: "We brought the most useful information forward without losing the energy of the offer.", deliverables: "A product-focused graphic with clearer hierarchy and visual confidence.", liveUrl: "", beforeAfter: null },
] as const;

export const impactStats = [
  { value: "24-48h", label: "Typical turnaround on graphics" },
  { value: "Mobile-first", label: "Every site built for phones first" },
  { value: "WhatsApp", label: "Direct line to the person doing the work" },
  { value: "Free preview", label: "See a sample before you commit" },
] as const;

export const processSteps = [
  { number: "01", title: "Discover", body: "We get clear on the business, the audience and the one thing people should understand first.", clientAction: "You share your brand and goals." },
  { number: "02", title: "Design", body: "We shape the visual direction, hierarchy and details into a system that feels like you.", clientAction: "You react to the first direction." },
  { number: "03", title: "Build", body: "We turn the approved direction into polished, responsive work that is ready to meet the real world.", clientAction: "You provide the final details we need." },
  { number: "04", title: "Launch", body: "We check the edges, hand things over clearly and help you take the next visible step.", clientAction: "You approve the handover and take it live." },
] as const;

export const serviceDetails = {
  "Website Development": { bestFor: "Businesses that need a credible digital home.", whatYouGet: "A responsive structure, clear content flow and focused calls to action.", turnaround: "", portfolioFilter: "websites" },
  "Graphics Design": { bestFor: "Offers, launches and everyday moments that need a sharper signal.", whatYouGet: "A polished flyer, poster or social graphic built around the message.", turnaround: "24-48 hours", portfolioFilter: "flyers" },
  "Video Editing": { bestFor: "Raw clips that need more pace and polish.", whatYouGet: "A focused edit shaped for the platform and the moment.", turnaround: "", portfolioFilter: "branding" },
  "Caption Writing": { bestFor: "Businesses that know what they offer but need help saying it.", whatYouGet: "Clear, human copy with a useful angle and a confident next step.", turnaround: "", portfolioFilter: "branding" },
} as const;

export const aboutContent = {
  story: "Amplify Studio is a small, focused creative studio for businesses that are ready to look as credible online as they already are in person. We bring practical digital thinking, clear design and fast personal communication together so the next step feels easier to take.",
  tools: ["Figma", "Canva", "Photoshop", "HTML/CSS/JS"],
  principles: [
    { title: "Clarity first", body: "People should understand what you do and why it matters without having to work for it." },
    { title: "Mobile first", body: "The first experience is built for the small screen, where most people will meet your work." },
    { title: "Fast replies", body: "Questions should move through a direct, human line instead of getting lost in a queue." },
  ],
} as const;

export const studioPromise = [
  { title: "Sample first", body: "See a preview of your design before you commit." },
  { title: "Fast turnaround", body: "Most smaller graphics in 24-48 hours." },
  { title: "Direct line", body: "You talk to the person doing the work, on WhatsApp." },
  { title: "Revisions built in", body: "Included in every package." },
] as const;
export const packages = [
  { name: "Starter", hint: "For one clear next step", quoteLabel: "Request a quote", features: ["One focused creative deliverable", "Mobile-first direction", "One revision round"], message: "Hi Amplify Studio, I'd like a quote for the Starter package." },
  { name: "Professional", hint: "For a stronger presence", quoteLabel: "Request a quote", features: ["A connected set of creative deliverables", "Strategic visual direction", "Two revision rounds", "Priority communication"], message: "Hi Amplify Studio, I'd like a quote for the Professional package." },
  { name: "Premium", hint: "For the full signal", quoteLabel: "Request a quote", features: ["A complete digital and creative system", "Website-led direction", "Three revision rounds", "Launch support"], message: "Hi Amplify Studio, I'd like a quote for the Premium package." },
] as const;
export const premiumFaqs = [
  { question: "How long does a project take?", answer: "Most smaller graphics projects can move in 24–48 hours. Websites and connected packages take longer depending on the scope and how ready the content is." },
  { question: "How many revisions are included?", answer: "Each package includes a clear revision allowance. We use the first direction to get aligned early, then refine with purpose instead of endlessly circling." },
  { question: "How does payment work?", answer: "We confirm the scope and payment terms before work begins. Message us on WhatsApp and we will share a direct quote for the project you have in mind." },
  { question: "Can you help with hosting?", answer: "Yes. We can guide you through the right hosting setup for your website and help make the handover feel straightforward." },
  { question: "What do you need from me?", answer: "A rough brief, your business details, any useful images or copy, and a sense of what you want people to notice first is enough to begin." },
] as const;
export const faqQuestions = [
  { question: "What services do you offer?", answer: "Graphics design, static website design, caption writing, and video editing." },
  { question: "How much does it cost?", answer: "Packages provide a clear starting point. Message us on WhatsApp if your project needs a more specific quote." },
  { question: "How long does a project take?", answer: "Most flyers and graphics can move in 24–48 hours; websites take longer depending on the scope and content readiness." },
  { question: "What do you need from me to start?", answer: "Your logo, text, photos and preferred colors are a useful starting point. A rough brief is enough; we can shape the rest together." },
  { question: "Can I see a sample before paying?", answer: "Yes, a preview is shown first." },
  { question: "Do you design for social media too?", answer: "Yes. Social graphics and caption writing are part of the studio's creative support." },
  { question: "What happens after launch?", answer: "We check the edges, hand things over clearly and help you take the next visible step." },
  { question: "Can I request something outside the packages?", answer: "Yes. Message us on WhatsApp and we can discuss a custom quote." },
] as const;
export const trustBar = ["Free sample preview", "Mobile-first", "WhatsApp support", "Fast revisions"] as const;
