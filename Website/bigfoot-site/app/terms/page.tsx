import type { Metadata } from "next";
import { PageHero } from "../components/ui";

export const metadata: Metadata = {
  title: "Terms & Conditions — Bigfoot Adventures",
  description: "Terms of service for bookings and trade partnerships with Bigfoot Adventures Ltd.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="pb-24 bg-paper">
        <div className="mx-auto max-w-[720px] px-5 sm:px-8">
          <p className="rounded-lg bg-stone-dim border border-line px-5 py-4 text-sm font-semibold">
            This is a working template pending legal review — not yet final legal copy. Do not treat as attorney-reviewed.
          </p>
          <h2 className="font-black text-xl mt-8 mb-3">Bookings</h2>
          <p className="text-stone leading-relaxed">
            All rates are quoted individually per itinerary, season, and group size, and confirmed in writing before
            a booking is held. Rates are not published publicly.
          </p>
          <h2 className="font-black text-xl mt-8 mb-3">Trade partnerships</h2>
          <p className="text-stone leading-relaxed">
            Travel agent and tour operator partnership terms, including payment schedules and cancellation policy,
            are agreed separately per partner. [CLIENT TO CONFIRM — standard partnership terms to publish here.]
          </p>
          <h2 className="font-black text-xl mt-8 mb-3">Liability</h2>
          <p className="text-stone leading-relaxed">
            [CLIENT TO CONFIRM — insurance and liability terms for ground transport, to be confirmed with Bigfoot's
            current insurer before publishing.]
          </p>
        </div>
      </section>
    </>
  );
}
