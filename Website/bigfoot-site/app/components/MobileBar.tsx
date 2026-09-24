"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, WhatsappLogo } from "@phosphor-icons/react";
import { PHONE_TEL, WHATSAPP_URL } from "../links";
import { trackEvent } from "./ui";

// Phones only: a thumb-reach action bar that appears once the visitor has scrolled past the top of the page.
export function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      inert={!visible}
      className={`md:hidden print:hidden fixed inset-x-0 bottom-0 z-40 flex items-center gap-2.5 border-t border-line bg-paper/95 backdrop-blur-md px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={PHONE_TEL}
        aria-label="Call our Nairobi desk"
        onClick={() => trackEvent("phone_click", { source: "mobile_bar" })}
        className="grid place-items-center w-12 h-12 shrink-0 rounded-full border border-line text-ink"
      >
        <Phone size={20} weight="bold" />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onClick={() => trackEvent("whatsapp_click", { source: "mobile_bar" })}
        className="grid place-items-center w-12 h-12 shrink-0 rounded-full bg-[#25D366] text-white"
      >
        <WhatsappLogo size={22} weight="fill" />
      </a>
      <Link
        href="/request-a-rate"
        onClick={() => trackEvent("rate_click", { source: "mobile_bar" })}
        className="flex-1 min-w-0 h-12 rounded-full bg-red text-paper pl-5 pr-2 flex items-center justify-between gap-2 active:bg-red-deep"
      >
        <span className="flex flex-col leading-tight">
          <span className="font-bold text-[15px]">Request a Rate</span>
          <span className="text-[11px] font-semibold text-white/80">Reply the same business day</span>
        </span>
        <span className="grid place-items-center w-8 h-8 shrink-0 rounded-full bg-white/25">
          <ArrowRight size={14} weight="bold" />
        </span>
      </Link>
    </div>
  );
}
