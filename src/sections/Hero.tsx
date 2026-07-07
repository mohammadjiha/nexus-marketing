"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Apple, PlayCircle, Play, Sparkles, Watch, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PhoneMockup } from "@/components/visuals/PhoneMockup";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-36 sm:pt-44"
    >
      {/* Ambient gradient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] bg-brand-gradient opacity-[0.08] blur-3xl"
      />

      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate="visible"
        className="container-px mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2"
      >
        <div className="max-w-xl">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-1.5 rounded-pill border border-line bg-card px-3.5 py-1.5 text-xs font-semibold text-blue"
          >
            <Sparkles size={13} /> {t("eyebrow")}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[clamp(2.25rem,5.5vw,3.75rem)] font-black leading-[1.08] tracking-tight text-ink"
          >
            {t("title")}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            {t("subtitle")}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg">{t("ctaPrimary")}</Button>
            <button className="flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-blue">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line">
                <Play size={16} fill="currentColor" />
              </span>
              {t("ctaSecondary")}
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#"}
              className="flex items-center gap-2 rounded-btn border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
            >
              <Apple size={18} /> {t("appStore")}
            </a>
            <a
              href={process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ?? "#"}
              className="flex items-center gap-2 rounded-btn border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-blue hover:text-blue"
            >
              <PlayCircle size={18} /> {t("googlePlay")}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-line pt-6"
          >
            <span className="text-sm font-semibold text-ink-2">{t("stats.diet")}</span>
            <span className="text-sm font-semibold text-ink-2">{t("stats.exercises")}</span>
            <span className="flex items-center gap-1 text-sm font-semibold text-ink-2">
              <Star size={14} className="fill-current text-blue" />
              {t("stats.rating")}
            </span>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative flex justify-center"
        >
          <PhoneMockup />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 1 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
            }}
            className="glass absolute start-0 top-10 hidden items-center gap-2 rounded-pill px-4 py-2.5 shadow-lift sm:flex"
          >
            <Sparkles size={14} className="text-blue" />
            <span className="text-xs font-semibold text-ink">{t("badge1")}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 1.3 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 },
            }}
            className="glass absolute end-0 bottom-16 hidden items-center gap-2 rounded-pill px-4 py-2.5 shadow-lift sm:flex"
          >
            <Watch size={14} className="text-blue" />
            <span className="text-xs font-semibold text-ink">{t("badge2")}</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
