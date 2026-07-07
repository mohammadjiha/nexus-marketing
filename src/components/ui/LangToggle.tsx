"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Languages } from "lucide-react";

export function LangToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");

  const nextLocale = locale === "ar" ? "en" : "ar";

  return (
    <button
      type="button"
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className="flex items-center gap-1.5 rounded-pill border border-line px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
      aria-label={t("langToggle")}
    >
      <Languages size={14} strokeWidth={2} aria-hidden="true" />
      {t("langToggle")}
    </button>
  );
}
