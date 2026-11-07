# Technical & Content SEO Setup Guide for HiveSmart

This guide provides step-by-step instructions to get the **HiveSmart** website indexed, ranked, and verified on Google and Bing.

---

## 1. Google Search Console Verification

Google Search Console (GSC) is required for Google to index your URLs, monitor search queries, and alert you of mobile usability issues.

### Step-by-Step Connection:
1. Visit [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property**.
3. Select **Domain** (Recommended if your DNS is managed by Cloudflare) or **URL prefix** (e.g. `https://hivesmart.io`).
4. **Verification Method 1 (DNS TXT Record - Fastest on Cloudflare)**:
   - Copy the `google-site-verification=...` TXT record provided by Google.
   - Go to Cloudflare Dashboard → **DNS** → **Records** → **Add record**.
   - Type: `TXT`, Name: `@`, Content: paste the verification string.
   - Return to GSC and click **Verify**.
5. **Verification Method 2 (HTML Meta Tag)**:
   - If using HTML tag verification, copy the verification code string (the content inside `content="..."`).
   - Add it to your `.env` file or Cloudflare environment variables as:
     ```env
     PUBLIC_GOOGLE_SITE_VERIFICATION="your_verification_code_here"
     ```

### Submitting the XML Sitemap:
1. In Search Console, navigate to **Sitemaps** in the left sidebar.
2. Enter the sitemap path:
   ```
   sitemap-index.xml
   ```
3. Click **Submit**. Google will automatically crawl all static and dynamic pages.

---

## 2. Bing Webmaster Tools Integration

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Sign in and choose **Import from Google Search Console** (fastest—imports verification and sitemaps in 1 click) or add `https://hivesmart.io` manually.
3. Submit the sitemap URL: `https://hivesmart.io/sitemap-index.xml`.

---

## 3. Google Business Profile (Local SEO for Sri Lanka & Dubai)

Because HiveSmart maintains regional hubs in **Kegalle, Sri Lanka** and **Al Rigga, Dubai (UAE)**, setting up Google Business Profiles will capture local high-intent search queries (e.g. "web development company in Colombo / Kegalle", "website design company in Al Rigga Dubai").

### Sri Lanka Listing:
- **Business Name**: HiveSmart Digital Solutions - Sri Lanka
- **Primary Category**: Website Designer / Software Company
- **Address**: Kegalle, Sri Lanka
- **Phone Number**: `+94 77 809 1278`
- **Website**: `https://hivesmart.io/services/website-development/`
- **Appointment / Chat URL**: `https://wa.me/94778091278`

### Dubai UAE Listing:
- **Business Name**: HiveSmart Digital Solutions - Dubai
- **Primary Category**: Website Designer / Internet Marketing Service
- **Address**: Al Rigga, Deira, Dubai, UAE
- **Phone Number**: `+971 54 771 5370`
- **Website**: `https://hivesmart.io/services/website-development/`
- **Appointment / Chat URL**: `https://wa.me/971547713570`

---

## 4. Keyword-to-Page Mapping Strategy

HiveSmart targets search intent across multiple regions without duplicate content penalties:

| Target Query Cluster | Target URL | Intent & Schema |
|---|---|---|
| "Website Development", "Web Development Sri Lanka", "Web Development Dubai", "WordPress Website Development" | `/services/website-development/` | Transactional Service Schema with multi-region service areas (LK, AE, Worldwide) |
| "ATS-Friendly CV Design", "Resume Design Dubai", "Professional CV Design Sri Lanka" | `/services/cv-design/` | Transactional Career Service Schema |
| "Mobile App Development Sri Lanka", "Mobile App Development Dubai", "iOS & Android Development" | `/services/mobile-app-development/` | Transactional Mobile Engineering Schema |
| "Custom Website Development Guide 2026", "Sri Lanka vs Dubai Tech Market" | `/blog/[slug]/` | Informational BlogPosting / Article Schema with author attribution |
| "HiveSmart Digital Agency", "Kegalle Web Agency", "Dubai Digital Agency" | `/` and `/about/` | Organization, WebSite & ProfessionalService LocalBusiness Schemas |

---

## 5. Ongoing Technical SEO Verification Checklist

- [x] Canonical tags pointing to HTTPS root URLs on every page
- [x] Unique `<title>` and `<meta name="description">` on every page
- [x] Valid JSON-LD structured data on all pages
- [x] OpenGraph images (1200x630) for Facebook, WhatsApp, and LinkedIn link previews
- [x] Twitter Card summary_large_image
- [x] Semantic heading hierarchy (`<h1>` through `<h3>`) with zero skipped levels
- [x] `robots.txt` dynamic endpoint allowing Googlebot and pointing to `sitemap-index.xml`
- [x] Zero-broken internal links and responsive image attributes (`width`, `height`, `loading="lazy"`)

