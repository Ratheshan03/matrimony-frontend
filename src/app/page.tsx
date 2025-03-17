"use client";

import Link from "next/link";
import HeroSection from "@/components/Home/HeroSection";
import AboutUsSection from "@/components/Home/AboutUsSection";
import SpecialtySection from "@/components/Home/SpecialtySection";
import SuccessStories from "@/components/Home/SuccessStoriesSection";
import ProfilesSection from "@/components/Home/ProfilesSection";
import FaqSection from "@/components/Home/FaqSection";
import HowItWorksSection from "@/components/Home/HowItWorksSection";
import MembershipPlansSection from "@/components/Home/MembershipPlansSection";
import FloralBackground from "@/components/FloralBackground";
import FinalCallToAction from "@/components/Home/FinalCtaSection";

export default function HomePage() {
  return (
    <div className="overflow-hidden bg-white relative">
      {/* Floral Background */}
      {/* <FloralBackground /> */}

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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/70 transform -skew-y-3"></div>
          <SpecialtySection />
        </div>

        {/* Success Stories Section */}
        <div className="relative py-16">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white"></div>
          <SuccessStories />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-transparent to-white"></div>
        </div>

        {/* Profiles Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-primary/60 transform -skew-y-3"></div>
          <ProfilesSection />
        </div>

        {/* How It Works Section */}
        <div className="relative overflow-hidden">
          <div className="absolute -left-32 top-1/4 w-64 h-64 rounded-full bg-primary/10 opacity-30"></div>
          <div className="absolute -right-32 bottom-1/4 w-64 h-64 rounded-full bg-secondary/10 opacity-30"></div>
          <HowItWorksSection />
        </div>

        {/* Membership Plans Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-primary/60 transform -skew-y-3"></div>
          <MembershipPlansSection />
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="relative overflow-hidden">
          <div className="absolute -left-16 bottom-1/3 w-32 h-32 rounded-full bg-primary/10"></div>
          <div className="absolute -right-16 top-1/3 w-32 h-32 rounded-full bg-secondary/10"></div>
          <FaqSection />
        </div>

        {/* Final Call to Action Section */}
        <FinalCallToAction />
      </div>
    </div>
  );
}
