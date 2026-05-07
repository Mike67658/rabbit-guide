"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";

type RabbitBreed = {
  name: string;
  slug?: string;
  image?: string;
  summary?: string;
  size?: string;
  temperament?: string;
  origin?: string;
  search?: string;
};

const FEATURED_BREEDS = [
  "Holland Lop",
  "Flemish Giant",
  "Netherland Dwarf",
  "Lionhead Rabbit",
  "Mini Rex",
  "Rex",
  "Dutch",
  "Mini Lop",
  "American Chinchilla",
];

function slugify(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getRabbitSlug(rabbit: RabbitBreed) {
  return rabbit.slug || slugify(rabbit.name);
}

function getRabbitImage(rabbit: RabbitBreed) {
  return rabbit.image || `/rabbits/${rabbit.name}.png`;
}

function AdSlot({ label }: { label: string }) {
  return (
    <div className="min-h-[120px] rounded-2xl border border-emerald-700/20 bg-white/70 flex items-center justify-center text-xs text-gray-400 shadow-sm">
      Advertisement Placeholder — {label}
    </div>
  );
}

export default function Home() {
  const [allRabbits, setAllRabbits] = useState<RabbitBreed[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<RabbitBreed[]>([]);
  const fuseRef = useRef<Fuse<RabbitBreed> | null>(null);
  const debounceRef = useRef<any>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetch("/rabbits.json").then((r) => r.json());
      setAllRabbits(data);

      fuseRef.current = new Fuse(data, {
        keys: ["name", "summary", "size", "temperament", "origin", "search"],
        threshold: 0.28,
      });
    };

    load();
  }, []);

  const popularRabbits = useMemo(() => {
    if (!allRabbits.length) return [];

    const featured = FEATURED_BREEDS.map((name) =>
      allRabbits.find((r) => r.name === name)
    ).filter(Boolean) as RabbitBreed[];

    const remaining = allRabbits.filter(
      (r) => !FEATURED_BREEDS.includes(r.name)
    );

    return [...featured, ...remaining];
  }, [allRabbits]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    clearTimeout(debounceRef.current);

    if (!value || value.length < 2) {
      setResults([]);
      return;
    }

    debounceRef.current = setTimeout(() => {
      if (!fuseRef.current) return;

      const matches = fuseRef.current
        .search(value)
        .slice(0, 10)
        .map((r) => r.item);

      setResults(matches);
    }, 70);
  };

  return (
    <div className="min-h-screen bg-[#f7f4ec] text-gray-900">
      <main className="max-w-7xl mx-auto px-4 py-6 space-y-10">
        <section className="rounded-[2rem] bg-gradient-to-br from-emerald-900 via-emerald-700 to-lime-500 text-white px-6 py-12 md:py-16 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#ffffff,transparent_35%)]" />

          <div className="relative max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              RabbitBreedGuide.com
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Explore Rabbit Breeds, Care Traits, Sizes, and Personalities
            </h1>

            <p className="text-lg md:text-xl text-emerald-50 leading-relaxed">
              Search popular rabbit breeds or browse our breed guide to learn
              about appearance, temperament, care needs, size, and what makes
              each rabbit unique.
            </p>
          </div>
        </section>

        <section className="space-y-3">
          <div className="relative">
            <input
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search rabbit breeds..."
              className="w-full rounded-3xl border border-emerald-200 bg-white p-5 text-xl shadow-lg outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-200"
            />

            {results.length > 0 && (
              <div className="absolute z-20 mt-2 w-full rounded-2xl border border-emerald-100 bg-white shadow-xl overflow-hidden">
                {results.map((rabbit) => (
                  <Link
                    key={rabbit.name}
                    href={`/rabbits/${getRabbitSlug(rabbit)}`}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 transition"
                    onClick={() => {
                      setSearchQuery("");
                      setResults([]);
                    }}
                  >
                    <img
                      src={getRabbitImage(rabbit)}
                      alt={rabbit.name}
                      className="h-12 w-12 rounded-xl object-cover bg-emerald-50"
                    />

                    <div>
                      <div className="font-semibold text-emerald-900">
                        {rabbit.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {rabbit.summary || "View this rabbit breed guide"}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <AdSlot label="Homepage Top" />

        <section>
          <div className="flex items-end justify-between gap-4 mb-5">
            <div>
              <h2 className="text-3xl font-extrabold text-emerald-950">
                Rabbit Breed Guide
              </h2>
              <p className="text-gray-600 mt-1">
                Click a breed to open its dedicated guide page.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {popularRabbits.map((rabbit) => (
              <Link
                key={rabbit.name}
                href={`/rabbits/${getRabbitSlug(rabbit)}`}
                className="group rounded-3xl bg-white border border-emerald-100 shadow-md hover:shadow-xl overflow-hidden transition hover:-translate-y-1"
              >
                <div className="aspect-[4/3] bg-emerald-50 overflow-hidden">
                  <img
                    src={getRabbitImage(rabbit)}
                    alt={`${rabbit.name} rabbit breed`}
                    className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-2xl font-bold text-emerald-950">
                    {rabbit.name}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {rabbit.summary ||
                      `Learn about the ${rabbit.name}, including its appearance, temperament, size, care needs, and breed traits.`}
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs">
                    {rabbit.size && (
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
                        {rabbit.size}
                      </span>
                    )}

                    {rabbit.temperament && (
                      <span className="rounded-full bg-lime-100 px-3 py-1 text-lime-800">
                        {rabbit.temperament}
                      </span>
                    )}
                  </div>

                  <div className="font-semibold text-emerald-700">
                    View breed guide →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <AdSlot label="Homepage Middle" />

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-3xl bg-white p-6 border border-emerald-100 shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Compare Rabbit Breeds
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Browse small, medium, large, fluffy, calm, playful, and unique
              rabbit breeds to find the one that fits your interest or home.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 border border-emerald-100 shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Learn Care Needs
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Each breed page can include grooming needs, housing tips,
              temperament notes, diet basics, and beginner-friendly care
              information.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 border border-emerald-100 shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950">
              Find the Right Rabbit
            </h3>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Use the search bar or breed cards to quickly find rabbits by name,
              size, personality, coat type, or common breed traits.
            </p>
          </div>
        </section>

        <section className="rounded-3xl bg-white p-6 md:p-8 border border-emerald-100 shadow-sm space-y-5 leading-relaxed">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            About RabbitBreedGuide.com
          </h2>

          <p className="text-gray-700">
            RabbitBreedGuide.com is built to help readers explore rabbit breeds
            in a simple, visual, and beginner-friendly way. Whether someone is
            researching pet rabbits, learning about show breeds, or comparing
            different rabbit types, this guide makes it easy to search and
            browse.
          </p>

          <p className="text-gray-700">
            Each rabbit breed page will be designed to provide clear information
            about the breed&apos;s appearance, size, personality, grooming needs,
            care level, and common traits. The goal is to make rabbit breed
            research easy for families, hobbyists, and new rabbit owners.
          </p>
        </section>

        <AdSlot label="Homepage Bottom" />

        <section className="rounded-3xl bg-white p-6 md:p-8 border border-emerald-100 shadow-sm space-y-6">
          <h2 className="text-3xl font-extrabold text-emerald-950">
            Rabbit Breed FAQ
          </h2>

          <div>
            <h3 className="font-bold text-emerald-900">
              What rabbit breed is best for beginners?
            </h3>
            <p className="text-gray-700 mt-1">
              Calm, friendly breeds are often easier for beginners, but the best
              choice depends on handling, space, grooming needs, and the amount
              of daily care the rabbit will receive.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-emerald-900">
              Are small rabbit breeds easier to care for?
            </h3>
            <p className="text-gray-700 mt-1">
              Not always. Smaller rabbits may need careful handling and can have
              high energy levels. Coat type, temperament, health, and housing
              setup matter just as much as size.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-emerald-900">
              Do long-haired rabbits need more grooming?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. Long-haired breeds usually need more frequent brushing to
              prevent mats and keep their coat healthy.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-emerald-900">
              Can I search by breed name?
            </h3>
            <p className="text-gray-700 mt-1">
              Yes. Use the search bar at the top of the page to quickly find any
              rabbit breed listed in the guide.
            </p>
          </div>
        </section>

        <footer className="pt-10 pb-6 text-center border-t border-emerald-200 space-y-5">
          <div className="text-2xl font-extrabold text-emerald-950">
            RabbitBreedGuide.com
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-emerald-800 font-semibold">
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="text-sm text-gray-500 max-w-2xl mx-auto">
            Search rabbit breeds, compare traits, and learn about care,
            temperament, size, grooming, and breed history.
          </div>

          <div className="text-xs text-gray-400">
            Rabbit information is provided for general educational purposes.
          </div>
        </footer>
      </main>
    </div>
  );
}
