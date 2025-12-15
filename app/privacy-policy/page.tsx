import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full min-h-screen ">
      <div className="w-full bg-linear-to-r from-[#0055a4] to-[#003d7a] px-4 py-20 mb-12 text-center ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-blue-100 text-lg">
            Your privacy is important to us. Last updated: December 15, 2025
          </p>
        </div>
      </div>

      <div className="bg-white max-w-5xl mx-auto px-8 py-12 rounded-2xl shadow-xl mb-12">
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We value your privacy. This policy explains how we collect, use, and
            protect your personal data.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Personal details: name, phone number, email, address</li>
            <li>Location and device data (if permitted)</li>
            <li>Shipment and transaction records</li>
            <li>IP address and browser information for security</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            How We Use Your Data
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>To manage your account and provide logistics services</li>
            <li>To contact you with shipment updates, alerts, and support</li>
            <li>For service improvement, security, and analytics</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Sharing of Information
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>We do not sell your data.</li>
            <li>
              We may share necessary data with:
              <ul className="list-decimal pl-6 mt-2 space-y-2">
                <li>Logistics partners (for pickup/delivery)</li>
                <li>Service providers (for payment and communication)</li>
                <li>Legal or regulatory authorities, if required by law</li>
              </ul>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Data Protection
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              We use encryption, firewalls, and secure servers to protect your
              data.
            </li>
            <li>
              Access to your data is limited to authorized personnel only.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Your Rights
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              You can request access to or deletion of your personal data.
            </li>
            <li>You may opt out of marketing communications at any time.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies to enhance user experience. You can manage cookie
            preferences in your browser settings.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Policy Updates
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this policy as required. We&apos;ll notify you through
            the app or email when significant changes are made.
          </p>
        </section>

        <section className="mb-4">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions or concerns, please contact us at:
          </p>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0055a4]">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="font-semibold text-gray-800">Email:</span>

                <a
                  href="mailto:starhillslogistics@gmail.com"
                  className="text-[#0055a4] hover:text-[#003d7a] hover:underline transition-colors"
                >
                  starhillslogistics@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-semibold text-gray-800">Phone:</span>

                <a
                  href="tel:+2348160120876"
                  className="text-[#0055a4] hover:text-[#003d7a] hover:underline transition-colors"
                >
                  +234 816 012 0876
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
}
