// import { Geist, Geist_Mono } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { checkAuth } from "@/lib/checkAuth";
import { getCategories } from "@/actions/getCategories";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Luxe eCommerce",
  description:
    "Shop the latest trends with ease! Discover high-quality products at unbeatable prices. Fast shipping, secure checkout, and excellent customer service. Start shopping now!",
};

export default async function RootLayout({ children }) {
  const { isAuthenticated } = await checkAuth();
  const { categories } = await getCategories();
  console.log(categories);
  

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Header isAuthenticated={isAuthenticated} categories={categories} />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
