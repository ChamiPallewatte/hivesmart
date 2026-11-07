/**
 * HiveSmart Services Configuration
 * Detailed definitions for Website Development, CV Design, and Mobile Application Development.
 */

export interface SubService {
  title: string;
  shortDesc: string;
  features: string[];
  keywords: string[];
}

export interface ServiceDefinition {
  id: string;
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  isPrimary: boolean;
  ctaText: string;
  whatsappMessage: string;
  keywords: string[];
  subServices: SubService[];
  benefits: { title: string; desc: string }[];
  process: { step: number; title: string; desc: string }[];
  targetAudience: string[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceDefinition[] = [
  {
    id: 'web-dev',
    slug: 'website-development',
    title: 'Website Development',
    badge: 'Primary Service',
    tagline: 'High-Performance, Conversion-Engineered Web Solutions for Modern Enterprises',
    shortDescription:
      'We build fast, secure, and visually striking websites tailored to grow your revenue across Sri Lanka, Dubai, and global markets. From custom web platforms to WordPress and Ecommerce.',
    longDescription:
      'In today’s hyper-competitive digital landscape, your website is your 24/7 sales representative, brand ambassador, and trust anchor. At HiveSmart, we engineer bespoke digital experiences that don’t merely look beautiful—they load under a second, dominate search results, and actively turn visitors into paying clients through seamless WhatsApp conversion architecture.',
    isPrimary: true,
    ctaText: 'Discuss Your Website Project',
    whatsappMessage:
      "Hi HiveSmart, I'm interested in your Website Development services. I'd like to discuss a project for my business.",
    keywords: [
      'website development',
      'web development sri lanka',
      'website developer sri lanka',
      'website development dubai',
      'web development dubai',
      'wordpress website development',
      'ecommerce website development',
      'business website development',
      'custom website development',
      'landing page development',
      'website redesign',
      'speed optimization',
      'seo friendly website'
    ],
    subServices: [
      {
        title: 'Business Website Development',
        shortDesc: 'Corporate and corporate-grade websites engineered to build institutional authority and client credibility.',
        features: ['Corporate identity integration', 'B2B lead generation flows', 'Multi-lingual Arabic/English ready', 'High-security architecture'],
        keywords: ['business website', 'corporate website', 'company website', 'b2b website']
      },
      {
        title: 'WordPress Website Development',
        shortDesc: 'Custom-themed, high-speed WordPress builds without clunky page builders or security vulnerabilities.',
        features: ['Custom Gutenberg block themes', 'Zero-bloat architecture', 'Automated backup & caching', 'Effortless client content management'],
        keywords: ['wordpress development', 'wordpress website', 'custom wordpress', 'wp speed']
      },
      {
        title: 'Ecommerce Website Development',
        shortDesc: 'High-converting online storefronts with seamless local Sri Lankan & UAE payment gateway integrations.',
        features: ['Stripe, PayHere, Telr & Network International', 'Real-time inventory & order management', 'Abandoned cart WhatsApp recovery', 'Mobile-first 1-click checkout'],
        keywords: ['ecommerce website', 'online shop', 'online store', 'shopping cart', 'payhere', 'stripe']
      },
      {
        title: 'Custom Website Development',
        shortDesc: 'Engineered web applications built using Astro, Next.js, and Cloudflare for extreme speed and scalability.',
        features: ['Sub-second edge rendering', 'Custom API & database integration', 'Uncapped traffic scalability', 'Micro-interactions and bespoke UX'],
        keywords: ['custom website', 'web application', 'custom development', 'astro web', 'react web']
      },
      {
        title: 'Landing Page Development',
        shortDesc: 'Hyper-focused conversion funnels built to maximize ROI on Google, Facebook, and TikTok ad campaigns.',
        features: ['Strict CRO-driven visual hierarchy', 'A/B testing architecture', 'Sub-second mobile load time', 'Direct 1-tap WhatsApp trigger'],
        keywords: ['landing page', 'sales funnel', 'lead generation page', 'ad landing page']
      },
      {
        title: 'Website Redesign',
        shortDesc: 'Transform outdated, slow, or poorly converting legacy websites into modern, customer-attracting platforms.',
        features: ['SEO preservation 301 migration', 'Modern aesthetic overhaul', 'Mobile UX restructuring', 'Conversion rate optimization'],
        keywords: ['website redesign', 'rebuild website', 'modernize website', 'redesign']
      },
      {
        title: 'Responsive Website Development',
        shortDesc: 'Fluid, adaptive interfaces designed mobile-first for flawless user experiences across phones, tablets, and 4K displays.',
        features: ['Mobile-first fluid typography', 'Touch-friendly tap targets', 'Adaptive image delivery', 'Zero horizontal layout shifts'],
        keywords: ['responsive website', 'mobile friendly web', 'mobile web design']
      },
      {
        title: 'Website Maintenance & Security',
        shortDesc: 'Proactive 24/7 uptime monitoring, security patching, Cloudflare firewall management, and content updates.',
        features: ['Automated daily cloud backups', 'Malware scanning & DDoS protection', 'Performance monitoring alerts', 'Priority technical support'],
        keywords: ['website maintenance', 'web support', 'security updates', 'bug fixes']
      },
      {
        title: 'Website Speed & Core Web Vitals',
        shortDesc: 'Comprehensive speed audits and radical optimization achieving 90+ Lighthouse scores.',
        features: ['Server-side cache optimization', 'Next-gen WebP/AVIF asset pipeline', 'Critical CSS extraction', 'Elimination of render-blocking JS'],
        keywords: ['speed optimization', 'core web vitals', 'page speed', 'fast website', 'lighthouse 95']
      },
      {
        title: 'SEO-Friendly Website Architecture',
        shortDesc: 'Clean semantic HTML, schema structured data, and technical SEO baked into every template from day one.',
        features: ['Rich JSON-LD schemas', 'Optimized meta & OpenGraph tags', 'Crawlable canonical URL structures', 'Instant XML sitemap auto-generation'],
        keywords: ['seo friendly website', 'technical seo', 'schema markup', 'google ranking']
      }
    ],
    benefits: [
      {
        title: 'Direct WhatsApp Lead Capture',
        desc: 'Every service element, CTA, and page section is engineered to trigger friction-free WhatsApp inquiries with pre-filled context.'
      },
      {
        title: 'Sub-Second Edge Performance',
        desc: 'Hosted on Cloudflare’s 300+ edge locations worldwide, ensuring instantaneous page loads in Colombo, Dubai, London, and beyond.'
      },
      {
        title: 'Zero Bloat & Maximum Security',
        desc: 'Modern codebases free of fragile plugins, protected by enterprise-grade HTTPS, automated SSL, and DDoS mitigation.'
      },
      {
        title: 'Bespoke Brand Identity',
        desc: 'No generic cookie-cutter templates. Every layout is handcrafted to reflect your brand stature and outshine competitors.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Strategic Briefing',
        desc: 'We analyze your target market, competitors in Sri Lanka / Dubai, and map out the exact customer conversion journey.'
      },
      {
        step: 2,
        title: 'Wireframing & UI/UX Architecture',
        desc: 'We design high-fidelity interactive wireframes focusing on visual clarity, readability, and immediate contact CTAs.'
      },
      {
        step: 3,
        title: 'Full-Stack Performance Development',
        desc: 'We code your website using modern Astro & TypeScript, guaranteeing strict accessibility and sub-second load times.'
      },
      {
        step: 4,
        title: 'SEO & Conversion Rigging',
        desc: 'Every schema, meta tag, OpenGraph snippet, and WhatsApp analytics hook is configured and verified.'
      },
      {
        step: 5,
        title: 'Cloudflare Edge Deployment & Handoff',
        desc: 'We launch on Cloudflare CDN with SSL, automated backups, and provide your team with simple management access.'
      }
    ],
    targetAudience: [
      'Corporates & Growing SMEs in Sri Lanka seeking global credibility',
      'Companies in Dubai, Abu Dhabi, and UAE expanding their commercial reach',
      'Ecommerce brands scaling direct-to-consumer sales with frictionless checkout',
      'Professional service firms (law, real estate, healthcare, finance) needing trust-inducing web platforms'
    ],
    faqs: [
      {
        question: 'How long does it take to develop a custom website?',
        answer:
          'A typical high-performance business website takes 2 to 4 weeks depending on scope, custom features, and asset readiness. E-commerce platforms or complex web applications usually take 3 to 6 weeks. We provide a transparent milestone schedule before kickoff.'
      },
      {
        question: 'Can you accept payments in both Sri Lanka and the UAE?',
        answer:
          'Yes. We build custom payment integrations for PayHere, Commercial Bank, and Sampath in Sri Lanka, as well as Stripe, Telr, PayCaps, and Network International in the UAE and Middle East.'
      },
      {
        question: 'Will my website load fast on mobile phones in Sri Lanka and Dubai?',
        answer:
          'Absolutely. We design mobile-first and optimize every asset. Our edge deployment on Cloudflare ensures low latency and sub-second load times across mobile 4G/5G networks in Colombo, Dubai, and worldwide.'
      },
      {
        question: 'How does WhatsApp lead generation work?',
        answer:
          'Instead of asking visitors to fill out slow email forms that get ignored, our pages include targeted WhatsApp links with prefilled messages referencing the exact service the customer is viewing. When they tap the button, WhatsApp opens immediately on their phone or desktop with the inquiry already drafted.'
      }
    ]
  },
  {
    id: 'cv-design',
    slug: 'cv-design',
    title: 'CV Design',
    badge: 'Career Excellence',
    tagline: 'ATS-Compliant, Executive-Grade Resume & Portfolio Design That Secures Interviews',
    shortDescription:
      'Engineered specifically for competitive job markets in Dubai, UAE, Sri Lanka, and multinational corporations. We craft ATS-optimized, beautifully structured CVs that get noticed by hiring managers.',
    longDescription:
      'Over 75% of job applications in Dubai and international firms are filtered out by Applicant Tracking Systems (ATS) before human recruiters ever lay eyes on them. HiveSmart crafts high-impact, ATS-parsable executive resumes and career portfolios that blend keyword optimization with stunning typographical clarity to guarantee you secure top-tier interviews.',
    isPrimary: false,
    ctaText: 'Get Your CV Designed',
    whatsappMessage:
      'Hi HiveSmart, I would like to get my CV / Resume professionally redesigned and ATS-optimized.',
    keywords: [
      'cv design',
      'resume design',
      'cv design sri lanka',
      'cv design dubai',
      'ats friendly cv',
      'executive resume',
      'professional cv formatting',
      'portfolio documents',
      'cv redesign'
    ],
    subServices: [
      {
        title: 'Professional CV Design',
        shortDesc: 'Clean, elegant typographical hierarchy tailored for senior executives, managers, and specialized professionals.',
        features: ['Executive summary positioning', 'Quantifiable achievement framing', 'Modern minimalist aesthetics', 'Print & digital dual format'],
        keywords: ['professional cv', 'executive resume', 'curriculum vitae']
      },
      {
        title: 'ATS-Friendly CV Formatting',
        shortDesc: 'Formatted to effortlessly navigate Taleo, Workday, Greenhouse, and other recruitment algorithms.',
        features: ['Standard semantic section headers', 'Machine-parsable typography', 'Targeted role keyword alignment', '100% text-selectable PDF output'],
        keywords: ['ats friendly cv', 'ats resume', 'ats scanner pass', 'applicant tracking system']
      },
      {
        title: 'Modern Resume Design',
        shortDesc: 'Visual, high-impact 1-2 page resumes built for creative, tech, marketing, and startup opportunities.',
        features: ['Modern single & dual column layouts', 'Skill matrix visualization', 'Project milestone spotlights', 'Compact high-density formatting'],
        keywords: ['modern resume', 'tech resume', 'designer cv', 'creative resume']
      },
      {
        title: 'Professional Portfolio Documents',
        shortDesc: 'Comprehensive career portfolios and case study decks showcasing your track record, projects, and credentials.',
        features: ['Custom branded slide decks', 'Visual project breakdowns', 'Verified testimonial layouts', 'Interactive clickable PDF links'],
        keywords: ['portfolio document', 'career portfolio', 'work samples pdf']
      },
      {
        title: 'CV Redesign & Content Revamp',
        shortDesc: 'Transform outdated, cluttered, or weak resumes into sharp, compelling career assets.',
        features: ['Grammar & tone enhancement', 'Action-oriented bullet points', 'Visual decluttering', 'Removal of redundant data'],
        keywords: ['cv redesign', 'resume makeover', 'update cv', 'rewrite resume']
      }
    ],
    benefits: [
      {
        title: 'Guaranteed ATS Parseability',
        desc: 'Our documents adhere to strict machine-reading guidelines, ensuring your qualifications are indexed accurately by corporate HR software.'
      },
      {
        title: 'Tailored for UAE & Global Markets',
        desc: 'Specially structured to address the expectations of hiring managers across Dubai, Abu Dhabi, GCC, UK, and Australia.'
      },
      {
        title: 'Rapid 48-Hour Turnaround',
        desc: 'Fast delivery so you never miss urgent application deadlines for coveted job openings.'
      },
      {
        title: 'Editable Source Files Provided',
        desc: 'Receive both print-ready high-resolution PDFs and editable files for future career updates.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'WhatsApp Consultation & Review',
        desc: 'Send your existing CV and target job descriptions via WhatsApp for a direct evaluation.'
      },
      {
        step: 2,
        title: 'Structural Strategy & Keyword Mapping',
        desc: 'We extract key industry achievements and align keywords with standard ATS parsing criteria.'
      },
      {
        step: 3,
        title: 'Design & Typographic Styling',
        desc: 'We format the document with executive-level visual hierarchy, balanced whitespace, and crisp fonts.'
      },
      {
        step: 4,
        title: 'Review & Refinements',
        desc: 'You review the draft and we implement any fine-tuning adjustments promptly.'
      },
      {
        step: 5,
        title: 'Final Delivery',
        desc: 'You receive ATS-certified PDFs and editable source files ready for instant job applications.'
      }
    ],
    targetAudience: [
      'Executives and Managers targeting high-paying roles in Dubai, UAE, and GCC',
      'Software Engineers, Tech Leads, and Data Specialists applying for international remote or overseas jobs',
      'Finance, Banking, and Consulting professionals seeking polished executive bios',
      'Fresh graduates and career shifters needing an edge over hundreds of competing applicants'
    ],
    faqs: [
      {
        question: 'What is an ATS-friendly CV and why is it necessary in Dubai?',
        answer:
          'Applicant Tracking Systems (ATS) scan and rank incoming resumes based on keywords and formatting. In Dubai and international job markets, popular portals receive thousands of applicants per job. If your CV uses text inside unreadable graphics, tables, or non-standard fonts, it is discarded automatically. Our ATS-friendly designs ensure 100% readability by machine parsers.'
      },
      {
        question: 'How quickly can I receive my completed CV?',
        answer:
          'Standard turnaround is 48 to 72 hours. An expedited 24-hour express service is also available for urgent application deadlines. Connect with us on WhatsApp to get started immediately.'
      },
      {
        question: 'In what format will I receive my CV?',
        answer:
          'You will receive an ATS-optimized, high-resolution vector PDF (ideal for online applications and printing) and an editable format for your future personal updates.'
      }
    ]
  },
  {
    id: 'mobile-app',
    slug: 'mobile-app-development',
    title: 'Mobile Application Development',
    badge: 'Enterprise Mobility',
    tagline: 'Intuitive, Scalable iOS & Android Mobile Apps Built to Engage Users and Scale Revenue',
    shortDescription:
      'Custom mobile app engineering for iOS and Android. From consumer-facing mobile products to enterprise internal tools, cross-platform apps, and frictionless API backends.',
    longDescription:
      'Smartphones are where modern consumers live, browse, and transact. HiveSmart engineers high-performance native and cross-platform mobile applications for iOS and Android that combine butter-smooth 60fps user experiences with rock-solid cloud backend infrastructure. Whether you are launching a startup MVP or digitizing operations in Dubai or Sri Lanka, we deliver results.',
    isPrimary: false,
    ctaText: 'Discuss Your App Idea',
    whatsappMessage:
      'Hi HiveSmart, I have a Mobile Application project idea and would like to discuss iOS / Android development.',
    keywords: [
      'mobile app development',
      'mobile app development sri lanka',
      'mobile app development dubai',
      'android app development',
      'ios app development',
      'cross platform app',
      'flutter app development',
      'react native app',
      'business mobile app',
      'app ui ux design'
    ],
    subServices: [
      {
        title: 'Android Application Development',
        shortDesc: 'High-performance Kotlin & Jetpack Compose Android applications optimized for the vast Android market.',
        features: ['Material Design 3 architecture', 'Offline data synchronization', 'Google Play Store deployment', 'Push notification orchestration'],
        keywords: ['android app', 'android development', 'kotlin app', 'google play app']
      },
      {
        title: 'iOS Application Development',
        shortDesc: 'Pixel-perfect, fluid native iOS applications built with Swift and SwiftUI for iPhone and iPad ecosystems.',
        features: ['Human Interface Guidelines compliance', 'Apple Pay & In-App Purchases', 'App Store review certification', 'Biometric Face ID / Touch ID auth'],
        keywords: ['ios app', 'iphone app', 'swift app', 'apple app store']
      },
      {
        title: 'Cross-Platform Applications',
        shortDesc: 'Single-codebase mobile applications using Flutter or React Native that deliver near-native speed at 40% lower cost.',
        features: ['Unified iOS & Android codebase', 'Fast feature parity delivery', 'Shared business logic', 'Cost-effective long-term maintenance'],
        keywords: ['cross platform app', 'flutter app', 'react native app', 'hybrid app']
      },
      {
        title: 'Business & Enterprise Mobility',
        shortDesc: 'Internal enterprise mobile tools, field-force management, warehouse tracking, and client self-service portals.',
        features: ['Role-based access security', 'ERP & CRM synchronization', 'Real-time GPS tracking', 'Encrypted local data caching'],
        keywords: ['business app', 'enterprise app', 'b2b mobile app', 'internal tool']
      },
      {
        title: 'App UI/UX Design & Prototyping',
        shortDesc: 'User-centric wireframes, interactive Figma prototypes, and validated design systems tailored for touch interactions.',
        features: ['User journey mapping', 'Micro-interactions & haptic feedback', 'Accessibility compliance', 'Clickable prototype testing'],
        keywords: ['app design', 'mobile ui ux', 'figma mobile prototype']
      },
      {
        title: 'Application Maintenance & DevOps',
        shortDesc: 'Post-launch version updates, OS compatibility patching, crash analytics monitoring, and API scaling.',
        features: ['Crashlytics bug triage', 'Annual iOS & Android OS upgrades', 'Cloud database auto-scaling', 'App store compliance management'],
        keywords: ['app maintenance', 'app updates', 'app support', 'mobile devops']
      }
    ],
    benefits: [
      {
        title: 'Single-Touch WhatsApp Direct Support',
        desc: 'Direct communication channels with your lead architect throughout design, development, and store publication.'
      },
      {
        title: 'Guaranteed App Store & Play Store Approval',
        desc: 'We handle the complete submission, compliance checks, and privacy policy criteria to guarantee store approval.'
      },
      {
        title: 'Scalable Cloud Backend Architecture',
        desc: 'Backed by Cloudflare Workers and serverless databases to support thousands of concurrent users with zero slowdown.'
      },
      {
        title: 'Full Intellectual Property Ownership',
        desc: 'You retain 100% ownership of your source code, design assets, and app store developer accounts.'
      }
    ],
    process: [
      {
        step: 1,
        title: 'App Concept & Feasibility Review',
        desc: 'We evaluate your business goals, target audience in UAE/Sri Lanka, and define core MVP features.'
      },
      {
        step: 2,
        title: 'Interactive UI/UX Wireframing',
        desc: 'We create clickable prototypes so you can experience every tap, swipe, and screen transition before coding.'
      },
      {
        step: 3,
        title: 'Agile Sprint Development',
        desc: 'We build your frontend and backend in transparent 2-week sprints with live test builds for your feedback.'
      },
      {
        step: 4,
        title: 'Device Matrix QA & Testing',
        desc: 'We test across dozens of physical iPhones and Android devices for performance, battery usage, and network resilience.'
      },
      {
        step: 5,
        title: 'App Store Launch & Monitoring',
        desc: 'We publish your app to Google Play and Apple App Store and configure real-time error monitoring.'
      }
    ],
    targetAudience: [
      'Enterprises in Dubai and UAE modernizing client services or employee operations',
      'Startups launching consumer or on-demand service platforms',
      'Retail and Ecommerce brands looking to boost customer retention via push notifications',
      'Logistics, delivery, and field service organizations requiring real-time tracking'
    ],
    faqs: [
      {
        question: 'Should I choose native or cross-platform (Flutter/React Native)?',
        answer:
          'For 85% of commercial applications, cross-platform development (using Flutter or React Native) is the optimal choice: it delivers near-native performance while cutting development and maintenance costs by up to 40% across iOS and Android. If your app requires heavy hardware access, 3D gaming, or specialized low-level APIs, native development is recommended. We help you choose the best fit during our initial WhatsApp discovery.'
      },
      {
        question: 'Do you help publish the app to Apple App Store and Google Play?',
        answer:
          'Yes, we handle the entire submission process, including metadata preparation, screenshot generation, privacy policy compliance, and handling Apple/Google review inquiries until your app is live.'
      },
      {
        question: 'How do you handle backend and database needs?',
        answer:
          'We engineer scalable, secure serverless backends using Cloudflare Workers, Node.js, and Cloudflare D1/SQLite or PostgreSQL, keeping infrastructure costs minimal while scaling to high traffic.'
      }
    ]
  }
];

// Helper to find service by slug
export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

// Helper to search services and subservices by keyword query
export function searchServices(query: string): {
  service: ServiceDefinition;
  matchingSubServices: SubService[];
  score: number;
}[] {
  if (!query || query.trim() === '') {
    return SERVICES.map((service) => ({
      service,
      matchingSubServices: service.subServices,
      score: service.isPrimary ? 10 : 5
    }));
  }

  const cleanQuery = query.toLowerCase().trim();
  const results: {
    service: ServiceDefinition;
    matchingSubServices: SubService[];
    score: number;
  }[] = [];

  for (const service of SERVICES) {
    let score = 0;
    const matchingSubServices: SubService[] = [];

    // Title / Slug / Tagline match
    if (service.title.toLowerCase().includes(cleanQuery)) score += 30;
    if (service.slug.toLowerCase().includes(cleanQuery)) score += 25;
    if (service.tagline.toLowerCase().includes(cleanQuery)) score += 15;
    if (service.shortDescription.toLowerCase().includes(cleanQuery)) score += 10;

    // Service keywords match
    for (const kw of service.keywords) {
      if (kw.toLowerCase().includes(cleanQuery) || cleanQuery.includes(kw.toLowerCase())) {
        score += 20;
      }
    }

    // Subservices match
    for (const sub of service.subServices) {
      let subMatched = false;
      if (sub.title.toLowerCase().includes(cleanQuery)) {
        score += 15;
        subMatched = true;
      }
      if (sub.shortDesc.toLowerCase().includes(cleanQuery)) {
        score += 8;
        subMatched = true;
      }
      for (const kw of sub.keywords) {
        if (kw.toLowerCase().includes(cleanQuery) || cleanQuery.includes(kw.toLowerCase())) {
          score += 12;
          subMatched = true;
        }
      }
      if (subMatched) {
        matchingSubServices.push(sub);
      }
    }

    if (score > 0) {
      if (service.isPrimary) score += 5; // give primary service tiebreaker
      results.push({
        service,
        matchingSubServices: matchingSubServices.length > 0 ? matchingSubServices : service.subServices,
        score
      });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}

