import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://nexus-app.example.com";

const SECONDARY_PAGES = ["gallery", "support", "privacy", "terms", "delete-account"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) => {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    const priority = locale === routing.defaultLocale ? 1 : 0.8;
    return [
      {
        url: `${BASE_URL}${prefix}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority,
      },
      ...SECONDARY_PAGES.map((page) => ({
        url: `${BASE_URL}${prefix}/${page}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: priority - 0.3,
      })),
    ];
  });
}
