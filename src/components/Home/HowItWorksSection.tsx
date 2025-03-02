import React from "react";
import Image from "next/image";
import Link from "next/link";

const HowItWorksSection = () => {
  return (
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
  );
};

export default HowItWorksSection;
