import type { Metadata } from "next";
import { PageHero, ArrowBtn } from "../components/ui";
import { DestinationsGrid } from "../components/AgentSections";

export const metadata: Metadata = {
  title: "Destinations | East Africa Safari Ground Handling — Bigfoot Adventures",
  description:
    "Kenya is our confirmed operating core — Maasai Mara, Amboseli, Nairobi National Park, the coast. Cross-border Tanzania, Uganda, and Rwanda extensions available on request.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where We Operate"
        title="Kenya first. The rest of East Africa, on request."
        lead="We don't over-specify a fixed circuit — tell us the itinerary and we'll tell you what's confirmed and what needs a quick check first."
      />
      <DestinationsGrid />
      <section className="py-20 bg-stone-dim text-center">
        <div className="mx-auto max-w-[640px] px-5 sm:px-8 flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-black">Building a multi-country itinerary?</h2>
          <ArrowBtn href="/request-a-rate">Request a Rate</ArrowBtn>
        </div>
      </section>
    </>
  );
}
