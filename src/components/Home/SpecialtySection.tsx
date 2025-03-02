import React from "react";
import Image from "next/image";

const SpecialtySection = () => {
  return (
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
          your journey seamless, personalized, and secure. Explore what sets us
          apart.
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
  );
};

export default SpecialtySection;
