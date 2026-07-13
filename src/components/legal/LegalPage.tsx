"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Link } from "@/i18n/navigation";

type Section = { heading: string; body: string };

export function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
  backLabel,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
  backLabel: string;
}) {
  return (
    <section className="pb-24 pt-32 sm:pt-40">
      <div className="container-px mx-auto max-w-3xl">
        <motion.div variants={staggerContainer(0.08)} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-blue">
            {eyebrow}
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-3 text-[clamp(2rem,4vw,2.75rem)] font-black text-ink">
            {title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-muted">
            {intro}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/#top" className="mt-6 inline-block text-sm font-semibold text-blue hover:underline">
              {backLabel}
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-12 space-y-10 border-t border-line pt-10">
          {sections.map((section, i) => (
            <motion.div
              key={section.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: Math.min(i * 0.03, 0.3) }}
            >
              <h2 className="text-xl font-bold text-ink">{section.heading}</h2>
              <p className="mt-3 leading-relaxed text-ink-2">{section.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
