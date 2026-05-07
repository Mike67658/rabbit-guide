import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Netherland Dwarf Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Netherland Dwarf rabbit breed, including size, temperament, appearance, care needs, grooming, housing, and beginner-friendly ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/netherland-dwarf",
  },
  openGraph: {
    title: "Netherland Dwarf Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Netherland Dwarf rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/netherland-dwarf",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function NetherlandDwarfPage() {
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
                src="/rabbits/Netherland Dwarf.png"
                alt="Netherland Dwarf rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Small Dwarf Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Netherland Dwarf Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Netherland Dwarf is one of the smallest domestic rabbit
                breeds, known for its tiny body, short ears, rounded head, and
                lively personality. This breed is popular with rabbit lovers who
                enjoy compact rabbits with a bold, energetic presence.
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
                  <div className="font-bold text-emerald-900">Netherlands</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the Netherland Dwarf
          </h2>

          <p>
            Netherland Dwarfs are compact rabbits with a very small body, short
            upright ears, a rounded face, and a bright alert expression. Their
            tiny size makes them easy to recognize, but they are still active
            rabbits that need proper space and daily care.
          </p>

          <p>
            Many Netherland Dwarfs are curious, lively, and independent. Some
            may be more cautious or less tolerant of rough handling than larger,
            calmer breeds, so gentle interaction and patience are important.
          </p>

          <p>
            This breed can be rewarding for owners who understand that small
            rabbits are not automatically low-maintenance. Netherland Dwarfs
            still need safe housing, enrichment, careful handling, proper diet,
            and regular observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Appearance
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Netherland Dwarfs have compact bodies, short ears, rounded heads,
              and a small, balanced shape. Their baby-like facial features are a
              major reason they are so recognizable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Personality
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as alert, energetic, and curious.
              Individual personalities vary, and patient handling helps build
              trust with nervous or independent rabbits.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Care Level
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Netherland Dwarfs need daily hay, fresh water, safe exercise,
              enrichment, clean housing, gentle handling, grooming, and regular
              health checks like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Netherland Dwarf Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Very small size, short ears, rounded head, compact body, and a
                lively dwarf rabbit personality.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short coat is usually easy to maintain, but regular
                brushing helps remove loose fur and keeps the coat clean during
                shedding periods.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                They can work for prepared beginners, but their small size and
                active nature mean they need gentle handling, patience, and a
                calm environment.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Indoor Rabbit Potential</h3>
              <p className="text-gray-700 mt-2">
                Netherland Dwarfs can do well indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, and careful
                supervision.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Netherland Dwarf
          </h2>

          <p>
            A Netherland Dwarf needs unlimited grass hay, fresh water, a clean
            living area, safe chew toys, daily exercise, and a rabbit-safe
            environment. Their small size does not remove the need for space,
            enrichment, and regular attention.
          </p>

          <p>
            Because they are tiny and often active, Netherland Dwarfs should be
            handled gently and securely. Children should be supervised around
            small rabbits to help prevent accidental injury or stress.
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
            Frequently Asked Questions About Netherland Dwarfs
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Netherland Dwarf rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Netherland Dwarfs can make good pets for owners who understand
              their small size, active personality, and need for gentle,
              patient handling.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              How big do Netherland Dwarfs get?
            </h3>
            <p className="text-gray-700 mt-1">
              Netherland Dwarfs are one of the smallest domestic rabbit breeds.
              Exact size can vary depending on genetics, diet, age, and overall
              health.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Netherland Dwarfs easy to handle?
            </h3>
            <p className="text-gray-700 mt-1">
              Some are friendly and social, while others may be more cautious or
              independent. Slow, gentle handling and a calm environment help
              build trust.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Netherland Dwarfs good for first-time rabbit owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, but first-time owners should be prepared for an
              energetic small rabbit that needs safe housing, careful handling,
              exercise, grooming, and veterinary care.
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
