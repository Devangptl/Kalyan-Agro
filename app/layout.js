import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Shree Peanut Traders Pvt. Ltd. | Premium Groundnut Supplier in India",
    template: "%s | Shree Peanut Traders Pvt. Ltd.",
  },
  description:
    "India's trusted groundnut trading company. We buy and sell premium quality raw groundnuts, shelled peanuts, and groundnut oil seeds. Bulk supply available.",
  keywords: [
    "groundnuts",
    "peanuts",
    "groundnut supplier",
    "peanut trader",
    "bulk groundnuts India",
    "raw groundnuts",
    "shelled groundnuts",
    "groundnut oil seeds",
    "agriculture India",
    "Rajkot groundnuts",
  ],
  authors: [{ name: "Shree Peanut Traders Pvt. Ltd." }],
  openGraph: {
    title: "Shree Peanut Traders Pvt. Ltd. | Premium Groundnut Supplier in India",
    description:
      "India's trusted groundnut trading company. Premium quality peanuts, fair pricing, and bulk supply.",
    type: "website",
    locale: "en_IN",
    siteName: "Shree Peanut Traders",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
