import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Silver Marten Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Silver Marten rabbit breed, including size, temperament, silver markings, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/silver-marten",
  },
  openGraph: {
    title: "Silver Marten Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Silver Marten rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/silver-marten",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function SilverMartenPage() {
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
                src="/rabbits/Silver Marten.png"
                alt="Silver Marten rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Medium Silver-Marked Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Silver Marten Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Silver Marten is a medium-sized rabbit breed known for its
                dark body color with bright silver-white markings. With its
                elegant contrast, compact body, and lively personality, this
                breed is one of the most eye-catching marked rabbits.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Medium</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Lively</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Short / Marked</div>
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
            About the Silver Marten
          </h2>

          <p>
            Silver Martens are best known for their dramatic markings. They
            usually have a darker body color with silver-white markings around
            the belly, chin, nostrils, eye circles, ears, and other areas.
          </p>

          <p>
            Many Silver Martens are described as lively, alert, and curious.
            Like all rabbits, individual personality can vary, but this breed is
            often enjoyed by owners who like an active rabbit with a striking
            appearance.
          </p>

          <p>
            As a medium-sized rabbit, the Silver Marten needs safe housing,
            daily exercise, proper diet, enrichment, gentle grooming, and regular
            health observation.
          </p>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Silver Marten Rabbit Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Dark body color, silver-white markings, medium size, lively
                temperament, and elegant contrast.
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
                Silver Martens can work for prepared beginners who understand
                rabbit housing, diet, exercise, grooming, handling, and routine
                veterinary care.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Silver Martens can live indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, clean flooring,
                and consistent care.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Silver Marten Rabbit
          </h2>

          <p>
            A Silver Marten needs unlimited grass hay, fresh water, a clean
            living area, rabbit-safe chew toys, daily exercise, and a safe
            environment. Because this breed can be lively, enrichment and safe
            movement are especially helpful.
          </p>

          <p>
            Owners should provide gentle handling, a steady routine, and regular
            grooming during shedding. Appetite, droppings, behavior, teeth,
            nails, coat condition, and comfort should be monitored.
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
            Frequently Asked Questions About Silver Martens
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Silver Marten rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Silver Martens can make good companion rabbits for owners who want
              a medium-sized, lively rabbit and are prepared for proper daily
              care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What makes Silver Martens easy to recognize?
            </h3>
            <p className="text-gray-700 mt-1">
              They are known for dark body color with bright silver-white
              markings on areas such as the belly, chin, nostrils, eyes, and
              ears.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Silver Martens need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short coat is usually manageable, but gentle brushing during
              shedding helps remove loose fur and keep the coat healthy.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Silver Martens good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, as long as the owner is ready for safe housing,
              proper diet, exercise, enrichment, grooming, and veterinary care.
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
