import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "American Sable Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the American Sable rabbit breed, including size, temperament, sable coloring, appearance, grooming, care needs, housing, and beginner-friendly ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/american-sable",
  },
  openGraph: {
    title: "American Sable Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the American Sable rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/american-sable",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function AmericanSablePage() {
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
                src="/rabbits/American Sable.png"
                alt="American Sable rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Medium Sable-Colored Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                American Sable Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The American Sable is a medium-sized domestic rabbit breed known
                for its rich sepia-brown coloring, darker shaded points, and
                soft, elegant appearance. This breed is often appreciated for
                its calm nature and distinctive sable coat pattern.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Medium</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Friendly</div>
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
            About the American Sable
          </h2>

          <p>
            American Sables are best known for their shaded sepia coloring. The
            body is usually a warm sable tone, while the ears, face, feet, tail,
            and other points are typically darker, creating a soft shaded look.
          </p>

          <p>
            Many American Sables are described as friendly, calm, and manageable
            when handled gently. Like all rabbits, individual personality can
            vary, but this breed is often valued for its pleasant temperament.
          </p>

          <p>
            American Sables are medium-sized rabbits, so they need enough room to
            move comfortably along with daily care, proper diet, enrichment,
            gentle grooming, and regular health observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              American Sables have medium bodies, upright ears, short dense fur,
              and a shaded sable coat. Their darker points and warm brown body
              color are the breed&apos;s most recognizable features.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as friendly, calm, and social.
              Patient handling, routine care, and a quiet environment can help
              an American Sable feel comfortable with people.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              American Sables need daily hay, fresh water, safe greens, exercise
              time, clean housing, gentle grooming, nail trimming, and regular
              health checks like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            American Sable Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Sepia-brown sable coloring, darker shaded points, friendly
                temperament, and smooth medium-sized body shape.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short dense coat is usually manageable. Gentle brushing
                helps remove loose fur, especially during shedding periods.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                American Sables can be suitable for prepared beginners who
                understand daily rabbit care, safe housing, diet, exercise,
                handling, and veterinary needs.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                American Sables can do well indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, clean flooring,
                and consistent care.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for an American Sable
          </h2>

          <p>
            An American Sable needs unlimited grass hay, fresh water, a clean
            living area, rabbit-safe chew toys, daily exercise, and a safe
            environment. Their short coat is usually simple to maintain with
            regular gentle grooming.
          </p>

          <p>
            Like all rabbits, American Sables need careful handling and a steady
            routine. Owners should watch appetite, droppings, behavior, teeth,
            nails, coat condition, and overall comfort.
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
            Frequently Asked Questions About American Sable Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are American Sable rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              American Sables can make good companion rabbits for owners who
              want a friendly medium-sized rabbit and are prepared for proper
              daily care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What color is an American Sable rabbit?
            </h3>
            <p className="text-gray-700 mt-1">
              American Sables are known for a warm sepia-brown body color with
              darker shaded points on areas such as the face, ears, feet, and
              tail.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do American Sables need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short dense coat is usually manageable, but gentle brushing
              is helpful during shedding periods to remove loose fur.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are American Sables good for first-time owners?
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
