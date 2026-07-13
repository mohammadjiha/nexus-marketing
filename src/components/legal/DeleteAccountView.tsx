"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Mail } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";

export function DeleteAccountView() {
  const t = useTranslations("legal");
  const td = useTranslations("legal.deleteAccount");
  const steps = td.raw("steps") as { title: string; body: string }[];
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@nexus-app.com";

  return (
    <section className="pb-24 pt-32 sm:pt-40">
      <div className="container-px mx-auto max-w-3xl">
        <motion.div variants={staggerContainer(0.08)} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-blue">
            {td("eyebrow")}
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-3 text-[clamp(2rem,4vw,2.75rem)] font-black text-ink">
            {td("title")}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-muted">
            {td("intro")}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/#top" className="mt-6 inline-block text-sm font-semibold text-blue hover:underline">
              {t("back")}
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-12 space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex gap-4 rounded-card border border-line bg-card p-5 shadow-soft"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                {i + 1}
              </span>
              <div>
                <h2 className="font-bold text-ink">{step.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-ink-2">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card>
            <div className="flex items-center gap-2 text-blue">
              <CheckCircle2 size={18} />
              <h3 className="font-bold text-ink">{td("dataRemovedTitle")}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{td("dataRemoved")}</p>
          </Card>
          <Card>
            <div className="flex items-center gap-2 text-blue">
              <Clock size={18} />
              <h3 className="font-bold text-ink">{td("dataRetainedTitle")}</h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{td("dataRetained")}</p>
          </Card>
        </div>

        <p className="mt-6 text-sm text-muted">{td("timeframe")}</p>

        <a
          href={`mailto:${email}`}
          className="mt-8 flex items-center gap-3 rounded-card border border-line bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
            <Mail size={18} />
          </span>
          <p className="text-sm font-bold text-ink">{email}</p>
        </a>
      </div>
    </section>
  );
}
