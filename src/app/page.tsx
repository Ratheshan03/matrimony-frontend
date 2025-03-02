"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import HeroSection from "@/components/Home/HeroSection";
import AboutUsSection from "@/components/Home/AboutUsSection";
import SpecialtySection from "@/components/Home/SpecialtySection";
import SuccessStories from "@/components/Home/SuccessStoriesSection";
import ProfilesSection from "@/components/Home/ProfilesSection";
import FaqSection from "@/components/Home/FaqSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import MembershipPlansSection from "@/components/Home/MembershipPlansSection";
import FloralBackground from "@/components/FloralBackground";

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-gray-50 relative">
      {/* Floral Background */}
      <FloralBackground />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Divider */}
        <div className="w-full h-24 bg-gradient-to-b from-transparent to-gray-50 -mt-24 relative z-10"></div>

        {/* About Us Section */}
        <AboutUsSection />

        {/* Specialty Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 transform -skew-y-3"></div>
          <SpecialtySection />
        </div>

        {/* Success Stories Section */}
        <div className="relative py-16">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
          <SuccessStories />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </div>

        {/* Profiles Section */}
        <div className="relative bg-gradient-to-b from-gray-50 to-white py-16">
          <ProfilesSection />
        </div>

        {/* How It Works Section */}
        <div className="relative overflow-hidden">
          <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-primary/10"></div>
          <div className="absolute -right-32 bottom-1/4 w-64 h-64 rounded-full bg-secondary/10"></div>
          <HowItWorksSection />
        </div>

        {/* Membership Plans Section */}
        <div className="relative bg-gradient-to-b from-white to-gray-50 py-16">
          <MembershipPlansSection />
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="relative overflow-hidden bg-gray-50">
          <div className="absolute -left-16 bottom-1/3 w-32 h-32 rounded-full bg-primary/10"></div>
          <div className="absolute -right-16 top-1/3 w-32 h-32 rounded-full bg-secondary/10"></div>
          <FaqSection />
        </div>

        {/* Final Call to Action Section */}
        <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-primary to-secondary overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="bg-white opacity-10 absolute top-8 left-16 w-96 h-96 rounded-full filter blur-3xl"></div>
            <div className="bg-white opacity-10 absolute bottom-16 right-16 w-96 h-96 rounded-full filter blur-3xl"></div>
            <div className="absolute inset-0 bg-[url('/patterns/hearts-pattern.svg')] bg-repeat opacity-5"></div>
          </div>

          {/* Content Container */}
          <div className="container mx-auto text-center relative z-20">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-wide">
                Ready to Find Your Perfect Match?
              </h2>
              <p className="text-lg md:text-xl text-white opacity-90 mb-10">
                Join thousands of couples who have found love on our platform.
                Your journey to a meaningful relationship starts now.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/register"
                  className="group px-10 py-4 bg-white text-primary font-bold rounded-full shadow-xl hover:bg-opacity-95 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Get Started Now
                  <span className="inline-block ml-2 transform translate-x-0 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
                <Link
                  href="/success-stories"
                  className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:bg-opacity-10 transition-all duration-300 hover:scale-105"
                >
                  View Success Stories
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
