import type { Metadata } from "next";
import { PageHero } from "../components/ui";
import { CompanyProfileSummary } from "../components/AgentSections";
import { WhyUs } from "../components/Sections";

export const metadata: Metadata = {
  title: "About Us | Company Profile — Bigfoot Adventures",
  description:
    "Bigfoot Adventures Ltd, Nairobi. Founded 2013, TRA/KATO/TOSK registered. Own fleet, own guides, no subcontractors.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Us"
        lead="Founded 2013. TRA, KATO, and TOSK registered. Every vehicle in our fleet is company-owned; every guide is full-time staff — no subcontracted drivers, ever."
      />
      <WhyUs />
      <CompanyProfileSummary />
    </>
  );
}
