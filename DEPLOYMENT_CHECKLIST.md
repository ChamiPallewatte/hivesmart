# Cloudflare Production Deployment Checklist for HiveSmart

Follow these 10 steps to take HiveSmart from the GitHub repository to a live custom domain on Cloudflare's free-tier infrastructure.

---

### Step 1: Create a Cloudflare Account
- Sign up at [cloudflare.com](https://www.cloudflare.com/) (Free plan).
- Confirm your email address.

### Step 2: Push Repository to GitHub
- Ensure all latest commits are pushed to `https://github.com/ChamiPallewatte/hivesmart.git` on the `main` branch.

### Step 3: Create the Cloudflare D1 Database
Open your local terminal and execute:
```bash
# Log in with your Cloudflare account
npx wrangler login

# Create serverless SQLite D1 database
npx wrangler d1 create hivesmart-db
```
*Note down the returned `database_id` and ensure it is updated in `wrangler.jsonc`.*

### Step 4: Apply Initial Database Migrations
Run the SQL schema and seed migrations against your remote Cloudflare D1 database:
```bash
npx wrangler d1 migrations apply hivesmart-db --remote
```
*This automatically sets up all SQLite tables and seeds the 5 initial blog articles, categories, and business settings.*

### Step 5: Connect Repository to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Authorize GitHub and select the `ChamiPallewatte/hivesmart` repository.
3. Select branch: `main`.

### Step 6: Configure Build Settings
Under the build configuration dialog:
- **Framework preset**: `Astro`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node.js version**: Under Environment Variables, set `NODE_VERSION` to `20` or higher.

### Step 7: Configure Cloudflare D1 Binding
1. In Cloudflare Dashboard, go to your new Pages project → **Settings** → **Functions** (or **Bindings**).
2. Under **D1 database bindings**, click **Add binding**:
   - **Variable name**: `DB`
   - **D1 database**: Select `hivesmart-db`
3. Click **Save**.

### Step 8: Set Production Environment Variables
Under **Settings** → **Environment variables** (Production), add your custom values:
- `PUBLIC_SITE_URL`: `https://hivesmart.io` (or your domain)
- `PUBLIC_GA4_ID`: (Your Google Analytics measurement ID, e.g., `G-XXXXXXXXXX`)
- `PUBLIC_CF_ANALYTICS_TOKEN`: (Your Cloudflare Web Analytics token)
- `ADMIN_SESSION_PASSWORD`: (A strong password for the `/admin/` portal)
- `ADMIN_SECRET_KEY`: (A random secret string for session cookies)

### Step 9: Deploy the Website
Click **Save and Deploy** (or trigger a new commit on `main`). Cloudflare will build the Astro application and distribute static assets across its global 300+ edge locations in less than 2 minutes.

### Step 10: Connect Custom Domain & Final Verification
1. In Cloudflare Dashboard → Pages Project → **Custom domains**, click **Set up a custom domain**.
2. Enter `hivesmart.io` (or your registered domain).
3. Cloudflare will automatically provision a free universal SSL certificate and configure HTTPS DNS routing.
4. **Final Verification**:
   - Open your live URL on desktop and mobile.
   - Verify Homepage search bar typing and filter navigation to `/services/?q=...`.
   - Tap WhatsApp buttons and verify `wa.me/94778091278` and `wa.me/971547713570` open with proper prefilled text.
   - Test `/robots.txt` and `/sitemap-index.xml`.
   - Access `/admin/` and test authentication with your password.

