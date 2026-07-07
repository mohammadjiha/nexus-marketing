"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Camera, ScanLine } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const macroBars = [
  { key: "protein", value: 82, color: "#0A84FF" },
  { key: "carbs", value: 64, color: "#4ee0a1" },
  { key: "fats", value: 45, color: "#ffb454" },
] as const;

export function DeepDiveNutrition() {
  const t = useTranslations("deepDive.nutrition");

  return (
    <section
      className="py-section-sm sm:py-section overflow-hidden"
      style={{ background: "color-mix(in srgb, var(--card) 55%, var(--bg))" }}
    >
      <div className="container-px mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 0.68, 0, 1] }}
          className="order-1 rounded-card border border-line bg-card p-5 shadow-lift sm:p-6"
        >
          <div className="flex items-center gap-2 border-b border-line pb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-white">
              <Camera size={16} />
            </span>
            <span className="text-sm font-bold text-ink">{t("scanner")}</span>
          </div>

          <div className="relative mt-5 flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-ink">
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-1/3"
              style={{
                background:
                  "linear-gradient(180deg, transparent, rgba(10,132,255,0.35), transparent)",
              }}
            />
            <ScanLine size={40} className="text-white/40" />
          </div>

          <div className="mt-5 space-y-3">
            {macroBars.map((bar, i) => (
              <div key={bar.key}>
                <div className="mb-1 flex items-center justify-between text-xs font-semibold text-ink-2">
                  <span>{t(`macros.${bar.key}`)}</span>
                  <span>{bar.value}g</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: bar.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="order-2"
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-blue">
            {t("eyebrow")}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-[clamp(1.9rem,3.4vw,2.6rem)] font-black text-ink">
            {t("title")}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 max-w-md text-lg leading-relaxed text-muted">
            {t("description")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
