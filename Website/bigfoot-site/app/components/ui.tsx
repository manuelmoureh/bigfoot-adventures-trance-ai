"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";

// Reduced-motion users are handled by the global CSS media query in
// globals.css (zeroes animation/transition duration), not a JS branch here.
//
// whileInView + viewport.once fires its "in view" transition for anything
// already inside the initial viewport before React finishes comparing the
// SSR markup (motion mutates the DOM via a ref, outside React's own
// reconciliation), which trips a hydration-mismatch warning even though the
// content itself renders correctly. Gating the animated version behind a
// post-mount flag makes the SSR and first-paint markup agree exactly:
// content in the initial viewport simply appears (no fade-in flash), and
// below-the-fold content still animates in on scroll once mounted.
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[13px] font-extrabold tracking-wider uppercase text-red mb-3">
      <span className="w-1.5 h-1.5 rounded-full bg-red" />
      {children}
    </div>
  );
}

export function ArrowBtn({
  href,
  children,
  variant = "primary",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ink";
  onClick?: () => void;
}) {
  const styles =
    variant === "primary"
      ? "bg-red text-paper hover:bg-red-deep"
      : "bg-transparent border border-ink text-ink hover:bg-ink hover:text-paper";
  const className = `inline-flex items-center gap-2.5 rounded-full pl-6 pr-1.5 py-1.5 font-bold text-sm transition-colors ${styles}`;
  const arrow = (
    <span className={`grid place-items-center w-7 h-7 rounded-full ${variant === "primary" ? "bg-white/25" : "bg-ink/8"}`}>
      <ArrowRight size={13} weight="bold" />
    </span>
  );

  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} onClick={onClick} className={className} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
      {arrow}
    </Link>
  );
}

export function Field({
  label,
  placeholder,
  type = "text",
  name,
  required = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-bold">
        {label}
        {required && <span className="text-red"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="border border-line bg-stone-dim rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red"
      />
    </label>
  );
}

export function TextArea({
  label,
  placeholder,
  name,
  required = false,
}: {
  label: string;
  placeholder: string;
  name: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-bold">
        {label}
        {required && <span className="text-red"> *</span>}
      </span>
      <textarea
        name={name}
        required={required}
        rows={3}
        placeholder={placeholder}
        className="border border-line bg-stone-dim rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red"
      />
    </label>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="pt-36 pb-16 bg-stone-dim">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-3xl sm:text-5xl font-black max-w-[20ch] leading-[1.05]">{title}</h1>
          {lead && <p className="mt-4 text-stone max-w-[60ch] text-lg">{lead}</p>}
        </Reveal>
      </div>
    </section>
  );
}

// Analytics: GTM-pattern dataLayer push. GA4/Meta Pixel IDs are not wired in
// (no client-provided IDs yet — see _run/OPEN_QUESTIONS.md #10); this always
// records to window.dataLayer so events aren't lost once IDs land.
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  interface WindowWithDataLayer extends Window {
    dataLayer?: Record<string, unknown>[];
  }
  const w = window as WindowWithDataLayer;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...params });
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "ref"] as const;
const UTM_STORAGE_KEY = "bigfoot_utm";

export function useUtm() {
  const [utm, setUtm] = useState<Record<string, string>>({});
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const fromUrl: Record<string, string> = {};
      UTM_KEYS.forEach((k) => {
        const v = params.get(k);
        if (v) fromUrl[k] = v;
      });
      if (Object.keys(fromUrl).length > 0) {
        sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
        setUtm(fromUrl);
      } else {
        const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
        if (stored) setUtm(JSON.parse(stored));
      }
    } catch {
      // sessionStorage unavailable (private browsing etc.) — attribution is
      // best-effort, never block the page on it.
    }
  }, []);
  return utm;
}

export function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const seenRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (!seenRef.current && window.scrollY > 400) {
        seenRef.current = true;
        setVisible(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/254722972374"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Bigfoot Adventures on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { source: "fab" })}
      className={`fixed z-40 bottom-5 right-5 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}
