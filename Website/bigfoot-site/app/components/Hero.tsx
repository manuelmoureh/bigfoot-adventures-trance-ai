"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Star } from "@phosphor-icons/react";
import { BASE_PATH } from "../basePath";

// Reduced-motion is handled by the global CSS media query in globals.css,
// not a JS branch — see the comment in components/ui.tsx's Reveal for why.
//
// The image renders at its natural 2880x1800 (16:10) aspect ratio, full
// width, height auto — the section's height is simply whatever that
// works out to at the current viewport width. No object-fit:cover, no
// crop-position tuning: the whole photo is always visible, on every
// screen size, guaranteed. Text overlays on top via absolute positioning
// sized to match the image exactly.
export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden text-paper">
      <Image
        src={`${BASE_PATH}/images/hero-safari-vehicle.webp`}
        alt="A Bigfoot Adventures safari vehicle stopped near an elephant on the Amboseli plains"
        width={2880}
        height={1800}
        priority
        sizes="100vw"
        className="block w-full h-auto"
      />
      {/* Just enough darkening for text legibility: a left-side scrim behind
          the text column, and a light top scrim so the nav reads over the
          photo. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,10,14,.72) 0%, rgba(8,10,14,.54) 22%, rgba(8,10,14,.24) 38%, rgba(8,10,14,0) 56%), linear-gradient(180deg, rgba(8,10,14,.38) 0%, rgba(8,10,14,0) 16%)",
        }}
      />

      <div className="absolute inset-0 flex items-end sm:items-center">
        <div className="w-full mx-auto max-w-[1320px] px-5 sm:px-8 pb-5 sm:pb-0 pt-16 sm:py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[400px] text-left"
          >
            <div className="hidden sm:flex flex-col items-start gap-1.5 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red px-3 py-1 text-xs font-extrabold">
                <Star size={13} weight="fill" />
                5.0 · 1,492 Reviews
              </span>
              <span className="text-xs font-bold text-white/85">Travelers&apos; Choice, every year since 2019</span>
            </div>
            <h1
              className="font-black leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(1.4rem, 3.4vw, 2.65rem)", textShadow: "0 4px 24px rgba(0,0,0,.5)" }}
            >
              Ground Handling in Kenya, Run by the People Who Drive It.
            </h1>
            <p
              className="mt-2 sm:mt-3 max-w-[38ch] text-white/90 hidden sm:block"
              style={{ fontSize: "clamp(.92rem, 1.2vw, 1.02rem)", textShadow: "0 2px 12px rgba(0,0,0,.45)" }}
            >
              No subcontractors. Our own fleet, our own multilingual guides, one Nairobi desk — quoting your clients&apos; safaris since 2013.
            </p>
            <div className="mt-3 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
              <Link
                href="/request-a-rate"
                className="inline-flex items-center gap-2.5 rounded-full bg-red pl-5 sm:pl-7 pr-2 py-1.5 sm:py-2 font-bold text-sm sm:text-base text-paper hover:bg-red-deep transition-colors"
              >
                Request a Rate
                <span className="grid place-items-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/25">
                  <ArrowRight size={13} weight="bold" />
                </span>
              </Link>
              <Link
                href="/plan-a-trip"
                className="hidden sm:inline-flex items-center px-6 py-2.5 rounded-full border border-white/40 font-bold text-sm hover:border-white transition-colors"
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
