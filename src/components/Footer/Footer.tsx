"use client";

import { FC } from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={`${styles.footer} bg-gray-800 text-white py-8`}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold">Matrimony Site</h2>
          <p className="text-sm italic text-gray-300">
            Find your perfect match with us.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <nav className={styles.links}>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact Us
            </Link>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
          </nav>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-red-400"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-red-400"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-red-400"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-white hover:text-red-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Legal Links */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Matrimony Site. All rights reserved.
        </p>
        <nav className="mt-2" aria-label="Footer Legal Navigation">
          <Link
            href="/privacy-policy"
            className="text-red-400 hover:underline mx-2"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-red-400 hover:underline mx-2"
          >
            Terms of Service
          </Link>
          <Link href="/contact" className="text-red-400 hover:underline mx-2">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
