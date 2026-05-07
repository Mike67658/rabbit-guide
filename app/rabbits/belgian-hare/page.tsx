import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Belgian Hare Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Belgian Hare rabbit breed, including size, temperament, arched body, appearance, grooming, care needs, housing, and beginner-friendly ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/belgian-hare",
  },
  openGraph: {
    title: "Belgian Hare Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Belgian Hare rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/belgian-hare",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function BelgianHarePage() {
  return (
    <div className="min-h-screen bg-[#f7f4ec] text-gray-900">
      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        <div className="flex justify-start">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-emerald-700 text-white font-semibold hover:bg-emerald-800 transition"
          >
            ← Back to Breeds
          </Link>
        </div>

        <section className="rounded-3xl bg-white border border-emerald-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="bg-emerald-50">
              <img
                src="/rabbits/Belgian Hare.png"
                alt="Belgian Hare rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Large Athletic Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Belgian Hare Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Belgian Hare is a striking domestic rabbit breed developed
                to resemble a wild hare. Known for its long legs, arched body,
                rich chestnut coloring, and alert personality, this breed is
                admired for its athletic look and energetic nature.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Large</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Energetic</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Short</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Origin</div>
                  <div className="font-bold text-emerald-900">Belgium</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the Belgian Hare
          </h2>

          <p>
            Belgian Hares are known for their lean, arched bodies, long legs,
            upright ears, and alert expression. Their appearance is much more
            hare-like than many compact domestic rabbit breeds.
          </p>

          <p>
            Many Belgian Hares are active, intelligent, and alert. They can be
            rewarding for experienced or well-prepared owners, but their energy
            level means they need space, enrichment, and gentle handling.
          </p>

          <p>
            Because they are athletic rabbits, Belgian Hares should have enough
            room to move safely. They are not usually the best fit for cramped
            housing or rough handling.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Belgian Hares have long legs, upright ears, a slim arched body,
              and a rich chestnut coat. Their athletic shape is the breed&apos;s
              most recognizable feature.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as energetic, alert, and curious.
              A calm routine, patient handling, and safe exercise space are
              especially important for Belgian Hares.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Belgian Hares need daily hay, fresh water, safe greens, clean
              housing, gentle grooming, nail trimming, and plenty of supervised
              room to move and stretch.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Belgian Hare Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Hare-like appearance, arched body, long legs, chestnut coat,
                athletic movement, and alert personality.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short coat is usually easy to maintain. Gentle brushing
                during shedding helps remove loose fur and keep the coat clean.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Belgian Hares may be better for prepared or experienced owners
                because they are active, alert, and need more careful handling
                than many calmer breeds.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Belgian Hares can live indoors with enough space, safe flooring,
                rabbit-proofed exercise areas, enrichment, and consistent care.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Belgian Hare
          </h2>

          <p>
            A Belgian Hare needs unlimited grass hay, fresh water, a clean living
            area, rabbit-safe chew toys, daily exercise, and a safe environment.
            Their active body type makes room to move especially important.
          </p>

          <p>
            Owners should provide supportive flooring and avoid rough handling.
            Belgian Hares can be alert and quick-moving, so calm interaction and
            safe supervised exercise areas are important.
          </p>

          <p>
            A veterinarian familiar with rabbits is the best source for health,
            diet, and medical advice. RabbitBreedGuide.com provides general
            educational information, not veterinary diagnosis.
          </p>
        </section>

        <AdSlot label="Lower Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Frequently Asked Questions About Belgian Hares
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Belgian Hares good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Belgian Hares can be rewarding companion rabbits for owners who
              have space, patience, and experience with active rabbits.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Belgian Hares actually hares?
            </h3>
            <p className="text-gray-700 mt-1">
              No. Belgian Hares are domestic rabbits. They were developed to
              resemble wild hares in body shape, color, and athletic appearance.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Belgian Hares need a lot of space?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. Their active, athletic build means they benefit from more
              space to move, stretch, and exercise safely.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Belgian Hares good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They may not be the easiest first rabbit for everyone. Prepared
              beginners can succeed, but this breed often fits best with owners
              ready for an energetic and alert rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Bottom Breed Page" />

        <footer className="pt-10 text-center border-t border-emerald-200 space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-emerald-800 font-semibold">
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="text-2xl font-extrabold text-emerald-950">
            RabbitBreedGuide.com
          </div>

          <div className="text-xs text-gray-500">
            Rabbit breed information is provided for general educational
            purposes only.
          </div>
        </footer>
      </main>
    </div>
  );
}
