import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SpecialtySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const specialties = [
    {
      title: "Personalized Matchmaking",
      description:
        "Experience tailored recommendations designed specifically for you to find the perfect match.",
      icon: "/images/couple.png",
      color: "from-pink-500 to-red-400",
      delay: 0,
    },
    {
      title: "Advanced Search Filters",
      description:
        "Filter through profiles with precision using advanced search options that cater to your preferences.",
      icon: "/images/search1.png",
      color: "from-purple-500 to-indigo-400",
      delay: 0.2,
    },
    {
      title: "Verified Profiles",
      description:
        "Interact with real, verified profiles to ensure authenticity and safety during your search.",
      icon: "/images/user.png",
      color: "from-blue-500 to-teal-400",
      delay: 0.4,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="specialty"
      className="relative min-h-screen flex items-center py-24 overflow-hidden "
    >
      {/* Background Elements - Floral Matrimonial Theme */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Flowing flower petals */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(12)].map((_, i) => {
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
        <div className="absolute -left-16 top-0 w-70 h-70 transition-transform duration-700 ease-in-out opacity-70">
          <Image
            src="/images/floral-p.png"
            alt="Floral Design"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>

        <div className="absolute -right-16 bottom-0 w-70 h-70 transition-transform duration-700 ease-in-out opacity-70 transform rotate-180">
          <Image
            src="/images/floral-p.png"
            alt="Floral Design"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 my-auto max-w-8xl">
        {/* Section Heading with enhanced styling */}
        <div
          className="text-center max-w-3xl mx-auto mb-16 relative"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <h2 className="text-4xl md:text-6xl font-bold p-3 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-purple-500 title-text">
            Our Specialty
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mx-auto">
            We pride ourselves on offering innovative features designed to make
            your journey seamless, personalized, and secure. Explore what sets
            us apart.
          </p>
          <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-pink-500 to-red-400 rounded-full"></div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="specialty-card relative bg-white rounded-2xl p-6 overflow-hidden transition-all duration-500 group hover:shadow-xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateY(0) rotate(0)"
                  : "translateY(50px) rotate(2deg)",
                transition: `opacity 0.7s ease ${item.delay}s, transform 0.7s ease ${item.delay}s`,
              }}
            >
              {/* Background flower pattern */}
              <div className="absolute -right-12 -bottom-12 w-40 h-40 opacity-15 transform rotate-45 pointer-events-none transition-opacity duration-500 group-hover:opacity-35">
                <Image
                  src="/images/floral-pp.png"
                  alt="Floral Pattern"
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>

              {/* Gradient Accent Circle */}
              <div className="relative mb-6 inline-block">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:scale-110`}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                    className="object-contain filter brightness-0 invert"
                  />
                </div>

                {/* Decorative ripple effect */}
                <div
                  className={`absolute top-0 left-0 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-40 transition-all duration-1000 animate-ping-slow`}
                ></div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-red-600 transition-all duration-300">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                {item.description}
              </p>

              {/* Hidden decorative flowers that appear on hover */}
              <div className="absolute top-3 right-3 opacity-0 transform rotate-45 scale-0 group-hover:opacity-20 group-hover:scale-100 transition-all duration-500">
                <div className="w-5 h-5 rounded-full bg-pink-300"></div>
              </div>
              <div className="absolute bottom-3 left-3 opacity-0 transform -rotate-45 scale-0 group-hover:opacity-20 group-hover:scale-100 transition-all duration-500">
                <div className="w-3 h-3 rounded-full bg-purple-300"></div>
              </div>
            </div>
          ))}
        </div>
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
          letter-spacing: 0.5px;
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

export default SpecialtySection;
