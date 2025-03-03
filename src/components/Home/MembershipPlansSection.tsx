import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  Star,
  ChevronRight,
  Shield,
  Users,
  MessagesSquare,
  Calendar,
  Crown,
  Sparkles,
} from "lucide-react";

const MembershipPlansSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const membershipPlans = [
    {
      name: "Basic",
      description: "Essential features to begin your matrimonial journey",
      price: "₹1,999",
      duration: "3 months",
      color: "from-blue-400 to-blue-600",
      icon: <Shield size={24} />,
      popular: false,
      features: [
        { title: "50 Profile Views", included: true },
        { title: "10 Contact Unlocks", included: true },
        { title: "Basic Match Alerts", included: true },
        { title: "Email Support", included: true },
        { title: "Assisted Matchmaking", included: false },
        { title: "Priority Listing", included: false },
      ],
    },
    {
      name: "Premium",
      description: "Our most popular plan for serious matrimonial seekers",
      price: "₹4,999",
      duration: "6 months",
      color: "from-primary to-secondary",
      icon: <Crown size={24} />,
      popular: true,
      features: [
        { title: "200 Profile Views", included: true },
        { title: "50 Contact Unlocks", included: true },
        { title: "Premium Match Alerts", included: true },
        { title: "Priority Support", included: true },
        { title: "Assisted Matchmaking", included: true },
        { title: "Priority Listing", included: false },
      ],
    },
    {
      name: "Royal",
      description: "VIP service with personalized assistance and priority",
      price: "₹9,999",
      duration: "12 months",
      color: "from-purple-600 to-indigo-600",
      icon: <Sparkles size={24} />,
      popular: false,
      features: [
        { title: "Unlimited Profile Views", included: true },
        { title: "Unlimited Contact Unlocks", included: true },
        { title: "VIP Match Alerts", included: true },
        { title: "Dedicated Relationship Manager", included: true },
        { title: "Premium Assisted Matchmaking", included: true },
        { title: "Featured Profile Listing", included: true },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Decorative floating elements
  const decorations = [];
  for (let i = 0; i < 6; i++) {
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
      className="relative py-16 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
    >
      {/* Floating Decorative Elements */}
      {decorations.map((decoration) => (
        <motion.div
          key={decoration.id}
          className="absolute rounded-full opacity-30 bg-gradient-to-br from-primary/20 to-secondary/20 blur-md z-0"
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

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-400">
              Membership Plans
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Choose the right plan to unlock verified profiles and find your
            perfect life partner with our guided matchmaking assistance.
          </p>
        </motion.div>

        {/* Membership Plans */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {membershipPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border ${
                plan.popular
                  ? "border-primary/20 ring-2 ring-primary/30"
                  : "border-gray-100"
              }`}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-4 py-1 rounded-bl-lg shadow-md transform translate-x-2 -translate-y-0.5">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Plan Header */}
                <div className="flex items-center mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white mr-4 shadow-lg`}
                  >
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-500">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6 bg-gray-50 p-4 rounded-xl">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-800">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">/{plan.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                      className="flex items-center"
                    >
                      {feature.included ? (
                        <CheckCircle
                          size={18}
                          className="text-primary mr-3 flex-shrink-0"
                        />
                      ) : (
                        <XCircle
                          size={18}
                          className="text-gray-300 mr-3 flex-shrink-0"
                        />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.title}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  className="mt-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/subscriptions"
                    className={`w-full py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md hover:shadow-lg hover:text-gray-600"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span>Choose Plan</span>
                    <ChevronRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Plan Benefits */}
        <div className="mt-16 lg:mt-20">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              {
                icon: <Users size={24} className="text-primary" />,
                title: "Verified Profiles",
                description:
                  "All profiles are thoroughly verified for authenticity and trust.",
              },
              {
                icon: <MessagesSquare size={24} className="text-purple-600" />,
                title: "Direct Communication",
                description:
                  "Connect directly with potential matches through our secure platform.",
              },
              {
                icon: <Calendar size={24} className="text-pink-600" />,
                title: "Match Assistance",
                description:
                  "Our experts help you find compatible matches based on your preferences.",
              },
              {
                icon: <Shield size={24} className="text-blue-600" />,
                title: "Privacy Protection",
                description:
                  "Your personal information is secure and shared only with verified users.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/80 p-6 rounded-xl shadow-md backdrop-blur-sm"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Link
            href="/subscriptions"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">View All Plans & Features</span>
            <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipPlansSection;
