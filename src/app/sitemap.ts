import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://nexus-app.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.flatMap((locale) => {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
    return [
      {
        url: `${BASE_URL}${prefix}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: locale === routing.defaultLocale ? 1 : 0.8,
      },
      {
        url: `${BASE_URL}${prefix}/gallery`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: locale === routing.defaultLocale ? 0.7 : 0.6,
      },
    ];
  });
}
