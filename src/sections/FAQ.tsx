"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

export function FAQ() {
  const t = useTranslations("faq");
  const items = t.raw("items") as AccordionItem[];

  return (
    <section id="faq" className="py-section-sm sm:py-section">
      <div className="container-px mx-auto max-w-3xl">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-blue">
            {t("eyebrow")}
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-[clamp(1.9rem,3.6vw,2.75rem)] font-black text-ink">
            {t("title")}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-12"
        >
          <Accordion items={items} />
        </motion.div>
      </div>
    </section>
  );
}
