import Header from "../components/Header";
import Footer from "../components/Footer";
import "../app/globals.css";

export const metadata = {
  title: "Starhills Logistics — Fast & Reliable Delivery",
  description:
    "Nationwide and international logistics you can trust. Fast delivery, freight forwarding, warehousing and professional support.",
  keywords:
    "logistics, delivery, freight, international shipping, Nigeria shipping, courier, warehousing",

  openGraph: {
    title: "Starhills Logistics — Fast & Reliable Delivery",
    description:
      "Swift delivery across Nigeria & international freight services with reliability at the core.",
    url: "https://your-domain.com",
    siteName: "Starhills Logistics",
    type: "website",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-accent text-neutral font-sans">
        <Header />
        <main className="pt-10 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
