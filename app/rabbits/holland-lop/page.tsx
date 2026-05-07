import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Holland Lop Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Holland Lop rabbit breed, including size, temperament, appearance, grooming, care needs, lifespan, and beginner-friendly rabbit ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/holland-lop",
  },
  openGraph: {
    title: "Holland Lop Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Holland Lop rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/holland-lop",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function HollandLopPage() {
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
                src="/rabbits/Holland Lop.png"
                alt="Holland Lop rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Small Lop Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Holland Lop Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Holland Lop is one of the most popular small rabbit breeds,
                known for its compact body, rounded face, floppy ears, and
                friendly personality. This breed is often loved as a companion
                rabbit because of its cute appearance and social nature.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Small</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Friendly</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Short</div>
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
            About the Holland Lop
          </h2>

          <p>
            Holland Lops are small rabbits with a sturdy, compact build and
            distinctive lop ears that hang down beside the face. Their rounded
            head, short body, and soft expression give them a very recognizable
            look.
          </p>

          <p>
            Many Holland Lops are curious, gentle, and people-oriented when
            handled patiently and respectfully. Like all rabbits, their
            personality can vary, but this breed is widely known for being a
            popular companion rabbit.
          </p>

          <p>
            Because of their small size and friendly reputation, Holland Lops are
            often considered by new rabbit owners. However, they still need daily
            care, safe housing, proper diet, enrichment, and gentle handling.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Appearance
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Holland Lops have floppy ears, a compact body, a rounded face, and
              a soft coat. Their small size and expressive look make them one of
              the most recognizable pet rabbit breeds.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Personality
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as friendly, curious, and social.
              With gentle handling, many Holland Lops become comfortable around
              people and enjoy calm interaction.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Care Level
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Holland Lops need daily hay, fresh water, rabbit-safe greens,
              exercise space, clean housing, nail trimming, and regular health
              checks like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Holland Lop Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Small size, floppy ears, rounded face, and a friendly companion
                rabbit reputation.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short coat is usually easier to maintain than wool breeds,
                but regular brushing helps remove loose fur.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                They can be a good choice for prepared beginners who understand
                rabbit care, handling, housing, diet, and daily attention.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Indoor Rabbit Potential</h3>
              <p className="text-gray-700 mt-2">
                Holland Lops can do well indoors with a safe enclosure, supervised
                exercise time, rabbit-proofed spaces, and consistent cleaning.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Holland Lop
          </h2>

          <p>
            A Holland Lop needs unlimited grass hay, fresh water, a clean living
            area, safe chew toys, exercise space, and routine grooming. They
            should also have a rabbit-safe environment where cords, unsafe
            plants, and small hazards are kept away.
          </p>

          <p>
            Like other lop-eared rabbits, ear health should be watched carefully.
            Regular observation helps owners notice changes in appetite,
            behavior, droppings, movement, or grooming habits.
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
            Frequently Asked Questions About Holland Lops
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Holland Lop rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Holland Lops are popular companion rabbits because many are
              friendly, curious, and social. They still need proper care,
              patience, and safe handling.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              How big do Holland Lops get?
            </h3>
            <p className="text-gray-700 mt-1">
              Holland Lops are a small rabbit breed with a compact body. Exact
              size can vary by individual rabbit, diet, health, and breeding
              background.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Holland Lops need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short coat is usually manageable, but they still benefit
              from regular brushing, especially during shedding periods.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Holland Lops good for first-time rabbit owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, as long as the owner is prepared for daily rabbit
              care, safe housing, proper diet, exercise, grooming, and veterinary
              needs.
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
