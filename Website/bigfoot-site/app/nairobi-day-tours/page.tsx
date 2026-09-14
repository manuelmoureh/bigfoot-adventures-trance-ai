import type { Metadata } from "next";
import { PageHero } from "../components/ui";
import { DayToursUpsell } from "../components/AgentSections";

export const metadata: Metadata = {
  title: "Nairobi Day Tours | Layover Add-Ons — Bigfoot Adventures",
  description:
    "Nairobi National Park, the Giraffe Centre, and the Sheldrick Elephant Trust — half-day add-ons for guests already booked or transiting through Nairobi.",
};

export default function NairobiDayTours() {
  return (
    <>
      <PageHero
        eyebrow="Nairobi Add-On"
        title="Already in Nairobi? Don't waste the layover."
        lead="A half-day upsell path for guests already booked or transiting, using the exact same fleet and guides as the main safari."
      />
      <DayToursUpsell />
    </>
  );
}
