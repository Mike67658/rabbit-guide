import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Tan Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Tan rabbit breed, including size, temperament, tan markings, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/tan",
  },
  openGraph: {
    title: "Tan Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Tan rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/tan",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function TanPage() {
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
                src="/rabbits/Tan.png"
                alt="Tan rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Small Active Marked Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Tan Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Tan Rabbit is a small, athletic breed known for its sleek
                body, lively personality, and bright tan markings. With a dark
                body color contrasted by rich tan coloring on the belly, chest,
                nostrils, ears, and other areas, this breed has a sharp,
                eye-catching appearance.
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
                  <div className="font-bold text-emerald-900">Short / Marked</div>
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
            About the Tan Rabbit
          </h2>

          <p>
            Tan Rabbits are best known for their strong contrast markings. The
            body is usually a darker color, while the tan markings appear on the
            underside, chest, nostrils, jawline, eye circles, ears, feet, and
            tail area.
          </p>

          <p>
            Many Tan Rabbits are active, alert, and energetic. Like all rabbits,
            individual personality can vary, but this breed is often enjoyed by
            owners who appreciate a lively rabbit with a bold appearance.
          </p>

          <p>
            Because Tan Rabbits are athletic and active, they need safe exercise
            space, enrichment, proper housing, a balanced rabbit diet, gentle
            grooming, and regular health observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Tan Rabbits have sleek bodies, upright ears, short coats, and
              bright tan markings against a darker base color. Their sharp
              contrast pattern is the breed&apos;s most recognizable trait.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as energetic, alert, and curious.
              Patient handling, routine care, and safe exercise space can help a
              Tan Rabbit feel comfortable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Tan Rabbits need daily hay, fresh water, safe greens, clean
              housing, gentle grooming, nail trimming, and supervised exercise
              like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Tan Rabbit Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Bright tan markings, dark body color, sleek build, energetic
                personality, and sharp show-rabbit appearance.
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
                Tan Rabbits can work for prepared beginners, but owners should
                be ready for an active rabbit that needs exercise, enrichment,
                and patient handling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Tan Rabbits can live indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, clean flooring,
                and consistent care.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Tan Rabbit
          </h2>

          <p>
            A Tan Rabbit needs unlimited grass hay, fresh water, a clean living
            area, rabbit-safe chew toys, daily exercise, and a safe environment.
            Because this breed is active, enrichment and safe movement are
            especially important.
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
            Frequently Asked Questions About Tan Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Tan Rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Tan Rabbits can make good companion rabbits for owners who want an
              active, small rabbit and are prepared for proper daily care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What makes Tan Rabbits easy to recognize?
            </h3>
            <p className="text-gray-700 mt-1">
              They are known for bright tan markings contrasted against a darker
              body color.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Tan Rabbits need a lot of exercise?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. Tan Rabbits are active and benefit from safe, supervised
              exercise space and enrichment.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Tan Rabbits good for first-time owners?
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
