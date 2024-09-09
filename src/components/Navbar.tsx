"use client";

import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link
          href="/"
          className="text-xl font-semibold text-red-500 hover:underline"
          aria-label="Matrimony Home"
        >
          Matrimony Site
        </Link>
        <nav className="flex space-x-4" aria-label="Main Navigation">
          <Link href="/" className="hover:underline text-gray-700">
            Home
          </Link>
          <Link href="/register" className="hover:underline text-gray-700">
            Register
          </Link>
          <Link href="/search" className="hover:underline text-gray-700">
            Search
          </Link>
          <Link href="/subscriptions" className="hover:underline text-gray-700">
            Subscriptions
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
