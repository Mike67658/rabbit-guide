import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Dutch Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Dutch rabbit breed, including size, temperament, markings, appearance, grooming, care needs, housing, and beginner-friendly ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/dutch",
  },
  openGraph: {
    title: "Dutch Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Dutch rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/dutch",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function DutchPage() {
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
                src="/rabbits/Dutch.png"
                alt="Dutch rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Small Marked Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Dutch Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Dutch Rabbit is a classic small rabbit breed known for its
                clean, distinctive color pattern. With a white blaze, white
                shoulders, colored cheeks, and colored hindquarters, the Dutch is
                one of the most recognizable domestic rabbit breeds.
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
            About the Dutch Rabbit
          </h2>

          <p>
            Dutch Rabbits are best known for their balanced markings and
            compact, tidy appearance. Their pattern usually includes a white
            face blaze, white front section, colored ears and cheeks, and a
            colored rear section.
          </p>

          <p>
            Many Dutch Rabbits are described as friendly, calm, and easy to
            enjoy as companion rabbits when handled gently. They are active
            enough to be entertaining but are often considered manageable for
            prepared rabbit owners.
          </p>

          <p>
            Their short coat is usually easier to maintain than long-haired
            breeds, but Dutch Rabbits still need daily care, proper diet, safe
            housing, exercise time, enrichment, and regular health observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Dutch Rabbits have compact bodies, upright ears, short coats, and
              a famous two-tone pattern. Their markings are the feature most
              closely associated with the breed.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as friendly, social, and curious.
              Individual personalities vary, but many Dutch Rabbits respond well
              to patient handling and routine care.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Dutch Rabbits need daily hay, fresh water, rabbit-safe greens,
              exercise space, clean housing, gentle grooming, nail trimming, and
              regular health checks like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Dutch Rabbit Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Distinctive white-and-colored markings, compact size, friendly
                personality, and classic domestic rabbit appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short coat is usually easy to maintain. Regular gentle
                brushing helps remove loose fur, especially during shedding.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Dutch Rabbits can be a good choice for prepared beginners who
                understand daily rabbit care, diet, housing, exercise, and safe
                handling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Dutch Rabbits can do well indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, and consistent
                cleaning.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Dutch Rabbit
          </h2>

          <p>
            A Dutch Rabbit needs unlimited grass hay, fresh water, a clean
            living area, rabbit-safe chew toys, exercise time, and a safe
            environment. Their short coat is usually simple to maintain with
            regular gentle grooming.
          </p>

          <p>
            Like all rabbits, Dutch Rabbits need careful handling and a calm
            routine. They should have room to stretch, explore, chew safely, and
            rest in a clean, secure space.
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
            Frequently Asked Questions About Dutch Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Dutch rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Dutch Rabbits can make good companion rabbits for owners who want
              a friendly, small rabbit and are prepared for proper daily care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What makes Dutch rabbits easy to recognize?
            </h3>
            <p className="text-gray-700 mt-1">
              Dutch Rabbits are known for their distinct markings, including a
              white blaze, white front section, colored cheeks, ears, and rear
              body.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Dutch rabbits need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short coat is usually easy to maintain, but they still
              benefit from gentle brushing during shedding periods.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Dutch rabbits good for first-time owners?
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
