import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../app/globals.css";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const siteUrl = "https://starhillslogistics.com";
  return {
    metadataBase: new URL(siteUrl),
    title: "Starhills Logistics — Fast & Reliable Delivery",
    description: "Efficient cargo and freight transport across the nation",
    keywords:
      "logistics, delivery, freight, international shipping, Nigeria shipping, courier, warehousing",
    openGraph: {
      title: "Starhills Logistics — Fast & Reliable Delivery",
      description: "Efficient cargo and freight transport across the nation",
      url: siteUrl,
      siteName: "Starhills Logistics",
      type: "website",
    },
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: "./",
    },
  };
}

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
