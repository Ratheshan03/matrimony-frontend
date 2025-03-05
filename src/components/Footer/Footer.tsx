"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  const QuickLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/profiles", label: "Browse Profiles" },
    { href: "/success-stories", label: "Success Stories" },
  ];

  const SocialLinks = [
    {
      href: "#",
      icon: FaFacebook,
      label: "Facebook",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      href: "#",
      icon: FaTwitter,
      label: "Twitter",
      color: "text-sky-500 hover:text-sky-600",
    },
    {
      href: "#",
      icon: FaInstagram,
      label: "Instagram",
      color: "text-pink-500 hover:text-pink-600",
    },
    {
      href: "#",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "text-blue-700 hover:text-blue-800",
    },
    {
      href: "#",
      icon: FaGithub,
      label: "GitHub",
      color: "text-gray-800 hover:text-black",
    },
    {
      href: "mailto:support@matrimonysite.com",
      icon: FaEnvelope,
      label: "Email",
      color: "text-red-500 hover:text-red-600",
    },
  ];

  return (
    <footer
      className={`${styles.footer} py-16 bg-gradient-to-r from-gray-800 via-black to-gray-900 text-white relative overflow-hidden`}
    >
      {/* Glassmorphic Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-transparent to-blue-500/10 blur-lg"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left">
          {/* Logo and About */}
          <div>
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
              <Image
                src="/images/logo-nav.png"
                alt="Matrimony Site Logo"
                width={250}
                height={250}
                className="rounded-3xl drop-shadow-sm"
              />
              
            </div>
            <p className="text-sm text-gray-400 mb-6 text-center lg:text-left">
              Your one-stop destination for finding meaningful connections. Join
              today and embark on your journey to forever.
            </p>
            <div className="flex justify-center lg:justify-start items-center space-x-2">
              <div className="flex items-center text-red-400">
                <BsFillHeartFill className="animate-pulse mr-2" />
                <span>Made with love for you</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center lg:text-left text-white">
              Quick Links
            </h3>
            <nav className="flex flex-col items-center lg:items-start space-y-2">
              {QuickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-red-400 transition relative group"
                >
                  <span className="relative">
                    {link.label}
                    
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center lg:text-left text-white">
              Connect With Us
            </h3>
            <div className="flex justify-center lg:justify-start space-x-6">
              {SocialLinks.map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`${color} hover:scale-110 transition-all group relative`}
                  aria-label={label}
                >
                  <div className="relative">
                    <Icon
                      size={28}
                      className="group-hover:rotate-6 transition-transform"
                    />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-transparent group-hover:bg-red-500 rounded-full transition-all duration-300 ease-in-out"></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Legal Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-sm text-gray-400 space-y-4 lg:space-y-0">
          <p>© {currentYear} MatriMatch inc. All rights reserved.</p>
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
