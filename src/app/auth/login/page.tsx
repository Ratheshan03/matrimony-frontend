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

      {/* Trust Badges */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-1">
                100%
              </div>
              <div className="text-gray-600 text-sm">Profile Verification</div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-1">
                24/7
              </div>
              <div className="text-gray-600 text-sm">Customer Support</div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-1">
                10M+
              </div>
              <div className="text-gray-600 text-sm">Happy Users</div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-1">SSL</div>
              <div className="text-gray-600 text-sm">Secure Data</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
