import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Satin Angora Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Satin Angora rabbit breed, including size, temperament, shiny wool coat, grooming needs, care, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/satin-angora",
  },
  openGraph: {
    title: "Satin Angora Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Satin Angora rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/satin-angora",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function SatinAngoraPage() {
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
                src="/rabbits/Satin Angora.png"
                alt="Satin Angora rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Large Shiny Wool Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Satin Angora Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Satin Angora is a wool rabbit breed known for its soft,
                shiny coat and gentle personality. It combines Angora wool with
                a satin-like sheen, giving the fur a bright, silky appearance
                that stands out from other Angora breeds.
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
                  <div className="font-bold text-emerald-900">Shiny Wool</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Origin</div>
                  <div className="font-bold text-emerald-900">Canada</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the Satin Angora
          </h2>

          <p>
            Satin Angoras are best known for their shiny wool coat. The satin
            factor gives the wool a bright sheen, while the Angora coat gives
            the rabbit a fluffy, soft appearance.
          </p>

          <p>
            Many Satin Angoras are described as gentle, calm, and pleasant when
            handled patiently. Like all rabbits, individual personality can vary,
            but this breed is often appreciated for its beauty and steady nature.
          </p>

          <p>
            The Satin Angora requires regular grooming and coat maintenance.
            Owners should be prepared for brushing, wool care, clean housing,
            proper diet, enrichment, exercise, and regular health observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Satin Angoras have wool coats with a noticeable shine, upright
              ears, and a soft rounded look. Their glossy wool is the breed&apos;s
              most recognizable feature.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as gentle, calm, and relaxed.
              Patient handling, routine grooming, and a peaceful environment can
              help a Satin Angora feel comfortable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Satin Angoras need daily rabbit care plus frequent grooming. Their
              wool coat requires more maintenance than short-coated breeds.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Satin Angora Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Shiny wool coat, soft Angora fur, gentle temperament, satin-like
                sheen, and eye-catching fluffy appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                High. Satin Angoras need regular brushing and coat checks to
                help prevent mats, tangles, and wool buildup.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Satin Angoras are usually better for prepared owners who are
                ready for regular grooming, wool care, and consistent coat
                maintenance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Satin Angoras can live indoors with safe housing, clean flooring,
                rabbit-proofed exercise space, enrichment, and regular grooming.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Satin Angora
          </h2>

          <p>
            A Satin Angora needs unlimited grass hay, fresh water, clean housing,
            rabbit-safe chew toys, daily exercise, and a safe environment. Their
            shiny wool coat also needs frequent brushing and careful coat
            checks.
          </p>

          <p>
            Grooming is one of the most important parts of Satin Angora care.
            Mats, tangles, and loose wool can become uncomfortable if the coat is
            neglected, so owners should keep the wool clean, dry, and maintained.
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
            Frequently Asked Questions About Satin Angoras
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Satin Angora rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Satin Angoras can make good companion rabbits for owners who are
              prepared for regular grooming and wool coat care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What makes Satin Angora wool different?
            </h3>
            <p className="text-gray-700 mt-1">
              Satin Angoras have wool with a satin-like sheen, giving the coat a
              bright, glossy appearance compared with many other wool breeds.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Satin Angoras need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. Satin Angoras need much more grooming than short-coated
              breeds because of their wool coat.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Satin Angoras good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be challenging for first-time owners because of the
              grooming commitment. Prepared beginners can succeed with research,
              time, and consistent coat care.
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
