# Analytics & Conversion Tracking Guide for HiveSmart

HiveSmart incorporates a privacy-first, high-precision event telemetry system built to measure client conversions and lead acquisition through WhatsApp.

---

## 1. Cloudflare Web Analytics (Free & Privacy-Friendly)

Cloudflare Web Analytics provides essential traffic insights (visitors, page views, countries, top pages) without using third-party tracking cookies or invasive fingerprinting.

### Setup Instructions:
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the top navigation, go to **Analytics & Logs** → **Web Analytics**.
3. Click **Add a site** and enter your domain `hivesmart.io`.
4. Copy the JS snippet's token value inside `data-cf-beacon='{"token": "YOUR_TOKEN_HERE"}'`.
5. Add this token to your `.env` or Cloudflare Environment Variables:
   ```env
   PUBLIC_CF_ANALYTICS_TOKEN="your_cloudflare_analytics_token"
   ```
6. Rebuild or redeploy. Cloudflare will begin aggregating global visitor traffic immediately.

---

## 2. Google Analytics 4 (GA4) Integration

GA4 enables deep event analysis and conversion funnel reporting.

### Setup Instructions:
1. Go to [Google Analytics](https://analytics.google.com/).
2. Create an Account & Property for **HiveSmart**.
3. Under **Admin** → **Data Streams**, select **Web** and enter `https://hivesmart.io`.
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`).
5. Add it to your `.env` or Cloudflare Environment Variables:
   ```env
   PUBLIC_GA4_ID="G-XXXXXXXXXX"
   ```

---

## 3. Tracked Custom Events & Data Payloads

The website automatically dispatches the following structured conversion events:

### Event: `whatsapp_click` (Primary Conversion)
Fired whenever a user clicks any WhatsApp CTA across the site (Header, Hero, Floating Widget, Service cards, or Contact page).

**Captured Parameters**:
- `service`: Name of the service viewed (e.g., "Website Development", "CV Design", "Mobile Application")
- `location`: "Sri Lanka" or "Dubai / UAE"
- `placement`: UI location of the button (e.g. `header`, `hero`, `floating_widget`, `contact_lk`)
- `url`: Current page URL where conversion took place
- `title`: Current page title
- `searchKeyword`: If the visitor arrived via internal search (e.g., "WordPress", "ATS CV")
- `referrer`: External referrer or internal referrer URL
- `timestamp`: ISO timestamp

### Event: `internal_search`
Fired when a user searches via the prominent Hero or Services search bars.
- `query`: Keyword typed by visitor (e.g., "WordPress", "ATS CV", "Android")

### Event: `phone_click`
Fired when a user taps a direct phone call link (`tel:+94778091278` or `tel:+971547713570`).
- `tel`: Telephone number dialed
- `text`: Anchor link display text

---

## 4. How to Verify Tracking in GA4 DebugView

1. Install the [Google Analytics Debugger](https://chromewebstore.google.com/detail/google-analytics-debugger) Chrome extension, or use Google Tag Assistant (`tagassistant.google.com`).
2. Open your live site `https://hivesmart.io`.
3. Click on the **WhatsApp Sri Lanka** or **WhatsApp Dubai** button.
4. In GA4, go to **Admin** → **DebugView**.
5. You will see the `whatsapp_click` event appear in real-time with full metadata: `service`, `location`, `placement`, and `url`.
6. To mark this as a key conversion, go to **Admin** → **Events**, locate `whatsapp_click`, and toggle **Mark as key event**.

