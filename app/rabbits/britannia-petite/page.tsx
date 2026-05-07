import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Britannia Petite Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Britannia Petite rabbit breed, including size, temperament, arched body, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/britannia-petite",
  },
  openGraph: {
    title: "Britannia Petite Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Britannia Petite rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/britannia-petite",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function BritanniaPetitePage() {
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
                src="/rabbits/Britannia Petite.png"
                alt="Britannia Petite rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Tiny Arched Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Britannia Petite Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Britannia Petite is a very small rabbit breed known for its
                slender arched body, upright ears, alert expression, and lively
                personality. Despite its tiny size, this breed is energetic,
                active, and often best suited for owners who appreciate a bold
                and spirited rabbit.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Small</div>
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
                  <div className="font-bold text-emerald-900">England</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the Britannia Petite
          </h2>

          <p>
            Britannia Petites are known for their tiny size, fine bone structure,
            and arched body type. Their upright posture and alert look give them
            a very distinctive show-rabbit appearance.
          </p>

          <p>
            Many Britannia Petites are lively, active, and quick-moving. They
            can be rewarding for experienced or well-prepared owners, but they
            may not be the easiest choice for people wanting a very calm lap
            rabbit.
          </p>

          <p>
            Because they are small and energetic, Britannia Petites need careful
            handling, safe exercise space, proper housing, enrichment, and
            regular observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Britannia Petites have slender arched bodies, upright ears, short
              coats, and a fine-boned build. Their tiny size and alert posture
              make them easy to recognize.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as energetic, alert, and spirited.
              Patient handling and a calm routine are important for helping a
              Britannia Petite feel secure.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Britannia Petites need daily hay, fresh water, safe greens, clean
              housing, gentle grooming, nail trimming, careful handling, and
              safe exercise time.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Britannia Petite Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Tiny size, arched body, upright ears, fine bone structure,
                energetic personality, and alert show-rabbit appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short coat is usually easy to maintain. Gentle brushing
                during shedding helps remove loose fur and keep the coat neat.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Britannia Petites may be better for prepared or experienced
                owners because they are tiny, active, and can be less tolerant of
                rough handling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Britannia Petites can live indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, clean flooring,
                and gentle handling.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Britannia Petite
          </h2>

          <p>
            A Britannia Petite needs unlimited grass hay, fresh water, a clean
            living area, rabbit-safe chew toys, daily exercise, and a safe
            environment. Their small size does not remove the need for space,
            enrichment, and careful care.
          </p>

          <p>
            Because they are tiny and active, Britannia Petites should be handled
            gently and securely. A calm environment, supervised exercise, and
            safe flooring can help reduce stress and accidental injury risk.
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
            Frequently Asked Questions About Britannia Petite Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Britannia Petite rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Britannia Petites can be good pets for owners who understand their
              active nature, tiny size, and need for patient, gentle handling.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Britannia Petites calm rabbits?
            </h3>
            <p className="text-gray-700 mt-1">
              They are often more energetic and alert than calm. They may not be
              the best match for someone looking for a very relaxed rabbit.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Britannia Petites need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short coat is usually manageable, but gentle brushing during
              shedding helps remove loose fur.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Britannia Petites good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be challenging for first-time owners because of their
              small size and lively temperament. Prepared beginners can succeed
              with proper research, safe housing, and gentle handling.
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
