"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for the burger menu
import styles from "./Navbar.module.css"; // CSS module for advanced styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // Dummy user state (can be replaced with actual auth logic)
  const isLoggedIn = false;
  const userName = "John Doe"; // Placeholder for logged-in user name

  // Toggle burger menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.navbar} ${
        isScrolled ? styles.scrolled : ""
      } fixed top-0 w-full z-50 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full hover:scale-110 transition-transform"
          />
          <span className="text-xl font-bold text-red-500 hover:text-red-400 transition-colors">
            Matrimony Site
          </span>
        </Link>

        {/* Main Navigation */}
        <nav
          className={`${styles.navLinks} hidden md:flex space-x-6`}
          aria-label="Main Navigation"
        >
          {["/", "/profiles", "/about", "/contact"].map((link, index) => (
            <Link
              key={index}
              href={link}
              className={pathname === link ? styles.activeLink : styles.navLink}
            >
              {link === "/" ? "Home" : link.replace("/", "").toUpperCase()}
            </Link>
          ))}
          {isLoggedIn ? (
            <div className="relative">
              <button className="nav-btn flex items-center space-x-2">
                <span className="text-gray-300">Welcome, {userName}</span>
                <Image
                  src="/profile-icon.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </button>
            </div>
          ) : (
            <Link href="/login" className={styles.navLink}>
              Sign In
            </Link>
          )}
        </nav>

        {/* Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="nav-burgerbtn  md:hidden flex items-center focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menuOpen ? styles.mobileMenuOpen : styles.mobileMenu
        } md:hidden transition-all duration-300 ease-in-out`}
      >
        {["/", "/profiles", "/about", "/contact"].map((link, index) => (
          <Link
            key={index}
            href={link}
            onClick={toggleMenu}
            className={pathname === link ? styles.activeLink : styles.navLink}
          >
            {link === "/" ? "Home" : link.replace("/", "").toUpperCase()}
          </Link>
        ))}
        {isLoggedIn ? (
          <Link href="/profile" onClick={toggleMenu} className={styles.navLink}>
            Welcome, {userName}
          </Link>
        ) : (
          <Link href="/login" onClick={toggleMenu} className={styles.navLink}>
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
