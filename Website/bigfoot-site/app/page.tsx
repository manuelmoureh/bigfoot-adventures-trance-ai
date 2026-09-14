import type { Metadata } from "next";
import { Hero } from "./components/Hero";
import { WhyUs, Guides, Fleet, HowItWorks, Testimonials, Trade, FAQ } from "./components/Sections";
import { AgentSegments } from "./components/AgentSections";
import { ArrowBtn } from "./components/ui";
import { OrganizationSchema, FaqSchema } from "./components/Schema";
import { FAQS } from "./data";

export const metadata: Metadata = {
  title: "Bigfoot Adventures | Kenya Ground Handler for Travel Agents & Tour Operators",
  description:
    "Nairobi-based DMC. Own fleet, own multilingual guides, no subcontractors — ground handling for travel agents and tour operators selling Kenya safaris since 2013.",
  alternates: {
    languages: { ja: "/ja", es: "/es", ru: "/ru" },
  },
};

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <FaqSchema faqs={FAQS} />
      <Hero />
      <AgentSegments />
      <WhyUs />
      <Guides />
      <Fleet />
      <HowItWorks />
      <Testimonials />
      <Trade />
      <FAQ />
      <section className="py-24 bg-stone-dim text-center">
        <div className="mx-auto max-w-[720px] px-5 sm:px-8 flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-black">Ready to send us a booking?</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <ArrowBtn href="/request-a-rate">Request a Rate</ArrowBtn>
            <ArrowBtn href="/plan-a-trip" variant="ink">Plan a Trip Instead</ArrowBtn>
          </div>
        </div>
      </section>
    </>
  );
}
