import type { Metadata } from "next";
import { PageHero } from "../components/ui";
import { TripPlannerForm } from "../components/Forms";

export const metadata: Metadata = {
  title: "Plan a Trip | Kenya Safari, Booked Directly — Bigfoot Adventures",
  description: "No subcontractors. Our own fleet, our own guides, run from Nairobi since 2013.",
};

export default function PlanATrip() {
  return (
    <>
      <PageHero
        eyebrow="Planning a Trip"
        title="We Own Every Mile We Drive."
        lead="No subcontractors. Our own fleet, our own guides, run from Nairobi since 2013."
      />
      <section className="pb-24 bg-paper">
        <div className="mx-auto max-w-[680px] px-5 sm:px-8">
          <TripPlannerForm />
        </div>
      </section>
    </>
  );
}
