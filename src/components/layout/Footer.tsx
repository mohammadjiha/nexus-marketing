import { useTranslations } from "next-intl";
import { Apple, PlayCircle, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t("columns.product.title"),
      items: [
        { label: t("columns.product.features"), href: "#features" },
        { label: t("columns.product.pricing"), href: "#pricing" },
        { label: t("columns.product.coaches"), href: "#audience" },
        { label: t("columns.product.gyms"), href: "#audience" },
      ],
    },
    {
      title: t("columns.company.title"),
      items: [
        { label: t("columns.company.about"), href: "#top" },
        { label: t("columns.company.contact"), href: "#contact" },
        { label: t("columns.company.faq"), href: "#faq" },
      ],
    },
    {
      title: t("columns.legal.title"),
      items: [
        { label: t("columns.legal.privacy"), href: "#" },
        { label: t("columns.legal.terms"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-line bg-bg">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 text-lg font-black text-ink">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-sm font-black text-white">
                N
              </span>
              {nav("brand")}
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted">{t("tagline")}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-pill border border-line text-ink-2 transition-colors hover:border-blue hover:text-blue"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-pill border border-line text-ink-2 transition-colors hover:border-blue hover:text-blue"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-pill border border-line text-ink-2 transition-colors hover:border-blue hover:text-blue"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-ink">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-blue"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            {t("storeLabel")}
          </span>
          <div className="flex flex-wrap gap-3">
            <a
              href={process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#"}
              className="flex items-center gap-2 rounded-btn border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
            >
              <Apple size={18} /> App Store
            </a>
            <a
              href={process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ?? "#"}
              className="flex items-center gap-2 rounded-btn border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
            >
              <PlayCircle size={18} /> Google Play
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-xs text-muted">
          {t("copyright", { year })}
        </div>
      </div>
    </footer>
  );
}
