"use client";

import { motion } from "framer-motion";

const RING_RADIUS = 34;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px]">
      {/* Phone frame */}
      <div className="relative aspect-[9/19] w-full rounded-[42px] border-[6px] border-ink bg-ink p-2 shadow-lift">
        <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-gradient-to-b from-[#101014] to-[#0a0a0c]">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />

          <div className="flex h-full flex-col gap-3 px-4 pb-5 pt-9 text-white">
            <div className="flex items-center justify-between text-[10px] font-semibold text-white/70">
              <span>NEXUS</span>
              <span>9:41</span>
            </div>

            {/* Ring card */}
            <div className="flex items-center gap-3 rounded-2xl bg-white/6 p-3 backdrop-blur">
              <svg width="76" height="76" viewBox="0 0 76 76" className="shrink-0 -rotate-90">
                <circle
                  cx="38"
                  cy="38"
                  r={RING_RADIUS}
                  fill="none"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="7"
                />
                <motion.circle
                  cx="38"
                  cy="38"
                  r={RING_RADIUS}
                  fill="none"
                  stroke="#0A84FF"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
                  animate={{ strokeDashoffset: RING_CIRCUMFERENCE * 0.28 }}
                  transition={{ duration: 1.4, ease: [0.22, 0.68, 0, 1], delay: 0.4 }}
                />
              </svg>
              <div>
                <p className="text-[10px] uppercase tracking-wide text-white/50">Today</p>
                <p className="text-lg font-bold">72%</p>
                <p className="text-[10px] text-white/50">Goal on track</p>
              </div>
            </div>

            {/* Heart rate card */}
            <div className="rounded-2xl bg-white/6 p-3 backdrop-blur">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-wide text-white/50">Heart Rate</p>
                <span className="text-[10px] font-semibold text-[#ff6b6b]">● Live</span>
              </div>
              <div className="mt-1 flex items-end justify-between">
                <p className="text-lg font-bold">128 bpm</p>
                <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
                  <motion.path
                    d="M0 12 L14 12 L19 3 L25 20 L30 12 L38 12 L43 6 L48 18 L53 12 L80 12"
                    stroke="#ff6b6b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                  />
                </svg>
              </div>
            </div>

            {/* Nutrition card */}
            <div className="rounded-2xl bg-white/6 p-3 backdrop-blur">
              <p className="text-[10px] uppercase tracking-wide text-white/50">Nutrition</p>
              <div className="mt-2 space-y-1.5">
                {[
                  { w: "78%", c: "#0A84FF" },
                  { w: "54%", c: "#4ee0a1" },
                  { w: "90%", c: "#ffb454" },
                ].map((bar, i) => (
                  <div key={i} className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: bar.c }}
                      initial={{ width: 0 }}
                      animate={{ width: bar.w }}
                      transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Workout card */}
            <div className="mt-auto flex items-center justify-between rounded-2xl bg-[#0A84FF] p-3">
              <div>
                <p className="text-[10px] uppercase tracking-wide text-white/80">Today&apos;s Split</p>
                <p className="text-sm font-bold">Push · Chest &amp; Triceps</p>
              </div>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs">
                ▶
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
