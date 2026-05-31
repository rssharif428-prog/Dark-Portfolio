import { SliderItem, Project, Service, SkillCategory, Testimonial } from "./types";

export const SLIDER_ITEMS: SliderItem[] = [
  {
    id: "slide-1",
    badge: "Core Engineering",
    title: "WordPress Theme Architect",
    subtitle: "Custom Block-Based Full Site Editing Themes Built for Precision and Velocity",
    description: "Developing tailor-made, high-performance blocks using standard Gutenberg and full site editing APIs. Replacing bloated drag-and-drop page builders with native, blazing-fast structures.",
    image: "/src/assets/images/wp_gutenberg_1780197291613.png",
    accent: "shadow-indigo-500/10 hover:shadow-indigo-500/20 text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    id: "slide-2",
    badge: "High-Performance Ecommerce",
    title: "WooCommerce Engine Specialist",
    subtitle: "Frictionless Checkout Cycles and Modular WooCommerce Solutions Ready to Scale",
    description: "Architecting bespoke, conversion-oriented checkout sequences, secure plugin middleware, and rich responsive product managers. Tailored to withstand over 100k daily transactions.",
    image: "/src/assets/images/wp_ecommerce_1780197273648.png",
    accent: "shadow-cyan-500/10 hover:shadow-cyan-500/20 text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    id: "slide-3",
    badge: "Technical Speed Auditing",
    title: "Core Web Vitals Optimizations",
    subtitle: "Taking Complex Legacy Implementations from Red Zones to Pure Green scores",
    description: "Undergoing comprehensive optimization checklists: automated asset queuing, server-side caching topologies, dynamic responsive images, and database indexing query reviews.",
    image: "/src/assets/images/wp_speed_opt_1780197310144.png",
    accent: "shadow-emerald-500/10 hover:shadow-emerald-500/20 text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "Aura Skincare WooCommerce Experience",
    category: "WooCommerce",
    description: "A luxury organic skincare e-commerce store with bespoke shopping bag micro-transitions and modular checkout steps.",
    longDescription: "This premium project redesigned a legacy WooCommerce install with a clean modular React mini-cart and custom checkout flow to decrease cart abandonment. We integrated elastic dynamic product search, live inventory updates, and visual dynamic discounts. Tailored metadata caching reduced database checkout lookups by 67%.",
    image: "/src/assets/images/wp_ecommerce_1780197273648.png",
    technologies: ["React", "WooCommerce", "WordPress API", "Tailwind CSS", "Redis"],
    metrics: [
      { label: "Conversion Lift", value: "+34%" },
      { label: "Mobile Bounce Rate", value: "-22%" },
      { label: "Database Load", value: "-67%" }
    ],
    liveUrl: "https://example.com/aura",
    githubUrl: "https://github.com/example/aura-woocommerce"
  },
  {
    id: "proj-2",
    title: "Vortex Custom block Page Builder",
    category: "Plugins",
    description: "A lightning-fast, interactive visual block library that mounts native Gutenberg elements with rich animations.",
    longDescription: "Vortex is a custom-engineered WordPress plugin providing developers with a library of lightweight React-driven block elements. Avoiding site slow-downs typical of massive page builders, Vortex features responsive fluid grids, modular layout columns, custom-nested animations, and automated pre-rendering, resulting in elegant and standard Gutenberg blocks and layout editors.",
    image: "/src/assets/images/wp_gutenberg_1780197291613.png",
    technologies: ["Gutenberg API", "React", "TypeScript", "PHP", "WP Core Standards"],
    metrics: [
      { label: "Developer Speed", value: "3x Faster" },
      { label: "Asset Footprint", value: "<15kb" },
      { label: "Client Handover", value: "10/10 Score" }
    ],
    liveUrl: "https://example.com/vortex",
    githubUrl: "https://github.com/example/vortex-builder"
  },
  {
    id: "proj-3",
    title: "Apex Speed Redesign & Web Vitals Audit",
    category: "Optimization",
    description: "Bringing a major international shipping portal's speed rating to 100 on Google PageSpeed Insights.",
    longDescription: "Underwent a robust core optimization: refactored 40+ legacy scripts, introduced dynamic critical CSS generator pipelines, integrated intelligent edge-image routing, and implemented Object Cache Pro. Consolidated database rows from 4.2 million leftover rows to clean tables.",
    image: "/src/assets/images/wp_speed_opt_1780197310144.png",
    technologies: ["WP Rocket", "Perfmatters", "Cloudflare CDN", "Redis Cache", "SQL Optimization"],
    metrics: [
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Time to Interactive", value: "0.4s" },
      { label: "SEO Site Ranking", value: "+18 Pos" }
    ],
    liveUrl: "https://example.com/apex-speed",
    githubUrl: "https://github.com/example/apex-speed"
  },
  {
    id: "proj-4",
    title: "Zenith Headless WordPress Portfolio",
    category: "Themes",
    description: "A fast Next.js static-site paired under WordPress headless endpoints via GraphQL.",
    longDescription: "Engineered a headless decupled architecture utilizing WordPress as a headless content management editor and Next.js / React as the performant front-end renderer. Implemented WPGraphQL schemas and robust dynamic path parameters, generating high-velocity static pages in sub-second timelines.",
    image: "/src/assets/images/wp_ecommerce_1780197273648.png",
    technologies: ["Next.js", "WPGraphQL", "Apollo Client", "WordPress Headless", "Tailwind CSS"],
    metrics: [
      { label: "Mobile Speed", value: "0.2s Load" },
      { label: "Server Ingress Bills", value: "-80%" },
      { label: "Content Sync Time", value: "Instant" }
    ],
    liveUrl: "https://example.com/zenith",
    githubUrl: "https://github.com/example/zenith-headless"
  }
];

