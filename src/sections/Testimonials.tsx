"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Card } from "@/components/ui/Card";

type Testimonial = { name: string; role: string; quote: string };

export function Testimonials() {
  const t = useTranslations("testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <section
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

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div key={item.name} variants={fadeUp}>
              <Card className="flex h-full flex-col">
                <Quote size={22} className="text-blue" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-current text-blue" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-2">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{item.name}</p>
                    <p className="text-xs text-muted">{item.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
