import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ec] text-gray-900 flex items-center justify-center px-6 py-10">
      <div className="max-w-3xl w-full p-8 bg-white border border-emerald-100 rounded-3xl shadow-sm space-y-6">
        <div className="text-center space-y-3">
          <Link
            href="/"
            className="inline-block text-emerald-700 font-semibold hover:text-emerald-900 transition"
          >
            ← Back to Home
          </Link>

          <h1 className="text-5xl font-bold text-emerald-950">
            Privacy Policy
          </h1>

          <p className="text-gray-600">
            Your privacy matters to us.
          </p>
        </div>

        <div className="space-y-5 text-gray-700 leading-relaxed">
          <p>
            RabbitBreedGuide.com is designed to provide educational rabbit breed
            information in a simple and accessible format. This website does not
            require visitors to create accounts to browse content.
          </p>

          <p>
            We may use standard analytics tools to understand general website
            traffic, improve performance, and better understand which pages are
            most useful to visitors. This information is anonymous and is not
            used to personally identify users.
          </p>

          <p>
            Advertising partners and third-party services may use cookies or
            similar technologies to display ads, measure ad performance, and
            improve user experience.
          </p>

          <p>
            RabbitBreedGuide.com may contain links to third-party websites or
            services. We are not responsible for the privacy practices or
            content of external sites.
          </p>

          <p>
            This website is intended for informational and educational purposes
            only and does not knowingly collect sensitive personal information
            from visitors.
          </p>
        </div>

        <div className="p-5 bg-[#faf8f2] border border-lime-200 rounded-2xl">
          <h2 className="text-xl font-semibold text-lime-800 mb-2">
            Cookies & Advertising
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Like many websites, RabbitBreedGuide.com may use cookies and
            advertising technologies to improve functionality and support the
            operation of the website through advertising revenue.
          </p>
        </div>

        <div className="text-sm text-gray-500 pt-2">
          This privacy policy may be updated over time as the website grows and
          new features are added.
        </div>
      </div>
    </div>
  );
}
