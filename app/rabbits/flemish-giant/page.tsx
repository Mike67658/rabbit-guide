import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Flemish Giant Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Flemish Giant rabbit breed, including size, temperament, appearance, care needs, grooming, housing, and beginner-friendly ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/flemish-giant",
  },
  openGraph: {
    title: "Flemish Giant Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Flemish Giant rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/flemish-giant",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function FlemishGiantPage() {
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
                src="/rabbits/Flemish Giant.png"
                alt="Flemish Giant rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Giant Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Flemish Giant Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Flemish Giant is one of the largest domestic rabbit breeds,
                known for its impressive size, long body, large ears, and calm
                personality. Often called a gentle giant, this breed is popular
                with rabbit enthusiasts who have enough space and time for a
                very large rabbit.
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
                  <div className="font-bold text-emerald-900">Short</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Origin</div>
                  <div className="font-bold text-emerald-900">Belgium</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the Flemish Giant
          </h2>

          <p>
            Flemish Giants are famous for their large size and long, powerful
            body shape. They have broad heads, upright ears, and a calm,
            steady appearance that makes them stand out from smaller rabbit
            breeds.
          </p>

          <p>
            Many Flemish Giants are known for being relaxed and gentle when
            handled properly. Their size can make them impressive companion
            rabbits, but it also means they require more room, stronger housing,
            and careful handling.
          </p>

          <p>
            This breed is often admired by rabbit hobbyists and families, but it
            is not always the easiest choice for everyone. A Flemish Giant needs
            space to move comfortably, a proper diet, daily care, and an owner
            prepared for the needs of a very large rabbit.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Appearance
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Flemish Giants have long bodies, large upright ears, broad heads,
              and a powerful build. Their impressive size is the main feature
              that separates them from most other domestic rabbit breeds.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Personality
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as calm, gentle, and easygoing.
              Individual personalities vary, but many Flemish Giants respond
              well to patient handling and a peaceful environment.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Care Level
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Flemish Giants need more space than small breeds, sturdy housing,
              daily hay, fresh water, safe exercise time, grooming, and careful
              monitoring of weight, feet, and mobility.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Flemish Giant Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Huge size, calm personality, long body, large ears, and the
                nickname “gentle giant.”
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short coat is usually manageable, but regular brushing
                helps reduce loose fur and keeps the coat healthy during
                shedding.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                They can be good for prepared beginners, but their large size
                means they need more space, stronger housing, and careful
                handling than many smaller rabbits.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Indoor Rabbit Potential</h3>
              <p className="text-gray-700 mt-2">
                Flemish Giants can live indoors with enough space, rabbit-safe
                flooring, supervised exercise, and a setup large enough for
                comfortable movement.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Flemish Giant
          </h2>

          <p>
            A Flemish Giant needs unlimited grass hay, fresh water, a clean
            living area, safe chew toys, and plenty of space to move. Because of
            their size, they need a larger enclosure and more floor space than
            smaller rabbit breeds.
          </p>

          <p>
            Owners should pay attention to flooring and foot comfort. Very large
            rabbits can be more sensitive to pressure on their feet, so a clean,
            dry, supportive living area is important.
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
            Frequently Asked Questions About Flemish Giants
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Flemish Giant rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Flemish Giants can make gentle and impressive companion rabbits
              for owners who have enough space, time, and confidence handling a
              very large rabbit.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              How big do Flemish Giants get?
            </h3>
            <p className="text-gray-700 mt-1">
              Flemish Giants are one of the largest domestic rabbit breeds.
              Individual size can vary based on genetics, diet, age, and overall
              health.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Flemish Giants need special housing?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. Their large size means they need more space than smaller
              breeds, plus sturdy housing, safe flooring, and room to stretch
              and move comfortably.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Flemish Giants good for first-time rabbit owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, but only if the owner is prepared for their size,
              housing needs, food needs, grooming, handling, and veterinary care.
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
