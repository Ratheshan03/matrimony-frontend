"use client";

import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Matrimony Site. All rights reserved.
        </p>
        <nav className="mt-2" aria-label="Footer Navigation">
          <a href="#" className="text-red-400 hover:underline mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-red-400 hover:underline mx-2">
            Terms of Service
          </a>
          <a href="#" className="text-red-400 hover:underline mx-2">
            Contact Us
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
