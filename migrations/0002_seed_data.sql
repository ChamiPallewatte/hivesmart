-- Migration: 0002_seed_data.sql
-- Seed initial categories, tags, settings and 5 comprehensive blog posts into Cloudflare D1

INSERT OR IGNORE INTO "BlogCategory" ("id", "name", "slug", "description") VALUES
('cat-web', 'Website Development', 'website-development', 'Guides on custom website development, speed, and architecture.'),
('cat-market', 'Market Strategy', 'market-strategy', 'Insights into digital marketing in Sri Lanka and the UAE.'),
('cat-cv', 'CV Design', 'cv-design', 'Strategies for ATS-compliant resumes and executive career portfolios.'),
('cat-mobile', 'Mobile App Development', 'mobile-app-development', 'Engineering iOS, Android, and cross-platform apps.'),
('cat-perf', 'Performance Optimization', 'performance-optimization', 'Core Web Vitals and edge speed optimization.');

INSERT OR IGNORE INTO "SiteSetting" ("key", "value", "description") VALUES
('agency_name', 'HiveSmart', 'Brand Name'),
('phone_lk', '+94 77 809 1278', 'Sri Lanka Phone Line'),
('whatsapp_lk', '94778091278', 'Sri Lanka WhatsApp Number'),
('phone_uae', '+971 54 771 5370', 'Dubai Phone Line'),
('whatsapp_uae', '971547713570', 'Dubai WhatsApp Number'),
('address_lk', 'Kegalle, Sri Lanka', 'Sri Lanka Office Address'),
('address_uae', 'Al Rigga, Deira, Dubai, UAE', 'Dubai Office Address');

INSERT OR IGNORE INTO "BlogPost" (
  "id", "slug", "title", "description", "content", "featuredImage", "author", "readingTime", "published", "seoTitle", "seoDescription", "categoryId"
) VALUES
(
  'post-1',
  'custom-website-development-guide-business-growth',
  'The Complete Business Guide to Custom Website Development in 2026: Why Modern Brands Outperform Generic Templates',
  'Discover why growing businesses in Sri Lanka and Dubai are moving away from heavy page builders and low-quality templates toward custom, conversion-engineered web platforms.',
  '## Why Your Website Is Either Your Greatest Asset or Your Biggest Liability\n\nIn an era where customer attention spans average under 3 seconds, a business website is no longer merely an online brochure. It is an automated sales platform, an institutional credibility engine, and the primary touchpoint through which prospective high-ticket clients assess your capability.\n\nYet countless businesses in Sri Lanka, Dubai, and emerging markets make the critical mistake of using bloated 50-plugin templates or cheap page builders that grind to a halt on mobile devices.',
  '/images/blog/custom-web-dev.svg',
  'Senior Web Architect',
  6,
  1,
  'Custom Website Development Guide 2026 | HiveSmart Agency',
  'Learn why custom-built websites generate 3x higher conversion rates, outperform generic templates, and deliver sub-second loading speeds on Cloudflare.',
  'cat-web'
),
(
  'post-2',
  'web-development-sri-lanka-vs-dubai-market-insights',
  'Web Development in Sri Lanka vs. Dubai: Expanding Your Brand Across South Asia and the GCC',
  'Key market nuances, payment gateway realities, multilingual needs, and digital consumer habits when building websites for Sri Lanka and the UAE.',
  '## Bridging the South Asia - GCC Digital Corridor\n\nSri Lanka and Dubai share deep trade, tourism, and talent connections. Forward-thinking companies in Colombo frequently service clients in Dubai, while UAE-based enterprises rely on Sri Lankan engineering talent to scale technology products.',
  '/images/blog/sri-lanka-dubai-tech.svg',
  'Digital Marketing Strategist',
  7,
  1,
  'Web Development in Sri Lanka & Dubai: Cross-Border Digital Strategy',
  'Explore key differences in web development, payment gateways (PayHere vs Stripe/Telr), and consumer behavior between Sri Lanka and Dubai markets.',
  'cat-market'
),
(
  'post-3',
  'ats-friendly-cv-design-dubai-international-jobs',
  'How to Create an ATS-Friendly CV in 2026 That Passes Automated Screening and Wins Interviews',
  'Learn the technical formatting rules and keyword strategies required to pass Taleo, Workday, and Greenhouse ATS scanners in Dubai and multinational firms.',
  '## Why 75% of Resumes Are Rejected Before a Human Sees Them\n\nIn high-demand international employment hubs like Dubai, Abu Dhabi, Singapore, and London, a single corporate vacancy can attract over 1,000 applicants within 48 hours. Human HR departments cannot physically read every application.',
  '/images/blog/ats-cv-design.svg',
  'Executive Career Strategist',
  5,
  1,
  'ATS-Friendly CV Design Guide 2026: Pass Scanners & Win Interviews',
  'Master the secret rules of ATS resume algorithms. Learn how proper typography, single-layer formatting, and keyword placement get you hired in Dubai.',
  'cat-cv'
),
(
  'post-4',
  'native-vs-cross-platform-mobile-app-development-stack',
  'Native vs. Cross-Platform Mobile Apps: Choosing the Right Stack for Your Business in Dubai and Sri Lanka',
  'A technical comparison of Swift, Kotlin, Flutter, and React Native to help founders and business leaders choose the most cost-effective mobile strategy.',
  '## The Mobile Conundrum: One Codebase or Two?\n\nWhen commissioning a business mobile application, the first major architectural decision is whether to build native apps (Swift for iOS + Kotlin for Android) or adopt a unified cross-platform framework (Flutter or React Native).',
  '/images/blog/mobile-app-stack.svg',
  'Lead Mobile Architect',
  6,
  1,
  'Native vs Cross-Platform App Development 2026 | HiveSmart Guide',
  'Compare Flutter, React Native, iOS Swift, and Android Kotlin. Make the right mobile tech decision for your enterprise application or startup MVP.',
  'cat-mobile'
),
(
  'post-5',
  'core-web-vitals-speed-optimization-lead-generation',
  'Core Web Vitals & Speed Optimization: How 1-Second Delays Cost Web Agencies and Businesses Inquiries',
  'The engineering secrets behind achieving 95+ Google Lighthouse scores, improving mobile retention, and boosting WhatsApp conversion rates.',
  '## Every Millisecond Counts: Speed as a Sales Multiplier\n\nWeb performance is not merely a vanity metric for software engineers—it is a critical revenue driver. Research consistently shows that a 1-second delay in page load time reduces customer conversions by up to 7%.',
  '/images/blog/speed-optimization.svg',
  'Web Performance Specialist',
  5,
  1,
  'Core Web Vitals & Speed Optimization Guide | HiveSmart',
  'Learn how sub-second page loading directly impacts organic Google rankings and increases client WhatsApp conversion rates by up to 200%.',
  'cat-perf'
);

