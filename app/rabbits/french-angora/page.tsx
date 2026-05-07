import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "French Angora Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the French Angora rabbit breed, including size, temperament, wool coat, grooming needs, care, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/french-angora",
  },
  openGraph: {
    title: "French Angora Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the French Angora rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/french-angora",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function FrenchAngoraPage() {
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
                src="/rabbits/French Angora.png"
                alt="French Angora rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Large Wool Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                French Angora Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The French Angora is a large wool rabbit breed known for its
                dense, soft coat and gentle personality. Unlike the English
                Angora, the French Angora usually has a cleaner face and ears,
                giving it a slightly less fluffy facial appearance while still
                producing plenty of wool.
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
                  <div className="font-bold text-emerald-900">Long Wool</div>
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
            About the French Angora
          </h2>

          <p>
            French Angoras are best known for their thick wool coat and more
            open face compared with some other Angora breeds. Their body wool can
            be very full, while the face and ears are usually less heavily
            furnished than an English Angora.
          </p>

          <p>
            Many French Angoras are described as gentle, calm, and pleasant when
            handled patiently. Like all rabbits, individual personality varies,
            but this breed is often appreciated for its steady temperament.
          </p>

          <p>
            The French Angora requires regular grooming and coat maintenance.
            Owners should be prepared for brushing, wool care, clean housing,
            proper diet, enrichment, exercise, and regular health observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              French Angoras have large bodies, upright ears, and a dense wool
              coat. They usually have less wool on the face and ears than
              English Angoras, giving them a cleaner facial outline.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as gentle, calm, and relaxed.
              Patient handling, routine grooming, and a quiet environment can
              help a French Angora feel comfortable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              French Angoras need daily rabbit care plus frequent grooming.
              Their wool coat requires more maintenance than short-coated
              breeds.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            French Angora Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Dense wool coat, large size, gentle personality, cleaner face
                than the English Angora, and wool production.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                High. French Angoras need regular brushing and coat checks to
                help prevent tangles, mats, and wool buildup.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                French Angoras are usually better for prepared owners who are
                ready for regular grooming, wool care, and consistent coat
                maintenance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                French Angoras can live indoors with safe housing, clean
                flooring, rabbit-proofed exercise space, enrichment, and regular
                grooming.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a French Angora
          </h2>

          <p>
            A French Angora needs unlimited grass hay, fresh water, clean
            housing, rabbit-safe chew toys, daily exercise, and a safe
            environment. Their wool coat also needs frequent brushing and
            careful coat checks.
          </p>

          <p>
            Grooming is one of the most important parts of French Angora care.
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
            Frequently Asked Questions About French Angoras
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are French Angora rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              French Angoras can be good companion rabbits for owners who are
              prepared for their regular grooming needs and wool coat care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do French Angoras need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. French Angoras need much more grooming than short-coated
              breeds because of their dense wool coat.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              How is a French Angora different from an English Angora?
            </h3>
            <p className="text-gray-700 mt-1">
              French Angoras usually have a cleaner face and ears, while English
              Angoras often have more wool furnishings around the face, ears,
              and feet.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are French Angoras good for first-time owners?
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
