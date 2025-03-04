import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Users,
  Search,
  UserCheck,
  Heart,
  Award,
  Globe,
  MapPin,
} from "lucide-react";

const SpecialtySection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const specialties = [
    {
      id: 1,
      icon: <ShieldCheck size={28} />,
      title: "Verified Profiles",
      description:
        "Every profile undergoes strict verification to ensure authenticity and build trust within our community.",
      color: "from-blue-500 to-indigo-600",
      accent: "bg-blue-50",
      delay: 0.1,
    },
    {
      id: 2,
      icon: <Search size={28} />,
      title: "Smart Matching",
      description:
        "Our advanced compatibility algorithm helps find perfect matches based on values, preferences, and background.",
      color: "from-purple-500 to-violet-600",
      accent: "bg-purple-50",
      delay: 0.2,
    },
    {
      id: 3,
      icon: <UserCheck size={28} />,
      title: "Personal Assistance",
      description:
        "Dedicated matrimonial advisors provide personalized guidance throughout your journey to finding a life partner.",
      color: "from-emerald-500 to-green-600",
      accent: "bg-emerald-50",
      delay: 0.3,
    },
    {
      id: 4,
      icon: <Award size={28} />,
      title: "Premium Experience",
      description:
        "Exclusive packages offer enhanced visibility, priority matching, and special features for serious prospects.",
      color: "from-amber-500 to-orange-600",
      accent: "bg-amber-50",
      delay: 0.4,
    },
    {
      id: 5,
      icon: <Globe size={28} />,
      title: "Global Network",
      description:
        "Connect with verified prospects across communities, regions, and countries with our extensive network.",
      color: "from-cyan-500 to-blue-600",
      accent: "bg-cyan-50",
      delay: 0.5,
    },
    {
      id: 6,
      icon: <Heart size={28} />,
      title: "Success Stories",
      description:
        "Thousands of successful marriages validate our approach to creating meaningful, lasting connections.",
      color: "from-rose-500 to-pink-600",
      accent: "bg-rose-50",
      delay: 0.6,
    },
  ];

  // Statistics
  const stats = [
    {
      value: "94%",
      label: "Match Success Rate",
      icon: <UserCheck size={20} />,
    },
    {
      value: "50K+",
      label: "Verified Profiles",
      icon: <ShieldCheck size={20} />,
    },
    { value: "10K+", label: "Successful Marriages", icon: <Heart size={20} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    }),
  };

  const highlightVariants = {
    hidden: { width: 0 },
    visible: {
      width: "40%",
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background Elements - Floral Matrimonial Theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Flowing flower petals */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(8)].map((_, i) => {
            const size = Math.random() * 10 + 5;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const rotation = Math.random() * 360;
            const duration = Math.random() * 20 + 15;
            const delay = Math.random() * 10;

            return (
              <div
                key={i}
                className="absolute rounded-full opacity-10"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  left: `${posX}%`,
                  top: `${posY}%`,
                  backgroundColor: `hsl(${(i * 30) % 360}, 70%, 85%)`,
                  transform: `rotate(${rotation}deg)`,
                  animation: `floatPetal ${duration}s ${delay}s infinite linear`,
                }}
              />
            );
          })}
        </div>

        {/* Decorative flower vines */}
        <div className="absolute -left-16 top-0 w-64 h-64 transition-transform duration-700 ease-in-out opacity-70">
          <Image
            src="/images/floral-p.png"
            alt="Floral Design"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="absolute -right-16 bottom-0 w-64 h-64 transition-transform duration-700 ease-in-out opacity-70 transform rotate-180">
          <Image
            src="/images/floral-p.png"
            alt="Floral Design"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 title-text">
            What Makes Us{" "}
            <span className="relative">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-400">
                Special
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-pink-500 to-pink-500/30 rounded-full -z-10"
                initial={{ width: 0 }}
                animate={isInView ? highlightVariants.visible : {}}
                variants={highlightVariants}
              ></motion.span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Discover why thousands of families trust us to help find the perfect
            life partner for their loved ones.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl p-6 flex items-center gap-4 min-w-[240px] transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {specialties.map((specialty) => (
            <motion.div
              key={specialty.id}
              custom={specialty.delay}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden group"
            >
              {/* Top accent bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${specialty.color}`}
              ></div>

              <div className="p-6">
                {/* Icon with pulse animation from old file */}
                <div className="relative mb-5 inline-block">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center text-white bg-gradient-to-br ${specialty.color} shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}
                  >
                    {specialty.icon}
                  </div>

                  {/* Decorative ripple effect */}
                  <div
                    className={`absolute top-0 left-0 w-14 h-14 rounded-full bg-gradient-to-br ${specialty.color} opacity-0 group-hover:opacity-40 transition-all duration-1000 animate-ping-slow`}
                  ></div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-red-600 transition-all duration-300">
                  {specialty.title}
                </h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>

              {/* Background flower pattern from old file */}
              <div className="absolute -right-12 -bottom-12 w-40 h-40 opacity-15 transform rotate-45 pointer-events-none transition-opacity duration-500 group-hover:opacity-35">
                <Image
                  src="/images/floral-pp.png"
                  alt="Floral Pattern"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>

              {/* Bottom accent design */}
              <div
                className={`absolute bottom-0 right-0 w-32 h-32 -mr-10 -mb-10 rounded-full ${specialty.accent} opacity-30 transform group-hover:scale-110 transition-transform duration-500`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Banner (simplified for home page) */}
        <motion.div
          className="mt-12 rounded-3xl bg-gradient-to-r from-primary to-secondary p-1 shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div className="bg-white rounded-[1.4rem] p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-1/4 flex justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <Heart size={60} className="text-primary/30" />
                  </div>
                  <motion.div
                    className="absolute -bottom-3 -right-3 bg-white p-2 rounded-full shadow-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <MapPin size={16} className="text-white" />
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="w-full md:w-3/4">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  "The perfect match we couldn't have found anywhere else!"
                </h3>
                <p className="text-gray-600 mb-4">
                  "After trying several services, we found our perfect match
                  through this platform. The verification process gave us
                  confidence, and we're forever grateful."
                </p>

                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-800">
                    Rohan & Priya Sharma
                  </p>
                  <motion.button
                    className="text-primary font-medium flex items-center gap-1"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    View Story <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes floatPetal {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          100% {
            transform: translate(calc(100vw + 50px), calc(100vh + 50px))
              rotate(360deg);
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Title text shimmer effect */
        .title-text {
          background-size: 200% auto;
          animation: titleShimmer 3s ease-in-out infinite alternate;
          text-shadow: 0 2px 15px rgba(255, 105, 180, 0.2);
        }

        @keyframes titleShimmer {
          0% {
            background-position: left center;
          }
          100% {
            background-position: right center;
          }
        }
      `}</style>
    </section>
  );
};

// Arrow icon component
const ArrowRight = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default SpecialtySection;
