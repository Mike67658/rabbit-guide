import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Dwarf Hotot Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Dwarf Hotot rabbit breed, including size, temperament, black eye bands, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/dwarf-hotot",
  },
  openGraph: {
    title: "Dwarf Hotot Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Dwarf Hotot rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/dwarf-hotot",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function DwarfHototPage() {
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
                src="/rabbits/Dwarf Hotot.png"
                alt="Dwarf Hotot rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Small White Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Dwarf Hotot Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Dwarf Hotot is a small rabbit breed known for its bright
                white coat and bold black eye bands. With a compact body,
                upright ears, and curious personality, this breed has a
                distinctive look that is easy to recognize.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Small</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Curious</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Short / White</div>
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
            About the Dwarf Hotot
          </h2>

          <p>
            Dwarf Hotots are best known for their white coats and dark rings
            around the eyes. These eye bands give the breed a striking
            eyeliner-like appearance while keeping the rest of the coat clean
            and bright.
          </p>

          <p>
            Many Dwarf Hotots are curious, alert, and social when handled
            gently. Like all rabbits, individual personality can vary, so calm
            interaction and a steady routine are important.
          </p>

          <p>
            Their small size makes them appealing to many rabbit owners, but
            they still need daily care, safe housing, exercise space, proper
            diet, enrichment, gentle grooming, and regular health observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Dwarf Hotots have compact bodies, upright ears, short white coats,
              and black eye bands. Their small size and bold facial markings
              make them one of the most recognizable rabbit breeds.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as curious, alert, and friendly.
              Patient handling, routine care, and a peaceful environment can
              help a Dwarf Hotot feel comfortable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Dwarf Hotots need daily hay, fresh water, safe greens, clean
              housing, gentle grooming, nail trimming, safe exercise, and
              regular health checks like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Dwarf Hotot Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                White coat, black eye bands, compact size, upright ears, curious
                personality, and distinctive facial markings.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short coat is usually manageable. Gentle brushing during
                shedding helps remove loose fur and keep the white coat neat.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Dwarf Hotots can work for prepared beginners who understand
                rabbit housing, diet, exercise, grooming, handling, and routine
                veterinary care.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Dwarf Hotots can live indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, clean flooring,
                and consistent care.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Dwarf Hotot
          </h2>

          <p>
            A Dwarf Hotot needs unlimited grass hay, fresh water, a clean living
            area, rabbit-safe chew toys, daily exercise, and a safe environment.
            Their white coat may show dirt more easily, so clean housing is
            especially helpful.
          </p>

          <p>
            Because they are small, Dwarf Hotots should be handled gently and
            securely. Owners should monitor appetite, droppings, behavior,
            teeth, nails, coat condition, and overall comfort.
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
            Frequently Asked Questions About Dwarf Hotot Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Dwarf Hotot rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Dwarf Hotots can make good companion rabbits for owners who want a
              small, curious rabbit and are prepared for proper daily care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What makes Dwarf Hotots easy to recognize?
            </h3>
            <p className="text-gray-700 mt-1">
              They are known for their bright white coat and dark eye bands,
              which create a distinctive eyeliner-like look.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Dwarf Hotots need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short coat is usually manageable, but gentle brushing during
              shedding helps remove loose fur and keep the coat clean.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Dwarf Hotots good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, as long as the owner is ready for safe housing,
              proper diet, exercise, gentle handling, grooming, and veterinary
              care.
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
