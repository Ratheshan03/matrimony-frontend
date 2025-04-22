"use client";

import React from "react";
import Image from "next/image";
import ForgotPasswordForm from "@/components/Auth/ForgotPasswordFrom";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Hero Image */}
        <motion.div
          className="hidden md:block relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/forgot-password-hero.jpg"
            alt="Reset your password"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-500/80 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Password Recovery</h2>
            <p className="text-white/80">
              We'll help you get back into your account safely and securely.
            </p>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <ForgotPasswordForm />
        </motion.div>
      </div>
    </div>
  );
}
