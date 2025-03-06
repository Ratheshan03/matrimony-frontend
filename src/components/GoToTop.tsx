"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // You can adjust the scroll threshold as needed
    if (window.scrollY > 1200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",

    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 bg-[#FF6B35] text-white 
      p-4 rounded-full shadow-2xl hover:bg-[#FF6B35]/90 
      transition-all duration-300 ease-in-out 
      animate-bounce-slow group"
      aria-label="Scroll to Top"
    >
      <FaArrowUp
        className="text-2xl transform transition-transform 
        duration-300 group-hover:-translate-y-1 
        group-hover:scale-110"
      />
    </button>
  );
};

export default ScrollToTopButton;