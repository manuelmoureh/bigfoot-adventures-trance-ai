"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CaretLeft, CaretRight, X } from "@phosphor-icons/react";
import { GALLERY, type GalleryPhoto } from "../galleryData";
import { BASE_PATH } from "../basePath";
import { ArrowBtn, Eyebrow, Reveal } from "./ui";

const sm = (id: string) => `${BASE_PATH}/images/gallery/${id}-sm.webp`;
const lg = (id: string) => `${BASE_PATH}/images/gallery/${id}-lg.webp`;

function Lightbox({
  photos,
  index,
  onClose,
  onIndex,
}: {
  photos: GalleryPhoto[];
  index: number;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const n = photos.length;
  const go = useCallback((d: number) => onIndex((index + d + n) % n), [index, n, onIndex]);

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  useEffect(() => {
    [1, -1].forEach((d) => {
      const img = new window.Image();
      img.src = lg(photos[(index + d + n) % n].id);
    });
  }, [index, n, photos]);

  const photo = photos[index];
  const arrow =
    "absolute top-1/2 -translate-y-1/2 grid place-items-center w-11 h-11 rounded-full bg-black/45 text-white hover:bg-black/70 transition-colors";

  return (
    <div role="dialog" aria-modal="true" aria-label="Photo gallery" className="fixed inset-0 z-[70] bg-black flex flex-col">
      <div className="flex items-center justify-between px-4 h-14 shrink-0 text-white/80 text-sm font-semibold">
        <span>
          {index + 1} / {n}
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="grid place-items-center w-11 h-11 -mr-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <X size={22} weight="bold" />
        </button>
      </div>

      <div
        className="relative flex-1 min-h-0"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        }}
      >
        <Image key={photo.id} src={lg(photo.id)} alt={photo.alt} fill sizes="100vw" className="object-contain" priority />
        <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className={`${arrow} left-2 sm:left-4`}>
          <CaretLeft size={20} weight="bold" />
        </button>
        <button type="button" onClick={() => go(1)} aria-label="Next photo" className={`${arrow} right-2 sm:right-4`}>
          <CaretRight size={20} weight="bold" />
        </button>
      </div>

      <p className="shrink-0 px-5 py-4 text-center text-sm text-white/75 pb-[max(1rem,env(safe-area-inset-bottom))]">{photo.alt}</p>
    </div>
  );
}

export function GalleryGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState<string>("All");
  const [open, setOpen] = useState<number | null>(null);
  const cats = Array.from(new Set(GALLERY.map((p) => p.category)));
  const showFilters = !limit && cats.length > 1;
  const visible = filter === "All" ? GALLERY : GALLERY.filter((p) => p.category === filter);
  const shown = limit ? visible.slice(0, limit) : visible;
  // The lightbox on the homepage preview lets people browse everything, not just the 6 tiles.
  const lightboxPhotos = limit ? GALLERY : visible;

  return (
    <>
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filter photos">
          {["All", ...cats].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`min-h-11 rounded-full border px-5 text-sm font-bold transition-colors ${
                filter === c ? "bg-ink text-paper border-ink" : "border-line text-ink hover:border-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4">
        {shown.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setOpen(limit ? GALLERY.indexOf(p) : i)}
            aria-label={`Open photo: ${p.alt}`}
            className="group relative block w-full aspect-[3/2] overflow-hidden rounded-lg bg-stone-dim"
          >
            <Image
              src={sm(p.id)}
              alt={p.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </button>
        ))}
      </div>
      {open !== null && (
        <Lightbox photos={lightboxPhotos} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
      )}
    </>
  );
}

export function GalleryPreview() {
  return (
    <section className="py-14 sm:py-24 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <Reveal>
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-black max-w-[20ch]">Our vehicles and our people, up close.</h2>
          <p className="mt-3 text-stone max-w-[52ch]">Every photo here is our own fleet and our own drivers. No stock images.</p>
        </Reveal>
        <div className="mt-8 sm:mt-10">
          <GalleryGrid limit={6} />
        </div>
        <div className="mt-8 flex justify-center">
          <ArrowBtn href="/gallery" variant="ink">
            See all {GALLERY.length} photos
          </ArrowBtn>
        </div>
      </div>
    </section>
  );
}
