import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Standard Chinchilla Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Standard Chinchilla rabbit breed, including size, temperament, silver-gray coat, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/standard-chinchilla",
  },
  openGraph: {
    title: "Standard Chinchilla Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Standard Chinchilla rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/standard-chinchilla",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function StandardChinchillaPage() {
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
                src="/rabbits/Standard Chinchilla.png"
                alt="Standard Chinchilla rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Medium Silver-Gray Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Standard Chinchilla Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Standard Chinchilla is a medium-sized rabbit breed known for
                its beautiful silver-gray coat, compact body, and gentle
                personality. This breed has a classic chinchilla-colored fur
                pattern that gives it a soft, natural, and elegant appearance.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Medium</div>
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
                  <div className="font-bold text-emerald-900">France</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the Standard Chinchilla
          </h2>

          <p>
            Standard Chinchilla rabbits are best known for their dense
            silver-gray coat. The fur has darker and lighter bands that create a
            natural chinchilla-like appearance.
          </p>

          <p>
            Many Standard Chinchillas are described as gentle, calm, and
            manageable when handled properly. Like all rabbits, individual
            personality can vary, but this breed is often appreciated for its
            steady temperament.
          </p>

          <p>
            As a medium-sized rabbit, the Standard Chinchilla needs safe housing,
            daily exercise, proper diet, enrichment, gentle grooming, and regular
            health observation.
          </p>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Standard Chinchilla Rabbit Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Silver-gray chinchilla coat, medium size, gentle temperament,
                dense fur, and classic heritage breed appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short dense coat is usually manageable, but gentle brushing
                during shedding helps remove loose fur and keep the coat healthy.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Standard Chinchillas can work for prepared beginners who
                understand rabbit housing, diet, exercise, grooming, handling,
                and routine veterinary care.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Standard Chinchillas can live indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, clean flooring,
                and consistent care.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Standard Chinchilla Rabbit
          </h2>

          <p>
            A Standard Chinchilla needs unlimited grass hay, fresh water, a clean
            living area, rabbit-safe chew toys, daily exercise, and a safe
            environment. Their medium size means they should have enough room to
            stretch, hop, and explore comfortably.
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
            Frequently Asked Questions About Standard Chinchillas
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Standard Chinchilla rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Standard Chinchillas can make good companion rabbits for owners
              who want a gentle, medium-sized rabbit and are prepared for proper
              daily care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What color is a Standard Chinchilla rabbit?
            </h3>
            <p className="text-gray-700 mt-1">
              Standard Chinchillas are known for a silver-gray coat with darker
              and lighter banding that creates a chinchilla-like appearance.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Standard Chinchillas need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short dense coat is usually manageable, but gentle brushing
              during shedding helps remove loose fur and keep the coat healthy.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Standard Chinchillas the same as American Chinchillas?
            </h3>
            <p className="text-gray-700 mt-1">
              No. They are related in appearance but are separate breeds. The
              Standard Chinchilla is generally smaller than the American
              Chinchilla.
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
