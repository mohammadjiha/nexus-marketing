"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { cx } from "@/lib/utils";

const tierKeys = ["trainee", "pro", "gym"] as const;

export function Pricing() {
  const t = useTranslations("pricing");

  return (
    <section id="pricing" className="py-section-sm sm:py-section">
      <div className="container-px mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-blue">
            {t("eyebrow")}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-[clamp(1.9rem,3.6vw,2.75rem)] font-black text-ink">
            {t("title")}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-lg text-muted">
            {t("subtitle")}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {tierKeys.map((key) => {
            const isPopular = key === "pro";
            const isContact = key === "gym";
            const features = t.raw(`tiers.${key}.features`) as string[];

            return (
              <motion.div
                key={key}
                variants={fadeUp}
                className={cx(
                  "relative flex flex-col rounded-card border p-8",
                  isPopular
                    ? "border-blue bg-card shadow-lift lg:-translate-y-3"
                    : "border-line bg-card shadow-soft"
                )}
              >
                {isPopular && (
                  <span className="absolute -top-3.5 start-1/2 -translate-x-1/2 rounded-pill bg-blue px-3.5 py-1 text-xs font-bold text-white">
                    {t("popular")}
                  </span>
                )}
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted">
                  {t(`tiers.${key}.name`)}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-ink">{t(`tiers.${key}.price`)}</span>
                  {key === "pro" && (
                    <span className="text-sm font-semibold text-muted">{t("perMonth")}</span>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted">{t(`tiers.${key}.description`)}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-2">
                      <Check size={15} className="mt-0.5 shrink-0 text-blue" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={isPopular ? "primary" : "outline"}
                  className="mt-8 w-full"
                >
                  {isContact ? t("ctaContact") : t("cta")}
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
