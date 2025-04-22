"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import ResetPasswordForm from "@/components/Auth/ResetPasswordForm";
import { XCircle } from "lucide-react";
import Link from "next/link";

export default function ResetPasswordPage() {
  const params = useParams();
  const token = params.token as string;
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);

  useEffect(() => {
    const validateToken = async () => {
      try {
        // Simulate token validation
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // For demo purposes, consider tokens containing "valid" as valid
        // In a real app, you would validate this token with your backend
        setIsValidToken(token && token.includes("valid"));
      } catch (error) {
        console.error("Token validation error:", error);
        setIsValidToken(false);
      }
    };

    validateToken();
  }, [token]);

  if (isValidToken === true) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl bg-white p-8 text-center"
        >
          <div className="mx-auto h-16 w-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Invalid or Expired Link
          </h2>
          <p className="mt-2 text-gray-600">
            The password reset link is invalid or has expired. Please request a
            new password reset link.
          </p>
          <div className="mt-8">
            <Link
              href="/auth/forgot-password"
              className="inline-block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
            >
              Request New Link
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  if (isValidToken === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

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
            src="/images/reset-password-hero.jpg"
            alt="Reset your password"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/90 to-pink-500/90 mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Create New Password</h2>
            <p className="text-white/80">
              Choose a strong password for your account to keep it secure.
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
          <ResetPasswordForm token={token} />
        </motion.div>
      </div>
    </div>
  );
}
