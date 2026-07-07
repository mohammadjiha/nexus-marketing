"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function DeepDiveAICoach() {
  const t = useTranslations("deepDive.aiCoach");

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
              <Bot size={16} />
            </span>
            <span className="text-sm font-bold text-ink">NEXUS AI Coach</span>
            <span className="ms-auto flex items-center gap-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> Online
            </span>
          </div>

          <div className="mt-5 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="ms-auto flex max-w-[80%] items-start gap-2"
            >
              <p className="rounded-2xl rounded-tr-sm bg-blue px-4 py-2.5 text-sm text-white">
                {t("chat.user")}
              </p>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink-2">
                <User size={13} />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="me-auto flex max-w-[85%] items-start gap-2"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
                <Bot size={13} />
              </span>
              <p
                className="rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm text-ink"
                style={{ background: "color-mix(in srgb, var(--blue) 8%, var(--card))" }}
              >
                {t("chat.ai")}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
