"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Star } from "@phosphor-icons/react";
import { BASE_PATH } from "../basePath";

// Reduced-motion is handled by the global CSS media query in globals.css,
// not a JS branch — see the comment in components/ui.tsx's Reveal for why.
//
// Photo is a wide, asymmetric composition: open dark sky on the left,
// vehicle + elephant on the right. On desktop the box is wider than the
// photo's ratio, so object-fit:cover only crops top/bottom and the full
// left-to-right composition stays visible — text sits in a left column
// over a horizontal scrim. On mobile the box is much narrower than the
// photo, so cover crops left/right instead; showing the full subject and
// the text at once isn't possible, so mobile switches to a bottom-anchored
// caption band with the photo's natural subject centered above it.
export function Hero() {
  return (
    <section id="hero" className="relative min-h-[92dvh] overflow-hidden text-paper">
      <div className="absolute -inset-[4%]">
        <Image
          src={`${BASE_PATH}/images/hero-safari-vehicle.webp`}
          alt="A Bigfoot Adventures safari vehicle stopped near an elephant on the Amboseli plains"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[left_center] sm:object-[center_66%]"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,10,14,.72) 0%, rgba(8,10,14,.54) 22%, rgba(8,10,14,.24) 38%, rgba(8,10,14,0) 56%), linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,1) 14%, rgba(20,20,20,0) 20%), linear-gradient(180deg, rgba(8,10,14,.38) 0%, rgba(8,10,14,0) 16%)",
        }}
      />
      {/* Solid band, exact match to the trust-bar section's bg-ink color.
          No gradual fade through it — a long semi-transparent dark overlay
          reads as a grey/washed-out band next to a vivid photo and a pure
          black bar, no matter how it's tuned. This is a short, sharp cut
          instead: full photo color up to ~20% from the bottom, then a fast
          transition straight into solid, fully-opaque black. */}
      <div className="absolute bottom-0 inset-x-0 h-[14%] bg-ink" />

      <div className="relative z-10 min-h-[92dvh] flex items-end sm:items-center">
        <div className="w-full mx-auto max-w-[1320px] px-5 sm:px-8 pb-14 pt-28 sm:py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[400px] text-left"
          >
            <div className="flex flex-col items-start gap-1.5 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red px-3 py-1 text-xs font-extrabold">
                <Star size={13} weight="fill" />
                5.0 · 1,492 Reviews
              </span>
              <span className="text-xs font-bold text-white/85">Travelers&apos; Choice, every year since 2019</span>
            </div>
            <h1
              className="font-black leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(1.85rem, 3.4vw, 2.65rem)", textShadow: "0 4px 24px rgba(0,0,0,.5)" }}
            >
              Ground Handling in Kenya, Run by the People Who Drive It.
            </h1>
            <p
              className="mt-3 max-w-[38ch] text-white/90"
              style={{ fontSize: "clamp(.92rem, 1.2vw, 1.02rem)", textShadow: "0 2px 12px rgba(0,0,0,.45)" }}
            >
              No subcontractors. Our own fleet, our own multilingual guides, one Nairobi desk — quoting your clients&apos; safaris since 2013.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/request-a-rate"
                className="inline-flex items-center gap-2.5 rounded-full bg-red pl-7 pr-2 py-2 font-bold text-paper hover:bg-red-deep transition-colors"
              >
                Request a Rate
                <span className="grid place-items-center w-7 h-7 rounded-full bg-white/25">
                  <ArrowRight size={13} weight="bold" />
                </span>
              </Link>
              <Link
                href="/plan-a-trip"
                className="inline-flex items-center px-6 py-2.5 rounded-full border border-white/40 font-bold text-sm hover:border-white transition-colors"
              >
                Planning your own trip?
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
