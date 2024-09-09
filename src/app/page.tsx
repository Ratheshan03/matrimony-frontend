"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-gray-50 to-red-50">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Welcome to Our Matrimony Site
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Discover your perfect match. Join our community and find your life
        partner today.
      </p>
      <Link
        href="/register"
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
      >
        Get Started
      </Link>
    </section>
  );
}
