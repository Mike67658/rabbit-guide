import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Jersey Wooly Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Jersey Wooly rabbit breed, including size, temperament, wool coat, grooming needs, care, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/jersey-wooly",
  },
  openGraph: {
    title: "Jersey Wooly Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Jersey Wooly rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/jersey-wooly",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function JerseyWoolyPage() {
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
                src="/rabbits/Jersey Wooly.png"
                alt="Jersey Wooly rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Small Wool Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Jersey Wooly Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Jersey Wooly is a small wool rabbit breed known for its
                compact body, soft wool coat, and docile personality. Often
                loved as a companion rabbit, this breed combines a fluffy
                appearance with a calm, gentle reputation.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Small</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Docile</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Wooly</div>
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
            About the Jersey Wooly
          </h2>

          <p>
            Jersey Woolies are best known for their small size and wooly coat.
            Their compact body, short ears, and fluffy outline give them a soft,
            rounded appearance that many rabbit owners find appealing.
          </p>

          <p>
            Many Jersey Woolies are described as calm, docile, and gentle when
            handled patiently. Like all rabbits, individual personality can vary,
            but this breed is often appreciated for its sweet companion-rabbit
            temperament.
          </p>

          <p>
            Because of their wool coat, Jersey Woolies need more grooming than
            many short-coated breeds. Owners should be ready for regular
            brushing, coat checks, clean housing, proper diet, and daily care.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Jersey Woolies have compact bodies, short upright ears, and a
              soft wool coat. Their fluffy body and small size make them one of
              the most recognizable small wool rabbit breeds.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as docile, calm, and gentle.
              Patient handling, routine care, and a peaceful environment can
              help a Jersey Wooly feel comfortable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Jersey Woolies need daily rabbit care plus regular grooming. Their
              wool coat should be checked for loose fur, tangles, and matting.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Jersey Wooly Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Small size, wooly coat, docile temperament, compact body, and
                gentle companion-rabbit personality.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Moderate to high. Jersey Woolies need regular brushing and coat
                checks to help prevent tangles, mats, and loose wool buildup.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Jersey Woolies can work for prepared beginners, but owners
                should understand the grooming needs that come with a wool coat.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                Jersey Woolies can live indoors with safe housing,
                rabbit-proofed exercise space, enrichment toys, clean flooring,
                and consistent grooming.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Jersey Wooly
          </h2>

          <p>
            A Jersey Wooly needs unlimited grass hay, fresh water, a clean living
            area, rabbit-safe chew toys, daily exercise, and a safe environment.
            Their wool coat also needs regular brushing and careful coat checks.
          </p>

          <p>
            Grooming is an important part of Jersey Wooly care. Owners should
            watch for tangles, mats, loose wool, changes in appetite, droppings,
            behavior, teeth, nails, and overall comfort.
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
            Frequently Asked Questions About Jersey Woolies
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Jersey Wooly rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Jersey Woolies can make good companion rabbits for owners who want
              a small, gentle rabbit and are prepared for regular grooming.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Jersey Woolies need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes, they need more grooming than short-coated breeds because of
              their wooly coat. Regular brushing helps prevent tangles and mats.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Jersey Woolies calm rabbits?
            </h3>
            <p className="text-gray-700 mt-1">
              Many Jersey Woolies are known for being calm and docile, though
              each rabbit has its own individual personality.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Jersey Woolies good for first-time owners?
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
