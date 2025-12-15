import React from "react";

export default function DeleteAccountPage() {
  return (
    <section className="w-full min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
      <div className="w-full bg-linear-to-r from-[#0055a4] to-[#003d7a] px-4 py-20 mb-12 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">
            Account & Data Deletion
          </h1>
        </div>
      </div>

      <div className="bg-white max-w-5xl mx-auto px-8 py-12 rounded-2xl shadow-xl mb-12">
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            How to Request Account Deletion
          </h2>
          <p className="text-gray-700 mb-4">
            To request deletion of your account and associated data:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              Email us at{" "}
              <a
                href="mailto:starhillslogistics@gmail.com"
                className="text-[#0055a4] hover:underline"
              >
                starhillslogistics@gmail.com
              </a>{" "}
              with the subject line &quot;Account Deletion Request&quot;
            </li>
            <li>
              Include your registered email address and phone number for
              verification
            </li>
            <li>
              We will confirm your identity and process your request within 30
              days
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            What Data We Delete
          </h2>
          <p className="text-gray-700 mb-4">
            Upon verification of your deletion request, we will permanently
            delete:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Your account credentials and login information</li>
            <li>Personal details (name, email, phone number, address)</li>
            <li>Shipment history and transaction records</li>
            <li>Device and location data</li>
            <li>Communication preferences and history</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Data Retention for Legal Purposes
          </h2>
          <p className="text-gray-700 mb-4">
            In some cases, we may be required to retain certain data for legal,
            regulatory, or security purposes:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              Financial records may be retained for tax and accounting purposes
              as required by law (typically 7 years)
            </li>
            <li>
              Data necessary to comply with legal obligations, resolve disputes,
              or enforce our agreements
            </li>
            <li>
              Anonymized data that cannot be used to identify you may be
              retained for analytics and service improvement
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            We will inform you if any data must be retained and for how long.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Deletion Timeline
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">Within 30 days:</span> We will
              verify your identity and confirm your deletion request
            </li>
            <li>
              <span className="font-semibold">Within 60 days:</span> All
              deletable personal data will be permanently removed from our
              active systems
            </li>
            <li>
              <span className="font-semibold">Within 90 days:</span> Data will
              be purged from backup systems and archives
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Data Sharing and Third Parties
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If your data has been shared with third-party service providers
            (logistics partners, payment processors), we will notify them of
            your deletion request. However, we cannot control their data
            retention policies. We recommend contacting them directly if you
            wish to request deletion from their systems as well.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Important Considerations
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <span className="font-semibold">
                Account deletion is permanent:
              </span>{" "}
              Once deleted, you will lose access to all services, shipment
              history, and account information
            </li>
            <li>
              <span className="font-semibold">Outstanding obligations:</span>{" "}
              You must settle any outstanding payments or pending shipments
              before deletion
            </li>
            <li>
              <span className="font-semibold">No recovery:</span> Deleted data
              cannot be recovered. Please download any important information
              before requesting deletion
            </li>
          </ul>
        </section>

        <section className="mb-4">
          <h2 className="text-3xl font-bold text-[#0055a4] mb-4 border-b-2 border-blue-100 pb-2">
            Questions or Concerns
          </h2>
          <p className="text-gray-700 mb-4">
            If you have questions about data deletion or your privacy rights,
            please contact us:
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
