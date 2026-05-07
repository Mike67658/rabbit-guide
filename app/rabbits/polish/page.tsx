import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Polish Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Polish rabbit breed, including size, temperament, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/polish",
  },
  openGraph: {
    title: "Polish Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Polish rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/polish",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function PolishPage() {
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
                src="/rabbits/Polish.png"
                alt="Polish rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Small Compact Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Polish Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Polish Rabbit is a small domestic rabbit breed known for its
                compact body, short ears, rounded head, and friendly
                personality. Despite its name, the breed is generally associated
                with development in England and is popular for its neat,
                polished appearance.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Small</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Friendly</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Short</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Origin</div>
                  <div className="font-bold text-emerald-900">England</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the Polish Rabbit
          </h2>

          <p>
            Polish Rabbits are best known for their small size, tidy body shape,
            short ears, and rounded head. Their compact appearance makes them a
            recognizable small rabbit breed.
          </p>

          <p>
            Many Polish Rabbits are described as friendly, curious, and pleasant
            when handled gently. Like all rabbits, individual personality can
            vary, so calm handling and a steady routine are important.
          </p>

          <p>
            Their small size can make them appealing to rabbit owners, but Polish
            Rabbits still need daily care, safe housing, proper diet,
            enrichment, exercise, gentle grooming, and regular health
            observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Polish Rabbits have compact bodies, short upright ears, rounded
              heads, and short coats. Their small, neat outline is the breed’s
              most recognizable trait.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as friendly, alert, and curious.
              Patient handling, routine care, and a calm environment can help a
              Polish Rabbit feel comfortable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Polish Rabbits need daily hay, fresh water, safe greens, clean
              housing, gentle grooming, nail trimming, safe exercise, and
              regular health checks like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Polish Rabbit Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Small size, compact body, short ears, rounded head, friendly
                temperament, and neat show-rabbit appearance.
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
                Polish Rabbits can work for prepared beginners who understand
                rabbit housing, diet, exercise, grooming, handling, and routine
                veterinary care.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Polish Rabbits can live indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, clean flooring,
                and consistent care.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Polish Rabbit
          </h2>

          <p>
            A Polish Rabbit needs unlimited grass hay, fresh water, a clean
            living area, rabbit-safe chew toys, daily exercise, and a safe
            environment. Their small size does not remove the need for daily
            attention and enrichment.
          </p>

          <p>
            Because they are small, Polish Rabbits should be handled gently and
            securely. Owners should monitor appetite, droppings, behavior,
            teeth, nails, coat condition, and overall comfort.
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
            Frequently Asked Questions About Polish Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Polish Rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Polish Rabbits can make good companion rabbits for owners who want
              a small, friendly rabbit and are prepared for proper daily care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Polish Rabbits from Poland?
            </h3>
            <p className="text-gray-700 mt-1">
              Despite the name, the Polish Rabbit is generally associated with
              development in England rather than Poland.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Polish Rabbits need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short coat is usually manageable, but gentle brushing during
              shedding helps remove loose fur and keep the coat healthy.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Polish Rabbits good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, as long as the owner is ready for safe housing,
              proper diet, exercise, gentle handling, grooming, and veterinary
              care.
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
