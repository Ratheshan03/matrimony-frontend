"use client";

import React, { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import RegisterForm from "@/components/Auth/RegisterForm";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, UserCheck } from "lucide-react";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[95vh] bg-gradient-to-r from-purple-600 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-5.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>

        {/* Animated particles/elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 md:w-40 md:h-40 rounded-full bg-white/10 backdrop-blur-sm"
              initial={{
                x: Math.random() * 100 - 50,
                y: Math.random() * 100 - 50,
                scale: 0.5,
                opacity: 0,
              }}
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                scale: [0.5, 1.2, 0.8],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 15 + i * 3,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-6 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="max-w-lg"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Find Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">
                Forever
              </span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ duration: 1, delay: 1 }}
              className="h-1 bg-white/70 mb-8"
            />

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-xl text-white/80"
            >
              Your journey begins here
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div
          id="register-form"
          className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Registration Form */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <RegisterForm />
          </motion.div>

          {/* Feature Highlight */}
          <motion.div
            className="order-1 md:order-2 text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Find Your Perfect Match
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of happy couples who found their life partner on
              MatrimonyApp.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    Privacy First
                  </h3>
                  <p className="text-gray-600">
                    Your data is secure and your privacy is our top priority.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-pink-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    Real Connections
                  </h3>
                  <p className="text-gray-600">
                    Connect with verified profiles and find your perfect match.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-800">
                    Free to Join
                  </h3>
                  <p className="text-gray-600">
                    Create your profile for free and explore potential matches.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Testimonial/Stats Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Join Our Growing Community
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Thousands of happy couples have found their perfect match on our
              platform. You could be next!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  2M+
                </div>
                <p className="text-gray-600">Registered Users</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">
                  50K+
                </div>
                <p className="text-gray-600">Successful Matches</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  4.8/5
                </div>
                <p className="text-gray-600">User Rating</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link href="#register-form">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                Start Your Journey Today
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
