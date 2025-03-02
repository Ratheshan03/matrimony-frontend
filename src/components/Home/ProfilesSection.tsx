import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProfilesSection = () => {
  return (
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
          className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:opacity-90 hover:text-purple-600 transition-all duration-300"
        >
          Log in to Explore More Profiles
        </Link>
      </div>
    </section>
  );
};

export default ProfilesSection;
