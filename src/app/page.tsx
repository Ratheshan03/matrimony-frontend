"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroSection from "@/components/Home/HeroSection";
import AboutUsSection from "@/components/Home/AboutUsSection";


export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection/>

      {/* About Us Section */}
      <AboutUsSection/>

      {/* Specialty Section */}
      <section className="relative h-screen px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#eeeeee] via-[#f9f9f9] to-[#ffffff] rounded-t-3xl overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-to-r from-[#ffefd5] to-[#ffd1dc] opacity-30 absolute top-8 right-8 w-[300px] h-[300px] rounded-full filter blur-3xl"></div>
          <div className="bg-gradient-to-b from-[#cce5ff] to-[#e6f7ff] opacity-40 absolute bottom-16 left-16 w-[400px] h-[400px] rounded-full filter blur-2xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 container mx-auto text-center h-full flex flex-col items-center justify-center">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Our Specialty
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We pride ourselves on offering innovative features designed to make
            your journey seamless, personalized, and secure. Explore what sets
            us apart.
          </p>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Personalized Matchmaking",
                description:
                  "Experience tailored recommendations designed specifically for you to find the perfect match.",
                icon: "/images/couple.png", // Placeholder for icon
              },
              {
                title: "Advanced Search Filters",
                description:
                  "Filter through profiles with precision using advanced search options that cater to your preferences.",
                icon: "/images/search1.png", // Placeholder for icon
              },
              {
                title: "Verified Profiles",
                description:
                  "Interact with real, verified profiles to ensure authenticity and safety during your search.",
                icon: "/images/user.png", // Placeholder for icon
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500 group relative"
              >
                {/* Gradient Accent Circle */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-primary to-secondary p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-12 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-tr from-[#fffbf0] via-[#ffe4e1] to-[#dfeffd] rounded-t-3xl overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-to-br from-[#ffd1dc] to-[#ffab73] opacity-20 absolute top-8 left-16 w-[450px] h-[450px] rounded-full filter blur-3xl"></div>
          <div className="bg-gradient-to-bl from-[#cce5ff] to-[#a8d1ff] opacity-25 absolute bottom-16 right-16 w-[500px] h-[500px] rounded-full filter blur-2xl"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto text-center relative z-20">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-12 tracking-wide">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Real people. Real connections. See how our platform has changed
            lives and brought people closer together.
          </p>

          {/* Story Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((story) => (
              <div
                key={story}
                className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500 group relative overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#fffbf0] via-[#ffe4e1] to-[#dfeffd] opacity-20 -z-10"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full filter blur-2xl opacity-50"></div>

                <div className="relative z-10">
                  {/* User Image */}
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 shadow-lg">
                    <Image
                      src={`/images/story-${story}.jpg`} // Placeholder profile pics
                      alt={`Success Story ${story}`}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>

                  {/* Story Details */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    User {story}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    “This platform changed my life. I found the most amazing
                    person, and we couldnt be happier.”
                  </p>

                  <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all duration-300">
                    Read Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#f0f9ff] via-[#eaf4ff] to-[#f7d9ff] rounded-t-3xl overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-to-tr from-[#ffab73] to-[#ffdfba] opacity-25 absolute top-8 left-12 w-[300px] h-[300px] rounded-full filter blur-3xl"></div>
          <div className="bg-gradient-to-bl from-[#a8d1ff] to-[#cce5ff] opacity-30 absolute bottom-12 right-12 w-[350px] h-[350px] rounded-full filter blur-3xl"></div>
        </div>

        {/* Header */}
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-wide">
            Meet New People
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check out a preview of our most popular profiles. Log in to discover
            even more details and connect with amazing people!
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((profile) => (
            <div
              key={profile}
              className="relative bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500 group overflow-hidden"
            >
              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Profile Image */}
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 shadow-lg">
                <Image
                  src={`/images/profile-${profile}.png`} // Replace with actual profile pics
                  alt={`Profile ${profile}`}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              {/* Profile Details */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-2">
                  User {profile}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Age: {20 + profile} | Occupation: Designer
                </p>
              </div>

              {/* CTA Overlay */}
              <div className="absolute inset-x-0 bottom-0 py-2 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-gray-200">
                  Log in to see more details!
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/login"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:opacity-90  hover:text-purple-600  transition-all duration-300"
          >
            Log in to Explore More Profiles
          </Link>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#ff9a8b] rounded-t-3xl overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-to-tr from-[#ffb6b9] to-[#fae3d9] opacity-20 absolute top-12 left-10 w-[400px] h-[400px] rounded-full filter blur-3xl"></div>
          <div className="bg-gradient-to-bl from-[#a8d1ff] to-[#ffdfba] opacity-30 absolute bottom-12 right-12 w-[500px] h-[500px] rounded-full filter blur-3xl"></div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wide mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Have questions? We’ve got answers. Here’s everything you need to
            know!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="container mx-auto space-y-6 max-w-4xl">
          {[
            {
              question: "How do I register?",
              answer:
                "Click the register button and fill in the required details. It’s quick, easy, and free!",
            },
            {
              question: "Is my data secure?",
              answer:
                "Yes, your data is completely secure with us. We prioritize your privacy and use industry-leading security measures.",
            },
            {
              question: "How to find matches?",
              answer:
                "Use our advanced search filters to discover profiles that align with your preferences.",
            },
            {
              question: "What are the membership plans?",
              answer:
                "We offer flexible membership plans. Enjoy basic features for free, or upgrade for premium benefits.",
            },
            {
              question: "How can I contact support?",
              answer:
                "Reach out to us anytime via the contact page or call our 24/7 helpline.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <details className="group">
                <summary className="cursor-pointer text-lg font-semibold text-primary flex justify-between items-center">
                  <span className="flex items-center gap-3">
                    <span className="bg-gradient-to-r from-blue-400 to-pink-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span className="text-primary capitalize p-3">
                      {item.question}
                    </span>
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transform transition-transform duration-300">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-800 italic mt-4 pl-11">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-md hover:opacity-90 hover:text-purple-600 transition-all duration-300"
          >
            Still have questions? Contact Us
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#f0f9ff] via-[#f7f9fa] to-[#eff6ff] rounded-t-3xl overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-to-br from-[#a8d1ff] to-[#6a98e0] opacity-20 absolute top-8 left-16 w-[450px] h-[450px] rounded-full filter blur-3xl"></div>
          <div className="bg-gradient-to-bl from-[#d5bdfc] to-[#a686f9] opacity-20 absolute bottom-16 right-16 w-[500px] h-[500px] rounded-full filter blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto text-center relative z-20">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-12 tracking-wide">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Finding your perfect match is easy with our simple 3-step process.
            Start your journey today!
          </p>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 hidden md:block"></div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: 1,
                  title: "Create Your Profile",
                  description:
                    "Sign up and build your detailed profile showcasing your personality, interests, and preferences.",
                  icon: "👤",
                },
                {
                  step: 2,
                  title: "Discover Matches",
                  description:
                    "Browse through curated matches based on your compatibility and preferences.",
                  icon: "🔍",
                },
                {
                  step: 3,
                  title: "Connect & Meet",
                  description:
                    "Start meaningful conversations and take the next step towards finding love.",
                  icon: "💕",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {/* Step Circle */}
                  <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-xl z-20 relative border-4 border-white">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl">
                      {item.icon}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="bg-white rounded-xl shadow-lg p-8 mt-6 relative z-10 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#fffaf0] via-[#fff5f5] to-[#faf5ff] rounded-t-3xl overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-to-br from-[#ffab73] to-[#ffdfba] opacity-20 absolute top-8 left-16 w-[450px] h-[450px] rounded-full filter blur-3xl"></div>
          <div className="bg-gradient-to-bl from-[#d5bdfc] to-[#a686f9] opacity-20 absolute bottom-16 right-16 w-[500px] h-[500px] rounded-full filter blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto text-center relative z-20">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-12 tracking-wide">
            Membership Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
            Choose the plan that suits your needs and start your journey to find
            your perfect match.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Free",
                price: "0",
                features: [
                  "Create a profile",
                  "Browse profiles",
                  "Limited search filters",
                  "View public photos",
                  "5 likes per day",
                ],
                isPopular: false,
                cta: "Get Started",
              },
              {
                name: "Premium",
                price: "29.99",
                features: [
                  "All Free features",
                  "Advanced search filters",
                  "Send unlimited messages",
                  "View all photos",
                  "See who viewed your profile",
                  "Profile highlighting",
                  "Priority customer support",
                ],
                isPopular: true,
                cta: "Go Premium",
              },
              {
                name: "VIP",
                price: "49.99",
                features: [
                  "All Premium features",
                  "Personalized matchmaking",
                  "Profile boosting",
                  "Video calling",
                  "Read receipts",
                  "Exclusive events access",
                  "Dedicated relationship advisor",
                ],
                isPopular: false,
                cta: "Get VIP Access",
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                  plan.isPopular ? "ring-4 ring-primary" : ""
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-bl-lg font-semibold">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-center justify-center">
                    <span className="text-2xl font-semibold text-gray-500">
                      $
                    </span>
                    <span className="text-5xl font-bold text-gray-800 mx-2">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>

                {/* Plan Features */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="mr-3 text-primary">✓</div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 rounded-full font-bold text-lg shadow-lg ${
                      plan.isPopular
                        ? "bg-gradient-to-r from-primary to-secondary text-white"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    } transition-all duration-300`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-primary to-secondary rounded-t-3xl overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-white opacity-10 absolute top-8 left-16 w-[450px] h-[450px] rounded-full filter blur-3xl"></div>
          <div className="bg-white opacity-10 absolute bottom-16 right-16 w-[500px] h-[500px] rounded-full filter blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto text-center relative z-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-extrabold text-white mb-8 tracking-wide">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-xl text-white opacity-90 mb-10">
              Join thousands of couples who have found love on our platform.
              Your journey to a meaningful relationship starts now.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/register"
                className="px-10 py-4 bg-white text-primary font-bold rounded-full shadow-xl hover:bg-opacity-90 transform transition-all duration-300 hover:scale-105"
              >
                Get Started Now
              </Link>
              <Link
                href="/success-stories"
                className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:bg-opacity-10 transform transition-all duration-300 hover:scale-105"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
