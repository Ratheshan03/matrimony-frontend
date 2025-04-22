"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import LoginForm from "@/components/Auth/LoginForm";
import { MessageSquareHeart, Heart } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[100vh] bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/images/login-hero.jpg')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>

        {/* Animated circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full mix-blend-overlay"
              initial={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                opacity: 0,
              }}
              animate={{
                x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                opacity: [0, 0.2, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 10 + i * 2,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                background: `rgba(${Math.random() * 255}, ${
                  Math.random() * 255
                }, ${Math.random() * 255}, 0.1)`,
                backdropFilter: "blur(5px)",
              }}
            />
          ))}
        </div>

        {/* Floating hearts */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`heart-${i}`}
              className="absolute text-white/30"
              initial={{
                y: Math.random() * 500 + 500,
                x: Math.random() * window.innerWidth,
                opacity: 0,
                rotate: Math.random() * 180 - 90,
              }}
              animate={{
                y: -100,
                opacity: [0, 0.3, 0],
                rotate: Math.random() * 360 - 180,
              }}
              transition={{
                repeat: Infinity,
                duration: 15 + Math.random() * 20,
                delay: i * 0.7,
                ease: "linear",
              }}
            >
              <Heart size={Math.random() * 24 + 10} />
            </motion.div>
          ))}
        </div>

        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center mb-6"
              >
                <MessageSquareHeart size={42} className="mr-3" />
                <span className="text-2xl font-bold">MatrimonyApp</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Welcome Back
              </motion.h1>

              <motion.p
                className="text-xl text-white/90 max-w-md mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
              >
                Your journey to finding a life partner continues. Sign in to
                explore new matches and connections.
              </motion.p>

              <motion.div
                className="hidden md:flex items-center space-x-4 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <span className="flex items-center">
                  <span className="h-3 w-3 bg-green-400 rounded-full mr-2"></span>
                  500+ Online Now
                </span>
                <span className="flex items-center">
                  <span className="h-3 w-3 bg-yellow-400 rounded-full mr-2"></span>
                  50+ New Matches Today
                </span>
              </motion.div>
            </motion.div>

            {/* Login Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <LoginForm />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Stories Section - Different from registration stats */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Love Stories That Began Here
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real couples who found their perfect match on our platform share
              their journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                names: "Priya & Ajay",
                location: "Mumbai",
                story:
                  "After 3 months of chatting, we knew we were perfect for each other. Married for 2 years now!",
                image: "/images/couple1.jpg",
              },
              {
                names: "Sarah & David",
                location: "Bangalore",
                story:
                  "Our families connected through the app and we instantly clicked. Thank you for bringing us together.",
                image: "/images/couple2.jpg",
              },
              {
                names: "Rohit & Neha",
                location: "Delhi",
                story:
                  "From matched profiles to marriage in 6 months. The compatibility test was spot on!",
                image: "/images/couple3.jpg",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="h-52 bg-gradient-to-r from-purple-500 to-pink-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-2xl font-bold">{story.names}</h3>
                      <p className="text-white/80">{story.location}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 italic mb-4">"{story.story}"</p>
                  <div className="flex justify-end">
                    <Link href="/success-stories">
                      <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">
                        Read full story
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="/auth/register">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                Start Your Own Success Story
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
