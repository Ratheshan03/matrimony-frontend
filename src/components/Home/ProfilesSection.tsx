import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, MessageCircle, User } from "lucide-react";

const ProfilesSection = () => {
  const [activeProfile, setActiveProfile] = useState(1);

  // Auto rotate featured profile every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProfile((prev) => (prev === 4 ? 1 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Profile data
  const profileData = [
    {
      id: 1,
      name: "Emma",
      age: 25,
      location: "New York",
      occupation: "Designer",
      interests: ["Art", "Travel", "Photography"],
    },
    {
      id: 2,
      name: "James",
      age: 27,
      location: "San Francisco",
      occupation: "Developer",
      interests: ["Tech", "Hiking", "Music"],
    },
    {
      id: 3,
      name: "Sophia",
      age: 24,
      location: "Miami",
      occupation: "Photographer",
      interests: ["Nature", "Fashion", "Cuisine"],
    },
    {
      id: 4,
      name: "Noah",
      age: 26,
      location: "Seattle",
      occupation: "Architect",
      interests: ["Design", "Kayaking", "Reading"],
    }
  ];

  // Profile card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Animated flower elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-64 h-64 rounded-full bg-[#ffab73]/20 blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ top: "10%", left: "5%" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-[#a8d1ff]/30 blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ bottom: "5%", right: "10%" }}
        />
        <motion.div
          className="absolute w-56 h-56 rounded-full bg-[#f7d9ff]/25 blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{ top: "40%", right: "20%" }}
        />
      </div>

      {/* Header with animation */}
      <motion.div
        className="container mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 tracking-wide">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-400">
            Meet New People
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Check out a preview of our most popular profiles. Log in to discover
          even more details and connect with amazing people!
        </p>
      </motion.div>

      {/* Featured Profile */}
      <div className="container mx-auto mb-20">
        <div className="relative bg-white/70 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl">
          <motion.div
            className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary"
            animate={{
              scaleX: [0, 1, 0],
              x: ["-100%", "0%", "100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="flex flex-col md:flex-row">
            {/* Featured Image */}
            <div className="md:w-1/3 relative overflow-hidden h-72 md:h-auto">
              {profileData.map((profile) => (
                <motion.div
                  key={profile.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeProfile === profile.id ? 1 : 0,
                    scale: activeProfile === profile.id ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={`/images/profile.jpg`}
                    alt={profile.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium">Online now</span>
                </div>
              </div>
            </div>

            {/* Featured Details */}
            <div className="md:w-2/3 p-6 md:p-8">
              {profileData.map((profile) => (
                <motion.div
                  key={profile.id}
                  className="h-full flex flex-col"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: activeProfile === profile.id ? 1 : 0,
                    x: activeProfile === profile.id ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    display: activeProfile === profile.id ? "flex" : "none",
                  }}
                >
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-3xl font-bold text-gray-800">
                        {profile.name}
                      </h3>
                      <span className="text-lg text-gray-500">
                        {profile.age}
                      </span>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {profile.location}
                      </span>
                    </div>
                    <p className="text-xl text-gray-700 font-medium mb-2">
                      {profile.occupation}
                    </p>
                    <div className="flex flex-wrap gap-2 my-4">
                      {profile.interests.map((interest, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 flex-grow">
                    {profile.name} is an active member who loves connecting with
                    people who share similar interests. Discover more about
                    their life, passions, and what they're looking for.
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <motion.button
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/30 border border-gray-100 text-gray-700 hover:border-gray-200 hover:bg-secondary transition-all"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Heart size={18} color="red" />
                      <span>Like</span>
                    </motion.button>
                    <motion.button
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/30 border border-gray-100 text-gray-700 hover:border-gray-200 hover:bg-secondary transition-all"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle size={18} color="blue" />
                      <span>Message</span>
                    </motion.button>
                    <motion.button
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-red-400 text-white shadow-md hover:shadow-lg transition-all ml-auto"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Full Profile</span>
                      <ArrowRight size={18} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}

              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-8">
                {profileData.map((profile) => (
                  <button
                    key={profile.id}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeProfile === profile.id
                        ? "bg-primary w-6"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    onClick={() => setActiveProfile(profile.id)}
                    aria-label={`View ${profile.name}'s profile`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profiles Grid - Improved */}
      <div className="container mx-auto mb-16">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800">Popular Profiles</h3>
          <button className="text-pink-700 font-medium flex items-center gap-1 hover:underline">
            Browse all <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.map((profile, i) => (
            <motion.div
              key={profile.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-3xl" />

              {/* Profile Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={`/images/profile.jpg`}
                  alt={profile.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  whileHover={{ y: 0 }}
                >
                  <div className="flex gap-2 justify-end">
                    <motion.button
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-primary shadow-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Heart size={15} />
                    </motion.button>
                    <motion.button
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-primary shadow-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle size={15} />
                    </motion.button>
                    <motion.button
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-primary shadow-md"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <User size={15} />
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Profile Details */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    {profile.name}
                  </h3>
                  <span className="text-sm text-gray-500">{profile.age}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  {profile.occupation} · {profile.location}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {profile.interests.slice(0, 2).map((interest, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      {interest}
                    </span>
                  ))}
                  {profile.interests.length > 2 && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                      +{profile.interests.length - 2}
                    </span>
                  )}
                </div>

                <motion.button
                  className="w-full py-2 mt-2 text-sm font-medium text-center rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-300 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Profile
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Link
          href="/login"
          className="group relative inline-flex items-center gap-2 px-8 py-4 overflow-hidden bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="relative z-10">Log in to Explore More Profiles</span>
          <motion.span
            className="relative z-10"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight />
          </motion.span>
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        </Link>
        <p className="mt-4 text-gray-600">
          Already a member?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default ProfilesSection;
