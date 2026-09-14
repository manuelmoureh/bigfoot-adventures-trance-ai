import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bigfoot Adventures | Operador Terrestre en Kenia",
  description: "Operador terrestre (DMC) con sede en Nairobi. Flota propia, guías multilingües en plantilla, sin subcontratistas.",
};

export default function SpanishStub() {
  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-[640px] px-5 sm:px-8 text-center">
        <p className="inline-block rounded-full bg-stone-dim px-4 py-1.5 text-xs font-bold text-stone mb-6">
          [BORRADOR — pendiente de revisión profesional]
        </p>
        <h1 className="text-2xl sm:text-3xl font-black mb-4">Bigfoot Adventures Ltd</h1>
        <p className="text-stone leading-relaxed mb-8">
          Somos un operador terrestre (DMC) con sede en Nairobi, fundado en 2013. Flota propia, guías multilingües
          en plantilla, sin subcontratistas. Escríbanos para tarifas.
        </p>
        <Link href="/request-a-rate" className="inline-flex items-center rounded-full bg-red text-paper font-bold text-sm px-6 py-3 hover:bg-red-deep transition-colors">
          Request a Rate
        </Link>
        <p className="text-sm text-stone mt-6">
          Sitio completo en inglés: <Link href="/for-travel-agents" className="text-red font-semibold">/for-travel-agents</Link>
        </p>
      </div>
    </div>
  );
}
