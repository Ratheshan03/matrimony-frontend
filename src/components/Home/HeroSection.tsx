import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
          <section
            className="relative h-screen flex items-center justify-center text-center bg-cover bg-fixed bg-center"
            style={{ backgroundImage: 'url("/images/hero.jpg")' }}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-500 to-red-400 opacity-75 z-10"></div>
    
            {/* Floating Decorations */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-lg animate-pulse z-5"></div>
            <div className="absolute bottom-16 right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-green-300 rounded-full blur-xl opacity-50 z-5"></div>
    
            {/* Hero Content */}
            <div className="relative z-20 max-w-4xl px-6 text-white">
              <h1 className="text-5xl md:text-8xl font-extrabold leading-tight drop-shadow-lg animate-fadeInUp">
                Find{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
                  Your Soulmate
                </span>{" "}
                Here
              </h1>
              <p className="mt-6 text-lg md:text-2xl font-light text-gray-200 leading-relaxed animate-fadeInUp delay-200">
                Join millions on the journey of love. Experience a trusted platform
                designed for meaningful connections and lifelong happiness.
              </p>
              <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center animate-fadeInUp delay-400">
                <Link
                  href="/register"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-red-500 text-white text-lg font-bold rounded-full shadow-lg hover:opacity-90 hover:scale-105 transform transition duration-300"
                >
                  Get Started
                </Link>
                <Link
                  href="/learn-more"
                  className="px-8 py-4 bg-white bg-opacity-20 text-white text-lg font-bold rounded-full shadow-lg hover:bg-opacity-30 hover:scale-105 transform transition duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
    
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex flex-col items-center">
                <span className="text-gray-300 font-light text-sm">
                  Scroll Down
                </span>
                <div className="mt-2 w-6 h-6 border-2 border-white rounded-full animate-bounce"></div>
              </div>
            </div>
          </section>
  );
};

export default HeroSection;
