export const selectedWork = [
  { title: "The Bakery Site", category: "Website Development", filter: "websites", result: "A warm digital home built to turn browsing into orders.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/styleinlagos.jpg", challenge: "The business needed a clearer digital home for its offer.", approach: "We shaped the page around the information a customer needs before deciding to reach out.", deliverables: "A mobile-first website direction with clear sections, visual rhythm and calls to action.", liveUrl: "", beforeAfter: null },
  { title: "Just Eat & Chill", category: "Flyer Design", filter: "flyers", result: "Clear packages that made the festive offer easier to choose.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/justeatchill.jpg", challenge: "Several food packages needed to be understood at a glance.", approach: "We organized the offer into a visual hierarchy that lets the eye move from choice to detail.", deliverables: "A promotional flyer with structured package information and a clear next step.", liveUrl: "", beforeAfter: null },
  { title: "Mayor Beauty Place", category: "Poster Design", filter: "flyers", result: "Before-and-after pricing made instantly understandable.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/mayorbeauty.jpg", challenge: "The service and pricing information needed to feel simpler to compare.", approach: "We gave the key offer a stronger order and kept supporting details easy to scan.", deliverables: "A beauty promotion poster with clear pricing and visual emphasis.", liveUrl: "", beforeAfter: null },
  { title: "Nana Clothing", category: "Social Graphics", filter: "branding", result: "A stronger visual mood for a premium clothing launch.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/nanaclothing.jpg", challenge: "The launch needed a visual direction that felt considered and ownable.", approach: "We led with a focused mood, image treatment and typography that could carry across social content.", deliverables: "A social campaign direction with a cohesive visual language.", liveUrl: "", beforeAfter: null },
  { title: "Hatz Gadgets Store", category: "Product Graphics", filter: "branding", result: "Trust and price information brought forward at a glance.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/hatzgadgets.jpg", challenge: "Product details and pricing needed a cleaner visual signal.", approach: "We brought the most useful information forward without losing the energy of the offer.", deliverables: "A product-focused graphic with clearer hierarchy and visual confidence.", liveUrl: "", beforeAfter: null },
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
  { name: "Starter", hint: "For one clear next step", price: "35,000", features: ["One focused creative deliverable", "Mobile-first direction", "One revision round"], message: "Hi, I'm interested in the Starter package" },
  { name: "Professional", hint: "For a stronger presence", price: "75,000", features: ["A connected set of creative deliverables", "Strategic visual direction", "Two revision rounds", "Priority communication"], message: "Hi, I'm interested in the Professional package" },
  { name: "Premium", hint: "For the full signal", price: "150,000", features: ["A complete digital and creative system", "Website-led direction", "Three revision rounds", "Launch support"], message: "Hi, I'm interested in the Premium package" },
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
  { question: "Can I see a sample before paying?", answer: "Yes, a preview is shown first so you can see the direction before you commit." },
  { question: "Do you design for social media too?", answer: "Yes. Social graphics and campaign directions can be shaped to fit the way your business shows up online." },
  { question: "What happens after launch?", answer: "We check the handover, make sure the next steps are clear and stay available for the questions that come after the work goes live." },
  { question: "How do I get started?", answer: "Tap any WhatsApp button, share what you are working on and we will help you choose the clearest next step." },
] as const;

export const trustBar = ["Free sample preview", "Mobile-first", "WhatsApp support", "Fast revisions"] as const;
