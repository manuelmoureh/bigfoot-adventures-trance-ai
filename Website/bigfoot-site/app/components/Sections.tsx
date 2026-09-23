"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Star, CaretDown } from "@phosphor-icons/react";
import { Reveal, Eyebrow, ArrowBtn } from "./ui";
import { FAQS, VOICES } from "../data";
import { BASE_PATH } from "../basePath";

export function WhyUs() {
  return (
    <section className="py-24 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black max-w-[18ch]">The difference is who owns what.</h2>
          <p className="mt-3 text-stone max-w-[52ch]">
            Most operators broker your trip out to someone else&apos;s vehicles and someone else&apos;s guides. We don&apos;t. That&apos;s the entire pitch.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <Reveal className="md:row-span-2 relative rounded-lg overflow-hidden bg-ink text-paper min-h-[260px] md:min-h-full">
            <Image src={`${BASE_PATH}/images/fleet-cruiser-street.webp`} alt="A Bigfoot Adventures safari Land Cruiser, branded, parked in Nairobi" fill className="object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/95 to-ink/20" />
            <div className="relative p-6 h-full flex flex-col justify-end">
              <h3 className="font-black text-xl mb-2">Every vehicle is ours.</h3>
              <p className="text-sm opacity-85">When something breaks down 200km from Nairobi, we&apos;re not waiting on a subcontractor. Our fleet, our mechanics, fixed fast.</p>
            </div>
          </Reveal>
          <Reveal className="rounded-lg border border-line p-6 flex flex-col justify-end min-h-[230px]">
            <h3 className="font-black text-lg mb-2">A human answers. Every time.</h3>
            <p className="text-sm text-stone">No script-reading call centre. Whoever picks up has driven the route you&apos;re asking about.</p>
          </Reveal>
          <Reveal className="rounded-lg bg-red text-paper p-6 flex flex-col justify-end min-h-[230px]">
            <h3 className="font-black text-lg mb-2">One company, since 2013.</h3>
            <p className="text-sm opacity-85">Same name, same number, since day one. One person to call if something goes wrong: us.</p>
          </Reveal>
          <Reveal className="md:col-span-2 rounded-lg border border-line p-6 flex flex-col justify-end min-h-[160px]">
            <h3 className="font-black text-lg mb-2">1,492 reviews. They keep naming names.</h3>
            <p className="text-sm text-stone">Guests don&apos;t just leave five stars, they name the specific guide who made the trip. That&apos;s not luck, it&apos;s who we hire.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const TIERS = [
  { tier: "Gold", color: "#B8862E", title: "Requested by name", desc: "Repeat guests ask for these guides specifically, multi-lingual and consistently named across reviews.", names: "Samuel" },
  { tier: "Silver", color: "#8A8378", title: "Consistently praised", desc: "Called out across multiple recent reviews for patience, knowledge, and staying calm under pressure.", names: "Tony, Francis" },
  { tier: "Bronze", color: "#E31E24", title: "New name, already loved", desc: "Newer to the roster, and already earning great reviews from recent guests.", names: "Elvis, Lawrence" },
];

export function Guides() {
  return (
    <section id="guides" className="py-24 bg-stone-dim">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>What Guests Say</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black max-w-[20ch]">Ask for them by name.</h2>
          <p className="mt-3 text-stone max-w-[52ch]">We didn&apos;t build this list. Our guests did, one five-star review at a time.</p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {TIERS.map((t) => (
            <Reveal key={t.tier} className="rounded-lg bg-paper border border-line p-7 relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[3px]" style={{ background: t.color }} />
              <div className="text-xs font-extrabold tracking-wider uppercase mb-3" style={{ color: t.color }}>{t.tier} Tier</div>
              <h4 className="font-black text-lg mb-2">{t.title}</h4>
              <p className="text-sm text-stone leading-relaxed">{t.desc}</p>
              <div className="mt-4 text-sm font-bold">{t.names}</div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 max-w-[48ch]">
          <p className="text-2xl font-black text-red leading-tight">&quot;The best tour guide I have ever had.&quot;</p>
          <cite className="block mt-3 not-italic text-sm text-stone font-semibold">Verified TripAdvisor review, on Samuel</cite>
        </Reveal>
      </div>
    </section>
  );
}

const FLEET = [
  { key: "prado", name: "Toyota Land Cruiser Prado", pax: "4-6 pax", meta: ["Executive", "4WD"], img: `${BASE_PATH}/images/fleet-prado-street.webp` },
  { key: "cruiser", name: "Custom Safari Land Cruiser", pax: "6-8 pax", meta: ["Pop-up roof", "All-terrain"], img: `${BASE_PATH}/images/fleet-cruiser-street.webp` },
  { key: "hiace", name: "Toyota Hiace Executive Van", pax: "6-9 pax", meta: ["Reclining seats", "AC"], img: `${BASE_PATH}/images/hero-mara.webp` },
  { key: "coaster", name: "Coaster Bus", pax: "20-25 pax", meta: ["Climate control", "PA system"], img: `${BASE_PATH}/images/fleet-coaster-street.webp` },
];

const MATCH: Record<string, { name: string; desc: string }> = {
  prado: { name: "Toyota Land Cruiser Prado", desc: "4-6 pax, luxury 4WD, ideal for airport and executive transfers." },
  cruiser: { name: "Custom Safari Land Cruiser", desc: "6-8 pax, pop-up roof, built for off-road game drives." },
  cruiserMulti: { name: "Custom Safari Land Cruisers (convoy)", desc: "Multiple 6-8 pax vehicles, radio-linked for larger safari groups." },
  hiace: { name: "Toyota Hiace Executive Van", desc: "6-9 pax, reclining seats and AC, built for groups and corporate shuttles." },
  coaster: { name: "Coaster Bus", desc: "20-25 pax, climate control and PA system, built for conferences and large groups." },
};

function matchVehicle(size: string, type: string) {
  if (type === "safari") return size === "large" || size === "xlarge" ? "cruiserMulti" : "cruiser";
  if (type === "airport") return size === "small" ? "prado" : size === "mid" ? "hiace" : "coaster";
  if (type === "corporate") return size === "small" || size === "mid" ? "hiace" : "coaster";
  return null;
}

export function Fleet() {
  const [size, setSize] = useState<string | null>(null);
  const [type, setType] = useState<string | null>(null);
  const result = size && type ? MATCH[matchVehicle(size, type)!] : null;

  return (
    <section id="fleet" className="py-24 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>The Fleet</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black max-w-[18ch]">Built for where the road ends.</h2>
          <p className="mt-3 text-stone max-w-[52ch]">Four vehicle classes, every one ours, serviced, and insured.</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
          {FLEET.map((v) => (
            <Reveal key={v.key} className="rounded-lg border border-line overflow-hidden bg-paper">
              <div className="relative aspect-[16/10]">
                <Image src={v.img} alt={v.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h4 className="font-black text-lg">{v.name}</h4>
                <div className="flex gap-3 text-xs text-stone mt-2 mb-4 flex-wrap">
                  <span>{v.pax}</span>
                  {v.meta.map((m) => <span key={m}>{m}</span>)}
                </div>
                <ArrowBtn href="#contact" variant="ink">Explore Fleet</ArrowBtn>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-lg bg-ink text-paper p-7 sm:p-10">
          <div className="text-xs font-extrabold tracking-wider uppercase text-red mb-2">Instant Fleet Match</div>
          <h3 className="text-xl sm:text-2xl font-black mb-6">Tell us the trip. We&apos;ll tell you the vehicle.</h3>

          <div className="mb-6">
            <div className="text-sm font-bold text-white/65 mb-2.5">How many travelers?</div>
            <div className="flex flex-wrap gap-2.5">
              {[["small", "1-4"], ["mid", "5-8"], ["large", "9-15"], ["xlarge", "16+"]].map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setSize(val)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                    size === val ? "bg-red border-red" : "border-white/25 hover:border-white/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-bold text-white/65 mb-2.5">What&apos;s the trip?</div>
            <div className="flex flex-wrap gap-2.5">
              {[["safari", "Safari / Game Drive"], ["airport", "Airport Transfer"], ["corporate", "Corporate / MICE"]].map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setType(val)}
                  className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                    type === val ? "bg-red border-red" : "border-white/25 hover:border-white/50"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {result && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 pt-6 border-t border-white/15 flex items-center gap-4"
            >
              <div>
                <div className="font-black">{result.name}</div>
                <div className="text-sm text-white/70 mt-0.5">{result.desc}</div>
              </div>
            </motion.div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export function Journey() {
  const steps = [
    "Tell us your dates, group size, and destination",
    "We match your fleet and guide from our own roster",
    "Confirmed the same business day, no back-and-forth",
    "We're at the airport before you land",
  ];
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute -inset-[6%]">
        <Image src={`${BASE_PATH}/images/hero-mara.webp`} alt="Elephant herd at sunset in the Maasai Mara" fill className="object-cover" />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(20,20,20,.55), rgba(20,20,20,.9))" }} />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <h2 className="text-paper text-3xl sm:text-4xl font-black max-w-[20ch] mb-10">From enquiry to airport pickup, one team handles it all.</h2>
        </Reveal>
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s}>
              <div className="font-mono text-3xl font-black text-red">{String(i + 1).padStart(2, "0")}</div>
              <p className="text-white/80 text-sm mt-2 max-w-[22ch]">{s}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const items = [
    { n: "01", t: "Tell us the trip", d: "Group size, dates, and where you want to go." },
    { n: "02", t: "We match fleet & guide", d: "From our own roster, never a subcontractor's." },
    { n: "03", t: "We handle logistics", d: "Permits, camps, transfers, all of it, end to end." },
    { n: "04", t: "You travel, we're there", d: "Same team from pickup to drop-off." },
  ];
  return (
    <section className="py-24 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black max-w-[18ch]">Simple on your end. That&apos;s the point.</h2>
        </Reveal>
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {items.map((it) => (
            <div key={it.n}>
              <div className="font-mono text-red font-extrabold text-sm mb-2">{it.n}</div>
              <h4 className="font-black mb-1">{it.t}</h4>
              <p className="text-sm text-stone leading-relaxed">{it.d}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-stone-dim">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Guest Reviews</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black max-w-[20ch]">Not just five stars. Named guides.</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {VOICES.map((v) => (
            <Reveal key={v.who} className="rounded-lg bg-paper border border-line p-6">
              <p className="font-semibold leading-snug">&quot;{v.quote}&quot;</p>
              <cite className="block mt-3 not-italic text-sm text-stone font-semibold">
                {v.who}, on <b className="text-red">{v.on}</b>, {v.ctx}
              </cite>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Trade() {
  const rows = [
    ["Source markets served", "IN · JP · RU · US · ES"],
    ["Peak migration window", "JUL - OCT"],
    ["Fleet capacity range", "4 - 25 pax"],
    ["Operator since", "2013"],
    ["Certifications", "KATO / TOSK / TRA"],
    ["Rate quote turnaround", "Same business day"],
  ];
  return (
    <section id="trade" className="relative py-24 bg-ink text-paper overflow-hidden">
      <div
        className="absolute -top-1/3 -right-[10%] w-3/5 h-[160%] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(227,30,36,.16), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <Eyebrow>Travel Trade</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black">Your clients. Our ground game.</h2>
          <p className="mt-4 text-white/80 max-w-[48ch]">
            Agent partners across five countries already trust us with their clients&apos; safaris. We absorb the logistics risk, so you never have to explain a breakdown, a no-show, or a missed transfer.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            {["Multi-lingual guides", "Own fleet, no subcontracting", "Airport & MICE transfers", "Year-round East Africa desk"].map((b) => (
              <span key={b} className="rounded-full border border-white/28 px-4 py-1.5 text-sm font-bold">{b}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-7">
            <ArrowBtn href="#contact">Request Rate Sheet</ArrowBtn>
            <a href="tel:+254722972374" className="inline-flex items-center px-6 py-3 rounded-full border border-white/35 font-bold text-sm hover:border-white transition-colors">Call the Trade Desk</a>
          </div>
        </Reveal>
        <Reveal className="rounded-lg bg-ink-soft border border-white/14 p-7">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between items-center py-4 border-t border-white/14 first:border-t-0">
              <span className="text-white/85 font-semibold text-sm">{k}</span>
              <span className="font-mono text-sm opacity-85">{v}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-24 bg-stone-dim">
      <div className="mx-auto max-w-[820px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Before You Ask</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black">Straight answers, before you ask twice.</h2>
        </Reveal>
        <Reveal className="mt-8">
          {FAQS.map(([q, a], i) => (
            <div key={q} className="border-t border-line last:border-b">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center py-5 text-left font-bold"
              >
                {q}
                <motion.span animate={{ rotate: open === i ? 180 : 0 }}>
                  <CaretDown size={16} weight="bold" />
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="pb-5 text-stone text-sm leading-relaxed max-w-[60ch]">{a}</p>
              </motion.div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}


