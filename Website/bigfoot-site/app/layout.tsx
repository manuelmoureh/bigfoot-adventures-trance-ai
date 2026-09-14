import type { Metadata } from "next";
import "./globals.css";
import { satoshi } from "./fonts";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { WhatsAppFAB } from "./components/ui";

export const metadata: Metadata = {
  title: {
    default: "Bigfoot Adventures | Kenya Ground Handler for Travel Agents",
    template: "%s",
  },
  description:
    "Nairobi-based DMC. Own fleet, own multilingual guides, no subcontractors — ground handling for travel agents and tour operators since 2013.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${satoshi.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-paper text-ink font-display">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-red focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-paper"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
