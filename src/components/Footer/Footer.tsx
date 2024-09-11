"use client";

import { FC } from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={`${styles.footer} bg-gray-800 text-white py-8`}>
      {/* Main Footer Container */}
      <div className="container mx-auto px-4">
        <div className={`${styles["footer-container"]}`}>
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center lg:items-center">
            <h2 className="text-2xl font-bold">Matrimony Site</h2>
            <p className="text-sm italic text-gray-300">
              Find your perfect match with us.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-center">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <nav className={styles.links}>
              <Link
                href="/about"
                className="text-gray-500 hover:underline hover:text-gray-200"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-500 hover:underline hover:text-gray-200"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:underline hover:text-gray-200"
              >
                Profiles
              </Link>
              {/* <Link
                href="/terms-of-service"
                className="text-gray-500 hover:underline hover:text-gray-200"
              >
                Terms of Service
              </Link> */}
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center lg:items-center">
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

        {/* Legal Section */}
        <div
          className={`${styles["legal-section"]} border-t border-gray-700 mt-6 pt-4`}
        >
          <p className="text-sm">
            © {new Date().getFullYear()} Matrimony Site. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
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
            . We strive to maintain the utmost privacy and respect for all our
            users. For further information, please refer to our legal documents.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Need help? Visit our{" "}
            <Link href="/contact" className="text-red-400 hover:underline">
              Contact Us
            </Link>{" "}
            page for assistance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
