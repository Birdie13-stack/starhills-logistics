const branches = [
  {
    city: "Lagos",
    address: "Aderonke Plaza, 20, Olowu street, Ikeja, Lagos ",
    phone: "08160120876",
  },
  {
    city: "Port Harcourt",
    address: "5 Nkpogu Road Trans Amadi, PH",
    phone: "08160577628",
  },
  {
    city: "Asaba",
    address:
      "A4 Dan Alex plaza, near road safety corps, Asaba-Benin Expressway, Asaba, Delta state.",
    phone: "08057719294",
  },
  {
    city: "Ibadan",
    address: "Yidi bus stop, Elebu express road, Ibadan, Oyo state",
    phone: "08079013662",
  },
  {
    city: "Abuja",
    address: "Plot 119 Danladi Kifasi Close, Utako FCT Abuja",
    phone: "08058479185",
  },
  {
    city: "Onne, Rivers",
    address: "105 harbor Rd, Onne rivers state",
    phone: "08160577628",
  },
];

export default function Branches() {
  return (
    <section className="py-20 bg-white text-neutral">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#1a1a1a] text-center mb-12">
          Our Branches
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          role="list"
        >
          {branches.map((branch) => (
            <article
              key={branch.city}
              className="relative border-l-4 border-[#0055a4] rounded-lg p-6 transition-all duration-300 shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 overflow-hidden group"
              role="listitem"
            >
              <div className="absolute inset-0 bg-[#0055a4] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-lg"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-[#0055a4] group-hover:text-white transition-colors duration-500 mb-2">
                  {branch.city}
                </h3>
                <p className="text-md mb-3 text-gray-700 group-hover:text-white transition-colors duration-500">
                  <span aria-hidden="true">📍 </span>
                  <span className="sr-only">Address: </span>
                  {branch.address}
                </p>
                <p className="font-medium text-[#0a84ff] group-hover:text-white transition-colors duration-500">
                  <span aria-hidden="true">📞 </span>
                  <a
                    href={`tel:${branch.phone.replace(/\s+/g, "")}`}
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
                    aria-label={`Call ${branch.city} branch at ${branch.phone}`}
                  >
                    {branch.phone}
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
