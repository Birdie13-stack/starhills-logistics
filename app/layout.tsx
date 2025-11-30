import Header from "../components/Header";
import Footer from "../components/Footer";
import "../app/globals.css";

export const metadata = {
  title: "Starhills Logistics — Fast & Reliable Delivery",
  description: "Efficient cargo and freight transport across the nation",
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
