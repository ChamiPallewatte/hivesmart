# HiveSmart - Professional Digital Marketing & Web Development Agency

A modern, high-performance, conversion-engineered digital services agency website built with **Astro 5**, **TypeScript**, **Tailwind CSS v4**, **Cloudflare Workers / Pages**, **Cloudflare D1 Database (SQLite)**, and **Prisma ORM**.

Designed specifically to generate high-value client inquiries through frictionless **WhatsApp Lead Generation** targeting **Sri Lanka**, **Dubai / UAE**, and **International markets**.

---

## 🚀 Key Features

- **Primary Service Focus**: Dedicated visual hierarchy and comprehensive technical coverage for **Website Development** (Custom builds, WordPress, Ecommerce, Speed Optimization, Maintenance).
- **Secondary Disciplines**: Dedicated SEO landing pages for **ATS-Friendly CV Design** and **Mobile Application Development (iOS & Android)**.
- **Instant Search Bar**: Prominent, real-time interactive search on the homepage recognizing services and keywords, navigating to `/services/?q=...` with automatic keyword highlighting.
- **WhatsApp Conversion Architecture**:
  - Floating WhatsApp Lead Hub with regional switching between **Sri Lanka** and **Dubai**.
  - Dynamic pre-filled messages customized per service and referral keyword.
  - Zero form friction on the Contact page—all leads route straight to WhatsApp and phone.
  - Correct international format phone numbers:
    - **Sri Lanka Hub**: `+94 77 809 1278` (`https://wa.me/94778091278`)
    - **Dubai Hub**: `+971 54 771 5370` (`https://wa.me/971547713570`)
- **Technical SEO & Schema Markup**:
  - Full OpenGraph & Twitter Cards
  - Automated `sitemap-index.xml` and `robots.txt`
  - JSON-LD Structured Data: `Organization`, `WebSite` (with Sitelinks Searchbox), `ProfessionalService` / `LocalBusiness` (Sri Lanka & Dubai hubs), `Service` schema, `Article` schema, and `BreadcrumbList`.
- **Database-Backed Blog & CMS**:
  - Cloudflare D1 SQLite database with Prisma ORM (`@prisma/adapter-d1`).
  - Resilient static fallback ensuring zero build or deployment latency.
  - 5 comprehensive, original industry articles.
- **Privacy-Conscious Tracking**:
  - Custom event telemetry capturing `whatsapp_click`, `internal_search`, `phone_click`, `service_view`, and `page_view`.
  - Configurable support for Google Analytics 4 (GA4) and Cloudflare Web Analytics.

---

## 🛠 Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Astro 5](https://astro.build) (Static rendering with on-demand edge endpoints) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) with `@tailwindcss/vite` |
| **Language** | TypeScript (Strict mode) |
| **Deployment Runtime** | Cloudflare Workers & Pages via `@astrojs/cloudflare` |
| **Database** | Cloudflare D1 (Serverless SQLite) |
| **ORM** | Prisma 7 with `@prisma/adapter-d1` |
| **DNS & CDN** | Cloudflare Global Edge Network |

---

## 📁 Project Structure

