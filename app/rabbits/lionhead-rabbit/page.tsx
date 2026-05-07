import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "Lionhead Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the Lionhead rabbit breed, including size, temperament, mane, grooming needs, care, housing, and beginner-friendly ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/lionhead-rabbit",
  },
  openGraph: {
    title: "Lionhead Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the Lionhead rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/lionhead-rabbit",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function LionheadRabbitPage() {
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
                src="/rabbits/Lionhead Rabbit.png"
                alt="Lionhead rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Small Maned Rabbit Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                Lionhead Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The Lionhead Rabbit is a small domestic rabbit breed known for
                the fluffy wool mane around its head, giving it a lion-like
                appearance. This breed is popular with rabbit lovers who enjoy a
                cute, expressive rabbit with a unique coat and lively
                personality.
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
                  <div className="font-bold text-emerald-900">Wool Mane</div>
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
            About the Lionhead Rabbit
          </h2>

          <p>
            Lionhead Rabbits are best known for the longer wool fur around the
            head and neck. This mane can vary from rabbit to rabbit, with some
            having a fuller mane than others. Their compact size and expressive
            face make them easy to recognize.
          </p>

          <p>
            Many Lionheads are curious, playful, and social when handled gently.
            Like all rabbits, individual personality varies, and patient
            interaction is important for building trust.
          </p>

          <p>
            Because of their mane, Lionheads usually need more grooming than
            short-coated breeds. Owners should be prepared to brush regularly
            and check for tangles, mats, and loose fur.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Appearance
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Lionheads have compact bodies, upright ears, and a distinctive
              wool mane around the head. Their coat gives them a fluffy,
              lion-like look that makes the breed stand out.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Personality
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as playful, alert, and curious.
              Gentle handling, routine, and a calm environment can help a
              Lionhead become more comfortable with people.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Care Level
            </h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Lionheads need normal daily rabbit care plus extra attention to
              grooming. Their mane should be brushed regularly to reduce tangles,
              loose fur, and matting.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Lionhead Rabbit Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                A fluffy wool mane, compact size, expressive face, playful
                personality, and lion-like appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Higher than many short-coated breeds. Regular brushing helps
                prevent tangles and keeps the mane clean and comfortable.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                Lionheads can work for prepared beginners, but new owners should
                understand the extra grooming needs that come with the mane.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Indoor Rabbit Potential</h3>
              <p className="text-gray-700 mt-2">
                Lionheads can do well indoors with safe housing, supervised
                exercise space, rabbit-proofed areas, toys, and consistent
                grooming.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for a Lionhead Rabbit
          </h2>

          <p>
            A Lionhead Rabbit needs unlimited grass hay, fresh water, clean
            housing, safe chew toys, exercise time, and a rabbit-safe
            environment. Their mane also needs regular brushing to help prevent
            matting.
          </p>

          <p>
            During shedding periods, grooming becomes especially important.
            Loose fur should be removed carefully, and owners should watch for
            changes in eating, droppings, grooming habits, or comfort.
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
            Frequently Asked Questions About Lionhead Rabbits
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Lionhead rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              Lionheads can make good companion rabbits for owners who enjoy
              playful rabbits and are prepared for regular grooming.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do Lionhead rabbits need a lot of grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes, they usually need more grooming than short-coated breeds
              because of the longer wool around the head and neck.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              How big do Lionhead rabbits get?
            </h3>
            <p className="text-gray-700 mt-1">
              Lionheads are a small rabbit breed. Exact size can vary based on
              genetics, age, diet, and overall health.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are Lionheads good for first-time rabbit owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, but first-time owners should be ready for daily care,
              safe housing, exercise, gentle handling, and regular grooming.
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
