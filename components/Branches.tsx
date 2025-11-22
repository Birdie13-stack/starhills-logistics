const branches = [
  {
    city: "Lagos",
    address: "Aderonke Plaza, 20, Olowu street, Ikeja, Lagos ",
    phone: "08160120876",
  },
  {
    city: "Port Harcourt",
    address: "5 Nkpogu Road Trans Amadi, PH",
    phone: "",
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
    phone: "",
  },
];

export default function Branches() {
  return (
    <section className="py-20 bg-white text-neutral">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#1a1a1a] text-center mb-12">
          Our Branches
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="border-l-6 border-[#0055a4] rounded-lg p-6 bg-[#f4f7fa] transition-all duration-300 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-[#0055a4] mb-2">
                {branch.city}
              </h3>
              <p className="text-md mb-3">📍 {branch.address}</p>
              <p className="font-medium text-[#0a84ff]">📞 {branch.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
