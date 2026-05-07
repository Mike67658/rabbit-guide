import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "French Lop Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the French Lop rabbit breed, including size, temperament, floppy ears, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/french-lop",
  },
  openGraph: {
    title: "French Lop Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the French Lop rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/french-lop",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function FrenchLopPage() {
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
                src="/rabbits/French Lop.png"
                alt="French Lop rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Large Heavy Lop Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                French Lop Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The French Lop is a large, heavy lop-eared rabbit breed known
                for its floppy ears, broad head, sturdy body, and relaxed
                personality. This breed is often admired by rabbit lovers who
                want a gentle, impressive companion rabbit with a classic lop
                appearance.
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
                  <div className="font-bold text-emerald-900">Short</div>
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
            About the French Lop
          </h2>

          <p>
            French Lops are known for their large, solid bodies and floppy ears
            that hang down beside the face. Their broad head, heavy build, and
            relaxed expression give them a very recognizable lop-rabbit look.
          </p>

          <p>
            Many French Lops are described as calm, relaxed, and gentle when
            handled properly. Like all rabbits, individual personality can vary,
            but this breed is often appreciated for its steady temperament.
          </p>

          <p>
            Because French Lops are large rabbits, they need more room than small
            breeds. Spacious housing, safe exercise time, proper diet,
            enrichment, gentle grooming, and regular health observation are
            important.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              French Lops have large bodies, broad heads, short coats, and
              floppy ears. Their heavy build and classic lop profile make them
              one of the most recognizable large lop breeds.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as relaxed, calm, and gentle.
              Patient handling, routine care, and a peaceful environment can
              help a French Lop feel secure.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              French Lops need daily hay, fresh water, clean housing, exercise,
              gentle grooming, nail trimming, and regular checks of their ears,
              feet, appetite, and behavior.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            French Lop Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Large size, floppy ears, broad head, heavy body, relaxed
                temperament, and classic lop-rabbit appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short coat is usually manageable, but gentle brushing
                during shedding helps remove loose fur and keep the coat neat.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                French Lops can be suitable for prepared beginners, but their
                larger size means they need extra space, sturdy housing, and
                confident gentle handling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                French Lops can live indoors with enough room, safe flooring,
                rabbit-proofed exercise areas, enrichment toys, and consistent
                cleaning.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a French Lop
          </h2>

          <p>
            A French Lop needs unlimited grass hay, fresh water, a clean living
            area, rabbit-safe chew toys, daily exercise, and a safe environment.
            Because this is a large breed, extra room for comfortable movement
            is important.
          </p>

          <p>
            Like other lop-eared rabbits, ear health and cleanliness should be
            watched carefully. Owners should also provide clean, dry, supportive
            flooring and enough space for stretching, hopping, and resting.
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
            Frequently Asked Questions About French Lops
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are French Lop rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              French Lops can make good companion rabbits for owners who want a
              relaxed larger rabbit and are prepared for proper daily care,
              space, and safe handling.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are French Lops bigger than Mini Lops?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. French Lops are much larger and heavier than Mini Lops,
              though exact size can vary by genetics, diet, age, and health.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do French Lops need special ear care?
            </h3>
            <p className="text-gray-700 mt-1">
              Their floppy ears should be checked regularly for cleanliness,
              irritation, injury, or signs of discomfort.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are French Lops good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, as long as the owner is ready for a large rabbit that
              needs safe housing, extra space, proper diet, exercise, grooming,
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
