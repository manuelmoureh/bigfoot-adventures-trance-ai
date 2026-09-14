"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Star } from "@phosphor-icons/react";
import { BASE_PATH } from "../basePath";

// Reduced-motion is handled by the global CSS media query in globals.css,
// not a JS branch — see the comment in components/ui.tsx's Reveal for why.
export function Hero() {
  return (
    <section id="hero" className="relative min-h-[92dvh] flex flex-col justify-center overflow-hidden text-paper">
      <div className="absolute -inset-[4%]">
        <Image
          src={`${BASE_PATH}/images/fleet-action.webp`}
          alt="A Bigfoot Adventures safari vehicle and guests watching an elephant in Amboseli"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 76%" }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,10,.62) 0%, rgba(10,10,10,.48) 20%, rgba(10,10,10,.22) 38%, rgba(10,10,10,.06) 55%, rgba(10,10,10,.32) 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center max-w-[820px] mx-auto px-5 pt-20 sm:pt-24"
      >
        <h1
          className="font-black leading-[0.98] tracking-tight"
          style={{ fontSize: "clamp(2.1rem, 4.6vw, 3.5rem)", textShadow: "0 4px 24px rgba(0,0,0,.4)" }}
        >
          Ground Handling in Kenya, Run by the People Who Drive It.
        </h1>
        <p
          className="mt-4 mx-auto max-w-[50ch] text-white/90"
          style={{ fontSize: "clamp(.98rem, 1.4vw, 1.1rem)", textShadow: "0 2px 12px rgba(0,0,0,.35)" }}
        >
          No subcontractors. Our own fleet, our own multilingual guides, one Nairobi desk — quoting your clients&apos; safaris since 2013.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
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

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="absolute z-10 rounded-xl bg-red text-paper shadow-2xl px-4 py-3 top-[12%] right-[5%] sm:top-[46%] sm:right-[6%]"
      >
        <div className="font-mono text-xl font-extrabold leading-none">
          5.0<span className="text-sm font-semibold opacity-85"> / 5</span>
        </div>
        <div className="text-[11px] font-bold tracking-wide uppercase mt-0.5">1,492 Reviews</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="absolute z-10 flex items-center gap-2.5 rounded-xl bg-paper text-ink shadow-2xl px-4 py-3"
        style={{ bottom: "7%", left: "6%" }}
      >
        <Star size={20} weight="fill" className="text-red shrink-0" />
        <span className="text-xs font-bold leading-tight">
          Travelers&apos; Choice,
          <br />
          every year since 2019
        </span>
      </motion.div>
    </section>
  );
}
