"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Instagram, Twitter, Linkedin } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@nexus-app.com";
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "+966500000000";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-section-sm sm:py-section">
      <div className="container-px mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
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
          <motion.p variants={fadeUp} className="mt-4 max-w-sm text-lg text-muted">
            {t("subtitle")}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 space-y-4">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 text-sm font-semibold text-ink transition-colors hover:text-blue"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line">
                <Mail size={16} />
              </span>
              {email}
            </a>
            <a
              href={`https://wa.me/${whatsapp.replace(/[^\d]/g, "")}`}
              className="flex items-center gap-3 text-sm font-semibold text-ink transition-colors hover:text-blue"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line">
                <MessageCircle size={16} />
              </span>
              {whatsapp}
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">{t("social")}</p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-pill border border-line text-ink-2 transition-colors hover:border-blue hover:text-blue"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-pill border border-line text-ink-2 transition-colors hover:border-blue hover:text-blue"
              >
                <Twitter size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-pill border border-line text-ink-2 transition-colors hover:border-blue hover:text-blue"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 0.68, 0, 1] }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-card border border-line bg-card p-6 shadow-soft sm:p-8"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wide text-muted">
              {t("form.name")}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="rounded-btn border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-blue"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wide text-muted">
              {t("form.email")}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="rounded-btn border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-blue"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wide text-muted">
              {t("form.message")}
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              className="rounded-btn border border-line bg-transparent px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-blue"
            />
          </div>
          <Button type="submit" disabled={status === "loading"} className="mt-1">
            {t("form.submit")}
          </Button>
          <p role="status" aria-live="polite" className="min-h-[1.2em] text-sm text-blue">
            {status === "success" && t("form.success")}
            {status === "error" && t("form.error")}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
