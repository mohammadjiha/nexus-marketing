"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, Target, Sparkles, TrendingUp } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Step = { title: string; description: string };
const icons = [Download, Target, Sparkles, TrendingUp];

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as Step[];

  return (
    <section id="how-it-works" className="py-section-sm sm:py-section">
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

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-6 hidden h-px bg-line lg:block"
          />
          {steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={step.title} variants={fadeUp} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-white shadow-soft">
                  <Icon size={20} />
                </div>
                <p className="mt-4 text-xs font-bold text-blue">0{i + 1}</p>
                <h3 className="mt-1 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
