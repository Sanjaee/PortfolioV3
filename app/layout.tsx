import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./Navbar.css";
import StarCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Contact from "@/components/main/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio V3",
  description: "Portfolio update with Nextjs and Tailwindcss",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarCanvas />
        <Navbar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
