import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Champagne d'Argent Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Champagne d'Argent rabbit breed, including size, temperament, silver coat, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/champagne-dargent",
  },
  openGraph: {
    title: "Champagne d'Argent Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Champagne d'Argent rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/champagne-dargent",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function ChampagneDArgentPage() {
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
                src="/rabbits/Champagne d'Argent.png"
                alt="Champagne d'Argent rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Large Silver Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Champagne d&apos;Argent Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Champagne d&apos;Argent is a historic French rabbit breed
                known for its sparkling silver coat, sturdy body, and calm
                temperament. This breed is admired for its unique coat color,
                which develops from dark fur into a bright silver appearance as
                the rabbit matures.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Large</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Relaxed</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Short / Silvered</div>
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
            About the Champagne d&apos;Argent
          </h2>

          <p>
            Champagne d&apos;Argent rabbits are best known for their silvered
            coat. Young rabbits are often darker, and the silvering becomes more
            noticeable as they grow, creating the breed&apos;s signature
            sparkling appearance.
          </p>

          <p>
            Many Champagne d&apos;Argents are described as calm, relaxed, and
            manageable when handled properly. Like all rabbits, individual
            personality can vary, but this breed is often appreciated for its
            steady temperament.
          </p>

          <p>
            Because they are large rabbits, Champagne d&apos;Argents need more
            space than smaller breeds. They benefit from spacious housing, daily
            exercise, proper diet, enrichment, gentle grooming, and regular
            health observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Champagne d&apos;Argents have large bodies, upright ears, short
              dense coats, and a silvered appearance. Their sparkling coat is
              the trait most closely associated with the breed.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as relaxed, calm, and gentle.
              Patient handling, routine care, and a peaceful environment can
              help a Champagne d&apos;Argent feel secure.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Champagne d&apos;Argents need daily hay, fresh water, safe greens,
              exercise space, clean housing, gentle grooming, nail trimming, and
              regular health checks like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Champagne d&apos;Argent Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Sparkling silver coat, large size, French breed history, calm
                temperament, and sturdy body shape.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short coat is usually manageable. Gentle brushing during
                shedding helps remove loose fur and keep the silvered coat neat.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Champagne d&apos;Argents can be suitable for prepared beginners,
                but their larger size means they need enough space, sturdy
                housing, and confident gentle handling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Champagne d&apos;Argents can live indoors with enough room, safe
                flooring, rabbit-proofed exercise areas, enrichment toys, and
                consistent cleaning.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Champagne d&apos;Argent
          </h2>

          <p>
            A Champagne d&apos;Argent needs unlimited grass hay, fresh water, a
            clean living area, rabbit-safe chew toys, daily exercise, and a safe
            environment. Because this is a larger breed, extra space for
            comfortable movement is important.
          </p>

          <p>
            Owners should provide clean, dry, supportive flooring and enough
            room for the rabbit to stretch, hop, and rest. Regular brushing,
            nail trimming, and observation of appetite, droppings, and behavior
            are important parts of routine care.
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
            Frequently Asked Questions About Champagne d&apos;Argent Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Champagne d&apos;Argent rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Champagne d&apos;Argents can make good companion rabbits for owners
              who want a calm, larger rabbit and are prepared for proper daily
              care and enough space.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What color is a Champagne d&apos;Argent rabbit?
            </h3>
            <p className="text-gray-700 mt-1">
              Champagne d&apos;Argents are known for a silvered coat. Young
              rabbits may appear darker, and the coat usually becomes more
              silver as the rabbit matures.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Champagne d&apos;Argents need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short coat is usually manageable, but gentle brushing during
              shedding helps remove loose fur and keep the coat healthy.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Champagne d&apos;Argents good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, as long as the owner is ready for a larger rabbit
              that needs safe housing, space, proper diet, exercise, grooming,
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
