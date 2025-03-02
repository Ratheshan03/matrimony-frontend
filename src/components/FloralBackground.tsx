"use client";
import React, { useEffect, useState } from "react";

const FloralBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    setWindowHeight(window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax positions based on scroll
  const getParallaxPosition = (basePosition: number, speed: number) => {
    if (typeof window === "undefined") return basePosition;
    return basePosition + scrollY * speed;
  };

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* Main Vine/Path that flows through the page */}
      <svg
        className="absolute w-full h-[500%]"
        viewBox="0 0 100 500"
        preserveAspectRatio="none"
        style={{ top: -scrollY * 0.1 }}
      >
        {/* Main flowing path */}
        <path
          d="M-10,0 C30,50 70,100 20,150 C-30,200 50,250 30,300 C10,350 70,400 20,450 C-30,500 50,550 30,600"
          fill="none"
          stroke="none"
          strokeWidth="0.5"
          className="path-guide"
        />

        {/* Left side vine */}
        <path
          d="M-10,0 C30,50 70,100 20,150 C-30,200 50,250 30,300 C10,350 70,400 20,450 C-30,500 50,550 30,600"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="0.5"
          strokeDasharray="1,3"
          strokeLinecap="round"
          className="opacity-30"
        />
      </svg>

      {/* Flowers and leaves at different scroll positions */}
      <div
        className="absolute left-0 w-20 h-20"
        style={{ top: getParallaxPosition(windowHeight * 0.5, 0.2) }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <g className="flower-bloom">
            <circle
              cx="50"
              cy="50"
              r="15"
              fill="#d946ef"
              className="opacity-40"
            />
            <circle
              cx="35"
              cy="40"
              r="10"
              fill="#d946ef"
              className="opacity-40"
            />
            <circle
              cx="65"
              cy="40"
              r="10"
              fill="#d946ef"
              className="opacity-40"
            />
            <circle
              cx="35"
              cy="60"
              r="10"
              fill="#d946ef"
              className="opacity-40"
            />
            <circle
              cx="65"
              cy="60"
              r="10"
              fill="#d946ef"
              className="opacity-40"
            />
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="#fef08a"
              className="opacity-70"
            />
          </g>
        </svg>
      </div>

      <div
        className="absolute right-0 w-24 h-24"
        style={{ top: getParallaxPosition(windowHeight * 1.2, 0.3) }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <g className="flower-bloom">
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="#ec4899"
              className="opacity-30"
            />
            <circle
              cx="30"
              cy="35"
              r="15"
              fill="#ec4899"
              className="opacity-30"
            />
            <circle
              cx="70"
              cy="35"
              r="15"
              fill="#ec4899"
              className="opacity-30"
            />
            <circle
              cx="30"
              cy="65"
              r="15"
              fill="#ec4899"
              className="opacity-30"
            />
            <circle
              cx="70"
              cy="65"
              r="15"
              fill="#ec4899"
              className="opacity-30"
            />
            <circle
              cx="50"
              cy="50"
              r="12"
              fill="#fef08a"
              className="opacity-60"
            />
          </g>
        </svg>
      </div>

      <div
        className="absolute left-8 w-16 h-16"
        style={{ top: getParallaxPosition(windowHeight * 1.8, 0.25) }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <g className="flower-bloom">
            <circle
              cx="50"
              cy="50"
              r="12"
              fill="#a855f7"
              className="opacity-40"
            />
            <circle
              cx="38"
              cy="38"
              r="10"
              fill="#a855f7"
              className="opacity-40"
            />
            <circle
              cx="62"
              cy="38"
              r="10"
              fill="#a855f7"
              className="opacity-40"
            />
            <circle
              cx="38"
              cy="62"
              r="10"
              fill="#a855f7"
              className="opacity-40"
            />
            <circle
              cx="62"
              cy="62"
              r="10"
              fill="#a855f7"
              className="opacity-40"
            />
            <circle
              cx="50"
              cy="50"
              r="8"
              fill="#fef08a"
              className="opacity-70"
            />
          </g>
        </svg>
      </div>

      <div
        className="absolute right-12 w-28 h-28"
        style={{ top: getParallaxPosition(windowHeight * 2.5, 0.2) }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <g className="flower-bloom">
            <circle
              cx="50"
              cy="50"
              r="25"
              fill="#fb7185"
              className="opacity-30"
            />
            <circle
              cx="28"
              cy="28"
              r="15"
              fill="#fb7185"
              className="opacity-30"
            />
            <circle
              cx="72"
              cy="28"
              r="15"
              fill="#fb7185"
              className="opacity-30"
            />
            <circle
              cx="28"
              cy="72"
              r="15"
              fill="#fb7185"
              className="opacity-30"
            />
            <circle
              cx="72"
              cy="72"
              r="15"
              fill="#fb7185"
              className="opacity-30"
            />
            <circle
              cx="50"
              cy="50"
              r="15"
              fill="#fef08a"
              className="opacity-60"
            />
          </g>
        </svg>
      </div>

      <div
        className="absolute left-16 w-20 h-20"
        style={{ top: getParallaxPosition(windowHeight * 3.2, 0.3) }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <g className="flower-bloom">
            <circle
              cx="50"
              cy="50"
              r="15"
              fill="#c084fc"
              className="opacity-40"
            />
            <circle
              cx="35"
              cy="35"
              r="12"
              fill="#c084fc"
              className="opacity-40"
            />
            <circle
              cx="65"
              cy="35"
              r="12"
              fill="#c084fc"
              className="opacity-40"
            />
            <circle
              cx="35"
              cy="65"
              r="12"
              fill="#c084fc"
              className="opacity-40"
            />
            <circle
              cx="65"
              cy="65"
              r="12"
              fill="#c084fc"
              className="opacity-40"
            />
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="#fef08a"
              className="opacity-70"
            />
          </g>
        </svg>
      </div>

      {/* Decorative leaves */}
      <div
        className="absolute right-24 w-12 h-12 rotate-45"
        style={{ top: getParallaxPosition(windowHeight * 0.8, 0.15) }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50,20 C70,40 70,60 50,80 C30,60 30,40 50,20"
            fill="#86efac"
            className="opacity-40"
          />
        </svg>
      </div>

      <div
        className="absolute left-24 w-12 h-12 -rotate-15"
        style={{ top: getParallaxPosition(windowHeight * 1.5, 0.25) }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50,20 C70,40 70,60 50,80 C30,60 30,40 50,20"
            fill="#86efac"
            className="opacity-40"
          />
        </svg>
      </div>

      <div
        className="absolute right-10 w-12 h-12 rotate-30"
        style={{ top: getParallaxPosition(windowHeight * 2.2, 0.2) }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50,20 C70,40 70,60 50,80 C30,60 30,40 50,20"
            fill="#86efac"
            className="opacity-40"
          />
        </svg>
      </div>

      {/* Add small petals that float in the background */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-6 h-6 opacity-20 animate-float-petal"
          style={{
            left: `${Math.random() * 100}%`,
            top: getParallaxPosition(windowHeight * (Math.random() * 5), 0.1),
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="20" fill="#f9a8d4" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloralBackground;
