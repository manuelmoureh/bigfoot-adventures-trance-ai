import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy — Bigfoot Adventures",
  description: "How Bigfoot Adventures Ltd collects, uses, and protects data submitted through this site.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="pb-24 bg-paper">
        <div className="mx-auto max-w-[720px] px-5 sm:px-8">
          <p className="rounded-lg bg-stone-dim border border-line px-5 py-4 text-sm font-semibold">
            This is a working template pending legal review — not yet final legal copy. Do not treat as attorney-reviewed.
          </p>
          <h2 className="font-black text-xl mt-8 mb-3">What we collect</h2>
          <p className="text-stone leading-relaxed">
            Name, email, phone/WhatsApp number, agency name, and trip details you submit through the Request a Rate
            or Plan a Trip forms on this site.
          </p>
          <h2 className="font-black text-xl mt-8 mb-3">Why we collect it</h2>
          <p className="text-stone leading-relaxed">
            To respond to your enquiry and, where you are a travel agent partner, to manage the ongoing relationship
            in our CRM (Zoho).
          </p>
          <h2 className="font-black text-xl mt-8 mb-3">Your rights</h2>
          <p className="text-stone leading-relaxed">
            Under Kenya&apos;s Data Protection Act and, where applicable, the EU/UK GDPR, you may request access to,
            correction of, or deletion of your data by contacting us at the details on our{" "}
            <Link href="/contact" className="text-red font-semibold">Contact page</Link>.
          </p>
          <h2 className="font-black text-xl mt-8 mb-3">Retention</h2>
          <p className="text-stone leading-relaxed">
            [CLIENT TO CONFIRM — retention period and Data Protection Officer / ODPC registration status.]
          </p>
        </div>
      </section>
    </>
  );
}
