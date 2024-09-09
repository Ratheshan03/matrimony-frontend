"use client";

import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
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
        <main className="flex-grow container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
