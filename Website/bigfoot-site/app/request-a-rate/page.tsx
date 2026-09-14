import type { Metadata } from "next";
import { PageHero } from "../components/ui";
import { RateRequestForm } from "../components/Forms";

export const metadata: Metadata = {
  title: "Request a Rate | Kenya Ground Handling Quote — Bigfoot Adventures",
  description:
    "Rates aren't published — every itinerary is priced against real season and group size. Request a rate and hear back the same business day.",
};

export default function RequestARate() {
  return (
    <>
      <PageHero
        eyebrow="Trade Enquiries"
        title="Tell us the trip. We'll quote it the same business day."
        lead="Rates aren't published — every itinerary is priced against real season and group size. This goes straight to Daniel's desk."
      />
      <section className="pb-24 bg-paper">
        <div className="mx-auto max-w-[680px] px-5 sm:px-8">
          <RateRequestForm />
        </div>
      </section>
    </>
  );
}
