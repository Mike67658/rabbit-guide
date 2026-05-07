import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "American Fuzzy Lop Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the American Fuzzy Lop rabbit breed, including size, temperament, wool coat, grooming needs, care, housing, and beginner-friendly ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/american-fuzzy-lop",
  },
  openGraph: {
    title: "American Fuzzy Lop Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the American Fuzzy Lop rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/american-fuzzy-lop",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function AmericanFuzzyLopPage() {
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
                src="/rabbits/American Fuzzy Lop.png"
                alt="American Fuzzy Lop rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Small Wooly Lop Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                American Fuzzy Lop Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The American Fuzzy Lop is a small lop-eared rabbit breed known
                for its wooly coat, compact body, and playful personality. It
                combines the cute floppy-eared look of a lop rabbit with a soft,
                fuzzy coat that gives the breed its name.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Small</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Playful</div>
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
            About the American Fuzzy Lop
          </h2>

          <p>
            American Fuzzy Lops are best known for their soft wooly coat and
            floppy ears. Their compact size, rounded body, and fluffy appearance
            make them stand out from many short-coated lop breeds.
          </p>

          <p>
            Many American Fuzzy Lops are curious, playful, and social when
            handled gently. Like all rabbits, individual personality can vary,
            but this breed is often enjoyed by owners who like an active and
            expressive companion rabbit.
          </p>

          <p>
            Because of the wool coat, American Fuzzy Lops usually need more
            grooming than short-coated breeds. Owners should be ready for
            regular brushing and coat checks to help prevent tangles and mats.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              American Fuzzy Lops have floppy ears, compact bodies, rounded
              heads, and a soft wooly coat. Their fuzzy appearance is the trait
              most closely associated with the breed.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as playful, curious, and friendly.
              Patient handling, routine care, and calm interaction help build
              trust with an American Fuzzy Lop.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              American Fuzzy Lops need normal daily rabbit care plus regular
              grooming. Their wooly coat should be checked often for loose fur,
              tangles, and matting.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            American Fuzzy Lop Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Floppy ears, wooly coat, compact body, playful personality, and
                a fuzzy companion-rabbit appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Higher than many short-coated breeds. Regular brushing helps
                reduce loose wool, tangles, and matting.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                American Fuzzy Lops can work for prepared beginners, but new
                owners should understand the extra grooming needs that come with
                a wooly coat.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                American Fuzzy Lops can do well indoors with safe housing,
                rabbit-proofed exercise space, enrichment toys, and consistent
                grooming.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for an American Fuzzy Lop
          </h2>

          <p>
            An American Fuzzy Lop needs unlimited grass hay, fresh water, a clean
            living area, safe chew toys, exercise time, and a rabbit-safe
            environment. Their wooly coat also needs regular grooming to help
            prevent mats and keep the rabbit comfortable.
          </p>

          <p>
            During shedding periods, grooming becomes especially important.
            Owners should watch for loose fur, tangles, changes in appetite,
            droppings, behavior, and overall comfort.
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
            Frequently Asked Questions About American Fuzzy Lops
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are American Fuzzy Lop rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              American Fuzzy Lops can make good companion rabbits for owners who
              enjoy playful lop rabbits and are prepared for regular grooming.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do American Fuzzy Lops need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. Their wooly coat usually needs more brushing and coat checks
              than short-coated rabbit breeds.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are American Fuzzy Lops the same as Holland Lops?
            </h3>
            <p className="text-gray-700 mt-1">
              No. They are separate breeds. American Fuzzy Lops have a wooly
              coat, while Holland Lops usually have a shorter rollback coat.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are American Fuzzy Lops good for first-time owners?
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
