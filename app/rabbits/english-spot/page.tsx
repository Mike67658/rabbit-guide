import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "English Spot Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the English Spot rabbit breed, including size, temperament, markings, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/english-spot",
  },
  openGraph: {
    title: "English Spot Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the English Spot rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/english-spot",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function EnglishSpotPage() {
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
                src="/rabbits/English Spot.png"
                alt="English Spot rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Medium Spotted Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                English Spot Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The English Spot is a medium-sized rabbit breed known for its
                elegant body, butterfly nose marking, colored ears, eye circles,
                spine stripe, and rows of spots along the sides. This breed has
                an active personality and a classic show-rabbit appearance.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Medium</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Active</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Short / Spotted</div>
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
            About the English Spot
          </h2>

          <p>
            English Spots are best known for their crisp markings and balanced
            pattern. Their butterfly nose marking, colored ears, eye circles,
            spine stripe, cheek spots, and side spots create a distinctive,
            elegant look.
          </p>

          <p>
            Many English Spots are active, alert, and curious. They often enjoy
            room to move and explore, so they can be a good match for owners who
            appreciate a lively rabbit.
          </p>

          <p>
            As a medium-sized and active breed, the English Spot needs safe
            housing, daily exercise, proper diet, enrichment, gentle grooming,
            and regular health observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              English Spots have slender bodies, upright ears, short coats, and
              a patterned appearance with spots and a spine stripe. Their
              markings are the breed&apos;s most recognizable feature.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as active, curious, and alert.
              Patient handling, safe exercise space, and routine care help an
              English Spot feel comfortable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              English Spots need daily hay, fresh water, safe greens, clean
              housing, gentle grooming, nail trimming, and supervised exercise
              space.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            English Spot Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Butterfly nose marking, side spots, spine stripe, colored ears,
                active personality, and elegant show-rabbit appearance.
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
                English Spots can work for prepared beginners, but owners should
                be ready for an active rabbit that needs exercise, enrichment,
                and patient handling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                English Spots can live indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, clean flooring,
                and consistent care.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for an English Spot
          </h2>

          <p>
            An English Spot needs unlimited grass hay, fresh water, a clean
            living area, rabbit-safe chew toys, daily exercise, and a safe
            environment. Because this breed is active, safe movement and
            enrichment are especially important.
          </p>

          <p>
            Owners should provide a calm routine, gentle handling, and plenty of
            supervised time to stretch and explore. Appetite, droppings,
            behavior, teeth, nails, coat condition, and comfort should be
            monitored.
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
            Frequently Asked Questions About English Spots
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are English Spot rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              English Spots can make good companion rabbits for owners who want
              an active, medium-sized rabbit and are prepared for proper daily
              care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What makes English Spots easy to recognize?
            </h3>
            <p className="text-gray-700 mt-1">
              They are known for their butterfly nose marking, colored ears, eye
              circles, spine stripe, and rows of side spots.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do English Spots need a lot of exercise?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. English Spots are active rabbits and benefit from safe,
              supervised space to move, stretch, and explore.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are English Spots good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, as long as the owner is ready for an energetic rabbit
              that needs safe housing, proper diet, exercise, grooming, and
              veterinary care.
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
