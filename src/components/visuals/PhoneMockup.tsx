"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { LayoutGrid, Dumbbell, BookOpen, Apple, Bot, Users, Trophy, ShoppingBag } from "lucide-react";

type Tab = "dashboard" | "workout" | "exercises" | "nutrition" | "coach" | "community" | "rewards" | "shop";

const SCREENS: { id: Tab; icon: typeof LayoutGrid; src: string }[] = [
  { id: "dashboard", icon: LayoutGrid, src: "/screenshots/players/home-dashboard.jpeg" },
  { id: "workout", icon: Dumbbell, src: "/screenshots/players/workout-live-log.jpeg" },
  { id: "exercises", icon: BookOpen, src: "/screenshots/players/exercise-library.jpeg" },
  { id: "nutrition", icon: Apple, src: "/screenshots/players/food-scanner.jpeg" },
  { id: "coach", icon: Bot, src: "/screenshots/players/ai-coach-chat.jpeg" },
  { id: "community", icon: Users, src: "/screenshots/players/community-feed.jpeg" },
  { id: "rewards", icon: Trophy, src: "/screenshots/players/leaderboard.jpeg" },
  { id: "shop", icon: ShoppingBag, src: "/screenshots/players/shop-product.jpeg" },
];

export function PhoneMockup() {
  const t = useTranslations("hero.tabs");
  const [active, setActive] = useState<Tab>("dashboard");

  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      {/* Phone frame */}
      <div className="relative aspect-[9/19] w-full rounded-[42px] border-[6px] border-ink bg-ink p-2 shadow-lift">
        <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-black">
          {/* Real app screenshots, swapped by the tab bar below */}
          <AnimatePresence initial={false}>
            {SCREENS.filter((s) => s.id === active).map((screen) => (
              <motion.div
                key={screen.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 0.68, 0, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={screen.src}
                  alt=""
                  fill
                  sizes="300px"
                  className="object-cover"
                  priority={screen.id === "dashboard"}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Gradient behind the tab bar keeps icons legible over any screenshot */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-black/70 to-transparent"
          />

          {/* Floating tab grid — all 8 features visible at once, no hidden scrolling */}
          <div
            role="tablist"
            aria-label={t("dashboard")}
            className="glass absolute inset-x-4 bottom-3 z-20 grid grid-cols-4 gap-1.5 rounded-2xl p-2 shadow-lift"
            style={{ background: "rgba(20,20,22,0.55)" }}
          >
            {SCREENS.map((screen) => {
              const Icon = screen.icon;
              const isActive = active === screen.id;
              return (
                <button
                  key={screen.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={t(screen.id)}
                  onClick={() => setActive(screen.id)}
                  className="relative flex h-7 w-full items-center justify-center rounded-lg text-white/60 transition-colors hover:text-white/90"
                >
                  {isActive && (
                    <motion.span
                      layoutId="phone-tab-active"
                      className="absolute inset-0 rounded-lg bg-[#0A84FF]"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                    />
                  )}
                  <Icon size={13} strokeWidth={2.3} className={isActive ? "relative text-white" : "relative"} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
