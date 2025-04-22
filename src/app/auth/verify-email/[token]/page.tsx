"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Loader, ArrowRight } from "lucide-react";
import toast from "react-hot-toast";

export default function VerifyEmailPage() {
  const router = useRouter();
  const params = useParams();
  const token = params.token as string;

  const [verificationState, setVerificationState] = useState<
    "loading" | "success" | "error"
  >("loading");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Simulate API call to verify token
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // For demo purposes, we'll consider tokens containing "success" as valid
        // In a real app, you would make an API call to verify the token
        if (token && token.includes("success")) {
          setVerificationState("success");
          toast.success("Email successfully verified!");
        } else {
          setVerificationState("error");
          toast.error("Email verification failed.");
        }
      } catch (error) {
        console.error("Verification error:", error);
        setVerificationState("error");
        toast.error("Email verification failed.");
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl bg-white p-8 text-center"
      >
        {verificationState === "loading" && (
          <>
            <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <Loader className="h-8 w-8 text-blue-600 animate-spin" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Verifying Your Email
            </h2>
            <p className="mt-2 text-gray-600">
              Please wait while we verify your email address...
            </p>
          </>
        )}

        {verificationState === "success" && (
          <>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6"
            >
              <CheckCircle className="h-8 w-8 text-green-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-800">
              Email Verified!
            </h2>
            <p className="mt-2 text-gray-600">
              Your email has been successfully verified. You can now log in to
              your account.
            </p>
            <div className="mt-8">
              <Link
                href="/auth/login"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
              >
                Continue to Login <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </>
        )}

        {verificationState === "error" && (
          <>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mx-auto h-16 w-16 rounded-full bg-red-100 flex items-center justify-center mb-6"
            >
              <XCircle className="h-8 w-8 text-red-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-800">
              Verification Failed
            </h2>
            <p className="mt-2 text-gray-600">
              We couldn't verify your email address. The verification link may
              have expired or is invalid.
            </p>
            <div className="mt-8 space-y-3">
              <Link
                href="/auth/forgot-password"
                className="inline-block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
              >
                Try Again
              </Link>
              <Link
                href="/auth/login"
                className="inline-block w-full px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
              >
                Back to Login
              </Link>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
