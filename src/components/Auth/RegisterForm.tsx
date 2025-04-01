"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, User, Mail, Lock, Calendar, Phone } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";

const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(3, { message: "Full name must be at least 3 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    phone: z
      .string()
      .min(10, { message: "Phone number must be at least 10 digits" }),
    dateOfBirth: z.string().min(1, { message: "Date of birth is required" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm password is required" }),
    gender: z.enum(["male", "female", "other"], {
      message: "Please select a gender",
    }),
    profileFor: z.enum(
      ["self", "son", "daughter", "brother", "sister", "relative", "friend"],
      {
        message: "Please select who you are registering for",
      }
    ),
    termsAccepted: z.literal(true, {
      message: "You must accept the terms and conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      password: "",
      confirmPassword: "",
      gender: "male",
      profileFor: "self",
      termsAccepted: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);

      // Here you would make an API call to your backend
      // Example:
      // const response = await fetch('your-backend-url/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // For now, we'll simulate a successful registration
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Registration successful! Please verify your email.");
      router.push("/auth/login");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <motion.div
      className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      
      <div className="relative h-2 bg-gray-100">
        <motion.div
          className="absolute h-full bg-gradient-to-r from-pink-500 to-purple-600"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      <div className="p-8">
        <motion.h2
          className="text-2xl font-bold text-center text-gray-800 mb-8"
          variants={itemVariants}
        >
          Create Your Matrimony Account
        </motion.h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && (
            <motion.div
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              custom={1}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="space-y-4"
            >
              <motion.div className="space-y-1" variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700">
                  Profile For
                </label>
                <select
                  {...register("profileFor")}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                    errors.profileFor ? "border-red-500" : "border-gray-200"
                  } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200`}
                >
                  <option value="self">Myself</option>
                  <option value="son">My Son</option>
                  <option value="daughter">My Daughter</option>
                  <option value="brother">My Brother</option>
                  <option value="sister">My Sister</option>
                  <option value="relative">My Relative</option>
                  <option value="friend">My Friend</option>
                </select>
                {errors.profileFor && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.profileFor.message}
                  </p>
                )}
              </motion.div>

              <motion.div className="space-y-1" variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    {...register("fullName")}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border ${
                      errors.fullName ? "border-red-500" : "border-gray-200"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200`}
                    placeholder="John Smith"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </motion.div>

              <motion.div className="space-y-1" variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="male"
                      {...register("gender")}
                      className="form-radio h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="female"
                      {...register("gender")}
                      className="form-radio h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 text-gray-700">Female</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="other"
                      {...register("gender")}
                      className="form-radio h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                    />
                    <span className="ml-2 text-gray-700">Other</span>
                  </label>
                </div>
                {errors.gender && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.gender.message}
                  </p>
                )}
              </motion.div>

              <motion.div className="space-y-1" variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    {...register("dateOfBirth")}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border ${
                      errors.dateOfBirth ? "border-red-500" : "border-gray-200"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200`}
                  />
                </div>
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.dateOfBirth.message}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial="enter"
              animate="center"
              exit="exit"
              variants={slideVariants}
              custom={1}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="space-y-4"
            >
              <motion.div className="space-y-1" variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200`}
                    placeholder="john@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </motion.div>

              <motion.div className="space-y-1" variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    {...register("phone")}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 border ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200`}
                    placeholder="1234567890"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </motion.div>

              <motion.div className="space-y-1" variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    className={`w-full pl-10 pr-10 py-3 rounded-lg bg-gray-50 border ${
                      errors.password ? "border-red-500" : "border-gray-200"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200`}
                    placeholder="********"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </motion.div>

              <motion.div className="space-y-1" variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword")}
                    className={`w-full pl-10 pr-10 py-3 rounded-lg bg-gray-50 border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-200"
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200`}
                    placeholder="********"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3.5"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </motion.div>

              <motion.div className="pt-2" variants={itemVariants}>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    {...register("termsAccepted")}
                    className="form-checkbox h-4 w-4 text-purple-600 transition duration-150 ease-in-out"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
                {errors.termsAccepted && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.termsAccepted.message}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}

          <motion.div
            className="flex justify-between mt-8"
            variants={itemVariants}
          >
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-800 focus:outline-none transition duration-150 ease-in-out"
              >
                Previous
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  "Register"
                )}
              </button>
            )}
          </motion.div>
        </form>

        <motion.div className="text-center mt-6" variants={itemVariants}>
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/auth/login"
              className="text-purple-600 hover:text-purple-800 font-medium"
            >
              Log in
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RegisterForm;
