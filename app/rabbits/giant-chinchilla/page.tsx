import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Giant Chinchilla Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Giant Chinchilla rabbit breed, including size, temperament, silver-gray coat, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/giant-chinchilla",
  },
  openGraph: {
    title: "Giant Chinchilla Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Giant Chinchilla rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/giant-chinchilla",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function GiantChinchillaPage() {
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
                src="/rabbits/Giant Chinchilla.png"
                alt="Giant Chinchilla rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Giant Silver-Gray Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Giant Chinchilla Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Giant Chinchilla is a giant rabbit breed known for its large
                body, dense silver-gray chinchilla coat, and gentle temperament.
                It has the classic chinchilla-colored fur pattern in a much
                larger, heavier rabbit.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Giant</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Gentle</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Short / Dense</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Origin</div>
                  <div className="font-bold text-emerald-900">United States</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the Giant Chinchilla
          </h2>

          <p>
            Giant Chinchilla rabbits are best known for their silver-gray coat
            and large body size. The coat has darker and lighter banding that
            creates the natural chinchilla-like appearance.
          </p>

          <p>
            Many Giant Chinchillas are described as gentle, gentle, and manageable
            when handled properly. Like all rabbits, individual personality can
            vary, but this breed is often appreciated for its steady nature.
          </p>

          <p>
            Because this is a giant breed, Giant Chinchillas need more space than
            smaller rabbits. Spacious housing, safe exercise time, proper diet,
            enrichment, grooming, and regular health observation are important.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Giant Chinchillas have large bodies, upright ears, dense coats,
              and silver-gray chinchilla coloring. Their size and soft gray
              banded coat are the breed&apos;s most recognizable traits.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as gentle, gentle, and relaxed.
              Patient handling, routine care, and a peaceful environment can
              help a Giant Chinchilla feel comfortable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Giant Chinchillas need daily hay, fresh water, safe greens, clean
              housing, gentle grooming, nail trimming, safe exercise, and
              regular health checks like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Giant Chinchilla Rabbit Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Giant size, silver-gray chinchilla coat, gentle temperament, dense
                fur, sturdy body, and American breed history.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short dense coat is usually manageable, but gentle
                brushing during shedding helps remove loose fur and keep the
                coat healthy.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Giant Chinchillas can be suitable for prepared beginners, but
                their giant size means they need extra space, sturdy housing,
                and confident gentle handling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Giant Chinchillas can live indoors with enough room, safe
                flooring, rabbit-proofed exercise areas, enrichment toys, and
                consistent cleaning.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Giant Chinchilla Rabbit
          </h2>

          <p>
            A Giant Chinchilla needs unlimited grass hay, fresh water, a clean
            living area, rabbit-safe chew toys, daily exercise, and a safe
            environment. Because this is a giant breed, extra room for movement
            is especially important.
          </p>

          <p>
            Owners should provide clean, dry, supportive flooring and enough
            space for the rabbit to stretch, hop, and rest. Regular grooming
            during shedding, nail trimming, and health observation are important
            parts of routine care.
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
            Frequently Asked Questions About Giant Chinchillas
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Giant Chinchilla rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Giant Chinchillas can make good companion rabbits for owners who
              want a gentle, giant rabbit and are prepared for proper daily care
              and enough space.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Giant Chinchillas bigger than Standard Chinchillas?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. Giant Chinchillas are much larger than Standard Chinchillas
              and need more space, stronger housing, and careful handling.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What color is a Giant Chinchilla rabbit?
            </h3>
            <p className="text-gray-700 mt-1">
              Giant Chinchillas are known for a silver-gray chinchilla coat with
              darker and lighter banding.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Giant Chinchillas good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, as long as the owner is ready for a giant rabbit that
              needs safe housing, extra space, proper diet, exercise, grooming,
              and veterinary care.
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
