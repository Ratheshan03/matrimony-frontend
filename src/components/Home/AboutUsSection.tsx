import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const AboutUsSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if section is visible
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView =
          rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
        if (isInView && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="about-us"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Semi-transparent overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

      {/* Simple soft background gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div
          className="absolute top-10 left-20 w-[500px] h-[500px] bg-gradient-to-tr from-pink-400/20 to-purple-500/20 rounded-full blur-[150px]"
          style={{
            transform: `translateY(${scrollY * 0.02}px)`,
            transition: "transform 0.6s ease-out",
          }}
        ></div>
        <div
          className="absolute bottom-20 right-16 w-[400px] h-[400px] bg-gradient-to-br from-blue-300/20 to-green-400/20 rounded-full blur-[120px]"
          style={{
            transform: `translateY(${-scrollY * 0.03}px)`,
            transition: "transform 0.6s ease-out",
          }}
        ></div>
      </div>

      {/* Very minimal floating particles - just enough for some magic */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => {
          const size = Math.random() * 4 + 2; // Smaller size (2-6px)
          const randomOpacity = Math.random() * 0.12 + 0.05; // Very low opacity (0.05-0.17)
          const initialX = Math.random() * 100;
          const initialY = Math.random() * 100;
          const appear = Math.random() > 0.5; // Only some particles appear based on scroll
          const delay = i * 0.3; // Staggered appearance

          return (
            <div
              key={i}
              className="absolute rounded-full transition-opacity"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: `rgba(${120 + Math.random() * 135}, ${
                  120 + Math.random() * 135
                }, ${255}, ${randomOpacity})`,
                left: `${initialX}%`,
                top: `${initialY}%`,
                transform: `translateZ(${Math.random() * 20}px)`,
                boxShadow: "0 0 6px rgba(255, 255, 255, 0.15)",
                filter: "blur(0.5px)",
                opacity: scrollY > i * 60 && appear ? 1 : 0,
                transition: "opacity 1.5s ease-in-out",
                animationName: "floatSimple",
                animationDuration: `${Math.random() * 8 + 10}s`,
                animationDelay: `${delay}s`,
                animationIterationCount: "infinite",
                animationDirection: "alternate",
                animationTimingFunction: "ease-in-out",
              }}
            ></div>
          );
        })}
      </div>

      {/* Main Content with Fade-in Animation */}
      <div
        className="container mx-auto px-8 lg:px-16 py-10 relative z-10 min-h-screen flex items-center justify-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full">
          {/* Left Column: Image Collage */}
          <div className="relative grid grid-cols-2 gap-4 lg:gap-7 max-w-[450px] lg:max-w-[550px] mx-auto">
            {/* Main Image */}
            <div className="col-span-2 relative">
              <Image
                src="/images/aboutus.jpg"
                alt="Main About Us"
                width={500}
                height={400}
                className="w-full h-auto object-contain rounded-3xl shadow-2xl transform transition-transform duration-700 hover:scale-105"
              />

              {/* Simple decoration for main image */}
              <div
                className="absolute -top-4 -right-4 w-14 h-14 opacity-60 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(236,72,153,0.4) 50%, rgba(236,72,153,0) 70%)",
                  filter: "blur(2px)",
                  animation: "pulse 3s infinite alternate",
                }}
              ></div>

              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 opacity-60 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(168,85,247,0.4) 50%, rgba(168,85,247,0) 70%)",
                  filter: "blur(2px)",
                  animation: "pulse 3s 1s infinite alternate-reverse",
                }}
              ></div>
            </div>

            {/* Smaller Collage Images */}
            <div className="relative">
              <Image
                src="/images/about2.jpg"
                alt="Collage Image 1"
                width={180}
                height={180}
                className="w-full h-auto rounded-2xl shadow-lg transform rotate-6 transition-transform duration-500 hover:scale-110"
              />

              {/* Simple decoration */}
              <div
                className="absolute -top-3 -right-3 w-10 h-10 opacity-60 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(96,165,250,0.4) 40%, rgba(96,165,250,0) 70%)",
                  filter: "blur(1px)",
                  animation: "pulse 4s 0.5s infinite alternate",
                }}
              ></div>
            </div>

            <div className="relative">
              <Image
                src="/images/about3.jpg"
                alt="Collage Image 2"
                width={160}
                height={160}
                className="w-full h-auto rounded-2xl shadow-lg -rotate-6 transition-transform duration-500 hover:scale-110 ml-1"
              />

              {/* Simple decoration */}
              <div
                className="absolute -bottom-3 -left-3 w-8 h-8 opacity-60 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(251,146,60,0.4) 30%, rgba(251,146,60,0) 70%)",
                  filter: "blur(1px)",
                  animation: "pulse 5s 1s infinite alternate-reverse",
                }}
              ></div>
            </div>
          </div>

          {/* Right Column: Text */}
          <div className="space-y-6 flex flex-col justify-between relative">
            <div className="space-y-6">
              <h2
                className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-wide leading-tight"
                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
              >
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
              <ul className="space-y-3">
                <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-400 shadow-lg text-sm">
                    🌍
                  </div>
                  <span className="text-gray-700 font-medium">
                    Connecting people across the globe with cutting-edge
                    technology.
                  </span>
                </li>
                <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg text-sm">
                    🤝
                  </div>
                  <span className="text-gray-700 font-medium">
                    Building trust through verified profiles and secure
                    interactions.
                  </span>
                </li>
                <li className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg text-sm">
                    🚀
                  </div>
                  <span className="text-gray-700 font-medium">
                    Empowering you with personalized matches for better
                    experiences.
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold shadow-lg transition-all duration-500 ease-out hover:pl-6 hover:pr-10"
                >
                  <span className="absolute right-0 flex h-full w-10 translate-x-full items-center justify-center bg-white bg-opacity-20 text-white duration-500 group-hover:-translate-x-0">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  <span className="relative">Learn More About Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified animations */}
      <style jsx>{`
        @keyframes floatSimple {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(
              ${Math.random() * 8 - 4}px,
              -${Math.random() * 15 + 5}px
            );
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.6;
          }
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;
