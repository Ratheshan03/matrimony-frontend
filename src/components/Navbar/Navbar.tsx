"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Dummy user state (can be replaced with actual auth logic)
  const isLoggedIn = false;
  const userName = "John Doe";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = [
    { href: "/", label: "Home" },
    { href: "/profiles", label: "Profiles" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Conditional nav link rendering - always show Home on other pages
  const filteredNavLinks =
    pathname === "/" ? NavLinks.filter((link) => link.href !== "/") : NavLinks;

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out 
          ${
            isScrolled
              ? "bg-gradient-to-r from-[#FFE5D9]/80 via-[#FFD9C0]/70 to-[#FFC9B1]/80 backdrop-blur-md"
              : "bg-transparent"
          }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo Placeholder */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/images/logo-nav.png"
              alt="Logo"
              width={280}
              height={280}
              className="transition-transform duration-300 hover:scale-110 "
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-12"
            aria-label="Main Navigation"
          >
            {filteredNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xl font-medium tracking-wide transition-all duration-300 
                  ${
                    isScrolled
                      ? pathname === link.href
                        ? "text-[#FF6B35] transform scale-110"
                        : "text-gray-700 hover:text-[#FF6B35] hover:transform hover:scale-105"
                      : pathname === link.href
                      ? "text-white transform scale-110 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                      : "text-white/80 hover:text-white hover:transform hover:scale-105 hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                  }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Authentication/Profile Section */}
            {isLoggedIn ? (
              <Link
                href="/profile"
                className="flex items-center space-x-3 px-4 py-2 bg-[#FF6B35]/10 rounded-full 
                hover:bg-[#FF6B35]/20 transition-all duration-300 group"
              >
                <div className="relative">
                  <Image
                    src="/profile-icon.png"
                    alt="Profile"
                    width={36}
                    height={36}
                    className="rounded-full group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Hi, Welcome</span>
                  <span className="text-sm text-[#FF6B35] font-medium group-hover:text-[#FF6B35]/80">
                    {userName}
                  </span>
                </div>
              </Link>
            ) : (
              <Link
                href="/auth/register"
                className={`flex items-center space-x-3 px-7 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full 
                ${styles.signInButton} ${styles.pulseAnimation}
                text-xl font-medium tracking-wide transition-all duration-300`}
              >
                <FiUser className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span
                  className={`${
                    isScrolled
                      ? "text-white hover:text-white/80"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  Sign In
                </span>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className={`md:hidden flex items-center focus:outline-none 
              ${isScrolled ? "text-[#FF6B35]" : "text-white"}`}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu - Full Screen */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-[#FFE5D9] to-[#FFC9B1] z-40 
          flex flex-col overflow-y-auto pt-24 pb-12 space-y-6 p-6 animate-fadeIn"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-[#FF6B35]"
          >
            <FiX size={24} />
          </button>

          {filteredNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className={`text-center text-2xl font-medium 
                ${
                  pathname === link.href
                    ? "text-[#FF6B35]"
                    : "text-gray-700 hover:text-[#FF6B35]"
                }`}
            >
              {link.label}
            </Link>
          ))}

          {isLoggedIn ? (
            <Link
              href="/profile"
              onClick={toggleMenu}
              className="mt-6 flex items-center justify-center space-x-2 text-xl text-[#FF6B35]"
            >
              Profile
            </Link>
          ) : (
            <Link
              href="/login"
              onClick={toggleMenu}
              className="mt-6 mx-auto px-8 py-3 bg-[#FF6B35] text-white rounded-full text-xl hover:bg-opacity-90"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
