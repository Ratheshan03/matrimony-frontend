"use client";

import { FC } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer
      className={`${styles.footer} py-16 bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white relative`}
    >
      {/* Glassmorphic Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 blur-lg"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div
          className={`${styles["footer-container"]} grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left`}
        >
          {/* Logo and About */}
          <div>
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Matrimony Site
            </h2>
            <p className="text-sm text-gray-400 mb-6">
              Your one-stop destination for finding meaningful connections. Join
              today and embark on your journey to forever.
            </p>
            <div className="flex justify-center lg:justify-start items-center space-x-2 text-red-400">
              <BsFillHeartFill className="animate-pulse" />
              <p>Made with love for you.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-red-400">
              Quick Links
            </h3>
            <nav className="flex flex-col items-center lg:items-start space-y-2">
              <Link href="/about" className="hover:text-red-400 transition">
                About Us
              </Link>
              <Link href="/contact" className="hover:text-red-400 transition">
                Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-red-400 transition"
              >
                Privacy Policy
              </Link>
              <Link href="/profiles" className="hover:text-red-400 transition">
                Browse Profiles
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 underline underline-offset-8 decoration-red-400">
              Connect With Us
            </h3>
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="#"
                className="hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform"
                aria-label="Twitter"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="#"
                className="hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="mailto:support@matrimonysite.com"
                className="hover:scale-110 transition-transform"
                aria-label="Email"
              >
                <FaEnvelope size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Legal Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Matrimony Site. All rights reserved.
          </p>
          <p>
            By using this site, you agree to our{" "}
            <Link
              href="/terms-of-service"
              className="text-red-400 hover:underline"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy-policy"
              className="text-red-400 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
