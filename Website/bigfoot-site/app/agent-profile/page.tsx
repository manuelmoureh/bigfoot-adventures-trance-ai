"use client";

import { trackEvent } from "../components/ui";

export default function AgentProfilePage() {
  return (
    <div className="pt-32 pb-20 print:pt-0 print:pb-0">
      <div className="mx-auto max-w-[820px] px-5 sm:px-8 print:max-w-none print:px-10">
        <div className="flex justify-between items-start mb-10 print:hidden">
          <p className="text-sm text-stone max-w-[46ch]">
            A one-page company profile for internal circulation — print or save as PDF.
          </p>
          <button
            onClick={() => {
              trackEvent("agent_profile_print");
              window.print();
            }}
            className="shrink-0 rounded-full bg-red text-paper font-bold text-sm px-6 py-2.5 hover:bg-red-deep transition-colors"
          >
            Print / Save as PDF
          </button>
        </div>

        <div className="border border-line rounded-lg p-8 sm:p-12 print:border-0 print:p-0">
          <div className="flex items-center gap-3 mb-8">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="15" stroke="#E31E24" strokeWidth="2" />
              <path d="M9 20c1-5 3-9 7-9s6 4 7 9" stroke="#E31E24" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <div className="font-black text-xl">Bigfoot Adventures Ltd</div>
          </div>

          <h1 className="text-2xl font-black mb-1">Agent Company Profile</h1>
          <p className="text-sm text-stone mb-8">Prepared for: ______________________ &nbsp; Date: {new Date().toLocaleDateString("en-GB")}</p>

          <p className="mb-8 leading-relaxed">
            Founded 2013. TRA, KATO, and TOSK registered. Based at Adams Mini Mall, Adams Arcade, Suna Road, off
            Ngong Road, Nairobi, Kenya. Mon–Sat, 8:00–17:00 EAT. Every vehicle in our fleet is company-owned; every
            guide is full-time staff — no subcontracted drivers, ever.
          </p>

          <h2 className="font-black text-lg mb-3 pb-2 border-b border-line">Fleet Summary</h2>
          <table className="w-full text-sm mb-8">
            <tbody>
              {[
                ["Toyota Land Cruiser Prado", "4-6 pax", "Executive / airport transfers"],
                ["Custom Safari Land Cruiser", "6-8 pax", "Pop-up roof, off-road game drives"],
                ["Toyota Hiace Executive Van", "6-9 pax", "Corporate shuttles, groups"],
                ["Coaster Bus", "20-25 pax", "Conferences, large groups"],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-line last:border-0">
                  <td className="py-2 font-semibold">{row[0]}</td>
                  <td className="py-2 text-stone">{row[1]}</td>
                  <td className="py-2 text-stone">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="font-black text-lg mb-3 pb-2 border-b border-line">Guide Tiers</h2>
          <table className="w-full text-sm mb-8">
            <tbody>
              <tr className="border-b border-line"><td className="py-2 font-semibold">Gold</td><td className="py-2 text-stone">Samuel</td></tr>
              <tr className="border-b border-line"><td className="py-2 font-semibold">Silver</td><td className="py-2 text-stone">Tony, Francis</td></tr>
              <tr><td className="py-2 font-semibold">Bronze</td><td className="py-2 text-stone">Elvis, Lawrence</td></tr>
            </tbody>
          </table>
          <p className="text-xs text-stone mb-8">Tier assignments pending final client confirmation — see internal Open Questions log.</p>

          <h2 className="font-black text-lg mb-3 pb-2 border-b border-line">Certifications</h2>
          <p className="mb-8 text-sm">Tourism Regulatory Authority (TRA) · Kenya Association of Tour Operators (KATO) · Tours and Safaris Kenya (TOSK)</p>

          <h2 className="font-black text-lg mb-3 pb-2 border-b border-line">Contact</h2>
          <p className="text-sm leading-relaxed">
            Phone: +254 722 972 374<br />
            WhatsApp: wa.me/254722972374<br />
            Address: Adams Mini Mall, Adams Arcade, Suna Road, off Ngong Road, Nairobi, Kenya
          </p>
        </div>
      </div>
    </div>
  );
}
