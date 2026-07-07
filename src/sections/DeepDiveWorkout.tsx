"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Dumbbell, PlayCircle } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Day = { day: string; focus: string };

export function DeepDiveWorkout() {
  const t = useTranslations("deepDive.workout");
  const days = t.raw("days") as Day[];

  return (
    <section className="py-section-sm sm:py-section overflow-hidden">
      <div className="container-px mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
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

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 0.68, 0, 1] }}
          className="rounded-card border border-line bg-card p-5 shadow-lift sm:p-6"
        >
          <div className="flex items-center gap-2 border-b border-line pb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-white">
              <Dumbbell size={16} />
            </span>
            <span className="text-sm font-bold text-ink">Split Wizard</span>
          </div>

          <div className="mt-4 flex flex-col divide-y divide-line">
            {days.map((d, i) => (
              <motion.div
                key={d.day}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-center justify-between py-3"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-line text-xs font-bold text-ink-2">
                    {d.day.slice(0, 2)}
                  </span>
                  <span className="text-sm font-semibold text-ink">{d.focus}</span>
                </div>
                {i === 0 && <PlayCircle size={18} className="text-blue" />}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
