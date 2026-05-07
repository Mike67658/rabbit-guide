import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "American Chinchilla Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the American Chinchilla rabbit breed, including size, temperament, silver-gray coat, appearance, grooming, care needs, housing, and beginner-friendly ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/american-chinchilla",
  },
  openGraph: {
    title: "American Chinchilla Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the American Chinchilla rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/american-chinchilla",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function AmericanChinchillaPage() {
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
                src="/rabbits/American Chinchilla.png"
                alt="American Chinchilla rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Large Silver-Gray Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                American Chinchilla Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The American Chinchilla is a large domestic rabbit breed known
                for its beautiful silver-gray coat, gentle personality, and
                sturdy body. This breed has a calm reputation and is often
                admired by rabbit enthusiasts for its classic chinchilla-colored
                fur.
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
                  <div className="font-bold text-emerald-900">Short / Dense</div>
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
            About the American Chinchilla
          </h2>

          <p>
            American Chinchillas are known for their dense, silver-gray fur that
            resembles the coloration of a chinchilla. Their coat has a layered
            look with darker ticking, giving the breed a soft and elegant
            appearance.
          </p>

          <p>
            Many American Chinchillas are described as calm, gentle, and
            manageable when handled properly. Like all rabbits, personality can
            vary, but this breed is often appreciated for its steady temperament.
          </p>

          <p>
            Because they are large rabbits, American Chinchillas need more room
            than smaller breeds. They benefit from spacious housing, safe
            exercise time, proper diet, enrichment, and regular health
            observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              American Chinchillas have large bodies, upright ears, dense fur,
              and a silver-gray coat with darker ticking. Their unique coat
              color is the feature most closely associated with the breed.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as gentle, calm, and easygoing.
              Patient handling, routine care, and a quiet environment can help
              an American Chinchilla feel comfortable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              American Chinchillas need daily hay, fresh water, safe greens,
              exercise space, clean housing, gentle grooming, nail trimming, and
              regular health checks like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            American Chinchilla Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Silver-gray chinchilla coloring, large size, calm temperament,
                dense coat, and sturdy body shape.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short, dense coat is usually manageable, but regular
                gentle brushing helps remove loose fur during shedding periods.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                American Chinchillas can be suitable for prepared beginners, but
                their larger size means they need more space, sturdy housing,
                and confident gentle handling.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                American Chinchillas can live indoors with enough space,
                rabbit-proofed exercise areas, clean flooring, enrichment, and
                consistent care.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for an American Chinchilla
          </h2>

          <p>
            An American Chinchilla needs unlimited grass hay, fresh water, a
            clean living area, rabbit-safe chew toys, daily exercise, and a safe
            environment. Because this is a larger breed, extra room for movement
            is important.
          </p>

          <p>
            Owners should provide clean, dry, supportive flooring and enough
            space for the rabbit to stretch, hop, and rest comfortably. Regular
            brushing can help keep the dense coat in good condition.
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
            Frequently Asked Questions About American Chinchilla Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are American Chinchilla rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              American Chinchillas can make good companion rabbits for owners
              who want a gentle, larger rabbit and are prepared for proper daily
              care and enough space.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What color is an American Chinchilla rabbit?
            </h3>
            <p className="text-gray-700 mt-1">
              American Chinchillas are known for their silver-gray chinchilla
              coat color, often with darker ticking that gives the fur a layered
              appearance.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do American Chinchilla rabbits need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short, dense coat is usually manageable, but gentle brushing
              is helpful during shedding periods to remove loose fur.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are American Chinchillas good for first-time rabbit owners?
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
