"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Heart, Target, Globe, Users, Shield, Award } from "lucide-react";

const AboutUsPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

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
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="relative h-[70vh] bg-gradient-to-r from-purple-600 to-pink-500 text-white flex items-center justify-center"
      >
        <div className="text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200">
            Connecting Hearts, Creating Futures
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            A trusted platform where love knows no boundaries, and meaningful
            connections transform lives.
          </p>
        </div>
      </motion.div>

      {/* Our Journey Sections */}
      <div className="container mx-auto px-4 py-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            ref={sectionRefs[index]}
            initial="hidden"
            animate={useInView(sectionRefs[index]) ? "visible" : "hidden"}
            variants={fadeInVariants}
            className="flex flex-col md:flex-row items-center mb-16 space-y-6 md:space-y-0 md:space-x-12"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
              {section.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-semibold mb-4 text-purple-800">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700">{section.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-purple-800">
            Meet Our Visionary Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="w-72 bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-purple-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{member.role}</p>
                  <p className="text-gray-500">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-12 text-purple-800">
          Our Impact at a Glance
        </h2>
        <div className="flex flex-wrap justify-center gap-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 200,
              }}
              className="w-64 p-6 bg-white rounded-xl shadow-lg"
            >
              <div className="flex justify-center mb-4">{milestone.icon}</div>
              <h3 className="text-5xl font-bold text-purple-800 mb-2">
                {milestone.value}
              </h3>
              <p className="text-gray-600">{milestone.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInVariants}
        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">
          Ready to Find Your Perfect Match?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Join thousands who have found their soulmate. Your journey to love and
          companionship starts here.
        </p>
        <button className="bg-white text-purple-800 px-10 py-4 rounded-full text-lg font-semibold hover:bg-purple-100 transition-all duration-300">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default AboutUsPage;
