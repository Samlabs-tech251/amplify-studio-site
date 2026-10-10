export const selectedWork = [
  { title: "The Bakery Site", category: "Website Development", result: "A warm digital home built to turn browsing into orders.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/styleinlagos.jpg" },
  { title: "Just Eat & Chill", category: "Flyer Design", result: "Clear packages that made the festive offer easier to choose.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/justeatchill.jpg" },
  { title: "Mayor Beauty Place", category: "Poster Design", result: "Before-and-after pricing made instantly understandable.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/mayorbeauty.jpg" },
  { title: "Nana Clothing", category: "Social Graphics", result: "A stronger visual mood for a premium clothing launch.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/nanaclothing.jpg" },
  { title: "Hatz Gadgets Store", category: "Product Graphics", result: "Trust and price information brought forward at a glance.", image: "https://raw.githubusercontent.com/Samlabs-tech251/Amplify-studio-assets/main/hatzgadgets.jpg" },
] as const;

export const impactStats = [
  { value: "24-48h", label: "Typical turnaround on graphics" },
  { value: "Mobile-first", label: "Every site built for phones first" },
  { value: "WhatsApp", label: "Direct line to the person doing the work" },
  { value: "Free preview", label: "See a sample before you commit" },
] as const;

export const processSteps = [
  { number: "01", title: "Discover", body: "We get clear on the business, the audience and the one thing people should understand first." },
  { number: "02", title: "Design", body: "We shape the visual direction, hierarchy and details into a system that feels like you." },
  { number: "03", title: "Build", body: "We turn the approved direction into polished, responsive work that is ready to meet the real world." },
  { number: "04", title: "Launch", body: "We check the edges, hand things over clearly and help you take the next visible step." },
] as const;

export const testimonials = [
  { name: "Your next client", business: "Placeholder business", quote: "This space is ready for a real story from a business we have helped grow." },
  { name: "A happy partner", business: "Placeholder brand", quote: "Replace this placeholder with an approved quote when the right words come in." },
  { name: "Another good result", business: "Placeholder company", quote: "Real feedback belongs here — clear, specific and earned through the work." },
] as const;

export const packages = [
  { name: "Starter", hint: "For one clear next step", features: ["One focused creative deliverable", "Mobile-first direction", "One revision round"], message: "Hi, I'm interested in the Starter package" },
  { name: "Professional", hint: "For a stronger presence", features: ["A connected set of creative deliverables", "Strategic visual direction", "Two revision rounds", "Priority communication"], message: "Hi, I'm interested in the Professional package" },
  { name: "Premium", hint: "For the full signal", features: ["A complete digital and creative system", "Website-led direction", "Three revision rounds", "Launch support"], message: "Hi, I'm interested in the Premium package" },
] as const;

export const premiumFaqs = [
  { question: "How long does a project take?", answer: "Most smaller graphics projects can move in 24–48 hours. Websites and connected packages take longer depending on the scope and how ready the content is." },
  { question: "How many revisions are included?", answer: "Each package includes a clear revision allowance. We use the first direction to get aligned early, then refine with purpose instead of endlessly circling." },
  { question: "How does payment work?", answer: "We confirm the scope and payment terms before work begins. Message us on WhatsApp and we will share a direct quote for the project you have in mind." },
  { question: "Can you help with hosting?", answer: "Yes. We can guide you through the right hosting setup for your website and help make the handover feel straightforward." },
  { question: "What do you need from me?", answer: "A rough brief, your business details, any useful images or copy, and a sense of what you want people to notice first is enough to begin." },
] as const;