export const SERVICES: Service[] = [
  {
    id: "serv-1",
    title: "Dynamic Gutenberg Block Development",
    description: "Bespoke, lightweight block creations designed uniquely for editorial freedom and lightning-fast front-end renderings.",
    icon: "LayoutGrid",
    features: ["Component-based blocks in React", "Native Gutenberg block validations", "No external library bloat or frameworks", "Rich fluid responsiveness"]
  },
  {
    id: "serv-2",
    title: "High-Performance WooCommerce Setups",
    description: "Tailored e-commerce engines featuring smooth custom mini-carts, streamlined modern checkouts, and lightning search triggers.",
    icon: "ShoppingBag",
    features: ["Modular custom cart architectures", "Secure multi-payment integrations", "Dynamic price calculators and coupon middleware", "Inventory webhooks and automation"]
  },
  {
    id: "serv-3",
    title: "Headless Decoupled Architectures",
    description: "Integrating powerful content administration of WordPress with Next.js or Astro server-side static deployments.",
    icon: "Cpu",
    features: ["GraphQL & REST API endpoints", "Incremental Static Regeneration (ISR)", "Blazing fast serverless edge distributions", "Zero WordPress vulnerability profiles"]
  },
  {
    id: "serv-4",
    title: "Interactive Auditing & Core Web Vitals",
    description: "Professional grade technical audits, file minification pipelines, critical CSS deferrals, and queries-per-page reductions.",
    icon: "Zap",
    features: ["Lighthouse optimization guarantee", "Comprehensive redundant code purging", "Database query auditing and clean-ups", "Advanced asset caching & queue setups"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "WordPress Core Ecosystem",
    skills: [
      { name: "Theme and Plugin APIs", level: 95 },
      { name: "Gutenberg Block Development (React)", level: 90 },
      { name: "WooCommerce Engine customizations", level: 92 },
      { name: "WP Rest API & WPGraphQL", level: 88 }
    ]
  },
  {
    title: "Modern Front-End Technologies",
    skills: [
      { name: "React & TypeScript", level: 88 },
      { name: "Tailwind CSS & Frameworks", level: 95 },
      { name: "Modern Bundlers (Vite, Webpack)", level: 82 },
      { name: "Astro / Next.js Frameworks", level: 85 }
    ]
  },
  {
    title: "Backend, Performance & Database",
    skills: [
      { name: "Advanced PHP Engineering", level: 94 },
      { name: "MySQL queries & Indexing", level: 85 },
      { name: "Server-side caching (Redis, Varnish)", level: 90 },
      { name: "Core Web Vitals & Auditing", level: 96 }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Genevieve Thorne",
    role: "Digital Director",
    company: "Aura Cosmetics",
    feedback: "Working with this developer was an absolute game changer. Our WooCommerce store load times dropped to sub-seconds, and checkout conversion immediately increased by 34%. Handing off Gutenberg custom-blocks was unbelievably straightforward.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: "test-2",
    name: "Marcus Sterling",
    role: "Lead Product Designer",
    company: "Vortex Media",
    feedback: "A brilliant engineer. They took our custom Figma wireframes and transformed them into absolute pixel-perfect, native, reusable blocks. Zero Gutenberg validation errors, highly performant code and easy cleanups.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    id: "test-3",
    name: "Elena Rostova",
    role: "CTO",
    company: "Apex Logistics",
    feedback: "Our internal metrics and sales dashboard reports were slowing down. They purged redundant legacy code, added high-grade caching indices, and solved SQL locks that team after team failed to pinpoint. A world-class WooCommerce/WP architect.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];
