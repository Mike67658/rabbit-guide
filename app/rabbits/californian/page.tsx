import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Californian Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Californian rabbit breed, including size, temperament, dark points, appearance, grooming, care needs, housing, and beginner-friendly ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/californian",
  },
  openGraph: {
    title: "Californian Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Californian rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/californian",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function CalifornianPage() {
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
                src="/rabbits/Californian.png"
                alt="Californian rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Large Pointed White Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Californian Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Californian is a large domestic rabbit breed known for its
                white body, dark points on the ears, nose, feet, and tail, and
                calm personality. This breed is popular because of its sturdy
                body, recognizable markings, and gentle reputation.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Large</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Gentle</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Short / White</div>
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
            About the Californian
          </h2>

          <p>
            Californian rabbits are best known for their white coat and dark
            points. The ears, nose, feet, and tail are usually darker, giving
            the breed a clean and easy-to-recognize appearance.
          </p>

          <p>
            Many Californians are described as calm, gentle, and manageable when
            handled properly. Like all rabbits, personality varies by individual,
            but this breed is often appreciated for its steady temperament.
          </p>

          <p>
            Because Californians are large rabbits, they need enough space to
            move comfortably. Spacious housing, daily exercise, proper diet,
            enrichment, grooming, and regular health observation are important.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Californians have large bodies, upright ears, short white coats,
              and dark points on the ears, nose, feet, and tail. Their pointed
              pattern is the breed&apos;s most recognizable feature.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as calm, gentle, and easygoing.
              Patient handling, routine care, and a quiet environment can help a
              Californian feel comfortable around people.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Californians need daily hay, fresh water, safe greens, exercise
              space, clean housing, gentle grooming, nail trimming, and regular
              health checks like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Californian Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                White coat, dark points, large size, calm temperament, sturdy
                body, and classic domestic rabbit appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short coat is usually manageable. Gentle brushing during
                shedding helps remove loose fur and keep the coat neat.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Californians can be suitable for prepared beginners, but their
                larger size means they need enough space, sturdy housing, and
                confident gentle handling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Californians can live indoors with enough room, safe flooring,
                rabbit-proofed exercise areas, enrichment toys, and consistent
                cleaning.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Californian Rabbit
          </h2>

          <p>
            A Californian needs unlimited grass hay, fresh water, a clean living
            area, rabbit-safe chew toys, daily exercise, and a safe environment.
            Because this is a larger breed, extra room for comfortable movement
            is important.
          </p>

          <p>
            Owners should provide clean, dry, supportive flooring and enough
            space for the rabbit to stretch, hop, and rest. Regular observation
            of appetite, droppings, behavior, teeth, nails, and coat condition
            is important.
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
            Frequently Asked Questions About Californian Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Californian rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Californians can make good companion rabbits for owners who want a
              calm, larger rabbit and are prepared for daily care, space, and
              safe handling.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What makes Californian rabbits easy to recognize?
            </h3>
            <p className="text-gray-700 mt-1">
              They are known for a white body with dark points on the ears,
              nose, feet, and tail.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Californian rabbits need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short coat is usually manageable, but gentle brushing during
              shedding helps remove loose fur.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Californians good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, as long as the owner is ready for a larger rabbit
              that needs safe housing, extra space, proper diet, exercise,
              grooming, and veterinary care.
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
