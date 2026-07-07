"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Dumbbell, Users, Building2 } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cx } from "@/lib/utils";

const tabKeys = ["trainees", "coaches", "gyms"] as const;
const icons = { trainees: Dumbbell, coaches: Users, gyms: Building2 };

export function AudienceTabs() {
  const t = useTranslations("audience");
  const [active, setActive] = useState<(typeof tabKeys)[number]>("trainees");

  return (
    <section
      id="audience"
      className="py-section-sm sm:py-section"
      style={{ background: "color-mix(in srgb, var(--card) 55%, var(--bg))" }}
    >
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
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {tabKeys.map((key) => {
            const Icon = icons[key];
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={cx(
                  "flex items-center gap-2 rounded-pill border px-5 py-2.5 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-blue bg-blue text-white"
                    : "border-line text-ink-2 hover:border-blue hover:text-blue"
                )}
                aria-pressed={isActive}
              >
                <Icon size={15} />
                {t(`tabs.${key}.label`)}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: [0.22, 0.68, 0, 1] }}
            >
              <h3 className="text-2xl font-bold text-ink">{t(`tabs.${active}.title`)}</h3>
              <ul className="mt-6 space-y-4">
                {(t.raw(`tabs.${active}.points`) as string[]).map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-blue"
                      style={{ background: "color-mix(in srgb, var(--blue) 14%, transparent)" }}
                    >
                      <Check size={13} />
                    </span>
                    <span className="text-ink-2">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <motion.div
            key={active + "-visual"}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 0.68, 0, 1] }}
            className="relative aspect-[4/3] overflow-hidden rounded-card bg-brand-gradient p-8"
          >
            <div className="flex h-full flex-col justify-between">
              {(() => {
                const Icon = icons[active];
                return <Icon size={40} className="text-white/90" />;
              })()}
              <p className="text-2xl font-bold text-white">{t(`tabs.${active}.label`)}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