```
hivesmart/
├── migrations/                  # Cloudflare D1 SQL migrations
│   ├── 0001_initial_schema.sql  # Database tables & indexes
│   └── 0002_seed_data.sql       # Seed data for categories, tags, settings & posts
├── prisma/
│   └── schema.prisma            # Prisma schema models (BlogPost, Category, Tag, Setting, Admin)
├── public/
│   ├── favicon.svg              # Custom modern geometric agency icon
│   ├── og-image.svg             # 1200x630 social share preview card
│   └── images/
│       ├── blog/                # SVG illustrations for blog articles
│       └── services/            # SVG mockups for web, CV, and mobile services
├── src/
│   ├── components/
│   │   ├── Analytics.astro      # Privacy-friendly GA4 / Cloudflare analytics runner
│   │   ├── BlogCard.astro       # Blog article preview card
│   │   ├── Breadcrumbs.astro    # Semantic breadcrumbs with JSON-LD
│   │   ├── CTA.astro            # "Have a Project in Mind?" WhatsApp section
│   │   ├── Footer.astro         # Agency footer with regional contact cards
│   │   ├── Header.astro         # Sticky navigation with mobile drawer
│   │   ├── Hero.astro           # Large hero with headline, badges & prominent search
│   │   ├── SearchBar.astro      # Interactive live search with keyword chips
│   │   ├── SEO.astro            # Full meta tags, OG, Twitter & Schema
│   │   ├── ServiceCard.astro    # Service overview card with primary badge
│   │   ├── WhatsAppButton.astro # Reusable WhatsApp CTA with tracking hooks
│   │   └── WhatsAppFloating.astro # Floating dual-region WhatsApp hub
│   ├── config/
│   │   ├── services.ts          # Central services, sub-services, and search mappings
│   │   └── site.ts              # Agency brand, phone numbers, and WhatsApp templates
│   ├── layouts/
│   │   ├── BaseLayout.astro     # Master layout
│   │   └── BlogLayout.astro     # Layout for single blog articles
│   ├── lib/
│   │   ├── analytics/events.ts  # Event tracking (whatsapp_click, internal_search, etc.)
│   │   ├── database/            # Prisma D1 adapter & initial static post data
│   │   ├── seo/                 # Schema generators & metadata utilities
│   │   └── whatsapp/links.ts    # WhatsApp URL builder & tracking attributes
│   ├── pages/
│   │   ├── admin/index.astro    # Protected admin portal (password authentication)
│   │   ├── api/analytics.ts     # Edge API endpoint for event beacons
│   │   ├── blog/
│   │   │   ├── index.astro      # Blog index with categories & featured post
│   │   │   └── [...slug].astro  # Individual blog article pages
│   │   ├── services/
│   │   │   ├── index.astro      # Services overview with live ?q= filter
│   │   │   ├── website-development.astro # Primary service deep dive
│   │   │   ├── cv-design.astro  # ATS CV design deep dive
│   │   │   └── mobile-app-development.astro # Mobile application deep dive
│   │   ├── about.astro          # Genuine agency story, methodology & standards
│   │   ├── contact.astro        # 100% form-free WhatsApp & direct call page
│   │   ├── index.astro          # Homepage
│   │   └── robots.txt.ts        # Dynamic robots.txt
│   └── styles/
│       └── global.css           # Tailwind v4 import & custom styling
├── astro.config.mjs             # Astro 5 configuration with Cloudflare adapter
├── package.json
├── tsconfig.json
├── wrangler.jsonc               # Cloudflare configuration with D1 database binding
├── .env.example                 # Safe environment configuration template
├── SEO_SETUP.md                 # Complete Google & Bing search engine guide
├── TRACKING_SETUP.md            # Google Analytics & Cloudflare tracking guide
└── DEPLOYMENT_CHECKLIST.md      # Cloudflare deployment checklist
```

---

## 💻 Local Development

### 1. Prerequisites
- Node.js 20+ (Node.js 24 supported)
- npm or pnpm

### 2. Setup
```bash
# Clone the repository
git clone https://github.com/ChamiPallewatte/hivesmart.git
cd hivesmart

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Generate Prisma client
npm run db:generate
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 4. Build for Production
```bash
npm run build
```

---

## 🗄️ Cloudflare D1 Database & Migrations

The database models are specified in `prisma/schema.prisma` and applied via SQL migrations in `migrations/`:

### Local Testing with Wrangler:
```bash
# Create local D1 SQLite database and run migrations
npx wrangler d1 migrations apply hivesmart-db --local
```

### Production Deployment to Cloudflare:
```bash
# 1. Log in to your Cloudflare account
npx wrangler login

# 2. Create the production D1 database
npx wrangler d1 create hivesmart-db

# 3. Update wrangler.jsonc with the database_id returned by the command
# 4. Apply migrations to the production D1 database
npx wrangler d1 migrations apply hivesmart-db --remote
```

---

## ☁️ Cloudflare Deployment Guide (Free Tier)

HiveSmart runs natively on Cloudflare's free tier (Workers/Pages + D1 Database + Global CDN + Free SSL).

### Option A: Automatic Git Integration via Cloudflare Dashboard
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select the `ChamiPallewatte/hivesmart` repository.
4. Configure Build Settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Under **Environment variables**, add any desired values from `.env.example` (e.g., `PUBLIC_GA4_ID`).
6. Under **D1 database bindings**, attach `DB` to `hivesmart-db`.
7. Click **Save and Deploy**.

### Option B: Deploy via Wrangler CLI
```bash
npm run build
npx wrangler deploy
```

---

## 🔒 Security Best Practices

- `.gitignore` strictly protects `.env`, `.env.*`, `node_modules/`, `dist/`, `.wrangler/`, and local databases.
- The Admin Portal at `/admin/` is protected by `ADMIN_SESSION_PASSWORD` (default local dev key: `hivesmart2026`). Change this secret in your production environment settings.
- Contact leads are routed entirely through end-to-end encrypted WhatsApp communication—no databases or form endpoints store visitors' personal contact information without their explicit consent.

---

## 📞 Regional Contact Hubs

- **Sri Lanka Office**: Kegalle, Sri Lanka • Direct: `+94 77 809 1278` • [WhatsApp Link](https://wa.me/94778091278)
- **Dubai / UAE Office**: Al Rigga, Deira, Dubai, UAE • Direct: `+971 54 771 5370` • [WhatsApp Link](https://wa.me/971547713570)
