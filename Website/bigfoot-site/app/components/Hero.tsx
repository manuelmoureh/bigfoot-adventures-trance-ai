"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { BASE_PATH } from "../basePath";
import { TRIPADVISOR_URL } from "../links";
import { TripAdvisorIcon } from "./ui";

// Reduced-motion is handled by the global CSS media query in globals.css,
// not a JS branch — see the comment in components/ui.tsx's Reveal for why.
//
// Desktop (sm+): the photo is cropped to a wide band (2880x1260, the bottom
// 70% of the photo — only sky is removed) and the copy sits on top of it.
// Phones: a wide band would be a thin strip with the headline covering the
// elephant and vehicle, so the photo gets a taller box and the copy moves
// onto a solid panel below it — nothing ever sits on top of the subjects.
export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden text-paper bg-ink sm:bg-transparent">
      <div className="relative w-full aspect-[5/4] sm:aspect-[2880/1260]">
        <Image
          src={`${BASE_PATH}/images/hero-safari-vehicle.webp`}
          alt="A Bigfoot Adventures safari vehicle stopped near an elephant on the Amboseli plains"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
      </div>
      {/* Desktop: a left-side scrim behind the text column plus a light top scrim so the nav reads over the photo. */}
      <div
        className="hidden sm:block absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,10,14,.72) 0%, rgba(8,10,14,.54) 22%, rgba(8,10,14,.24) 38%, rgba(8,10,14,0) 56%), linear-gradient(180deg, rgba(8,10,14,.38) 0%, rgba(8,10,14,0) 16%)",
        }}
      />
      {/* Phones: top scrim so the logo and menu button read over the photo. */}
      <div className="sm:hidden absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/55 to-transparent" />

      <div className="sm:absolute sm:inset-0 sm:flex sm:items-center">
        <div className="w-full mx-auto max-w-[1320px] px-5 sm:px-8 pt-6 pb-8 sm:py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[400px] text-left"
          >
            <div className="flex flex-col items-start gap-1.5 mb-3.5 sm:mb-3">
              <a
                href={TRIPADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="5.0 rating from over 1,490 reviews — see them on TripAdvisor (opens in a new tab)"
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 sm:py-1 text-xs font-extrabold text-white hover:brightness-110 transition"
                style={{ backgroundColor: "#00AF87" }}
              >
                <TripAdvisorIcon size={14} />
                5.0 · 1,490+ Reviews
                <ArrowUpRight size={12} weight="bold" />
              </a>
              <span className="text-xs font-bold text-white/85">Travelers&apos; Choice, every year since 2019</span>
            </div>
            <h1
              className="font-black leading-[1.05] sm:leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(1.9rem, 3.4vw, 2.65rem)", textShadow: "0 4px 24px rgba(0,0,0,.5)" }}
            >
              East Africa&apos;s Ground Partner for Authentic Safaris
            </h1>
            <p
              className="mt-3 max-w-[38ch] text-white/90"
              style={{ fontSize: "clamp(1rem, 1.2vw, 1.02rem)", textShadow: "0 2px 12px rgba(0,0,0,.45)" }}
            >
              Trusted by travel agents worldwide.
            </p>
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3">
              <Link
                href="/request-a-rate"
                className="order-1 sm:order-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-red h-12 sm:h-auto pl-6 sm:pl-7 pr-2 sm:py-2 font-bold text-base text-paper hover:bg-red-deep transition-colors"
              >
                Request A Rate
                <span className="grid place-items-center w-8 h-8 sm:w-7 sm:h-7 rounded-full bg-white/25">
                  <ArrowRight size={14} weight="bold" />
                </span>
              </Link>
              <Link
                href="/fleet"
                className="order-2 sm:order-1 inline-flex items-center justify-center h-12 sm:h-auto px-6 sm:py-2.5 rounded-full border border-white/40 font-bold text-base hover:border-white transition-colors"
              >
                View Our Fleet
              </Link>
            </div>
            <p className="sm:hidden mt-4 text-[13px] text-white/65">Every itinerary is quoted the same business day.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
