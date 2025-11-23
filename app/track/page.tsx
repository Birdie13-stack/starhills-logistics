import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className="w-11/12 mx-auto py-20 flex flex-col items-center text-center gap-10">
      <div className="w-full max-w-2xl h-64 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200 overflow-hidden">
        <Image
          src="/images/track.webp"
          width={500}
          height={300}
          alt="Placeholder map with a pin marker."
          className="object-contain"
        />
      </div>

      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Track Your Shipment
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          Our shipment tracking feature is currently being upgraded for better
          accuracy and speed. Soon, you’ll be able to monitor your deliveries in
          real-time.
        </p>

        <p className="text-gray-700 font-semibold">
          For now, please contact our support team for any shipment updates.
        </p>

        <div className="mt-6">
          <a
            href="mailto:info@starhillslogistics.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}

export default page;
