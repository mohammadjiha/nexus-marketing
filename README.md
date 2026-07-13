# NEXUS Marketing Site

Bilingual (Arabic/English) marketing landing page for **NEXUS**, a fitness &
gym-management app. Built with Next.js 14 (App Router), TypeScript, Tailwind
CSS, Framer Motion, and next-intl.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — this redirects to `/`
(Arabic, RTL, default). English lives at `/en`. Toggle language from the
navbar; it preserves the current page.

```bash
npm run build   # production build + type-check + lint
npm run start   # serve the production build
```

## Editing content

All copy lives in [`messages/ar.json`](messages/ar.json) and
[`messages/en.json`](messages/en.json) — one namespace per section (`hero`,
`features`, `pricing`, `faq`, etc.). Keep both files in sync when you add or
rename a key.

## Editable placeholders

Copy [`.env.example`](.env.example) to `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `GMAIL_USER` | Gmail address the contact form sends to (via SMTP, see below). Server-only, never exposed to the browser. |
| `GMAIL_APP_PASSWORD` | A [Google App Password](https://myaccount.google.com/apppasswords) for that account — not your regular Gmail password. Requires 2-Step Verification to be enabled first. |
| `NEXT_PUBLIC_APP_STORE_URL` | App Store link (Hero, Footer, CTA band). |
| `NEXT_PUBLIC_GOOGLE_PLAY_URL` | Google Play link (Hero, Footer, CTA band). |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Contact/Support section WhatsApp link. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact/Support section email link. |

The contact form (`src/sections/Contact.tsx`) POSTs to the internal
[`/api/contact`](src/app/api/contact/route.ts) route, which sends an email via
Gmail SMTP (`nodemailer`) to `GMAIL_USER`, with the submitter's address set as
`replyTo`. Until `GMAIL_USER`/`GMAIL_APP_PASSWORD` are set, submissions fail
with a 503 and the form shows an error state.

Other things to swap before launch:

- **Domain**: replace `https://nexus-app.example.com` in
  [`src/app/[locale]/layout.tsx`](src/app/%5Blocale%5D/layout.tsx),
  [`src/app/sitemap.ts`](src/app/sitemap.ts), and
  [`src/app/robots.ts`](src/app/robots.ts) with the real production domain.
- **Social links**: `#` placeholders in `Footer.tsx` and `Contact.tsx`.
- **Legal content**: `messages/*.json` → `legal.privacy` / `legal.terms` are a
  generic starting template — have a lawyer review before real launch.

## Structure

```
messages/{ar,en}.json        i18n copy, one namespace per section
src/
  app/[locale]/               routes, layout, metadata
  app/[locale]/gallery/        real app screenshot gallery (players/coaches/gyms)
  app/[locale]/privacy,terms,  legal + support pages
    support,delete-account/
  app/api/contact/             contact form email delivery (Gmail SMTP)
  middleware.ts                next-intl locale routing
  i18n/                         routing/navigation/request config
  components/ui/                Button, Card, Accordion, toggles, etc.
  components/layout/            Navbar, Footer
  components/legal/             legal/support page layouts
  components/gallery/           screenshot gallery grid + lightbox
  components/visuals/           PhoneMockup (real app screenshots, swipeable tabs)
  sections/                     one file per landing-page section
  lib/                          motion variants, fonts, utils, gallery data
  styles/tokens.css             design-system CSS variables (light/dark)
public/screenshots/            real app screenshots, by role (players/coaches/gyms)
```

## Notes

- Arabic (`ar`) is the deliberate default locale — the browser's
  `Accept-Language` header is intentionally ignored
  (`localeDetection: false` in `src/i18n/routing.ts`) so first-time visitors
  always land on Arabic, not whatever their OS is set to.
- Dark mode is a manual toggle (persisted to `localStorage`), not tied to
  `prefers-color-scheme` alone — it seeds from the OS preference on first
  visit, then remembers the user's choice.
- All motion respects `prefers-reduced-motion` (disabled globally in
  `globals.css`, plus the ember/floating-badge loops in the Hero visual).
