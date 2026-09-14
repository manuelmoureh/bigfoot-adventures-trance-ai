export function Footer() {
  return (
    <footer className="relative bg-ink text-white/65">
      <div className="absolute top-0 inset-x-0 h-[3px] bg-red" />
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 pt-14 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-9 pb-9 border-b border-white/10">
          <div>
            <div className="text-paper font-black text-lg mb-3">Bigfoot Adventures</div>
            <p className="text-sm max-w-[32ch] leading-relaxed">
              Adams Mini Mall, Adams Arcade, Suna Road, off Ngong Road, Nairobi, Kenya.
            </p>
            <p className="text-sm mt-4">Mon-Sat, 8:00-17:00 EAT</p>
          </div>
          <div>
            <h5 className="text-paper text-xs tracking-wider uppercase mb-3">Explore</h5>
            <a href="/services" className="block py-1 text-sm hover:text-paper transition-colors">Services</a>
            <a href="/fleet" className="block py-1 text-sm hover:text-paper transition-colors">Fleet</a>
            <a href="/guides" className="block py-1 text-sm hover:text-paper transition-colors">Guides</a>
            <a href="/destinations" className="block py-1 text-sm hover:text-paper transition-colors">Destinations</a>
            <a href="/nairobi-day-tours" className="block py-1 text-sm hover:text-paper transition-colors">Nairobi Day Tours</a>
          </div>
          <div>
            <h5 className="text-paper text-xs tracking-wider uppercase mb-3">Trade</h5>
            <a href="/for-travel-agents" className="block py-1 text-sm hover:text-paper transition-colors">For Travel Agents</a>
            <a href="/request-a-rate" className="block py-1 text-sm hover:text-paper transition-colors">Request a Rate</a>
            <a href="/agent-profile" className="block py-1 text-sm hover:text-paper transition-colors">Agent Company Profile</a>
            <a href="/reviews" className="block py-1 text-sm hover:text-paper transition-colors">Reviews</a>
          </div>
          <div>
            <h5 className="text-paper text-xs tracking-wider uppercase mb-3">Contact</h5>
            <a href="tel:+254722972374" className="block py-1 text-sm hover:text-paper transition-colors">+254 722 972 374</a>
            <a href="https://wa.me/254722972374" className="block py-1 text-sm hover:text-paper transition-colors">WhatsApp Us</a>
            <a href="/contact" className="block py-1 text-sm hover:text-paper transition-colors">Contact Page</a>
            <a href="/plan-a-trip" className="block py-1 text-sm hover:text-paper transition-colors">Plan a Trip</a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 pt-5 text-xs">
          <span>&copy; 2026 Bigfoot Adventures Ltd. KATO / TOSK / TRA registered.</span>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-paper transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-paper transition-colors">Terms</a>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
