import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: 'url("/images/hero.jpg")' }}
    >
      {/* Background Overlay with slightly improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/80 via-pink-600/80 to-red-500/80 z-10"></div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/patterns/hearts-pattern.svg')] bg-repeat opacity-5 z-10"></div>

      {/* Floating Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-lg animate-pulse z-5"></div>
      <div className="absolute bottom-16 right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-green-300 rounded-full blur-xl opacity-50 z-5"></div>

      {/* Small Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-ping animation-delay-700"></div>
      <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-red-300 rounded-full animate-ping animation-delay-1500"></div>

      {/* Hero Content */}
      <div
        className={`relative z-20 max-w-4xl px-6 text-white transition-all duration-1000 transform ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight drop-shadow-lg">
          Find{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-400">
            Your Soulmate
          </span>{" "}
          Here
        </h1>

        <p className="mt-6 text-lg md:text-2xl font-light text-gray-100 leading-relaxed max-w-3xl mx-auto">
          Join millions on the journey of love. Experience a trusted platform
          designed for meaningful connections and lifelong happiness.
        </p>

        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center">
          <Link
            href="/register"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-red-500 text-white text-lg font-bold rounded-full shadow-xl hover:shadow-2xl hover:opacity-90 hover:scale-105 transform transition duration-300 ease-out"
          >
            Get Started
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/learn-more"
            className="group px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white text-lg font-bold rounded-full shadow-lg hover:bg-opacity-30 hover:scale-105 transform transition duration-300 ease-out border border-white/20"
          >
            Learn More
            <span className="ml-2 inline-block opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 opacity-80">
          <div className="flex items-center">
            <div className="w-5 h-5 mr-2 text-yellow-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm">Top Rated</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 mr-2 text-green-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-sm">Verified Profiles</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 mr-2 text-purple-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <span className="text-sm">10M+ Matches</span>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          <span className="text-gray-200 font-light text-sm">
            Discover More
          </span>
          <div className="mt-2 w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 animate-scrollDown"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
