import Link from "next/link";
import Image from "next/image";
import { BASE_PATH } from "../basePath";
import { TRIPADVISOR_URL, PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL } from "../links";

export function Footer() {
  return (
    <footer className="relative bg-ink text-white/65">
      <div className="absolute top-0 inset-x-0 h-[3px] bg-red" />
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 pt-12 sm:pt-14 pb-[96px] md:pb-6">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-6 gap-y-8 md:gap-9 pb-9 border-b border-white/10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 text-paper font-black text-lg mb-3">
              <Image src={`${BASE_PATH}/brand/logo.webp`} alt="" width={28} height={25} className="shrink-0" />
              Bigfoot Adventures
            </div>
            <p className="text-sm max-w-[32ch] leading-relaxed">
              Adams Mini Mall, Adams Arcade, Suna Road, off Ngong Road, Nairobi, Kenya.
            </p>
            <p className="text-sm mt-4">Mon-Sat, 8:00-17:00 EAT</p>
          </div>
          <div>
            <h5 className="text-paper text-xs tracking-wider uppercase mb-3">Explore</h5>
            <Link href="/services" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">Services</Link>
            <Link href="/fleet" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">Fleet</Link>
            <Link href="/guides" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">Guides</Link>
            <Link href="/gallery" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">Gallery</Link>
            <Link href="/destinations" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">Destinations</Link>
            <Link href="/nairobi-day-tours" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">Nairobi Day Tours</Link>
          </div>
          <div>
            <h5 className="text-paper text-xs tracking-wider uppercase mb-3">Trade</h5>
            <Link href="/for-travel-agents" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">For Travel Agents</Link>
            <Link href="/request-a-rate" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">Request a Rate</Link>
            <Link href="/agent-profile" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">Agent Company Profile</Link>
            <Link href="/reviews" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">Reviews</Link>
            <a href={TRIPADVISOR_URL} target="_blank" rel="noopener noreferrer" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">TripAdvisor ↗</a>
          </div>
          <div>
            <h5 className="text-paper text-xs tracking-wider uppercase mb-3">Contact</h5>
            <a href={PHONE_TEL} className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP_URL} className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">WhatsApp Us</a>
            <Link href="/contact" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">Contact Page</Link>
            <Link href="/plan-a-trip" className="block py-2.5 md:py-1 text-sm hover:text-paper transition-colors">Plan a Trip</Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 pt-5 text-xs">
          <span>&copy; 2026 Bigfoot Adventures Ltd. KATO / TOSK / TRA registered.</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="py-2 hover:text-paper transition-colors">Privacy</Link>
            <Link href="/terms" className="py-2 hover:text-paper transition-colors">Terms</Link>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
