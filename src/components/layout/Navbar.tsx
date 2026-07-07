"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LangToggle } from "@/components/ui/LangToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cx } from "@/lib/utils";

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#features", label: t("links.features") },
    { href: "#audience", label: t("links.audience") },
    { href: "#how-it-works", label: t("links.howItWorks") },
    { href: "#pricing", label: t("links.pricing") },
    { href: "#faq", label: t("links.faq") },
  ];

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4"
      )}
    >
      <div
        className={cx(
          "container-px mx-auto flex max-w-7xl items-center justify-between rounded-pill transition-all duration-300",
          scrolled ? "glass shadow-soft py-2" : "bg-transparent py-2"
        )}
      >
        <a href="#top" className="flex items-center gap-2 text-lg font-black tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-sm font-black text-white">
            N
          </span>
          {t("brand")}
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-2 transition-colors hover:text-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle />
          <ThemeToggle />
          <Button size="md">{t("cta")}</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-pill border border-line text-ink"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-bg lg:hidden"
          >
            <div className="container-px flex items-center justify-between py-4">
              <span className="text-lg font-black text-ink">{t("brand")}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-pill border border-line text-ink"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav
              className="container-px flex flex-1 flex-col items-start justify-center gap-6"
              aria-label="Mobile"
            >
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  className="text-3xl font-bold text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="mt-4 flex items-center gap-3">
                <LangToggle />
              </div>
              <Button size="lg" className="mt-2 w-full" onClick={() => setOpen(false)}>
                {t("cta")}
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
