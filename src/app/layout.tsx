"use client";

import type { Metadata } from "next";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "../styles/globals.css";

const metadata: Metadata = {
  title: "Matrimony Site",
  description: "Find your perfect match on our matrimony platform.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-gray-100 via-white to-red-100 min-h-screen flex flex-col">
        <Navbar />
        {/* Removed container and unnecessary padding to avoid extra margins */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
