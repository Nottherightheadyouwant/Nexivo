import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NEXIVO_DETAILS = {
  name: "Studio Nexivo",
  founder: "Jay Parmar",
  tagline: "We Engineering Digital Experiences for the Web",
  heroSubtitle: "High-performance custom web applications, React & Next.js platforms, e-commerce architectures, and conversion-engineered digital experiences.",
  phone: "+91 97244 70737",
  whatsappUrl: "https://wa.me/919724470737?text=Hi%20Studio%20Nexivo!%20I%20would%20like%20to%20discuss%20a%20web%20development%20project.",
  email: "studio.nexivo@gmail.com",
  locations: ["Ahmedabad, India", "London, UK"],
  socials: {
    instagram: "https://www.instagram.com/studio.nexivo/",
    whatsapp: "https://wa.me/919724470737",
  },
  projects: [
    {
      id: "reel-crafterr",
      title: "Reel Crafterr",
      category: "Custom Web Application",
      tags: ["Next.js", "Video Processing", "Sub-Second Performance", "UX Strategy"],
      description: "A lightning-fast, cinematic videography platform with sub-second page loads, custom media showcase, and automated lead capture.",
      metrics: "4x Increase in Client Inquiries • 0.4s LCP Performance",
      image: "/portfolio/reelcrafterr-cover.jpg",
      liveUrl: "https://www.reelcrafterr.in/",
      year: "2025/2026"
    },
    {
      id: "shri-radhey",
      title: "Shri Radhey Book Depot",
      category: "E-Commerce & Digital Inventory",
      tags: ["React E-Commerce", "Instant Checkout", "Catalog Engine", "SEO"],
      description: "Full e-commerce platform with real-time stock ledger synchronization, instant product filtering, and WhatsApp multi-item ordering.",
      metrics: "+140% Online Conversions • 98/100 Mobile Speed Score",
      image: "/portfolio/shri-radhey-cover.jpg",
      liveUrl: "#",
      year: "2025"
    },
    {
      id: "nails-by-shalvi",
      title: "Nails By Shalvi",
      category: "Studio Booking Platform",
      tags: ["Web App", "Direct Booking", "Micro Animations", "Local SEO"],
      description: "High-touch digital studio experience with interactive appointment scheduler, service showcase, and direct client routing.",
      metrics: "3.2x Booking Velocity • 100% Mobile Engagement",
      image: "/portfolio/nails-by-shalvi-cover.jpg",
      liveUrl: "https://nailsbyshalvi.netlify.app/",
      year: "2025"
    }
  ],
  services: [
    {
      id: "custom-web",
      num: "01",
      title: "Custom Web Development",
      highlight: "Hero Service",
      description: "Bespoke web applications and high-performance websites engineered with Next.js, React, TypeScript, and modern headless architectures. Zero template bloat.",
      techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "GSAP Engine"],
      features: [
        "Sub-second load speeds & 100/100 Core Web Vitals",
        "Custom interactive UI/UX components & micro-interactions",
        "Clean, scalable TypeScript code architecture",
        "Full mobile responsive optimization across all viewports"
      ]
    },
    {
      id: "nextjs-apps",
      num: "02",
      title: "Next.js & Web Applications",
      description: "Server-side rendered (SSR), static generated (SSG), and edge-computed web applications built for speed, SEO domination, and heavy traffic handling.",
      techStack: ["Next.js App Router", "Server Components", "Tailwind", "Vercel / AWS"],
      features: [
        "Instant page transitions & dynamic routing",
        "Enterprise-grade security & clean REST/GraphQL APIs",
        "Modular component architecture",
        "Automated deployment & CI/CD pipelines"
      ]
    },
    {
      id: "ecommerce",
      num: "03",
      title: "E-Commerce Architectures",
      description: "Custom online stores and Shopify headless solutions crafted for frictionless checkout, high conversion rates, and sub-second cart interaction.",
      techStack: ["Shopify Headless", "Next.js Commerce", "Stripe API", "Razorpay"],
      features: [
        "Lightning-fast product search & filtering",
        "Mobile-first checkout flow with WhatsApp integration",
        "Inventory synchronization & automated order routing",
        "Analytics & Revenue CRO tracking"
      ]
    },
    {
      id: "wordpress",
      num: "04",
      title: "Custom WordPress & Headless CMS",
      description: "Tailor-made custom WordPress themes and headless integrations using ACF Pro, Gutenberg blocks, and React frontend layers for effortless content editing.",
      techStack: ["WordPress Custom Themes", "ACF Pro", "PHP 8+", "Headless GraphQL"],
      features: [
        "Bloat-free custom code with zero unnecessary plugins",
        "Intuitive visual page builder tailored for your team",
        "Bank-grade security & automated weekly backups",
        "Speed optimized for 90+ PageSpeed scores"
      ]
    },
    {
      id: "performance-seo",
      num: "05",
      title: "Performance & Technical SEO",
      description: "Transform sluggish, heavy sites into sub-second revenue engines. Technical SEO, schema graphs, Google Maps pack domination, and Core Web Vitals optimization.",
      techStack: ["Core Web Vitals", "Lighthouse 100", "Schema.org", "Google Maps API"],
      features: [
        "Google Maps & Local Pack search domination",
        "Code splitting, image compression & caching strategy",
        "Structured data graph & semantic HTML5 setup",
        "Comprehensive page speed & UX audit report"
      ]
    },
    {
      id: "uiux-design",
      num: "06",
      title: "UI/UX & Interactive Design",
      description: "Design systems, wireframes, cinematic visual identity, and micro-interactions that elevate your brand and turn casual visitors into active clients.",
      techStack: ["Figma Design System", "Prototyping", "Design Tokens", "GSAP Motion"],
      features: [
        "Bespoke visual identity & design language",
        "Interactive prototypes & user journey mapping",
        "High-contrast dark modern aesthetics",
        "Design-to-code pixel-perfect translation"
      ]
    }
  ]
};
