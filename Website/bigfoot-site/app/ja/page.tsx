import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bigfoot Adventures | ケニアの地上手配業者",
  description: "ナイロビを拠点とする地上手配業者（DMC）。自社車両・多言語ガイド常駐、下請けなし。",
};

export default function JapaneseStub() {
  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-[640px] px-5 sm:px-8 text-center">
        <p className="inline-block rounded-full bg-stone-dim px-4 py-1.5 text-xs font-bold text-stone mb-6">
          [DRAFT — 翻訳レビュー待ち / pending professional translation review]
        </p>
        <h1 className="text-2xl sm:text-3xl font-black mb-4">Bigfoot Adventures Ltd</h1>
        <p className="text-stone leading-relaxed mb-8">
          私たちは2013年設立、ナイロビを拠点とする地上手配業者（DMC）です。自社所有の車両、常勤の多言語ガイドを擁し、
          下請けは一切利用しません。レート表のご請求はお問い合わせください。
        </p>
        <Link href="/request-a-rate" className="inline-flex items-center rounded-full bg-red text-paper font-bold text-sm px-6 py-3 hover:bg-red-deep transition-colors">
          Request a Rate
        </Link>
        <p className="text-sm text-stone mt-6">
          Full English site: <Link href="/for-travel-agents" className="text-red font-semibold">/for-travel-agents</Link>
        </p>
      </div>
    </div>
  );
}
