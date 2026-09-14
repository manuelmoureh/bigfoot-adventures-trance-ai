import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bigfoot Adventures | Наземный оператор в Кении",
  description: "Наземный оператор (DMC) со штаб-квартирой в Найроби. Собственный автопарк, штатные многоязычные гиды, без субподрядчиков.",
};

export default function RussianStub() {
  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-[640px] px-5 sm:px-8 text-center">
        <p className="inline-block rounded-full bg-stone-dim px-4 py-1.5 text-xs font-bold text-stone mb-6">
          [ЧЕРНОВИК — ожидает профессионального перевода / DRAFT — pending professional translation review]
        </p>
        <h1 className="text-2xl sm:text-3xl font-black mb-4">Bigfoot Adventures Ltd</h1>
        <p className="text-stone leading-relaxed mb-8">
          Мы — наземный оператор (DMC) со штаб-квартирой в Найроби, основанный в 2013 году. Собственный автопарк,
          штатные многоязычные гиды, без субподрядчиков. Напишите нам, чтобы получить тарифы.
        </p>
        <Link href="/request-a-rate" className="inline-flex items-center rounded-full bg-red text-paper font-bold text-sm px-6 py-3 hover:bg-red-deep transition-colors">
          Request a Rate
        </Link>
        <p className="text-sm text-stone mt-6">
          Полный сайт на английском: <Link href="/for-travel-agents" className="text-red font-semibold">/for-travel-agents</Link>
        </p>
      </div>
    </div>
  );
}
