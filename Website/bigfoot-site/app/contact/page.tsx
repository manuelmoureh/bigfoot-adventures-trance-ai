import type { Metadata } from "next";
import { PageHero, ArrowBtn, Reveal } from "../components/ui";
import { WhatsappLogo, Phone, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact | One Nairobi Desk — Bigfoot Adventures",
  description: "Phone, WhatsApp, and office hours for Bigfoot Adventures Ltd, Nairobi. Same business day reply, either way.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="One Nairobi desk. Same business day, either way."
        lead="Traveling yourself, or booking on behalf of a client? Pick the path that fits below."
      />
      <section className="py-16 bg-paper">
        <div className="mx-auto max-w-[720px] px-5 sm:px-8">
          <Reveal className="flex flex-col gap-4 mb-12">
            <a href="tel:+254722972374" className="flex items-center gap-4 border border-line rounded-lg px-5 py-4 hover:border-red transition-colors">
              <Phone size={20} weight="bold" className="text-red shrink-0" />
              <span className="font-semibold text-sm">+254 722 972 374</span>
            </a>
            <a href="https://wa.me/254722972374" className="flex items-center gap-4 border border-line rounded-lg px-5 py-4 hover:border-red transition-colors">
              <WhatsappLogo size={20} weight="bold" className="text-red shrink-0" />
              <span className="font-semibold text-sm">WhatsApp Us</span>
            </a>
            <div className="flex items-center gap-4 border border-line rounded-lg px-5 py-4">
              <MapPin size={20} weight="bold" className="text-red shrink-0" />
              <span className="font-semibold text-sm">Adams Mini Mall, Adams Arcade, Suna Road, off Ngong Road, Nairobi</span>
            </div>
            <div className="flex items-center gap-4 border border-line rounded-lg px-5 py-4">
              <Clock size={20} weight="bold" className="text-red shrink-0" />
              <span className="font-semibold text-sm">Mon–Sat, 8:00–17:00 EAT</span>
            </div>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            <ArrowBtn href="/request-a-rate">Request a Rate (Agents)</ArrowBtn>
            <ArrowBtn href="/plan-a-trip" variant="ink">Plan a Trip (Travelers)</ArrowBtn>
          </div>
        </div>
      </section>
    </>
  );
}
