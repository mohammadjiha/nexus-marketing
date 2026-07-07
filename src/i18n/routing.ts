import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ar", "en"],
  defaultLocale: "ar",
  localePrefix: "as-needed",
  // Arabic is the deliberate default for our MENA audience — don't let the
  // browser's Accept-Language header silently switch first-time visitors.
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
