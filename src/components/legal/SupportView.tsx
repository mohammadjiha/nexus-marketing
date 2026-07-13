"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, MessageCircle, HelpCircle, UserX } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Link } from "@/i18n/navigation";
import { Card } from "@/components/ui/Card";

export function SupportView() {
  const t = useTranslations("legal");
  const ts = useTranslations("legal.support");
  const topics = ts.raw("topics") as string[];

  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@nexus-app.com";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+966500000000";

  return (
    <section className="pb-24 pt-32 sm:pt-40">
      <div className="container-px mx-auto max-w-3xl">
        <motion.div variants={staggerContainer(0.08)} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-blue">
            {ts("eyebrow")}
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-3 text-[clamp(2rem,4vw,2.75rem)] font-black text-ink">
            {ts("title")}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-muted">
            {ts("intro")}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/#top" className="mt-6 inline-block text-sm font-semibold text-blue hover:underline">
              {t("back")}
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 rounded-card border border-line bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
              <Mail size={18} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">{ts("emailLabel")}</p>
              <p className="text-sm font-bold text-ink">{email}</p>
            </div>
          </a>
          <a
            href={`https://wa.me/${whatsapp.replace(/[^\d]/g, "")}`}
            className="flex items-center gap-3 rounded-card border border-line bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white">
              <MessageCircle size={18} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">{ts("whatsappLabel")}</p>
              <p className="text-sm font-bold text-ink">{whatsapp}</p>
            </div>
          </a>
        </div>

        <Card className="mt-6">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-blue">
              <HelpCircle size={18} />
            </span>
            <div>
              <h2 className="text-lg font-bold text-ink">{ts("faqTitle")}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">{ts("faqBody")}</p>
              <Link href="/#faq" className="mt-3 inline-block text-sm font-semibold text-blue hover:underline">
                {ts("faqCta")} ←
              </Link>
            </div>
          </div>
        </Card>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{ts("topicsTitle")}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-pill border border-line px-4 py-2 text-sm font-medium text-ink-2"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <Link
          href="/delete-account"
          className="mt-8 flex items-center gap-3 rounded-card border border-line bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink-2">
            <UserX size={18} />
          </span>
          <p className="text-sm font-bold text-ink">{ts("deleteAccountCta")} ←</p>
        </Link>
      </div>
    </section>
  );
}
