import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Mini Rex Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Mini Rex rabbit breed, including size, temperament, velvet-like coat, grooming needs, care, housing, and beginner-friendly ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/mini-rex",
  },
  openGraph: {
    title: "Mini Rex Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Mini Rex rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/mini-rex",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function MiniRexPage() {
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
                src="/rabbits/Mini Rex.png"
                alt="Mini Rex rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Small Plush-Coated Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Mini Rex Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Mini Rex is a small rabbit breed best known for its uniquely
                soft, velvet-like coat. With a compact body, calm personality,
                and plush fur texture, the Mini Rex is a popular choice for
                rabbit lovers who want a gentle companion with a standout coat.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Small</div>
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
                  <div className="font-bold text-emerald-900">United States</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the Mini Rex
          </h2>

          <p>
            Mini Rex rabbits are famous for their short, dense coat that feels
            soft and plush to the touch. The rex coat type has guard hairs that
            are similar in length to the undercoat, creating the breed&apos;s
            signature velvety texture.
          </p>

          <p>
            Many Mini Rex rabbits are calm, friendly, and easy to enjoy as
            companion rabbits when handled gently. Like all rabbits, each
            individual has its own personality, so patience and consistent care
            are important.
          </p>

          <p>
            Their smaller size and manageable coat make them appealing to many
            rabbit owners, but they still need daily attention, safe housing,
            proper diet, enrichment, and regular health checks.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Appearance
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Mini Rex rabbits have compact bodies, upright ears, rounded heads,
              and a dense plush coat. Their soft rex fur is the feature most
              strongly associated with the breed.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Personality
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as calm, gentle, and friendly.
              Individual personalities vary, but many Mini Rex rabbits respond
              well to patient handling and a quiet home environment.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Care Level
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Mini Rex rabbits need daily hay, fresh water, rabbit-safe greens,
              exercise time, clean housing, gentle grooming, nail trimming, and
              regular health observation like any domestic rabbit.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Mini Rex Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Velvet-like rex fur, compact size, calm personality, and a soft
                plush coat texture.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short rex coat is usually easy to maintain. Gentle brushing
                or hand grooming can help remove loose fur during shedding.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Mini Rex rabbits can be a good choice for prepared beginners who
                understand rabbit diet, housing, exercise, handling, and daily
                care.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Indoor Rabbit Potential</h3>
              <p className="text-gray-700 mt-2">
                Mini Rex rabbits can do well indoors with a safe enclosure,
                rabbit-proofed exercise space, enrichment toys, and consistent
                cleaning.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Mini Rex
          </h2>

          <p>
            A Mini Rex needs unlimited grass hay, fresh water, a clean living
            space, safe chew toys, daily exercise, and a rabbit-safe environment.
            Their coat should be handled gently because rex fur has a unique
            texture and should not be over-groomed harshly.
          </p>

          <p>
            Owners should provide supportive flooring, especially because Rex
            breeds can be more prone to foot irritation if kept on rough or
            unsuitable surfaces. Clean, dry, comfortable flooring is important.
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
            Frequently Asked Questions About Mini Rex Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Mini Rex rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Mini Rex rabbits can make good companion rabbits for owners who
              want a small, calm rabbit and are prepared for proper daily care.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What makes Mini Rex fur different?
            </h3>
            <p className="text-gray-700 mt-1">
              Mini Rex rabbits have a short, dense rex coat with a soft,
              velvet-like texture. This plush coat is one of the breed&apos;s
              most recognizable traits.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Mini Rex rabbits need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Their short coat is usually easier to maintain than long-haired
              breeds, but they still benefit from gentle grooming during
              shedding periods.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Mini Rex rabbits good for first-time owners?
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
