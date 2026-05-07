import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ec] text-gray-900 flex items-center justify-center px-6 py-10">
      <div className="max-w-3xl w-full space-y-6">
        <div className="text-center space-y-3">
          <Link
            href="/"
            className="inline-block text-emerald-700 font-semibold hover:text-emerald-900 transition"
          >
            ← Back to Home
          </Link>

          <h1 className="text-5xl font-bold text-emerald-950">
            About RabbitBreedGuide.com
          </h1>

          <p className="text-gray-600">
            A simple visual guide for exploring rabbit breeds, traits, care
            needs, and personalities.
          </p>
        </div>

        <div className="p-6 bg-white border border-emerald-100 rounded-2xl space-y-4 shadow-sm">
          <h2 className="text-xl font-semibold text-emerald-900">
            What this website does
          </h2>

          <p className="text-gray-700">
            RabbitBreedGuide.com helps readers quickly search and browse rabbit
            breeds in one easy place. Each breed guide is designed to explain
            appearance, size, temperament, coat type, grooming needs, and
            general care information in a beginner-friendly way.
          </p>

          <p className="text-gray-700">
            The goal is simple: make rabbit breed research visual, fast, helpful,
            and easy to understand for families, hobbyists, students, and new
            rabbit owners.
          </p>
        </div>

        <div className="p-6 bg-white border border-lime-200 rounded-2xl space-y-3 shadow-sm">
          <h2 className="text-xl font-semibold text-lime-800">
            Key Features
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Search rabbit breeds instantly</li>
            <li>Browse visual breed cards with images</li>
            <li>Learn about size, temperament, and care needs</li>
            <li>Find beginner-friendly breed information</li>
            <li>No login required</li>
          </ul>
        </div>

        <div className="p-6 bg-white border border-emerald-100 rounded-2xl space-y-3 shadow-sm">
          <h2 className="text-xl font-semibold text-emerald-900">
            Information Purpose
          </h2>

          <p className="text-gray-700">
            The information on this website is provided for general educational
            purposes. Rabbit care needs can vary by individual animal, health,
            age, environment, and breeder background.
          </p>

          <p className="text-gray-500 text-sm">
            For health, diet, breeding, or medical concerns, always speak with a
            qualified veterinarian or rabbit care professional.
          </p>
        </div>

        <div className="text-center text-xs text-gray-500 pt-6">
          Built for rabbit lovers, new owners, families, and curious readers.
        </div>
      </div>
    </div>
  );
}
