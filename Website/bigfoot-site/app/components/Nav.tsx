"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, List, Phone, WhatsappLogo, X } from "@phosphor-icons/react";
import { BASE_PATH } from "../basePath";
import { PHONE_TEL, WHATSAPP_URL } from "../links";

const LINKS = [
  { href: "/for-travel-agents", label: "For Travel Agents" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/guides", label: "Guides" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const heroRef = useRef<Element | null>(null);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    heroRef.current = hero;
    if (!hero) {
      // Interior pages have no full-bleed #hero to watch — nav should
      // always render solid since there's no photo behind it to contrast against.
      setScrolled(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-90px 0px 0px 0px", threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  const dark = scrolled || open;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        dark ? "bg-paper/90 backdrop-blur-md border-b border-line" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 h-[68px] flex items-center justify-between">
        <Link href="/" className={`flex items-center gap-2.5 py-2 font-black transition-colors ${dark ? "text-ink" : "text-paper"}`}>
          <Image src={`${BASE_PATH}/brand/logo.webp`} alt="" width={34} height={30} className="shrink-0" priority />
          Bigfoot Adventures
        </Link>

        <nav className={`hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-semibold transition-colors ${dark ? "text-ink" : "text-paper"}`}>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="opacity-80 hover:opacity-100 transition-opacity">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/request-a-rate"
            className="hidden lg:inline-flex items-center gap-2.5 rounded-full bg-red pl-5 pr-1.5 py-1.5 text-sm font-bold text-paper hover:bg-red-deep transition-colors"
          >
            Request a Rate
            <span className="grid place-items-center w-7 h-7 rounded-full bg-white/25">
              <ArrowRight size={13} weight="bold" />
            </span>
          </Link>
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden grid place-items-center w-11 h-11 -mr-2 ${dark ? "text-ink" : "text-paper"}`}
          >
            {open ? <X size={26} /> : <List size={26} />}
          </button>
        </div>
      </div>

      <nav
        aria-label="Mobile menu"
        className={`lg:hidden absolute top-full inset-x-0 max-h-[calc(100svh-68px)] overflow-y-auto bg-paper text-ink px-5 pt-2 pb-6 flex flex-col text-lg font-semibold border-b border-line shadow-xl transition-all duration-200 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3.5 border-b border-line last:border-b-0">
            {l.label}
          </Link>
        ))}
        <Link
          href="/plan-a-trip"
          onClick={() => setOpen(false)}
          className="py-3.5 text-stone text-base border-t border-line"
        >
          Planning your own trip?
        </Link>
        <div className="mt-2 grid grid-cols-2 gap-3">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 h-12 rounded-full border border-line text-base font-bold"
          >
            <Phone size={18} weight="bold" /> Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 rounded-full bg-[#25D366] text-white text-base font-bold"
          >
            <WhatsappLogo size={20} weight="fill" /> WhatsApp
          </a>
        </div>
        <Link
          href="/request-a-rate"
          onClick={() => setOpen(false)}
          className="mt-3 inline-flex items-center justify-center h-12 rounded-full bg-red text-paper text-base font-bold"
        >
          Request a Rate
        </Link>
      </nav>
    </header>
  );
}
