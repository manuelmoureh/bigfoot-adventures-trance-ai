"use client";

import Image from "next/image";
import { Reveal, Eyebrow, ArrowBtn } from "./ui";
import { BASE_PATH } from "../basePath";
import { Airplane, Van, UsersThree, Anchor, Globe } from "@phosphor-icons/react";

const TRUST = [
  "TRA / KATO / TOSK registered",
  "1,400+ TripAdvisor reviews, 4.9/5",
  "Founded 2013, zero rebrands",
  "Same business day rate turnaround",
];

export function TrustBar() {
  return (
    <div className="flex flex-wrap gap-2.5">
      {TRUST.map((t) => (
        <span key={t} className="rounded-full border border-white/28 px-4 py-1.5 text-sm font-bold text-paper">
          {t}
        </span>
      ))}
    </div>
  );
}

const SEGMENTS = [
  { title: "Outbound tour operator building a Kenya program", desc: "Contracted DMC rates, full fleet and guide roster to plan against.", href: "/services", cta: "See Services" },
  { title: "Independent agency with a client already booked", desc: "Skip the back-and-forth — send dates and group size, get a same-day quote.", href: "/request-a-rate", cta: "Request a Rate" },
  { title: "OTA or wholesaler scoping East Africa", desc: "Fleet capacity, coverage, and cross-border reach at a glance.", href: "/fleet", cta: "See the Fleet" },
];

export function AgentSegments() {
  return (
    <section className="py-24 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Who This Is For</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black max-w-[20ch]">Wherever you sit in the trade, there&apos;s a fast path.</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {SEGMENTS.map((s) => (
            <Reveal key={s.title} className="rounded-lg border border-line p-7 flex flex-col justify-between min-h-[220px]">
              <div>
                <h3 className="font-black text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-6">
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
  { icon: Anchor, title: "Cruise-Line Ground Handling (Mombasa)", desc: "Port-call excursions and transfers. [CLIENT TO CONFIRM — scoping stage, not yet a standing line]." },
  { icon: Globe, title: "Cross-Border Extensions", desc: "Tanzania / Uganda / Rwanda circuits available on request. [CLIENT TO CONFIRM]." },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-stone-dim">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>What We Run</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black max-w-[18ch]">Every service line, run in-house.</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
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

export function DestinationsGrid() {
  return (
    <section className="py-24 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Where We Operate</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black max-w-[18ch]">Kenya first. The rest of East Africa, on request.</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          <Reveal className="rounded-lg bg-ink text-paper p-8 min-h-[220px] flex flex-col justify-end">
            <div className="text-xs font-extrabold tracking-wider uppercase text-red mb-2">Confirmed Core</div>
            <h3 className="font-black text-xl mb-2">Kenya</h3>
            <p className="text-sm opacity-85 leading-relaxed">
              Maasai Mara, Amboseli, Nairobi National Park, the coast — our core operating footprint since 2013.
            </p>
          </Reveal>
          <Reveal className="rounded-lg border-2 border-dashed border-line p-8 min-h-[220px] flex flex-col justify-end">
            <div className="text-xs font-extrabold tracking-wider uppercase text-stone mb-2">Client To Confirm</div>
            <h3 className="font-black text-xl mb-2">Tanzania · Uganda · Rwanda</h3>
            <p className="text-sm text-stone leading-relaxed">
              Cross-border circuits available on request — confirm scope and rates before quoting these as standard.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function CompanyProfileSummary() {
  return (
    <section className="py-24 bg-stone-dim">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
          <Image src={`${BASE_PATH}/images/tented-camp.webp`} alt="Bigfoot Adventures tented camp setup" fill className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}

export function DayToursUpsell() {
  return (
    <section className="py-24 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <Eyebrow>Nairobi Add-On</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 max-w-[16ch]">Already in Nairobi? Don&apos;t waste the layover.</h2>
          <p className="text-stone leading-relaxed max-w-[54ch] mb-6">
            Nairobi National Park, the Giraffe Centre, and the Sheldrick Elephant Trust are all within an hour of the
            airport — a half-day add-on for guests already booked or transiting.
          </p>
          <ArrowBtn href="https://www.tripadvisor.com/Search?q=Bigfoot%20Adventures%20Nairobi%20day%20tours">
            See Live Availability on TripAdvisor
          </ArrowBtn>
          <p className="text-xs text-stone mt-3">[CLIENT TO CONFIRM: swap in the exact Viator/TripAdvisor Experiences listing URL once shared.]</p>
        </Reveal>
        <Reveal className="relative rounded-lg overflow-hidden aspect-[4/3]">
          <Image src={`${BASE_PATH}/images/amboseli.webp`} alt="Wildlife viewing near Nairobi" fill className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
