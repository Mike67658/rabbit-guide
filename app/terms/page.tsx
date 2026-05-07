import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ec] text-gray-900 px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* HEADER */}
        <div className="text-center space-y-3">
          <Link
            href="/"
            className="inline-block text-emerald-700 font-semibold hover:text-emerald-900 transition"
          >
            ← Back to Home
          </Link>

          <h1 className="text-5xl font-bold text-emerald-950">
            Terms of Use
          </h1>

          <p className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* CONTENT */}
        <div className="bg-white border border-emerald-100 rounded-3xl p-8 shadow-sm space-y-6 text-gray-700 leading-relaxed">
          <p>
            By using RabbitBreedGuide.com, you agree to the following terms and
            conditions. If you do not agree with these terms, please do not use
            the website.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-2">
              Educational Information
            </h2>

            <p>
              RabbitBreedGuide.com provides general educational information about
              rabbit breeds, rabbit care, grooming, temperament, and related
              topics. Information on this website should not replace professional
              veterinary advice or expert consultation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-2">
              No Guarantees
            </h2>

            <p>
              While we aim to provide accurate and useful information, we do not
              guarantee the completeness, reliability, or accuracy of all
              content. Rabbit breeds and care recommendations may vary between
              breeders, veterinarians, and regions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-2">
              Website Availability
            </h2>

            <p>
              We may update, modify, or temporarily remove parts of the website
              at any time without notice. We are not responsible for temporary
              outages or interruptions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-2">
              External Links
            </h2>

            <p>
              RabbitBreedGuide.com may include links to external websites or
              services. We are not responsible for the content, policies, or
              practices of third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-2">
              Changes to These Terms
            </h2>

            <p>
              These terms may be updated over time as the website grows and new
              features are added. Continued use of the website means you accept
              any updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-emerald-900 mb-2">
              Contact
            </h2>

            <p>
              If you have questions regarding these terms, please visit the
              contact page.
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="pt-2 text-xs text-gray-500 text-center">
          RabbitBreedGuide.com is intended for informational and educational use only.
        </div>
      </div>
    </div>
  );
}
