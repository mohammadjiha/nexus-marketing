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
| `NEXT_PUBLIC_FORM_ENDPOINT` | Where the contact form POSTs (Formspree-style). Until set, the form just shows a success message without sending anywhere. |
| `NEXT_PUBLIC_APP_STORE_URL` | App Store link (Hero, Footer, CTA band). |
| `NEXT_PUBLIC_GOOGLE_PLAY_URL` | Google Play link (Hero, Footer, CTA band). |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Contact section WhatsApp link. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact section email link. |

Other things to swap before launch:

- **Domain**: replace `https://nexus-app.example.com` in
  [`src/app/[locale]/layout.tsx`](src/app/%5Blocale%5D/layout.tsx),
  [`src/app/sitemap.ts`](src/app/sitemap.ts), and
  [`src/app/robots.ts`](src/app/robots.ts) with the real production domain.
- **Pricing numbers**: [`messages/ar.json`](messages/ar.json) /
  [`messages/en.json`](messages/en.json) → `pricing.tiers.*.price`.
- **Social links**: `#` placeholders in `Footer.tsx` and `Contact.tsx`.
- **Testimonial names/quotes**: `messages/*.json` → `testimonials.items`.
- Real app screenshots can replace the coded phone mockup in
  [`src/components/visuals/PhoneMockup.tsx`](src/components/visuals/PhoneMockup.tsx)
  once available — it's currently a CSS/SVG mock, not a photo.

## Structure

```
messages/{ar,en}.json        i18n copy, one namespace per section
src/
  app/[locale]/               routes, layout, metadata
  middleware.ts                next-intl locale routing
  i18n/                         routing/navigation/request config
  components/ui/                Button, Card, Accordion, toggles, etc.
  components/layout/            Navbar, Footer
  components/visuals/           PhoneMockup (coded app UI)
  sections/                     one file per landing-page section
  lib/                          motion variants, fonts, utils
  styles/tokens.css             design-system CSS variables (light/dark)
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
