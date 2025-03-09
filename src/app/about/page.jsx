"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { Heart, Target, Globe, Users, Shield, Award, Star, Coffee, Clock } from "lucide-react";

const AboutUsPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardHoverVariants = {
    idle: { 
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      borderTop: "2px solid transparent",
      y: 0
    },
    hover: { 
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      borderTop: "2px solid #FF9F1C",
      y: -5
    }
  };

  // Sections content
  const sections = [
    {
      title: "Our Mission",
      description:
        "We are dedicated to creating meaningful connections that last a lifetime. Our platform goes beyond traditional matchmaking, focusing on compatibility, shared values, and genuine human connections.",
      icon: <Target className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Who We Are",
      description:
        "Founded in 2015, our matrimony platform has revolutionized the way people find their life partners. With advanced matching algorithms and a human-centric approach, we've successfully united thousands of couples.",
      icon: <Users className="w-12 h-12 text-pink-600" />,
    },
    {
      title: "Our Commitment",
      description:
        "We prioritize safety, privacy, and genuine connections. Our rigorous verification process, advanced security measures, and personalized matching system ensure a trustworthy and meaningful matchmaking experience.",
      icon: <Shield className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "Global Reach",
      description:
        "Connecting hearts across cultures and continents. Our platform transcends geographical boundaries, bringing together individuals from diverse backgrounds with a shared goal of finding true companionship.",
      icon: <Globe className="w-12 h-12 text-green-600" />,
    },
  ];

  // Core values
  const coreValues = [
    {
      title: "Authentic Matches",
      description: "We focus on creating meaningful connections based on compatibility, values, and genuine personality traits.",
      icon: <Heart className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Privacy First",
      description: "Your personal information is always protected with our enterprise-grade security and privacy controls.",
      icon: <Shield className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "24/7 Support",
      description: "Our dedicated relationship consultants are available around the clock to assist with any questions or concerns.",
      icon: <Clock className="w-10 h-10 text-purple-500" />,
    },
    {
      title: "Cultural Respect",
      description: "We celebrate diversity and help you find matches that honor your cultural values and traditions.",
      icon: <Globe className="w-10 h-10 text-green-500" />,
    },
  ];

  // Team members
  const teamMembers = [
    {
      name: "Aria Patel",
      role: "Founder & CEO",
      image: "/images/team/aria-patel.jpg",
      bio: "A visionary entrepreneur with a passion for bringing people together.",
    },
    {
      name: "Rohan Sharma",
      role: "Chief Technology Officer",
      image: "/images/team/rohan-sharma.jpg",
      bio: "Tech innovator driving our advanced matching algorithms.",
    },
    {
      name: "Maya Krishnamurthy",
      role: "Head of User Experience",
      image: "/images/team/maya-krishnamurthy.jpg",
      bio: "Designing intuitive and meaningful user journeys.",
    },
  ];

  // Milestone statistics
  const milestones = [
    {
      value: "10M+",
      label: "Connections Made",
      icon: <Heart className="w-8 h-8 text-red-500" />,
    },
    {
      value: "95%",
      label: "User Satisfaction Rate",
      icon: <Award className="w-8 h-8 text-yellow-500" />,
    },
    {
      value: "50+",
      label: "Countries Served",
      icon: <Globe className="w-8 h-8 text-green-500" />,
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* Modern Hero Section with Background Overlay */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/80 via-pink-600/80 to-red-500/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute top-0 left-0 w-full h-full z-20">
          <div className="h-full flex flex-col items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center max-w-4xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">Hearts</span>
              </h1>
              <div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded mb-6"></div>
              <p className="text-xl md:text-2xl mb-10 text-white">
                A trusted platform where love knows no boundaries, and meaningful
                connections transform lives.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-800 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Our Journey Section with Glass Effect Cards */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-purple-800"
          >
            Our Journey
          </motion.h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how we're revolutionizing the way people find their perfect life partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial="idle"
              whileHover="hover"
              variants={cardHoverVariants}
              className="bg-white backdrop-blur-sm bg-opacity-80 p-8 rounded-lg shadow-md transition-all duration-300 relative overflow-hidden"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto"
              >
                {section.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-800 text-center">{section.title}</h3>
              <p className="text-gray-700 text-center">{section.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Values Section - Modern Feature Grid */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-purple-800"
            >
              Our Core Values
            </motion.h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our mission to unite hearts around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start p-6 bg-white rounded-lg shadow-md"
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-500/10 flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-purple-800">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-purple-800"
          >
            Meet Our Visionary Team
          </motion.h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded mb-12"></div>
          
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="w-72 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg overflow-hidden transition-all duration-300"
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-purple-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-pink-600 mb-3 font-medium">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                  <div className="flex mt-4 space-x-2">
                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-purple-100">
                      <svg className="w-4 h-4 text-purple-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-purple-100">
                      <svg className="w-4 h-4 text-purple-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-colors hover:bg-purple-100">
                      <svg className="w-4 h-4 text-purple-800" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="bg-gradient-to-r from-purple-800/10 to-pink-500/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 text-purple-800"
          >
            Our Impact at a Glance
          </motion.h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-yellow-400 to-orange-500 rounded mb-12"></div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                className="w-64 p-6 bg-white rounded-xl shadow-md relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500"></div>
                <div className="flex justify-center mb-4">{milestone.icon}</div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="text-5xl font-bold text-purple-800 mb-2"
                >
                  {milestone.value}
                </motion.h3>
                <p className="text-gray-600">{milestone.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        className="bg-gradient-to-r from-purple-800/80 via-pink-600/80 to-red-500/80 text-white py-20 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/images/cta-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands who have found their soulmate. Your journey to love and
            companionship starts here.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-800 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg"
          >
            Get Started
          </motion.button>
          <div className="mt-12 pt-12 border-t border-white/20 flex justify-center space-x-8">
            <a href="#" className="text-white hover:text-pink-200 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-200 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-pink-200 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;