"use client";

import Image from "next/image";
import { Reveal, Eyebrow, ArrowBtn, TripAdvisorIcon } from "./ui";
import { BASE_PATH } from "../basePath";
import { TRIPADVISOR_URL } from "../links";
import type { Icon } from "@phosphor-icons/react";
import {
  Airplane,
  Van,
  UsersThree,
  Anchor,
  Globe,
  ShieldCheck,
  CalendarBlank,
  CalendarCheck,
  Lightning,
  MapPin,
  ArrowUpRight,
} from "@phosphor-icons/react";

type TrustItem = { icon: "tripadvisor" | Icon; label: string; href?: string };

const TRUST: TrustItem[] = [
  { icon: ShieldCheck, label: "TRA / KATO / TOSK registered" },
  { icon: "tripadvisor", label: "5.0 · 1,490+ TripAdvisor reviews", href: TRIPADVISOR_URL },
  { icon: CalendarBlank, label: "Founded 2013" },
  { icon: Lightning, label: "Same business day rate turnaround" },
];

export function TrustBar({ light = false }: { light?: boolean }) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:mx-auto rounded-2xl border divide-y sm:divide-y-0 sm:divide-x ${
        light
          ? "border-line bg-white shadow-[0_1px_2px_rgba(15,15,15,.04),0_16px_32px_-20px_rgba(15,15,15,.16)] divide-line"
          : "border-white/12 bg-white/[0.04] divide-white/12"
      }`}
    >
      {TRUST.map((item) => {
        const rowCls = "flex items-center justify-center sm:justify-start gap-3 px-5 sm:px-6 py-3.5 sm:py-4";
        const inner = (
          <>
            <span
              className={`grid place-items-center w-9 h-9 rounded-full shrink-0 ${
                item.icon === "tripadvisor" ? "bg-[#00AF87]/12" : light ? "bg-red/10" : "bg-red/15"
              }`}
            >
              {item.icon === "tripadvisor" ? (
                <TripAdvisorIcon size={17} />
              ) : (
                <item.icon size={16} weight="bold" className="text-red" />
              )}
            </span>
            <span className={`text-[13px] sm:text-sm font-bold leading-snug ${light ? "text-ink" : "text-paper"}`}>
              {item.label}
            </span>
            {item.href && <ArrowUpRight size={14} weight="bold" className="shrink-0 text-[#00AF87]" />}
          </>
        );
        return item.href ? (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.label} — verify on TripAdvisor (opens in a new tab)`}
            className={`${rowCls} transition-colors ${light ? "hover:bg-stone-dim" : "hover:bg-white/[0.06]"}`}
          >
            {inner}
          </a>
        ) : (
          <div key={item.label} className={rowCls}>
            {inner}
          </div>
        );
      })}
    </div>
  );
}

