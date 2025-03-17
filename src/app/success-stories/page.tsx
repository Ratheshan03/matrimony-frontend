"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Heart, 
  Calendar, 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  Search,
  Star,
  Filter,
  MessageSquare,
  Share2,
  ChevronDown
} from "lucide-react";

const SuccessStoriesPage = () => {
  // For testimonial slider
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  // For filtering success stories
  const [filterCategory, setFilterCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample success stories data
  const successStories = [
    {
      id: 1,
      bride: "Priya",
      groom: "Rahul",
      marriageDate: "June 15, 2024",
      location: "Mumbai, India",
      category: "Arranged Marriage",
      story:
        "We connected on Perfect Match in January 2023. After our families met and approved, we spent time getting to know each other through calls and meetings. We found we had many common interests and similar life goals. Six months later, we decided to get married. Perfect Match made our arranged marriage process smooth and modern!",
      image: "/images/couple1.jpg",
      rating: 5,
      featured: true,
    },
    {
      id: 2,
      bride: "Ananya",
      groom: "Vikram",
      marriageDate: "March 22, 2024",
      location: "Bangalore, India",
      category: "Love Marriage",
      story:
        "We were both skeptical about matrimonial sites but decided to give Perfect Match a try. Our profiles matched with a 95% compatibility score! After chatting for a few weeks, we met for coffee and instantly connected. One year of dating later, we knew we were perfect for each other and tied the knot in a beautiful ceremony.",
      image: "/images/couple2.jpg",
      rating: 5,
      featured: true,
    },
    {
      id: 3,
      bride: "Meera",
      groom: "Arjun",
      marriageDate: "November 10, 2023",
      location: "Delhi, India",
      category: "Arranged Marriage",
      story:
        "Our families were looking for matches through traditional channels without success. My cousin suggested Perfect Match, and within two weeks, our profiles were connected. The detailed questionnaires helped us understand each other's expectations clearly. After three months of getting to know each other, we decided to get married. Thank you Perfect Match!",
      image: "/images/couple3.jpg",
      rating: 4,
      featured: false,
    },
    {
      id: 4,
      bride: "Sneha",
      groom: "Nikhil",
      marriageDate: "August 5, 2023",
      location: "Hyderabad, India",
      category: "Love Marriage",
      story:
        "We lived in different cities and would never have met if not for Perfect Match. The platform's location flexibility option helped us find each other despite the distance. After six months of video calls and weekend visits, we knew we were meant to be together. We now live happily in Hyderabad and are grateful to Perfect Match for bringing us together across cities.",
      image: "/images/couple4.jpg",
      rating: 5,
      featured: false,
    },
    {
      id: 5,
      bride: "Kavya",
      groom: "Rohan",
      marriageDate: "February 14, 2024",
      location: "Chennai, India",
      category: "Second Marriage",
      story:
        "After my divorce, I was hesitant to trust matrimonial sites. Perfect Match's second marriage category provided a safe space to meet like-minded individuals. Rohan, also divorced, understood my journey. We connected over our shared experiences and passion for travel. The platform's privacy controls made us comfortable sharing our stories. We got married on Valentine's Day and are grateful for our second chance at love.",
      image: "/images/couple5.jpg",
      rating: 5,
      featured: false,
    },
    {
      id: 6,
      bride: "Zara",
      groom: "Adil",
      marriageDate: "April 30, 2024",
      location: "Pune, India",
      category: "Interfaith Marriage",
      story:
        "We come from different religious backgrounds and were worried about finding acceptance. Perfect Match's interfaith matching option helped us connect with each other and with families who were open to interfaith marriages. The platform's counseling resources helped us navigate cultural differences and family expectations. Our wedding celebrated both our traditions, and we're thankful to Perfect Match for making our union possible.",
      image: "/images/couple6.jpg",
      rating: 5,
      featured: true,
    },
  ];

  // Filtered success stories based on category and search query
  const filteredStories = successStories.filter((story) => {
    const matchesCategory =
      filterCategory === "All" || story.category === filterCategory;
    const matchesSearch =
      searchQuery === "" ||
      story.bride.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.groom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.story.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Featured testimonials for the slider (using featured stories)
  const featuredTestimonials = successStories.filter((story) => story.featured);

  // Handle slider navigation
  const navigateSlider = (direction) => {
    if (direction === "next") {
      setActiveSlide((prev) => (prev + 1) % featuredTestimonials.length);
    } else {
      setActiveSlide((prev) =>
        prev === 0 ? featuredTestimonials.length - 1 : prev - 1
      );
    }
  };

  // Filter categories
  const categories = [
    "All",
    "Arranged Marriage",
    "Love Marriage",
    "Second Marriage",
    "Interfaith Marriage",
  ];

  return (
    <div className="bg-gradient-to-b from-white to-purple-50 min-h-screen">
      {/* Hero section with background effect */}
      <div className="relative py-20 bg-gradient-to-r from-purple-900 to-pink-600 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 bg-pink-300 opacity-10 rounded-full"></div>
          <div className="absolute top-40 right-40 w-20 h-20 bg-purple-400 opacity-10 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded mb-6"></div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Real couples who found their perfect match through our platform.
              Be inspired by their journeys from connection to marriage.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Featured Testimonials Slider */}
      <div className="relative py-16 overflow-hidden bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                Featured Love Stories
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded mb-4"></div>
              <p className="text-gray-600">
                Hear from couples who found their forever on Perfect Match
              </p>
            </motion.div>

            {/* Testimonial Slider */}
            <div className="relative" ref={sliderRef}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto">
                      <div className="absolute inset-0 bg-gray-300">
                        {/* Here we'd normally have an image with src={featuredTestimonials[activeSlide].image} */}
                        {/* Using placeholder color since we don't have actual images */}
                        <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                          <Heart className="w-20 h-20 text-pink-500 opacity-50" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                        <div className="flex items-center text-yellow-500">
                          {[
                            ...Array(featuredTestimonials[activeSlide].rating),
                          ].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          {featuredTestimonials[activeSlide].bride} &{" "}
                          {featuredTestimonials[activeSlide].groom}
                        </h3>
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm">
                              Married on{" "}
                              {featuredTestimonials[activeSlide].marriageDate}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">
                              {featuredTestimonials[activeSlide].location}
                            </span>
                          </div>
                          <div className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-xs font-medium">
                            {featuredTestimonials[activeSlide].category}
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          "{featuredTestimonials[activeSlide].story}"
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-6">
                        <div className="flex space-x-3">
                          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <MessageSquare className="w-4 h-4 text-gray-600" />
                          </button>
                          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                            <Share2 className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>
                        <div className="text-xs text-gray-500">
                          {activeSlide + 1} of {featuredTestimonials.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex justify-center mt-6 space-x-4">
                <button
                  onClick={() => navigateSlider("prev")}
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => navigateSlider("next")}
                  className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Grid Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-purple-800 mb-4">
              Explore All Success Stories
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded mb-4"></div>
            <p className="text-gray-600">
              Browse through our collection of happy couples who found love
            </p>
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-10 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search success stories..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 outline-none"
              />
            </div>

            <div className="relative min-w-[200px]">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 outline-none appearance-none bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.length > 0 ? (
              filteredStories.map((story) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  {/* Story Image */}
                  <div className="relative h-52 bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                    <Heart className="w-16 h-16 text-pink-500 opacity-50" />
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-purple-800">
                      {story.category}
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {story.bride} & {story.groom}
                    </h3>
                    <div className="flex space-x-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{story.marriageDate}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{story.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      "{story.story}"
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex text-yellow-500">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <button className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center">
                        Read Full Story
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center">
                <div className="bg-gray-100 rounded-lg p-8 max-w-md mx-auto">
                  <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 mb-2">
                    No Stories Found
                  </h3>
                  <p className="text-gray-500">
                    We couldn't find any stories matching your search criteria.
                    Try adjusting your filters or search terms.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-purple-900 to-pink-600 py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-pink-300 opacity-10 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "10,000+", label: "Happy Couples" },
                { value: "95%", label: "Success Rate" },
                { value: "1,500+", label: "Weddings Last Year" },
                { value: "8.9/10", label: "Average Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Share Your Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <div className="relative">
                  <Heart className="w-24 h-24 text-white opacity-40" />
                  <Heart className="w-12 h-12 text-white opacity-60 absolute -top-6 -right-6" />
                  <Heart className="w-8 h-8 text-white opacity-60 absolute -bottom-4 -left-8" />
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Share Your Success Story
                </h2>
                <p className="text-gray-600 mb-6">
                  Found your perfect match through our platform? We'd love to
                  hear your story and feature it on our website to inspire
                  others.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-lg shadow hover:shadow-lg transition-all duration-200"
                >
                  Submit Your Story
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Links */}
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                Explore More
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded mb-4"></div>
              <p className="text-gray-600">
                Discover other resources to help you on your journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Dating Tips",
                  description:
                    "Expert advice on building a meaningful relationship",
                  icon: <MessageSquare className="w-8 h-8" />,
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  title: "Wedding Planning",
                  description:
                    "Resources to help you plan your perfect wedding day",
                  icon: <Calendar className="w-8 h-8" />,
                  color: "from-pink-500 to-rose-600",
                },
                {
                  title: "Relationship Advice",
                  description: "Guidance for a happy and lasting marriage",
                  icon: <Heart className="w-8 h-8" />,
                  color: "from-purple-500 to-violet-600",
                },
              ].map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
                >
                  <div className="p-6 text-center">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-r ${link.color} text-white`}
                    >
                      {link.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      {link.title}
                    </h3>
                    <p className="text-gray-600">{link.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-16 bg-gradient-to-r from-purple-900 to-pink-600 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-pink-300 opacity-10 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Own Success Story Today
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of happy couples who found their perfect match
              through our platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/register"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Create Profile
              </motion.a>
              <motion.a
                href="/membership"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent text-white font-semibold rounded-full border-2 border-white hover:bg-white/10 transition-all duration-200"
              >
                View Membership Plans
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesPage;