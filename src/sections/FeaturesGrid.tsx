"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Sparkles,
  Utensils,
  Dumbbell,
  Watch,
  Trophy,
  ShoppingBag,
  Users,
  Building2,
  Check,
} from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Card } from "@/components/ui/Card";

const featureKeys = [
  "aiCoach",
  "nutrition",
  "workout",
  "wearables",
  "gamification",
  "shop",
  "community",
  "gym",
] as const;

const icons: Record<(typeof featureKeys)[number], React.ElementType> = {
  aiCoach: Sparkles,
  nutrition: Utensils,
  workout: Dumbbell,
  wearables: Watch,
  gamification: Trophy,
  shop: ShoppingBag,
  community: Users,
  gym: Building2,
};

export function FeaturesGrid() {
  const t = useTranslations("features");

  return (
    <section id="features" className="py-section-sm sm:py-section">
      <div className="container-px mx-auto max-w-7xl">
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
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featureKeys.map((key) => {
            const Icon = icons[key];
            const points = t.raw(`items.${key}.points`) as string[];
            return (
              <motion.div key={key} variants={fadeUp}>
                <Card className="h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-2xl text-blue"
                    style={{ background: "color-mix(in srgb, var(--blue) 12%, transparent)" }}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-ink">{t(`items.${key}.title`)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(`items.${key}.description`)}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs text-ink-2">
                        <Check size={13} className="mt-0.5 shrink-0 text-blue" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
