import type { Metadata } from "next";
import { PageHero, ArrowBtn } from "../components/ui";
import { GalleryGrid } from "../components/Gallery";

export const metadata: Metadata = {
  title: "Gallery | Our Fleet, Drivers and Safari Vehicles — Bigfoot Adventures",
  description:
    "Photos of Bigfoot Adventures' own Land Cruisers, vans, Coaster buses and driver-guides in Nairobi and on safari. No stock images.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Our vehicles and our people, up close."
        lead="Every photo here is our own fleet and our own drivers. No stock images."
      />
      <section className="py-10 sm:py-16 bg-paper">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <GalleryGrid />
        </div>
      </section>
      <section className="py-12 sm:py-20 bg-stone-dim text-center">
        <div className="mx-auto max-w-[640px] px-5 sm:px-8 flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-black">Like what you see? Send us your dates.</h2>
          <ArrowBtn href="/request-a-rate">Request a Rate</ArrowBtn>
        </div>
      </section>
    </>
  );
}
