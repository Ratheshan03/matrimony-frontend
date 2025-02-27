import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const AboutUsSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen bg-gradient-to-br from-[#f0f4f8] via-[#f9f9ff] to-[#eceef4] overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #f0f4f8, #f9f9ff ${Math.max(
          0,
          100 - scrollY * 0.1
        )}%, #eceef4)`,
        transition: "background 0.5s ease-in-out",
      }}
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div
          className="absolute top-10 left-20 w-[600px] h-[600px] bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full blur-[120px] opacity-50"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 right-16 w-[400px] h-[400px] bg-gradient-to-br from-blue-300 to-green-400 rounded-full blur-[80px] opacity-40"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/2 left-1/3 w-[100px] h-[100px] bg-gradient-to-br from-orange-300 to-red-400 rounded-full blur-[50px] opacity-60"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 lg:px-16 py-20 space-y-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image Collage */}
          <div className="relative grid grid-cols-2 gap-6 lg:gap-10">
            {/* Main Image */}
            <div className="col-span-2 relative">
              <Image
                src="/images/aboutus.jpg"
                alt="Main About Us"
                width={400}
                height={400}
                className="rounded-3xl shadow-2xl transform transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Collage Images on Left */}
            <Image
              src="/images/about2.jpg"
              alt="Collage Image 1"
              width={250}
              height={250}
              className="rounded-2xl shadow-lg transform rotate-6 transition-transform duration-500 hover:scale-110"
            />
            <Image
              src="/images/about3.jpg"
              alt="Collage Image 2"
              width={250}
              height={250}
              className="rounded-2xl shadow-lg -rotate-6 transition-transform duration-500 hover:scale-110"
            />
          </div>

          {/* Right Column: Text and Images */}
          <div className="space-y-8 flex flex-col justify-between relative">
            {/* Right Column: Images behind text */}
            {/* <div className="absolute top-0 right-0 w-[400px] h-[500px]">
                <Image
                  src="/images/about4.jpg"
                  alt="Collage Image 4"
                  width={350}
                  height={350}
                  className="rounded-2xl shadow-lg scale-90 transition-transform duration-500 hover:scale-110 rotate-3"
                />
              </div> */}
            {/* <div className="absolute bottom-0 right-0 w-[300px] h-[300px]">
                <Image
                  src="/images/about5.jpg"
                  alt="Collage Image 5"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-lg scale-95 transition-transform duration-500 hover:scale-110 -rotate-3"
                />
              </div> */}
              
            {/* Right Column: Text */}
            <div className="space-y-8 z-0">
              <h2 className="text-5xl font-extrabold text-gray-900 tracking-wide leading-tight">
                Welcome to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
                  A Better Connection
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Discover a world where meaningful relationships thrive. At our
                platform, we aim to connect souls, foster friendships, and help
                you find genuine love. Experience the next level of matchmaking.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-400 shadow-lg">
                    🌍
                  </div>
                  <span className="text-gray-700 font-medium">
                    Connecting people across the globe with cutting-edge
                    technology.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg">
                    🤝
                  </div>
                  <span className="text-gray-700 font-medium">
                    Building trust through verified profiles and secure
                    interactions.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg">
                    🚀
                  </div>
                  <span className="text-gray-700 font-medium">
                    Empowering you with personalized matches for a better
                    experience.
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
