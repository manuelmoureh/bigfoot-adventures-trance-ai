"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { Reveal, Eyebrow } from "./ui";
import { BASE_PATH } from "../basePath";

const VEHICLES = [
  { key: "landcruiser", name: "Custom Safari Land Cruiser" },
  { key: "prado", name: "Toyota Land Cruiser Prado" },
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
  // the arrow state and dash indicator can track it. Deliberately not
  // rAF-debounced — rAF callbacks are suspended while the tab/pane is
  // backgrounded, which would silently stop this from updating.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
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
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-14 sm:py-24 bg-stone-dim">
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
        className="mt-10 flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-3 sm:gap-6 px-[12%] sm:px-[33%] lg:px-[37%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
            <div
              className="absolute bottom-[3%] left-1/2 -translate-x-1/2 w-[46%] h-[9%] rounded-[50%]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(15,15,15,.3) 0%, rgba(15,15,15,.16) 45%, rgba(15,15,15,0) 75%)",
                filter: "blur(3px)",
              }}
            />
            <Image
              src={v.img}
              alt={`${v.name} — Bigfoot Adventures fleet vehicle`}
              fill
              priority={i === 0}
              sizes="(min-width: 1024px) 27vw, (min-width: 640px) 34vw, 45vw"
              className="object-contain object-bottom"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-5 mt-8">
        <button
          type="button"
          aria-label="Previous vehicle"
          onClick={() => scrollToIndex((active - 1 + VEHICLES.length) % VEHICLES.length)}
          className="grid place-items-center w-11 h-11 rounded-full border border-line text-ink hover:bg-ink hover:text-paper transition-colors"
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
              className="grid place-items-center h-11 px-1"
            >
              <span className={`block h-1.5 rounded-full transition-all ${active === i ? "w-7 bg-red" : "w-1.5 bg-stone/40"}`} />
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label="Next vehicle"
          onClick={() => scrollToIndex((active + 1) % VEHICLES.length)}
          className="grid place-items-center w-11 h-11 rounded-full border border-line text-ink hover:bg-ink hover:text-paper transition-colors"
        >
          <CaretRight size={18} weight="bold" />
        </button>
      </div>
    </section>
  );
}
