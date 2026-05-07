import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Rhinelander Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Rhinelander rabbit breed, including size, temperament, markings, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/rhinelander",
  },
  openGraph: {
    title: "Rhinelander Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Rhinelander rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/rhinelander",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function RhinelanderPage() {
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
                src="/rabbits/Rhinelander.png"
                alt="Rhinelander rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Medium Tri-Colored Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Rhinelander Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Rhinelander Rabbit is a medium-sized breed known for its
                white coat with colorful markings, including orange and black
                spots. This breed has an elegant body, active personality, and a
                distinctive tri-colored pattern that makes it easy to recognize.
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
                  <div className="font-bold text-emerald-900">Short / Marked</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Origin</div>
                  <div className="font-bold text-emerald-900">Germany</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the Rhinelander Rabbit
          </h2>

          <p>
            Rhinelanders are best known for their colorful markings. Their white
            coat is decorated with black and orange markings, including a
            butterfly nose marking, colored ears, eye circles, cheek spots, a
            spine stripe, and side spots.
          </p>

          <p>
            Many Rhinelanders are described as active, curious, and alert. Like
            all rabbits, individual personality can vary, but this breed is
            often appreciated by owners who enjoy a lively rabbit.
          </p>

          <p>
            As a medium-sized and active breed, the Rhinelander needs safe
            housing, daily exercise, proper diet, enrichment, gentle grooming,
            and regular health observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Rhinelanders have medium bodies, upright ears, short coats, and a
              tri-colored marked pattern. Their orange and black spots on a white
              coat are the breed&apos;s most recognizable feature.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as active, alert, and curious.
              Patient handling, routine care, and safe exercise space can help a
              Rhinelander feel comfortable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Rhinelanders need daily hay, fresh water, safe greens, clean
              housing, gentle grooming, nail trimming, and supervised exercise
              like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Rhinelander Rabbit Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Orange and black markings, white coat, butterfly nose mark,
                side spots, active personality, and German breed history.
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
                Rhinelanders can work for prepared beginners, but owners should
                be ready for an active rabbit that needs exercise, enrichment,
                and patient handling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Rhinelanders can live indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, clean flooring,
                and consistent care.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Rhinelander Rabbit
          </h2>

          <p>
            A Rhinelander Rabbit needs unlimited grass hay, fresh water, a clean
            living area, rabbit-safe chew toys, daily exercise, and a safe
            environment. Because this breed is active, safe movement and
            enrichment are especially important.
          </p>

          <p>
            Owners should provide gentle handling, a steady routine, and plenty
            of supervised time to stretch and explore. Appetite, droppings,
            behavior, teeth, nails, coat condition, and comfort should be
            monitored regularly.
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
            Frequently Asked Questions About Rhinelander Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Rhinelander rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Rhinelanders can make good companion rabbits for owners who want
              an active, medium-sized rabbit and are prepared for proper daily
              care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What makes Rhinelander rabbits easy to recognize?
            </h3>
            <p className="text-gray-700 mt-1">
              They are known for orange and black markings on a white coat,
              including facial markings, a spine stripe, and side spots.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Rhinelanders need a lot of exercise?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. Rhinelanders are active rabbits and benefit from safe,
              supervised space to move, stretch, and explore.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Rhinelanders good for first-time owners?
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
