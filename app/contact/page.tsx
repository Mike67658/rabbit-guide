"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ec] text-gray-900 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-2xl space-y-6">
        {/* HEADER */}
        <div className="text-center space-y-3">
          <Link
            href="/"
            className="inline-block text-emerald-700 font-semibold hover:text-emerald-900 transition"
          >
            ← Back to Home
          </Link>

          <h1 className="text-5xl font-bold text-emerald-950">
            Contact
          </h1>

          <p className="text-gray-600">
            Send feedback, corrections, rabbit breed suggestions, or general questions.
          </p>
        </div>

        {/* FORM CARD */}
        <div className="p-6 bg-white border border-emerald-100 rounded-2xl shadow-sm space-y-4">
          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* NAME */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 p-3 rounded-xl bg-[#faf8f2] border border-emerald-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Email (optional)
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 p-3 rounded-xl bg-[#faf8f2] border border-emerald-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="text-sm text-gray-700 font-medium">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell us what you'd like improved or added..."
                className="w-full mt-1 p-3 rounded-xl bg-[#faf8f2] border border-emerald-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white bg-emerald-700 hover:bg-emerald-800 transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div className="p-6 bg-white border border-lime-200 rounded-2xl shadow-sm text-center space-y-2">
          <h2 className="text-xl font-semibold text-lime-800">
            Email Contact
          </h2>

          <p className="text-gray-700">
            You can also contact us directly at:
          </p>

          <div className="text-emerald-800 font-semibold">
            contact@rabbitbreedguide.com
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div className="text-center text-xs text-gray-500">
          We may not be able to respond to every message, but all feedback is appreciated.
        </div>
      </div>
    </div>
  );
}
