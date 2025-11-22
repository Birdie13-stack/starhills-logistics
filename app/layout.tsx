import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../app/globals.css"; // global Tailwind + styles

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-accent text-neutral font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
