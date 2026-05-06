import type {
  Feature,
  NavLink,
  PortfolioItem,
  Service,
  Testimonial,
} from "@/types";

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    id: "software-dev",
    icon: "Code2",
    title: "Software Development",
    description:
      "Custom enterprise-grade applications built with modern tech stacks — scalable, fast, and future-proof.",
    features: [
      "Custom Architecture",
      "API Integration",
      "Cloud Deployment",
      "Agile Delivery",
    ],
    color: "from-sky-500 to-blue-600",
  },
  {
    id: "website-dev",
    icon: "Globe",
    title: "Website Development",
    description:
      "Responsive, SEO-optimized websites that turn visitors into customers with seamless UX.",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "CMS Integration",
      "Performance Tuned",
    ],
    color: "from-cyan-400 to-sky-500",
  },
  {
    id: "video-editing",
    icon: "Film",
    title: "Video Editing",
    description:
      "Cinematic-quality video production and editing that makes your brand story unforgettable.",
    features: [
      "Motion Graphics",
      "Color Grading",
      "Sound Design",
      "Social Formats",
    ],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "social-media",
    icon: "Share2",
    title: "Social Media Management",
    description:
      "Data-driven social strategies that grow your audience and drive measurable engagement.",
    features: [
      "Content Strategy",
      "Community Growth",
      "Analytics Reports",
      "Ad Campaigns",
    ],
    color: "from-sky-400 to-cyan-500",
  },
];

export const features: Feature[] = [
  {
    id: "f1",
    icon: "Zap",
    title: "Lightning Fast Delivery",
    description:
      "We work in rapid sprints so your project ships on time, every time — without sacrificing quality.",
  },
  {
    id: "f2",
    icon: "Shield",
    title: "Enterprise-Grade Security",
    description:
      "Every solution we build is hardened against modern threats with best-in-class security practices.",
  },
  {
    id: "f3",
    icon: "TrendingUp",
    title: "Results-Driven Approach",
    description:
      "We obsess over KPIs and real business outcomes, not vanity metrics or cookie-cutter templates.",
  },
  {
    id: "f4",
    icon: "Users",
    title: "Dedicated Expert Team",
    description:
      "A hand-picked team of specialists assigned to your project from kickoff through launch and beyond.",
  },
  {
    id: "f5",
    icon: "Layers",
    title: "End-to-End Solutions",
    description:
      "From concept and design to deployment and ongoing support — one partner for every digital need.",
  },
  {
    id: "f6",
    icon: "HeartHandshake",
    title: "Client-First Partnership",
    description:
      "Transparent communication and proactive updates keep you in the loop at every stage of your project.",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "FinTrack Pro",
    category: "Software Development",
    description:
      "Real-time financial analytics dashboard with multi-currency support and AI-powered forecasting.",
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-sky-500/20 to-blue-600/20",
  },
  {
    id: "p2",
    title: "MediCare Hub",
    category: "Website Development",
    description:
      "Patient management portal for a network of 50+ clinics with booking, records, and telemedicine.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    gradient: "from-cyan-400/20 to-sky-500/20",
  },
  {
    id: "p3",
    title: "Elevate Brand Story",
    category: "Video Editing",
    description:
      "Cinematic brand video series that generated 2M+ organic views across social platforms in 30 days.",
    tags: ["Motion", "Color Grade", "VFX"],
    gradient: "from-blue-500/20 to-indigo-600/20",
  },
  {
    id: "p4",
    title: "NovaFit Campaign",
    category: "Social Media Management",
    description:
      "360° social strategy that grew a fitness brand from 5K to 120K followers in under 6 months.",
    tags: ["Strategy", "Content", "Ads"],
    gradient: "from-sky-400/20 to-cyan-500/20",
  },
  {
    id: "p5",
    title: "LegalEdge Platform",
    category: "Software Development",
    description:
      "AI-assisted contract review platform processing 10K+ documents per month for law firms.",
    tags: ["Python", "React", "ML"],
    gradient: "from-indigo-500/20 to-sky-500/20",
  },
  {
    id: "p6",
    title: "Urban Eats Rebrand",
    category: "Website Development",
    description:
      "Full digital rebrand and e-commerce site for a restaurant chain driving 40% more online orders.",
    tags: ["Shopify", "UI/UX", "SEO"],
    gradient: "from-sky-300/20 to-blue-400/20",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Sarah Chen",
    role: "CTO",
    company: "NexaFlow Inc.",
    quote:
      "Brand By Tech delivered our enterprise platform 2 weeks ahead of schedule. The code quality and architecture they brought was simply exceptional.",
    initials: "SC",
    avatarGradient: "from-sky-400 to-blue-500",
  },
  {
    id: "t2",
    name: "Marcus Rivera",
    role: "Founder",
    company: "GrowthPulse",
    quote:
      "Our social media presence went from invisible to industry-leading in 5 months. The team's creativity and data-driven strategies were game-changing.",
    initials: "MR",
    avatarGradient: "from-cyan-400 to-sky-500",
  },
  {
    id: "t3",
    name: "Priya Kapoor",
    role: "Marketing Director",
    company: "Luminary Health",
    quote:
      "The video content they produced for us won an industry award. Professional, creative, and always on-brand — I can't recommend them enough.",
    initials: "PK",
    avatarGradient: "from-blue-500 to-indigo-500",
  },
  {
    id: "t4",
    name: "James Thornton",
    role: "CEO",
    company: "UrbanCore Retail",
    quote:
      "Our new website cut bounce rate by 35% and doubled our conversion rate within the first month of launch. Outstanding results.",
    initials: "JT",
    avatarGradient: "from-sky-500 to-cyan-400",
  },
];
