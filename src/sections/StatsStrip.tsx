"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function StatsStrip() {
  const t = useTranslations("statsStrip");

  const stats = [
    { to: 23, suffix: "+", label: t("countries") },
    { to: 850, suffix: "+", label: t("gyms") },
    { to: 120, suffix: "k+", label: t("members") },
    { to: 500, suffix: "+", label: t("exercises") },
  ];

  return (
    <section className="bg-surface py-16 sm:py-20">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-px mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp} className="text-center">
            <p className="text-[clamp(1.75rem,4vw,2.75rem)] font-black text-white">
              <Counter to={stat.to} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-sm text-white/60">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
