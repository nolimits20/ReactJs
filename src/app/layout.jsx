import { Alegreya_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const aleg = Alegreya_Sans({ subsets: ["latin"], weight:['400'] });

export const metadata = {
  title: "ecommerce",
  description: "Fundamentals of React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={aleg.className}>
        <Navbar />
        <div className="text-3xl min-h-[80vh]">
          <h1>Hello Everyone</h1>
          {children}
        </div>
        <Footer />
      </body>

    </html>
    
  );
}
