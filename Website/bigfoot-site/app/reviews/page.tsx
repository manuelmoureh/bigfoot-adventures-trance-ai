import type { Metadata } from "next";
import { PageHero, ArrowBtn } from "../components/ui";
import { Testimonials, Guides } from "../components/Sections";
import { ReviewSchema } from "../components/Schema";
import { VOICES } from "../data";

export const metadata: Metadata = {
  title: "Reviews | 1,400+ TripAdvisor Reviews, 4.9/5 — Bigfoot Adventures",
  description:
    "Real, attributed TripAdvisor reviews naming the specific guide who led the trip. Not just five stars — named guides, every time.",
};

export default function ReviewsPage() {
  return (
    <>
      <ReviewSchema voices={VOICES} />
      <PageHero
        eyebrow="Guest Reviews"
        title="Not just five stars. Named guides."
        lead="Guests don't just leave five stars, they name the specific guide who made the trip. That's not luck, it's who we hire."
      />
      <Testimonials />
      <Guides />
      <section className="py-20 bg-paper text-center">
        <div className="mx-auto max-w-[640px] px-5 sm:px-8 flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-black">Want the full review history for due diligence?</h2>
          <ArrowBtn href="/agent-profile">Download the Agent Profile</ArrowBtn>
        </div>
      </section>
    </>
  );
}
