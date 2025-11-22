const AboutPage = () => {
  return (
    <section className="py-20 px-6 bg-[#f4f7fa] text-neutral">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-[#0055A4] mb-10">
          About Starhills Logistics
        </h1>

        <p className="text-lg leading-relaxed text-center mb-16 text-neutral/80">
          We are a cargo, freight, and logistics company helping people and
          businesses move goods easily across Nigeria and around the world. We
          make importing, exporting, warehousing, and nationwide delivery
          smooth, reliable, and centered on what matters most - our customers.
          Starhills Logistics was founded with a clear mission: to make shipping
          simple, reliable, and stress-free. We operate across major Nigerian
          cities and partner with trusted global freight networks to ensure
          every shipment arrives safely and on time.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-2xl font-bold text-[#0055A4] mb-4">
              Our Mission
            </h3>
            <p className="text-neutral/80 leading-relaxed">
              To provide fast, secure and reliable logistic services through
              technology-driven solutions that ensure every delivery is smooth,
              trackable, and stress-free for both businesses and individuals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-2xl font-bold text-[#0055A4] mb-4">
              Our Vision
            </h3>
            <p className="text-neutral/80 leading-relaxed">
              To become Africa’s most trusted and efficient delivery partner,
              redefining logistics with innovation, transparency, and
              customer-first excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
