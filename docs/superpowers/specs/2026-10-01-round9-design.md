# Round 9: reviews, Google feed, Networking, galleries tools, brand colour, site health, motion

Date: 2026-10-01 (requested 2026-09-30) · Status: decisions made in chat, awaiting spec review

## Owner requests and decisions

| # | Request | Decision |
|---|---|---|
| 1 | Select several gallery items to delete | Multi-select in Galleries: tick boxes + "Select all in this service", bulk bar "N selected · Move to… · Delete", inline confirm. |
| 2 | "Button before delete" unclear | Replace the bare `Move to…` select with a labelled **Move** button that opens a small list of services; every tile button gets a visible tooltip label. |
| 3 | Pull photos from Google Business Profile (share.google link) | Google allows at most 10 profile photos via its API. Chosen path: owner downloads the photos from the profile and drops them into Galleries (no code). Documented in ADMIN_SETUP. |
| 4 | Keep reviews updated from Google | **Fix the Google connection**: switch from the deprecated `PlacesService` (Maps JS, currently blocked: `ApiTargetBlockedMapError`) to **Places API (New)** REST `GET places.googleapis.com/v1/places/{id}` with field mask `rating,userRatingCount,reviews,googleMapsUri`. Key + Place ID entered in Admin > Site Control (stored in `adverts` settings row `__google_settings`, public read). Result cached in the visitor's browser 12 h. Google returns at most 5 reviews. Fallback: current "View reviews on Google" box. Owner steps (key restricted to hailifugh.com + localhost, Places API (New) enabled, Place ID from Google's Place ID Finder) in ADMIN_SETUP. |
| 5 | Add Networking to services | New service key `networking` (label "Networking") everywhere: services section card (existing photo `hailifu Networking 1 - Copy.png`), gallery categories, showcase chips, quote form chips, chatbot services, review form services, Cloudinary helper rules (`network`, `lan`, `wifi`, `cabling`, `structured`). |
| 6 | "System Integrity / Monitoring / SECURE" card | Rebuild as an honest **Aftercare** card: real photo, title "Looked after after we leave", three facts already claimed on the site (24/7 support, call-back within 30 minutes, certified technicians) with icons; remove made-up metrics (99.9% uptime, < 15 min, 360°). |
| 7 | Review submission broken | Root cause: Post requires Firebase Google sign-in; Firebase is not configured, so every submission fails. Replace with a **simple form + approval**: name, stars, text, optional phone, service chips (unchanged look). Saved to Supabase `reviews` with `data.status = 'pending'`. Public insert allowed only for pending rows; public read only published rows (one SQL step: `supabase/sql/reviews_public_submit.sql`). Admin > Reviews shows a "Waiting" list with Approve / Delete. Approved reviews appear in the site's review feed. Thank-you message after posting. |
| 8 | Premium font for "HAILIFU BRILLIANT"; more liquid glass in light mode | Wordmark in **Clash Display**-style premium display face via Google Fonts equivalent: **Unbounded** (wide, geometric, premium) for the menu wordmark only; light-mode glass more transparent with stronger refraction rim and blur. |
| 9 | Work Showcase animation like Services | Showcase cards get the Services entrance + pointer tilt + light (masonry layout stays). |
| 10 | More hover/touch animation with bounces site-wide | Spring (overshoot) press/hover feedback on all buttons, chips, cards and links; touch devices get the press bounce on tap. Off with reduced motion. |
| 11 | Admin email hidden when clicking the account button | Account menu shows "Signed in as <email>" at the top on every screen size. |
| 12 | Brand colour blurs the site | Colour saved site-wide (`adverts` settings row `__brand_settings`, public read, admin write) and applied on every visit (cached to avoid flashes). Text on accent colour picks dark or white by contrast (WCAG ratio ≥ 4.5 where possible); the glass buttons use that text colour. Live preview in Site Control + "Reset to Hailifu orange". |
| 13 | What is the Control Center for | Becomes **Site health**: checks with green/amber/red and a fix link: Supabase reachable, admin session, galleries (items/services), leads (count, newest), reviews (published, waiting), top bar status, banner status, Google reviews feed (key/Place ID/response), brand colour, storage files. |

## Constraints
- No em-dashes in visible copy; escape everything user-provided; keep existing IDs/hooks.
- Database changes only via one new SQL file the owner runs once (reviews policies). Settings rows reuse the `adverts` table (public read, admin write) like the top bar.
- All motion off with `prefers-reduced-motion`; glass has a solid fallback for reduced transparency.
- Tests: Playwright e2e with the simulated Supabase for every behaviour change; screenshots for visual changes.
