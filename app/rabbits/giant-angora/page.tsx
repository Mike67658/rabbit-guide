import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Giant Angora Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Giant Angora rabbit breed, including size, temperament, wool coat, grooming needs, care, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/giant-angora",
  },
  openGraph: {
    title: "Giant Angora Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Giant Angora rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/giant-angora",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function GiantAngoraPage() {
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
                src="/rabbits/Giant Angora.png"
                alt="Giant Angora rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Giant Wool Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Giant Angora Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Giant Angora is a large wool rabbit breed known for its
                impressive size, dense white wool coat, and gentle personality.
                It was developed for wool production and requires committed
                grooming, careful coat maintenance, and enough space for a large
                rabbit.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Giant</div>
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
                  <div className="font-bold text-emerald-900">United States</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the Giant Angora
          </h2>

          <p>
            Giant Angoras are best known for their dense wool coat and very
            large size. They are the largest Angora breed and were developed to
            produce a significant amount of soft rabbit wool.
          </p>

          <p>
            Many Giant Angoras are described as gentle, calm, and steady when
            handled properly. Like all rabbits, individual personality can vary,
            but this breed is often appreciated for its relaxed temperament.
          </p>

          <p>
            The Giant Angora is not a low-maintenance rabbit. Its wool coat
            requires frequent grooming, and its large body needs spacious
            housing, safe flooring, proper diet, exercise, and regular health
            observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Giant Angoras have large bodies, upright ears, and a dense wool
              coat. Their heavy wool coverage and giant size make them one of
              the most dramatic-looking domestic rabbit breeds.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as gentle, calm, and manageable.
              Patient handling, routine grooming, and a peaceful environment can
              help a Giant Angora feel secure.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Giant Angoras need daily rabbit care plus frequent grooming. Their
              wool coat and large size make them more demanding than many
              short-coated breeds.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Giant Angora Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Giant size, dense wool coat, gentle temperament, wool
                production, and impressive fluffy appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Very high. Giant Angoras need frequent brushing and coat checks
                to help prevent mats, tangles, and wool buildup.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Giant Angoras are usually better for prepared owners who are
                ready for a large rabbit with serious grooming and wool-care
                needs.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Giant Angoras can live indoors with enough room, clean flooring,
                rabbit-proofed exercise space, enrichment, and regular grooming.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Giant Angora
          </h2>

          <p>
            A Giant Angora needs unlimited grass hay, fresh water, clean housing,
            rabbit-safe chew toys, daily exercise, and a safe environment. Their
            large size means they need extra room to stretch, move, and rest
            comfortably.
          </p>

          <p>
            Grooming is one of the most important parts of Giant Angora care.
            Their wool can mat if neglected, so owners should keep the coat
            clean, dry, brushed, and regularly checked.
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
            Frequently Asked Questions About Giant Angoras
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Giant Angora rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Giant Angoras can be good companion rabbits for owners who are
              prepared for their large size, wool coat, and frequent grooming
              needs.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Giant Angoras need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. Giant Angoras require much more grooming than short-coated
              breeds because of their dense wool coat.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Giant Angoras large rabbits?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. Giant Angoras are large wool rabbits and need more space than
              smaller rabbit breeds.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Giant Angoras good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be challenging for first-time owners because of their
              grooming needs and size. Prepared beginners can succeed with
              research, time, space, and consistent coat care.
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
