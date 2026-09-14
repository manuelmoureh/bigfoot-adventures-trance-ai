"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Reveal, Eyebrow } from "./ui";
import { BASE_PATH } from "../basePath";

const VEHICLES = [
  { key: "prado", name: "Toyota Land Cruiser Prado" },
  { key: "landcruiser", name: "Custom Safari Land Cruiser" },
  { key: "alphard", name: "Toyota Alphard" },
  { key: "coaster", name: "Coaster Bus" },
].map((v) => ({ ...v, img: `${BASE_PATH}/images/fleet/${v.key}.png` }));

export function FleetSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((i: number) => {
    slideRefs.current[i]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  // Scroll-snap drives the actual motion (native touch/trackpad swipe); this
  // just watches scroll position to figure out which slide is centered, so
  // the arrow disabled-state and dash indicator can track it.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackRect = track.getBoundingClientRect();
        const center = trackRect.left + trackRect.width / 2;
        let closest = 0;
        let min = Infinity;
        slideRefs.current.forEach((el, i) => {
          if (!el) return;
          const r = el.getBoundingClientRect();
          const dist = Math.abs(r.left + r.width / 2 - center);
          if (dist < min) {
            min = dist;
            closest = i;
          }
        });
        setActive(closest);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="py-24 bg-stone-dim">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal className="text-center">
          <Eyebrow>
            <span className="mx-auto">Our Vehicles</span>
          </Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black">A fleet built for the terrain.</h2>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="mt-10 flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 sm:gap-6 px-[5%] sm:px-[16%] lg:px-[23%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {VEHICLES.map((v, i) => (
          <div
            key={v.key}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            className={`relative shrink-0 snap-center w-full aspect-[16/10] transition-opacity duration-300 ${
              active === i ? "opacity-100" : "opacity-35"
            }`}
          >
            <Image
              src={v.img}
              alt={`${v.name} — Bigfoot Adventures fleet vehicle`}
              fill
              sizes="(min-width: 1024px) 54vw, (min-width: 640px) 68vw, 90vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-5 mt-8">
        <button
          type="button"
          aria-label="Previous vehicle"
          onClick={() => scrollToIndex(Math.max(0, active - 1))}
          disabled={active === 0}
          className="grid place-items-center w-11 h-11 rounded-full border border-line text-ink hover:bg-ink hover:text-paper transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          <CaretLeft size={18} weight="bold" />
        </button>
        <div className="flex items-center gap-2">
          {VEHICLES.map((v, i) => (
            <button
              key={v.key}
              type="button"
              aria-label={`Go to ${v.name}`}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all ${active === i ? "w-7 bg-red" : "w-1.5 bg-line"}`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next vehicle"
          onClick={() => scrollToIndex(Math.min(VEHICLES.length - 1, active + 1))}
          disabled={active === VEHICLES.length - 1}
          className="grid place-items-center w-11 h-11 rounded-full border border-line text-ink hover:bg-ink hover:text-paper transition-colors disabled:opacity-30 disabled:pointer-events-none"
        >
          <CaretRight size={18} weight="bold" />
        </button>
      </div>
    </section>
  );
}