// Peak-season note: only states what the FAQ already tells guests (July–October camps book 4–6 months out).
export function SeasonNote() {
  return (
    <section className="py-4 sm:py-6 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal className="rounded-2xl border border-red/20 bg-red/[0.06] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <span className="grid place-items-center w-11 h-11 rounded-full bg-red text-paper shrink-0">
            <CalendarCheck size={22} weight="bold" />
          </span>
          <div className="flex-1">
            <p className="font-black text-lg leading-snug">Peak season fills first.</p>
            <p className="mt-1 text-sm text-stone leading-relaxed max-w-[62ch]">
              Booking July to October? The best camp availability is 4-6 months out. Send us your dates now and we&apos;ll
              confirm what&apos;s open the same business day.
            </p>
          </div>
          <div className="shrink-0">
            <ArrowBtn href="/request-a-rate">Check my dates</ArrowBtn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const SEGMENTS = [
  { title: "Building a Kenya program from scratch?", desc: "Get contracted rates and a full fleet-and-guide roster to plan your season around.", href: "/services", cta: "See Services" },
  { title: "Already got a client booked?", desc: "Send us dates and group size — you'll have a quote back the same day.", href: "/request-a-rate", cta: "Request a Rate" },
  { title: "Scoping East Africa for your platform?", desc: "See what we run, where we cover, and how far our reach goes across borders.", href: "/fleet", cta: "See the Fleet" },
];

export function AgentSegments() {
  return (
    <section className="py-14 sm:py-24 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Who This Is For</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black max-w-[20ch]">However you work with us, we make it fast.</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10">
          {SEGMENTS.map((s) => (
            <Reveal key={s.title} className="rounded-lg border border-line p-6 sm:p-7 flex flex-col justify-between md:min-h-[220px]">
              <div>
                <h3 className="font-black text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-5 sm:mt-6">
                <ArrowBtn href={s.href} variant="ink">{s.cta}</ArrowBtn>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Airplane, title: "Airport & City Transfers", desc: "Land Cruiser Prado or Hiace, met at arrivals, radio-linked to Nairobi dispatch." },
  { icon: Van, title: "Safari Circuits", desc: "Custom Land Cruisers with pop-up roofs, convoy-radio linked for groups above 8." },
  { icon: UsersThree, title: "Conferences & MICE", desc: "Coaster buses, 20-25 pax, climate control and PA system, for delegate shuttles." },
  { icon: Anchor, title: "Cruise-Line Ground Handling (Mombasa)", desc: "Port-call excursions and transfers in Mombasa, arranged on request." },
  { icon: Globe, title: "Cross-Border Extensions", desc: "Tanzania, Uganda and Rwanda circuits, arranged on request." },
];

export function ServicesGrid() {
  return (
    <section className="py-14 sm:py-24 bg-stone-dim">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>What We Run</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black max-w-[18ch]">Every service line, run in-house.</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10">
          {SERVICES.map((s) => (
            <Reveal key={s.title} className="rounded-lg bg-paper border border-line p-6">
              <s.icon size={28} weight="bold" className="text-red mb-4" />
              <h3 className="font-black text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-stone leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const PLACES = [
  { name: "Maasai Mara", note: "Big-cat country and the July-October wildebeest migration." },
  { name: "Amboseli", note: "Big elephant herds with Kilimanjaro on the skyline." },
  { name: "Nairobi National Park", note: "Wildlife inside the city limits, easy to fit around a layover." },
  { name: "Lake Nakuru", note: "Rhino, buffalo and birdlife around the lake." },
  { name: "Meru", note: "A quieter park, away from the busiest circuits." },
  { name: "The Kenyan coast", note: "Mombasa and the beaches, before or after your safari." },
];

export function DestinationsGrid() {
  return (
    <section className="py-14 sm:py-24 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Where We Operate</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black max-w-[18ch]">Kenya first. The rest of East Africa, on request.</h2>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4 mt-8 sm:mt-10">
          {PLACES.map((p) => (
            <Reveal key={p.name} className="rounded-lg border border-line p-4 sm:p-6 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <MapPin size={22} weight="fill" className="text-red shrink-0 sm:mt-0.5" />
              <div>
                <h3 className="font-black text-base sm:text-lg leading-snug">{p.name}</h3>
                <p className="mt-1 text-[13px] sm:text-sm text-stone leading-relaxed">{p.note}</p>
              </div>
            </Reveal>
          ))}
          <Reveal className="col-span-2 lg:col-span-3 rounded-lg bg-ink text-paper p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Globe size={28} weight="bold" className="text-red shrink-0" />
            <div className="flex-1">
              <h3 className="font-black text-lg">Beyond Kenya: Tanzania · Uganda · Rwanda</h3>
              <p className="mt-1 text-sm text-white/75 leading-relaxed max-w-[62ch]">
                Cross-border extensions arranged on request. Tell us the itinerary and we&apos;ll confirm what&apos;s ready to run and what needs a quick check first.
              </p>
            </div>
            <div className="shrink-0">
              <ArrowBtn href="/request-a-rate">Ask about your route</ArrowBtn>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CompanyProfileSummary() {
  return (
    <section className="py-14 sm:py-24 bg-stone-dim">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
        <Reveal>
          <Eyebrow>Company Profile</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Bigfoot Adventures Ltd — Nairobi, since 2013.</h2>
          <p className="text-stone leading-relaxed max-w-[54ch]">
            Founded 2013. TRA, KATO, and TOSK registered. Adams Mini Mall, Adams Arcade, Suna Road, off Ngong Road,
            Nairobi. Mon–Sat, 8:00–17:00 EAT. Every vehicle in our fleet is company-owned; every guide is full-time
            staff — no subcontracted drivers, ever.
          </p>
          <div className="mt-6">
            <ArrowBtn href="/agent-profile">Download the Agent Profile</ArrowBtn>
          </div>
        </Reveal>
        <Reveal className="relative rounded-lg overflow-hidden aspect-[4/3]">
          <Image
            src={`${BASE_PATH}/images/gallery/fleet-lineup-lg.webp`}
            alt="Bigfoot's vehicles lined up on a Nairobi street with the driver-guides beside them"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

export function DayToursUpsell() {
  return (
    <section className="py-14 sm:py-24 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
        <Reveal>
          <Eyebrow>Nairobi Add-On</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 max-w-[16ch]">Already in Nairobi? Don&apos;t waste the layover.</h2>
          <p className="text-stone leading-relaxed max-w-[54ch] mb-6">
            Nairobi National Park, the Giraffe Centre, and the Sheldrick Elephant Trust are all within an hour of the
            airport — a half-day add-on for guests already booked or transiting.
          </p>
          <ArrowBtn href={TRIPADVISOR_URL}>See our TripAdvisor page</ArrowBtn>
        </Reveal>
        <Reveal className="relative rounded-lg overflow-hidden aspect-[4/3]">
          <Image
            src={`${BASE_PATH}/images/gallery/nairobi-np-gate-lg.webp`}
            alt="A Bigfoot game-viewer at the Nairobi National Park main gate"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
