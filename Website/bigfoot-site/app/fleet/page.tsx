import type { Metadata } from "next";
import { PageHero, ArrowBtn } from "../components/ui";
import { Fleet } from "../components/Sections";

export const metadata: Metadata = {
  title: "Fleet | Land Cruisers, Hiace Vans, Coaster Buses — Bigfoot Adventures",
  description:
    "Five vehicle classes, every one company-owned, serviced, and insured: Land Cruiser Prado, custom safari Land Cruisers, Hiace Executive vans, Alphard, and Coaster buses, 4-25 pax.",
};

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="The Fleet"
        title="Fleet"
        lead="Five vehicle classes, every one ours, serviced, and insured. Use the match tool below to see which class fits your group."
      />
      <Fleet />
      <section className="py-20 bg-stone-dim text-center">
        <div className="mx-auto max-w-[640px] px-5 sm:px-8 flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-black">Ready to book a vehicle class?</h2>
          <ArrowBtn href="/request-a-rate">Request a Rate</ArrowBtn>
        </div>
      </section>
    </>
  );
}
