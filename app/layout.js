// import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ecommerce Website",
  description:
    "Shop the latest trends with ease! Discover high-quality products at unbeatable prices. Fast shipping, secure checkout, and excellent customer service. Start shopping now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
