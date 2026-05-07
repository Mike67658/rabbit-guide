import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Rex Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Rex rabbit breed, including size, temperament, velvet-like coat, grooming needs, care, housing, and beginner-friendly ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/rex",
  },
  openGraph: {
    title: "Rex Rabbit Breed Guide",
    description: "A complete beginner-friendly guide to the Rex rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/rex",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function RexPage() {
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
                src="/rabbits/Rex.png"
                alt="Rex rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Medium Plush-Coated Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Rex Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Rex Rabbit is a medium-sized domestic rabbit breed famous
                for its dense, velvet-like coat. With a calm reputation, rounded
                body, and soft plush fur, the Rex is popular with rabbit lovers
                who want a gentle breed with a standout coat texture.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Medium</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Calm</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Rex / Plush</div>
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
            About the Rex Rabbit
          </h2>

          <p>
            Rex rabbits are best known for their short, dense fur that feels
            unusually soft and plush. The rex coat type gives the fur a velvety
            texture because the guard hairs are similar in length to the
            undercoat.
          </p>

          <p>
            Many Rex rabbits are described as calm, gentle, and people-friendly
            when handled with patience. Individual personalities vary, but the
            breed has a strong reputation as a pleasant companion rabbit.
          </p>

          <p>
            Compared with the smaller Mini Rex, the standard Rex is larger and
            has a more substantial body. Owners should still provide proper
            housing, daily care, enrichment, safe flooring, and regular health
            observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Rex rabbits have a medium build, upright ears, a rounded body, and
              a dense plush coat. Their soft rex fur is the feature most closely
              associated with the breed.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as calm, gentle, and friendly.
              Patient handling, routine care, and a quiet environment can help a
              Rex rabbit feel secure.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Rex rabbits need daily hay, fresh water, safe greens, exercise
              time, clean housing, gentle grooming, nail trimming, and regular
              health checks like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Rex Rabbit Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Velvet-like rex fur, calm temperament, medium size, and a dense
                plush coat texture.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short coat is usually easy to maintain. Gentle grooming
                helps remove loose fur, especially during shedding periods.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Rex rabbits can be a good choice for prepared beginners who
                understand daily rabbit care, housing, diet, handling, and
                veterinary needs.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Rex rabbits can live indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, and comfortable,
                supportive flooring.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Rex Rabbit
          </h2>

          <p>
            A Rex rabbit needs unlimited grass hay, fresh water, a clean living
            area, rabbit-safe chew toys, daily exercise, and a safe environment.
            Their coat should be groomed gently to protect the plush texture.
          </p>

          <p>
            Rex rabbits can be more prone to foot irritation if kept on rough,
            damp, or unsuitable flooring. Clean, dry, supportive flooring is an
            important part of their care.
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
            Frequently Asked Questions About Rex Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Rex rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Rex rabbits can make good companion rabbits for owners who want a
              calm, medium-sized rabbit and are prepared for proper daily care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What makes Rex fur different?
            </h3>
            <p className="text-gray-700 mt-1">
              Rex rabbits have a short, dense coat with a plush, velvet-like
              texture. This unique coat is one of the breed&apos;s most famous
              features.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Rex rabbits bigger than Mini Rex rabbits?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. The standard Rex is generally larger than the Mini Rex,
              though exact size can vary by individual rabbit, genetics, diet,
              and health.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Rex rabbits good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, as long as the owner is ready for safe housing,
              proper diet, exercise, gentle handling, grooming, supportive
              flooring, and veterinary care.
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
