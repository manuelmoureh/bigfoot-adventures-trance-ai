import type { Metadata } from "next";
import { PageHero, ArrowBtn, Reveal, Eyebrow } from "../components/ui";
import { Guides, Testimonials } from "../components/Sections";

export const metadata: Metadata = {
  title: "Our Guides | Multilingual, Tiered, Named in Reviews — Bigfoot Adventures",
  description:
    "Multilingual driver-guides, tiered Gold/Silver/Bronze, individually named across TripAdvisor reviews. Every guide is full-time Bigfoot staff, never a freelance day-hire.",
};

export default function GuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Who Guides You"
        title="Multilingual guides, tiered by how guests talk about them."
        lead="We didn't build this list. Our guests did, one five-star review at a time."
      />
      <section className="pb-6 bg-stone-dim">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Why It Matters</Eyebrow>
            <p className="text-stone max-w-[60ch]">
              Every guide on this roster is full-time Bigfoot staff — never a freelance day-hire. That&apos;s what
              makes tiering by review possible: the same person is likely to guide your client&apos;s next trip too.
            </p>
          </Reveal>
        </div>
      </section>
      <Guides />
      <Testimonials />
      <section className="py-20 bg-paper text-center">
        <div className="mx-auto max-w-[640px] px-5 sm:px-8 flex flex-col items-center gap-6">
          <h2 className="text-2xl sm:text-3xl font-black">Want a specific guide for a repeat client?</h2>
          <ArrowBtn href="/request-a-rate">Request a Rate</ArrowBtn>
        </div>
      </section>
    </>
  );
}
