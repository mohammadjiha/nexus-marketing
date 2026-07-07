"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Apple, PlayCircle } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function CTABand() {
  const t = useTranslations("ctaBand");

  return (
    <section className="relative overflow-hidden bg-brand-gradient py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 start-1/4 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-px relative mx-auto max-w-3xl text-center"
      >
        <motion.h2 variants={fadeUp} className="text-[clamp(2rem,4.5vw,3.2rem)] font-black text-white">
          {t("title")}
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-4 text-lg text-white/80">
          {t("subtitle")}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#"}
            className="flex items-center gap-2 rounded-btn bg-white px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            <Apple size={18} /> {t("appStore")}
          </a>
          <a
            href={process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ?? "#"}
            className="flex items-center gap-2 rounded-btn border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <PlayCircle size={18} /> {t("googlePlay")}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
