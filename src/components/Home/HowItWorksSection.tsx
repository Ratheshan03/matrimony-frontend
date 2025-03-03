import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  UserCheck,
  Users,
  UserPlus,
  ShieldCheck,
  CreditCard,
  MessageCircle,
  ArrowRight,
  User,
  LockOpen,
} from "lucide-react";

const HowItWorksSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      step: 1,
      title: "Create Your Profile",
      description:
        "Register and build your detailed matrimonial profile showcasing your background, values, and preferences. Add photos and highlight what makes you unique.",
      icon: <UserPlus size={32} />,
      color: "from-primary to-secondary",
      details: [
        "Upload verified photos",
        "Share family background",
        "Specify matrimonial preferences",
        "Add education & career details",
      ],
      illustration: "/images/profile-creation.png", // Replace with actual illustration
    },
    {
      step: 2,
      title: "Profile Verification",
      description:
        "Our administrators will contact you to verify your details ensuring authenticity and trust. This creates a safe community for genuine matrimonial connections.",
      icon: <ShieldCheck size={32} />,
      color: "from-[#a686f9] to-[#7c4dff]",
      details: [
        "Document verification",
        "Personal interview",
        "Background confirmation",
        "Profile approval process",
      ],
      illustration: "/images/verification.png", // Replace with actual illustration
    },
    {
      step: 3,
      title: "Subscribe & Match",
      description:
        "Choose a subscription package to unlock complete profiles and enable our administrators to help find your perfect match based on compatibility.",
      icon: <CreditCard size={32} />,
      color: "from-[#ff7eb3] to-[#ff499e]",
      details: [
        "Multiple subscription packages",
        "Access to complete profiles",
        "Personalized match recommendations",
        "Direct connection assistance",
      ],
      illustration: "/images/subscription.png", // Replace with actual illustration
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20, delay: 0.2 },
    },
  };

  const lineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: { duration: 1.5, ease: "easeInOut", delay: 0.5 },
    },
  };

  const illustrationVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: 0.3 },
    },
  };

  const detailVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1 },
    }),
  };

  // Decorative elements for background
  const decorations = [];
  for (let i = 0; i < 8; i++) {
    decorations.push({
      id: i,
      size: Math.random() * 6 + 4,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    });
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Floating Decorative Elements */}
      {decorations.map((decoration) => (
        <motion.div
          key={decoration.id}
          className="absolute rounded-full opacity-40 bg-gradient-to-br from-primary/20 to-secondary/20 blur-md z-0"
          style={{
            width: `${decoration.size}rem`,
            height: `${decoration.size}rem`,
            left: `${decoration.x}%`,
            top: `${decoration.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: decoration.duration,
            repeat: Infinity,
            delay: decoration.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-400">
              How It Works
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Finding your perfect life partner is a sacred journey. Our simple
            3-step process helps you connect with genuine, verified matches that
            share your values.
          </p>
        </motion.div>

        {/* Steps Navigation Tabs */}
        <div className="flex justify-center mb-14">
          <div className="bg-white/70 backdrop-blur-sm p-2 rounded-full shadow-md flex gap-2 md:gap-4 relative">
            {steps.map((step, index) => (
              <motion.button
                key={index}
                className={`relative z-10 py-2 px-4 md:px-6 rounded-full text-sm md:text-base font-medium transition-all flex items-center gap-2 ${
                  activeTab === index
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">{step.title}</span>
              </motion.button>
            ))}
            <motion.div
              className={`absolute top-2 bottom-2 rounded-full bg-gradient-to-r ${steps[activeTab].color}`}
              initial={false}
              animate={{
                left: `${(100 / steps.length) * activeTab}%`,
                width: `${100 / steps.length}%`,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-h-screen">
          {/* Step Details */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${steps[activeTab].color} rounded-t-3xl`}
              ></div>

              <div className="flex items-center mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${steps[activeTab].color} flex items-center justify-center text-white mr-4 shadow-lg`}
                >
                  {steps[activeTab].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {steps[activeTab].title}
                  </h3>
                  <div className="flex items-center text-gray-500 mt-1">
                    <span className="font-medium">
                      Step {steps[activeTab].step}
                    </span>
                    <span className="mx-2">•</span>
                    <span>
                      {activeTab === 2
                        ? "Final Step"
                        : "Next: " + steps[activeTab + 1]?.title}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-8 text-lg">
                {steps[activeTab].description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                  What to expect:
                </h4>
                <div className="space-y-3">
                  {steps[activeTab].details.map((detail, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={detailVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex items-center bg-gray-50 p-3 rounded-lg"
                    >
                      <CheckCircle
                        className="text-primary mr-3 flex-shrink-0"
                        size={20}
                      />
                      <span className="text-gray-700">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.button
                  className={`py-3 px-6 rounded-full bg-gradient-to-r ${steps[activeTab].color} text-white font-medium shadow-md flex items-center justify-center gap-2`}
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activeTab === 0
                    ? "Register Now"
                    : activeTab === 1
                    ? "Contact Us"
                    : "View Packages"}
                  <ArrowRight size={16} />
                </motion.button>
                <motion.button
                  className="py-3 px-6 rounded-full border border-gray-300 text-gray-700 font-medium flex items-center justify-center gap-2"
                  whileHover={{
                    scale: 1.03,
                    backgroundColor: "rgba(255,255,255,0.8)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Step Illustration */}
          <motion.div
            key={`illustration-${activeTab}`}
            variants={illustrationVariants}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative max-w-md">
              {/* Main illustration placeholder */}
              <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-xl bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  {/* Replace with actual illustration image */}
                  <div className="w-2/3 h-2/3 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center text-gray-400">
                    <span className="text-6xl opacity-50">
                      {steps[activeTab].icon}
                    </span>
                  </div>
                </div>

                {/* Timeline markers showing progression */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                  {steps.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full ${
                        idx <= activeTab
                          ? `bg-gradient-to-r ${steps[idx].color}`
                          : "bg-gray-200"
                      } transition-all duration-500 flex-1 ${
                        idx < steps.length - 1 ? "mr-2" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#ffab73]/20 to-[#ffdfba]/20 rounded-full blur-md" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-to-br from-[#a8d1ff]/20 to-[#cce5ff]/20 rounded-full blur-md" />

              {/* Interactive elements based on current step */}
              {activeTab === 0 && (
                <>
                  <motion.div
                    className="absolute w-44 h-16 -top-10 right-10 bg-white p-3 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center gap-2">
                      <User size={26} className="text-primary" />
                      <span className="text-sm font-semibold text-gray-400">
                        Profile Created!
                      </span>
                    </div>
                  </motion.div>
                </>
              )}

              {activeTab === 1 && (
                <>
                  <motion.div
                    className="absolute w-44 h-16 -bottom-8 left-14 bg-white p-3 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center gap-2">
                      <UserCheck size={26} className="text-primary" />
                      <span className="text-sm font-semibold text-gray-400">
                        Profile Verified!
                      </span>
                    </div>
                  </motion.div>
                </>
              )}

              {activeTab === 2 && (
                <>
                  <motion.div
                    className="absolute w-44 h-16 -top-8 left-12 bg-white p-3 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center gap-2">
                      <LockOpen size={26} className="text-primary" />
                      <span className="text-sm font-semibold text-gray-400">
                        Profiles Unlocked!
                      </span>
                    </div>
                  </motion.div>
                  <motion.div
                    className="absolute w-44 h-16 -bottom-6 right-14 bg-white p-3 rounded-xl shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center gap-2">
                      <MessageCircle size={26} className="text-primary" />
                      <span className="text-sm font-semibold text-gray-400">
                        Match Arranged!
                      </span>
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Process Steps - Alternative view for mobile */}
        <div className="mt-20 md:mt-24 mb-10 relative overflow-hidden">
          {/* Progress Line */}
          <motion.div
            className="absolute top-10 left-[10%] md:left-[22%] right-[10%] md:right-[22%] h-1 bg-gray-200"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary"
              variants={lineVariants}
            />
          </motion.div>

          {/* Steps */}
          <motion.div
            className="flex justify-between relative"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center relative z-10"
                variants={itemVariants}
                onClick={() => setActiveTab(index)}
              >
                {/* Step Circle */}
                <motion.div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow duration-300 border-4 ${
                    activeTab === index ? "border-primary" : "border-white"
                  }`}
                  variants={circleVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
                  >
                    {item.icon}
                  </div>
                </motion.div>

                {/* Step Number */}
                <div
                  className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold mt-3 bg-gradient-to-br ${item.color}`}
                >
                  {item.step}
                </div>

                {/* Title */}
                <h4 className="text-center text-gray-800 font-semibold mt-2 text-sm md:text-base">
                  {item.title}
                </h4>

                {/* Indicator for active step */}
                {activeTab === index && (
                  <motion.div
                    className="w-2 h-2 bg-primary rounded-full mt-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
            Ready to begin your matrimonial journey?
          </h3>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">Create Your Profile Today</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
