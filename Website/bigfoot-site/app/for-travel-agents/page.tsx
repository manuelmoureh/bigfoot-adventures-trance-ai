import type { Metadata } from "next";
import { PageHero, ArrowBtn } from "../components/ui";
import { TrustBar, AgentSegments, ServicesGrid } from "../components/AgentSections";
import { Journey, Trade, Guides } from "../components/Sections";

export const metadata: Metadata = {
  title: "For Travel Agents | Kenya DMC & Ground Handling — Bigfoot Adventures",
  description:
    "Kenya ground handler for outbound tour operators, travel agencies, and OTAs. Own fleet, own multilingual guides, same business day rate turnaround.",
};

export default function ForTravelAgents() {
  return (
    <>
      <PageHero
        eyebrow="For the Trade"
        title="Your clients. Our ground game, from airport to camp."
        lead="We're a Nairobi-based DMC — Land Cruisers, Hiace vans, and Coaster buses we own outright, multilingual driver-guides on our own payroll, and one desk that answers the same business day. Agent partners across five source markets already send us their Kenya bookings."
      />
      <section className="py-10 bg-ink text-paper">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 flex justify-center">
          <TrustBar />
        </div>
      </section>
      <AgentSegments />
      <ServicesGrid />
      <Journey />
      <Guides />
      <Trade />
      <section className="py-12 sm:py-20 bg-paper text-center">
        <div className="mx-auto max-w-[640px] px-5 sm:px-8 flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-black">Have dates and a group size already?</h2>
          <ArrowBtn href="/request-a-rate">Request a Rate</ArrowBtn>
        </div>
      </section>
    </>
  );
}
