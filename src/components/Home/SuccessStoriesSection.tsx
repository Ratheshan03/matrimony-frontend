import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Stars,
  Sparkles,
} from "lucide-react";

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayTimerRef = useRef(null);
  const carouselRef = useRef(null);

  const stories = [
    {
      id: 1,
      name: "Aisha & Rahul",
      image: "/images/story.jpg",
      quote:
        "After 3 months on the platform, I found someone who truly understands me. We're now planning our wedding!",
      date: "Together since April 2024",
      location: "Mumbai, India",
    },
    {
      id: 2,
      name: "Michael & Sarah",
      image: "/images/story.jpg",
      quote:
        "I was skeptical about online matchmaking until I met Sarah. Your compatibility algorithm really works!",
      date: "Married December 2023",
      location: "Sydney, Australia",
    },
    {
      id: 3,
      name: "Javier & Elena",
      image: "/images/story.jpg",
      quote:
        "We connected instantly over our shared passion for travel. Six months later, we're exploring the world together.",
      date: "Together since August 2023",
      location: "Barcelona, Spain",
    },
    {
      id: 4,
      name: "Priya & Vikram",
      image: "/images/story.jpg",
      quote:
        "The personalized matchmaking feature introduced us. It was like the algorithm knew us better than we knew ourselves!",
      date: "Engaged February 2024",
      location: "Delhi, India",
    },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    if (isAutoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(autoplayTimerRef.current);
  }, [isAutoplay, stories.length]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setIsAutoplay(false);
  const handleMouseLeave = () => setIsAutoplay(true);

  // Navigate to previous story
  const prevStory = () => {
    setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  // Navigate to next story
  const nextStory = () => {
    setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  // Calculate position for each card with enhanced 3D effect
  const getCardStyle = (index) => {
    const diff = index - activeIndex;

    // Wrap around for circular effect
    if (diff < -2)
      return {
        zIndex: 0,
        opacity: 0,
        x: "120%",
        scale: 0.7,
        rotateY: 60,
        rotateX: 5,
        z: "-200px",
      };
    if (diff > 2)
      return {
        zIndex: 0,
        opacity: 0,
        x: "-120%",
        scale: 0.7,
        rotateY: -60,
        rotateX: 5,
        z: "-200px",
      };

    // Position based on difference from active with enhanced 3D
    if (diff === -2)
      return {
        zIndex: 1,
        opacity: 0.3,
        x: "-90%",
        scale: 0.75,
        rotateY: -35,
        rotateX: 3,
        z: "-150px",
      };
    if (diff === -1)
      return {
        zIndex: 2,
        opacity: 0.7,
        x: "-65%",
        scale: 0.85,
        rotateY: -20,
        rotateX: 2,
        z: "-100px",
      };
    if (diff === 0)
      return {
        zIndex: 3,
        opacity: 1,
        x: "0%",
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        z: "0px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      };
    if (diff === 1)
      return {
        zIndex: 2,
        opacity: 0.7,
        x: "65%",
        scale: 0.85,
        rotateY: 20,
        rotateX: 2,
        z: "-100px",
      };
    if (diff === 2)
      return {
        zIndex: 1,
        opacity: 0.3,
        x: "90%",
        scale: 0.75,
        rotateY: 35,
        rotateX: 3,
        z: "-150px",
      };
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-7 md:px-14 lg:px-20 overflow-hidden">
      {/* Enhanced Floating Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-to-br from-[#ffd1dc] to-[#ffab73] opacity-25 absolute top-20 left-8 sm:left-16 w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="bg-gradient-to-bl from-[#cce5ff] to-[#a8d1ff] opacity-30 absolute bottom-8 right-8 sm:right-16 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full filter blur-2xl animate-float"></div>

        {/* Corner elements - top left */}
        <div className="absolute top-0 left-0 w-40 sm:w-64 h-40 sm:h-64 opacity-20">
          <div className="w-20 sm:w-32 h-20 sm:h-32 bg-pink-300 rounded-full filter blur-xl absolute top-6 sm:top-10 left-6 sm:left-10 animate-pulse-slow"></div>
          <div className="w-16 sm:w-24 h-16 sm:h-24 bg-purple-300 rounded-full filter blur-lg absolute top-16 sm:top-24 left-16 sm:left-24 animate-float-delay"></div>
        </div>

        {/* Corner elements - bottom right */}
        <div className="absolute bottom-0 right-0 w-40 sm:w-64 h-40 sm:h-64 opacity-20">
          <div className="w-24 sm:w-40 h-24 sm:h-40 bg-blue-300 rounded-full filter blur-xl absolute bottom-6 sm:bottom-10 right-6 sm:right-10 animate-float"></div>
          <div className="w-20 sm:w-28 h-20 sm:h-28 bg-pink-200 rounded-full filter blur-lg absolute bottom-20 sm:bottom-28 right-12 sm:right-20 animate-pulse-slow-delay"></div>
        </div>

        {/* Enhanced floating hearts with shimmer effect */}
        {[...Array(12)].map((_, i) => {
          const size = Math.random() * 20 + 10;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 5;
          const duration = Math.random() * 25 + 15;
          const rotate = Math.random() * 360;

          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                animation: `float ${duration}s ${delay}s infinite ease-in-out`,
                transform: `rotate(${rotate}deg)`,
              }}
            >
              <div className="relative">
                <Heart
                  size={size}
                  className="text-pink-400 opacity-30"
                  fill="currentColor"
                />
                <div className="absolute inset-0 heart-shimmer"></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Content Container */}
      <div className="container mx-auto text-center relative z-20">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-transparent text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-purple-500">
            Success(Love) Stories
          </span>
          <span className="block text-xl sm:text-2xl font-semibold mt-2 text-gray-600">
            That Begin With Us
          </span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Real people. Real connections. See how our platform has changed lives
          and brought people closer together.
        </motion.p>

        {/* Enhanced 3D Carousel */}
        <div
          className="relative h-[600px] perspective-[2000px] max-w-6xl mx-auto"
          ref={carouselRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-full h-full">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                className="absolute top-0 left-0 right-0 mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl bg-white shadow-xl p-6 sm:p-8 cursor-pointer transform-style-3d backface-visibility-hidden"
                initial={getCardStyle(index)}
                animate={getCardStyle(index)}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                onClick={() => setActiveIndex(index)}
                whileHover={{
                  scale:
                    index === activeIndex
                      ? 1.05
                      : getCardStyle(index).scale + 0.03,
                  rotateX:
                    index === activeIndex
                      ? -5
                      : getCardStyle(index).rotateX - 2,
                  z: index === activeIndex ? "30px" : getCardStyle(index).z,
                }}
              >
                {/* Enhanced card with 3D layers */}
                <div className="flex flex-col items-center">
                  {/* Enhanced top decorative element */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/30 to-purple-100 rounded-full filter blur-xl opacity-50 -z-10 transform translate-x-10 -translate-y-10"></div>

                  {/* Card inner glow effect */}
                  <div className="absolute inset-4 bg-gradient-to-br from-primary/60 to-pink-50 rounded-xl -z-5 opacity-80 backdrop-blur-sm"></div>

                  {/* Larger Couple Image with enhanced frame */}
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6 relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 opacity-20 mix-blend-overlay"></div>
                    <Image
                      src={story.image}
                      alt={story.name}
                      width={195}
                      height={195}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>

                  {/* Enhanced Heart Icon with animation */}
                  <motion.div
                    className="absolute top-32 sm:top-36 right-10 sm:right-16 transform rotate-12"
                    initial={{ scale: 0.8, opacity: 0.8 }}
                    animate={
                      index === activeIndex
                        ? {
                            scale: [0.8, 1.2, 0.9, 1.1, 1],
                            opacity: [0.8, 1, 0.9, 1, 0.9],
                            rotate: [12, 5, 15, 8, 12],
                          }
                        : {}
                    }
                    transition={
                      index === activeIndex
                        ? {
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }
                        : {}
                    }
                  >
                    <div className="relative">
                      <Heart
                        size={28}
                        fill="#fd2c79"
                        color="#fd2c79"
                        className="drop-shadow-md"
                      />
                      <div className="absolute inset-0 heart-pulse"></div>
                    </div>
                  </motion.div>

                  {/* Story Details */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 relative z-10">
                    {story.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-500 font-medium mb-4 relative z-10">
                    {story.date} • {story.location}
                  </p>

                  <div className="flex mb-4 sm:mb-6 relative z-10">
                    {[...Array(5)].map((_, i) => (
                      <motion.svg
                        key={i}
                        viewBox="0 0 24 24"
                        className="w-4 sm:w-5 h-4 sm:h-5 text-amber-500"
                        fill="currentColor"
                        initial={
                          index === activeIndex
                            ? { scale: 0.8, opacity: 0.7 }
                            : {}
                        }
                        animate={
                          index === activeIndex ? { scale: 1, opacity: 1 } : {}
                        }
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </motion.svg>
                    ))}
                  </div>

                  <div className="relative mb-4 sm:mb-6 z-10">
                    <div className="absolute left-0 top-0 text-4xl sm:text-6xl text-red-300 opacity-70 font-serif">
                      "
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed italic text-center px-4 sm:px-6">
                      {story.quote}
                    </p>
                    <div className="absolute right-0 bottom-0 text-4xl sm:text-6xl text-red-300 opacity-70 font-serif">
                      "
                    </div>
                  </div>

                  {/* Enhanced Action Button */}
                  <motion.button
                    className="px-4 sm:px-6 py-2 bg-gradient-to-r  from-pink-500 to-red-500 text-white text-sm sm:text-base font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0,
                      y: index === activeIndex ? 0 : 20,
                    }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="relative z-10">Read Full Story</span>
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Navigation Controls - Responsive */}
          <motion.button
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white z-10 transition-all duration-300"
            onClick={prevStory}
            aria-label="Previous story"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </motion.button>

          <motion.button
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white z-10 transition-all duration-300"
            onClick={nextStory}
            aria-label="Next story"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} className="text-gray-700" />
          </motion.button>

          {/* Enhanced Indicator Dots */}
          <div className="absolute -bottom-2 sm:bottom-0 left-0 right-0 flex justify-center gap-2 mb-4">
            {stories.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 w-6 sm:w-8"
                    : "bg-gray-300 hover:bg-gray-400 w-2 sm:w-2.5"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to story ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-8deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-slow-delay {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(0.95);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.05);
          }
        }

        @keyframes heart-shimmer {
          0%,
          100% {
            background-position: -100% 0;
          }
          50% {
            background-position: 200% 0;
          }
        }

        @keyframes heart-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }

        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 7s 1s infinite;
        }

        .animate-float {
          animation: float 8s infinite;
        }

        .animate-float-delay {
          animation: float-delay 9s 2s infinite;
        }

        .perspective-[2000px] {
          perspective: 2000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }

        .backface-visibility-hidden {
          backface-visibility: hidden;
        }

        .heart-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: heart-shimmer 3s infinite;
        }

        .heart-pulse {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(253, 44, 121, 0.6) 0%,
            rgba(253, 44, 121, 0) 70%
          );
          animation: heart-pulse 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;
