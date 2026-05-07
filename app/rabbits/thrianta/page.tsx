import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Thrianta Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Thrianta rabbit breed, including size, temperament, fiery orange-red coat, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/thrianta",
  },
  openGraph: {
    title: "Thrianta Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Thrianta rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/thrianta",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function ThriantaPage() {
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
                src="/rabbits/Thrianta.png"
                alt="Thrianta rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Medium Orange-Red Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Thrianta Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Thrianta Rabbit is a medium-sized breed best known for its
                brilliant orange-red coat. With a compact body, bright color,
                and friendly personality, the Thrianta is one of the most
                eye-catching rabbit breeds.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Medium</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Friendly</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Short / Red</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Origin</div>
                  <div className="font-bold text-emerald-900">Netherlands</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the Thrianta Rabbit
          </h2>

          <p>
            Thrianta Rabbits are famous for their fiery orange-red coat. Their
            color is the breed&apos;s defining feature and gives them a warm,
            bright appearance unlike most other domestic rabbit breeds.
          </p>

          <p>
            Many Thriantas are described as friendly, curious, and pleasant when
            handled gently. Like all rabbits, individual personality can vary,
            but this breed is often appreciated for its approachable nature.
          </p>

          <p>
            As a medium-sized rabbit, the Thrianta needs safe housing, daily
            exercise, proper diet, enrichment, gentle grooming, and regular
            health observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Thriantas have compact bodies, upright ears, short coats, and a
              bright orange-red color. Their vivid coat is the breed&apos;s most
              recognizable trait.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as friendly, curious, and social.
              Patient handling, routine care, and a calm environment can help a
              Thrianta feel comfortable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Thriantas need daily hay, fresh water, safe greens, clean housing,
              gentle grooming, nail trimming, safe exercise, and regular health
              checks like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Thrianta Rabbit Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Brilliant orange-red coat, friendly temperament, medium size,
                compact body, and Dutch breed history.
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
                Thriantas can work for prepared beginners who understand rabbit
                housing, diet, exercise, enrichment, grooming, and safe handling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Thriantas can live indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, clean flooring,
                and consistent care.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Thrianta Rabbit
          </h2>

          <p>
            A Thrianta Rabbit needs unlimited grass hay, fresh water, a clean
            living area, rabbit-safe chew toys, daily exercise, and a safe
            environment. Their medium size means they should have enough room to
            stretch, hop, and explore comfortably.
          </p>

          <p>
            Owners should provide gentle handling, a steady routine, enrichment,
            and regular grooming during shedding. Appetite, droppings, behavior,
            teeth, nails, coat condition, and comfort should be monitored.
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
            Frequently Asked Questions About Thrianta Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Thrianta Rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Thriantas can make good companion rabbits for owners who want a
              friendly, medium-sized rabbit and are prepared for proper daily
              care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What color is a Thrianta Rabbit?
            </h3>
            <p className="text-gray-700 mt-1">
              Thrianta Rabbits are known for their bright orange-red coat, which
              is the breed&apos;s signature feature.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Thriantas need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short coat is usually manageable, but gentle brushing during
              shedding helps remove loose fur and keep the coat healthy.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Thriantas good for first-time owners?
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
