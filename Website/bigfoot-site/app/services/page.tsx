import type { Metadata } from "next";
import { PageHero, ArrowBtn } from "../components/ui";
import { ServicesGrid, DestinationsGrid } from "../components/AgentSections";
import { Fleet } from "../components/Sections";

export const metadata: Metadata = {
  title: "Ground Handling Services | Safari Ground Handling East Africa — Bigfoot Adventures",
  description:
    "Airport transfers, safari circuits, conference and MICE transport, cruise-line ground handling in Mombasa, and cross-border East Africa extensions — all run in-house from Nairobi.",
};

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Run"
        title="Ground Handling Services"
        lead="No subcontracted vehicles, no freelance day-hire guides. If it's on this page, it's ours."
      />
      <ServicesGrid />
      <Fleet />
      <DestinationsGrid />
      <section className="py-20 bg-stone-dim text-center">
        <div className="mx-auto max-w-[640px] px-5 sm:px-8 flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-black">Need a rate for one of these lines?</h2>
          <ArrowBtn href="/request-a-rate">Request a Rate</ArrowBtn>
        </div>
      </section>
    </>
  );
}
