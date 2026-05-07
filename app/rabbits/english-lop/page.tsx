import Link from "next/link";

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export const metadata = {
  title: "English Lop Rabbit Breed Guide | RabbitBreedGuide.com",
  description:
    "Learn about the English Lop rabbit breed, including size, temperament, long ears, appearance, grooming, care needs, housing, and ownership tips.",
  alternates: {
    canonical: "https://www.rabbitbreedguide.com/rabbits/english-lop",
  },
  openGraph: {
    title: "English Lop Rabbit Breed Guide",
    description:
      "A complete beginner-friendly guide to the English Lop rabbit breed.",
    url: "https://www.rabbitbreedguide.com/rabbits/english-lop",
    siteName: "RabbitBreedGuide.com",
    type: "article",
  },
};

export default function EnglishLopPage() {
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
                src="/rabbits/English Lop.png"
                alt="English Lop rabbit breed"
                className="w-full h-[420px] md:h-[560px] object-cover"
              />
            </div>

            <div className="p-6 md:p-10 flex flex-col justify-center space-y-5">
              <div className="inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                Large Long-Eared Lop Breed
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-950 leading-tight">
                English Lop Rabbit
              </h1>

              <p className="text-lg text-gray-700 leading-relaxed">
                The English Lop is a large rabbit breed famous for its extremely
                long, floppy ears. With a relaxed personality, long body, and
                unmistakable appearance, this historic lop breed is one of the
                most recognizable rabbits in the world.
              </p>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Size</div>
                  <div className="font-bold text-emerald-900">Large</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Temperament</div>
                  <div className="font-bold text-emerald-900">Relaxed</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Coat</div>
                  <div className="font-bold text-emerald-900">Short</div>
                </div>

                <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-4">
                  <div className="text-gray-500">Origin</div>
                  <div className="font-bold text-emerald-900">England</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AdSlot label="Top Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About the English Lop
          </h2>

          <p>
            English Lops are best known for their very long ears, which hang
            down beside the face and can extend far beyond the head. Their ears
            are the breed&apos;s defining feature and require careful attention.
          </p>

          <p>
            Many English Lops are described as relaxed, gentle, and easygoing.
            Like all rabbits, personality varies, but this breed is often
            appreciated for its calm companion-rabbit temperament.
          </p>

          <p>
            Because of their large size and unusually long ears, English Lops
            need safe housing, clean flooring, careful ear protection, proper
            diet, enrichment, exercise, and regular health observation.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Appearance</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              English Lops have large bodies, short coats, and exceptionally
              long floppy ears. Their ear length and relaxed expression make
              them one of the most distinctive rabbit breeds.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Personality</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              This breed is often described as calm, relaxed, and gentle.
              Patient handling, routine care, and a peaceful environment can
              help an English Lop feel comfortable.
            </p>
          </div>

          <div className="p-6 bg-white border border-emerald-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">Care Level</h3>
            <p className="text-gray-700 mt-3 leading-relaxed">
              English Lops need daily hay, fresh water, clean housing, exercise,
              gentle grooming, nail trimming, and regular checks of their ears,
              feet, appetite, and behavior.
            </p>
          </div>
        </section>

        <AdSlot label="Middle Breed Page" />

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-5">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            English Lop Breed Traits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Best Known For</h3>
              <p className="text-gray-700 mt-2">
                Extremely long ears, relaxed personality, large size, historic
                lop breed background, and unmistakable appearance.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Grooming Needs</h3>
              <p className="text-gray-700 mt-2">
                Their short coat is usually manageable, but their long ears need
                careful observation to help prevent injury, dirt buildup, or
                irritation.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">Good For Beginners?</h3>
              <p className="text-gray-700 mt-2">
                English Lops can be suitable for prepared owners, but beginners
                should understand their large size and special ear-care needs.
              </p>
            </div>

            <div className="rounded-2xl bg-[#faf8f2] border border-emerald-100 p-5">
              <h3 className="font-bold text-emerald-900">
                Indoor Rabbit Potential
              </h3>
              <p className="text-gray-700 mt-2">
                English Lops can live indoors with enough room, safe flooring,
                rabbit-proofed exercise areas, clean bedding, and careful ear
                protection.
              </p>
            </div>
          </div>
        </section>

        <section className="p-6 md:p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Caring for an English Lop
          </h2>

          <p>
            An English Lop needs unlimited grass hay, fresh water, a clean living
            area, rabbit-safe chew toys, daily exercise, and a safe environment.
            Because of their long ears, clean flooring and uncluttered spaces
            are especially important.
          </p>

          <p>
            Owners should watch the ears for irritation, dirt, injury, or signs
            of discomfort. Their ears should not be stepped on, caught, or dragged
            over rough surfaces.
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
            Frequently Asked Questions About English Lops
          </h2>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are English Lop rabbits good pets?
            </h3>
            <p className="text-gray-700 mt-1">
              English Lops can make good companion rabbits for owners who want a
              relaxed larger rabbit and are prepared for their special ear-care
              needs.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              What makes English Lops easy to recognize?
            </h3>
            <p className="text-gray-700 mt-1">
              English Lops are famous for their extremely long floppy ears,
              which are much longer than those of most other lop breeds.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Do English Lops need special care?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. Their long ears need careful protection from injury, dirt,
              rough flooring, and anything that could catch or damage them.
            </p>
          </div>

          <div>
            <h3 className="text-emerald-900 font-bold">
              Are English Lops good for first-time owners?
            </h3>
            <p className="text-gray-700 mt-1">
              They can be, but first-time owners should be ready for a large
              rabbit with special ear-care needs, safe housing, proper diet,
              exercise, grooming, and veterinary care.
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
