import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowRight } from "lucide-react";

const FinalCallToAction = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-primary to-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/images/heart.png')] bg-repeat opacity-10"></div>
        <div className="bg-white opacity-10 absolute top-8 left-16 w-96 h-96 rounded-full filter blur-3xl"></div>
        <div className="bg-white opacity-10 absolute bottom-16 right-16 w-96 h-96 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto relative z-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-12">
          {/* Heart Illustration */}
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/images/heart.png"
                alt="Heart Illustration"
                layout="fill"
                objectFit="contain"
                className="opacity-80 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Text and CTA */}
          <div className="w-full md:w-3/4 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-wide leading-tight">
              Your Perfect Match is
              <span className="block text-white/90"> Just a Step Away</span>
            </h2>
            <p className="text-lg text-white opacity-90 mb-8 max-w-2xl">
              Thousands of genuine profiles, carefully verified, and a dedicated
              team committed to helping you find your life partner. Begin your
              journey of love and companionship today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold rounded-full shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Create Your Profile
                <ArrowRight
                  className="ml-2 transform group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </Link>
              <Link
                href="/success-stories"
                className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Success Stories
                <Heart
                  className="ml-2 fill-white text-white/50 group-hover:fill-white transition-colors"
                  size={20}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCallToAction;
