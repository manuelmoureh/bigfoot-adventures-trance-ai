"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, List, X } from "@phosphor-icons/react";

const LINKS = [
  { href: "/for-travel-agents", label: "For Travel Agents" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/guides", label: "Guides" },
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
        <a href="/" className={`flex items-center gap-2 font-black transition-colors ${dark ? "text-ink" : "text-paper"}`}>
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="15" stroke="#E31E24" strokeWidth="2" />
            <path d="M9 20c1-5 3-9 7-9s6 4 7 9" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Bigfoot Adventures
        </a>

        <nav className={`hidden lg:flex items-center gap-7 text-sm font-semibold transition-colors ${dark ? "text-ink" : "text-paper"}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="opacity-80 hover:opacity-100 transition-opacity">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/request-a-rate"
            className="hidden lg:inline-flex items-center gap-2.5 rounded-full bg-red pl-5 pr-1.5 py-1.5 text-sm font-bold text-paper hover:bg-red-deep transition-colors"
          >
            Request a Rate
            <span className="grid place-items-center w-7 h-7 rounded-full bg-white/25">
              <ArrowRight size={13} weight="bold" />
            </span>
          </a>
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden ${dark ? "text-ink" : "text-paper"}`}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>

      <nav
        className={`lg:hidden bg-paper text-ink px-5 pb-6 flex flex-col gap-4 text-lg font-semibold border-t border-line transition-all duration-200 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1">
            {l.label}
          </a>
        ))}
        <a
          href="/plan-a-trip"
          onClick={() => setOpen(false)}
          className="py-1 text-stone text-base"
        >
          Planning your own trip?
        </a>
      </nav>
    </header>
  );
}
