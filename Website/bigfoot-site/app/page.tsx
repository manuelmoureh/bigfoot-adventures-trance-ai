import type { Metadata } from "next";
import { Hero } from "./components/Hero";
import { WhyUs, Guides, Fleet, HowItWorks, Testimonials, Trade, FAQ } from "./components/Sections";
import { AgentSegments, TrustBar, DestinationsGrid, SeasonNote } from "./components/AgentSections";
import { FleetSlider } from "./components/FleetSlider";
import { GalleryPreview } from "./components/Gallery";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
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
      <section className="pt-8 pb-2 sm:pt-14 sm:pb-8 bg-paper">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 flex justify-center">
          <TrustBar light />
        </div>
      </section>
      <FleetSlider />
      <AgentSegments />
      <WhyUs />
      <Guides />
      <Fleet />
      <HowItWorks />
      <DestinationsGrid />
      <GalleryPreview />
      <SeasonNote />
      <Testimonials />
      <Trade />
      <FAQ />
      <section className="py-14 sm:py-24 bg-stone-dim text-center">
        <div className="mx-auto max-w-[880px] px-5 sm:px-8 flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-black">Ready to send us a booking?</h2>
          <ul className="flex flex-col items-start sm:flex-row sm:flex-wrap sm:justify-center gap-x-6 gap-y-2 text-sm font-semibold text-left">
            {["Quote back the same business day", "Our own fleet and full-time guides", "One Nairobi desk, start to finish"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle size={18} weight="fill" className="text-red shrink-0" />
                {t}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-center gap-3">
            <ArrowBtn href="/request-a-rate">Request a Rate</ArrowBtn>
            <ArrowBtn href="/plan-a-trip" variant="ink">Plan a Trip Instead</ArrowBtn>
          </div>
        </div>
      </section>
    </>
  );
}
