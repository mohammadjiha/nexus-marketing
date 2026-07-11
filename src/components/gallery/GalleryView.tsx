"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Dumbbell, Users, Building2, X } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cx } from "@/lib/utils";
import { galleryScreenshots, screenshotSrc, type GalleryCategory } from "@/lib/galleryData";
import { Link } from "@/i18n/navigation";

const categoryKeys: GalleryCategory[] = ["players", "coaches", "gyms"];
const icons = { players: Dumbbell, coaches: Users, gyms: Building2 };

export function GalleryView() {
  const t = useTranslations("gallery");
  const [active, setActive] = useState<GalleryCategory>("players");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const shots = galleryScreenshots[active];

  useEffect(() => {
    setLightboxIndex(null);
  }, [active]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? i : (i + 1) % shots.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? i : (i - 1 + shots.length) % shots.length));
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, shots.length]);

  return (
    <section className="pb-24 pt-32 sm:pt-40">
      <div className="container-px mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeUp} className="text-xs font-bold uppercase tracking-widest text-blue">
            {t("eyebrow")}
          </motion.p>
          <motion.h1 variants={fadeUp} className="mt-3 text-[clamp(2rem,4.5vw,3rem)] font-black text-ink">
            {t("title")}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-lg leading-relaxed text-muted">
            {t("subtitle")}
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link href="/#top" className="mt-6 inline-block text-sm font-semibold text-blue hover:underline">
              {t("back")}
            </Link>
          </motion.div>
        </motion.div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categoryKeys.map((key) => {
            const Icon = icons[key];
            const isActive = active === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActive(key)}
                aria-pressed={isActive}
                className={cx(
                  "flex items-center gap-2 rounded-pill border px-5 py-2.5 text-sm font-semibold transition-colors",
                  isActive
                    ? "border-blue bg-blue text-white"
                    : "border-line text-ink-2 hover:border-blue hover:text-blue"
                )}
              >
                <Icon size={15} />
                {t(`categories.${key}`)}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {shots.length === 0 ? (
            <motion.div
              key={`${active}-empty`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mx-auto mt-16 max-w-md rounded-card border border-dashed border-line py-16 text-center text-muted"
            >
              {t("comingSoon")}
            </motion.div>
          ) : (
            <motion.div
              key={active}
              variants={staggerContainer(0.04)}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
            >
              {shots.map((id, index) => (
                <motion.button
                  key={id}
                  type="button"
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative aspect-[9/19] overflow-hidden rounded-card border border-line shadow-soft transition-shadow hover:shadow-lift"
                >
                  <Image
                    src={screenshotSrc(active, id)}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 31vw, 46vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-10"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label={t("closeLightbox")}
              className="absolute end-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X size={18} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? i : (i - 1 + shots.length) % shots.length));
              }}
              aria-label={t("prevImage")}
              className="absolute start-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:start-6"
            >
              <ChevronLeft size={20} className="rtl:rotate-180" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[9/19] h-[80vh] max-h-[720px] overflow-hidden rounded-[32px] shadow-lift"
            >
              <Image
                src={screenshotSrc(active, shots[lightboxIndex])}
                alt=""
                fill
                sizes="400px"
                className="object-cover"
                priority
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? i : (i + 1) % shots.length));
              }}
              aria-label={t("nextImage")}
              className="absolute end-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:end-6"
            >
              <ChevronRight size={20} className="rtl:rotate-180" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
