import { Boxes, Truck } from "lucide-react";
import { BiSupport } from "react-icons/bi";
import { FaWarehouse, FaGlobe, FaMapMarkedAlt } from "react-icons/fa";

const services = [
  {
    name: "Freight",
    icon: <Truck size={40} aria-hidden="true" />,
    description: "Efficient cargo and freight transport across the nation.",
  },
  {
    name: "Warehousing",
    icon: <FaWarehouse size={40} aria-hidden="true" />,
    description:
      "Secure storage facilities with inventory management and distribution services.",
  },
  {
    name: "Import/Export",
    icon: <FaGlobe size={40} aria-hidden="true" />,
    description:
      "Reliable import/export services for personal and commercial needs.",
  },
  {
    name: "Logistics",
    icon: <Boxes size={40} aria-hidden="true" />,
    description: "Nationwide delivery and supply chain management.",
  },
  {
    name: "Support",
    icon: <BiSupport size={40} aria-hidden="true" />,
    description:
      "24/7 customer support to assist with any inquiries or issues.",
  },
  {
    name: "Tracking",
    icon: <FaMapMarkedAlt size={40} aria-hidden="true" />,
    description:
      "Track your shipments in real-time with instant updates and notifications.",
  },
];

export default function Services() {
  return (
    <section
      className="py-20 bg-[#f4f7fa] text-neutral"
      role="region"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2
          className="text-4xl font-bold text-center mb-12"
          id="services-heading"
        >
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <article
              key={index}
              tabIndex={0}
              className="relative bg-white text-[#0055a4] p-8 rounded-lg overflow-hidden group h-48 flex flex-col items-center justify-center transition-all duration-300 outline-none
              hover:bg-[#0055a4] hover:text-white 
              focus:bg-[#0055a4] focus:text-white
              focus:ring-4 focus:ring-[#0055a4]/30 focus:ring-offset-2 focus:ring-offset-white"
              aria-label={`${service.name} service`}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center transition-colors duration-300 group-hover:bg-[#0055a4] group-hover:text-white p-4 rounded-lg">
                {service.icon}
                <h3 className="mt-4 text-xl font-semibold">{service.name}</h3>
                <p className="text-center mt-2">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
