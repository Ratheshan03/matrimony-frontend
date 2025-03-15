"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ChevronDown, 
  ChevronUp, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube,
  MessageSquare
} from "lucide-react";

const ContactPage = () => {
  // For FAQ accordion
  const [activeIndex, setActiveIndex] = useState(null);

  // For form submission
  const [formStatus, setFormStatus] = useState(null);
  const formRef = useRef(null);

  // Form input states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate API call with timeout
    setTimeout(() => {
      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }, 1500);
  };

  // FAQ data
  const faqs = [
    {
      question: "How can I create my matrimony profile?",
      answer:
        "Creating your profile is simple! Click the 'Register' button on our homepage, fill in your basic details, verify your email, and follow the guided steps to complete your profile with photos and preferences.",
    },
    {
      question: "Is my personal information secure on your platform?",
      answer:
        "Absolutely! We implement bank-grade security measures to protect your data. Our privacy-first approach ensures your information is only visible to verified members you choose to connect with.",
    },
    {
      question: "How do I search for potential matches?",
      answer:
        "Our advanced search allows you to filter by age, location, profession, community, and more. You can also use our AI-powered matching system that suggests compatible profiles based on your preferences.",
    },
    {
      question: "What are the membership options available?",
      answer:
        "We offer flexible plans including Free Basic, Premium, and Elite membership tiers. Each plan offers different levels of access and features. Visit our Membership page for detailed pricing and benefits.",
    },
    {
      question: "How can I verify my profile?",
      answer:
        "We offer multiple verification methods including ID verification, phone verification, and social media verification. Verified profiles receive a special badge, increasing trust and visibility.",
    },
  ];

  // Map marker animation variants
  const markerVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: [0, -10, 0],
      opacity: 1,
      transition: {
        y: { repeat: Infinity, duration: 2, repeatType: "loop" },
        opacity: { duration: 0.3 },
      },
    },
  };

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
              Get in Touch
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded mb-6"></div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Have questions or need assistance? Our dedicated team is here to
              help you on your journey to finding the perfect match.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Info Cards Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-purple-800 mb-4">
              Contact Information
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded mb-4"></div>
            <p className="text-gray-600">
              Multiple ways to reach our dedicated support team
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Us",
                details: "support@perfectmatch.com",
                color: "from-blue-500 to-indigo-600",
                delay: 0,
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us",
                details: "+91 98765 43210",
                color: "from-pink-500 to-rose-600",
                delay: 0.1,
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Visit Us",
                details: "Perfect Match HQ, Bangalore",
                color: "from-purple-500 to-violet-600",
                delay: 0.2,
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Working Hours",
                details: "Mon-Sat: 9AM to 8PM",
                color: "from-amber-500 to-orange-600",
                delay: 0.3,
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: card.delay }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div className={`p-6 text-center`}>
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-gradient-to-r ${card.color} text-white`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600">{card.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media Cards */}
      <div className="bg-purple-50 py-16">
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
                Connect With Us
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded mb-4"></div>
              <p className="text-gray-600">
                Follow us on social media for success stories and updates
              </p>
            </motion.div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  icon: <Instagram className="w-6 h-6" />,
                  name: "Instagram",
                  color:
                    "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500",
                },
                {
                  icon: <Facebook className="w-6 h-6" />,
                  name: "Facebook",
                  color: "bg-blue-600",
                },
                {
                  icon: <Twitter className="w-6 h-6" />,
                  name: "Twitter",
                  color: "bg-sky-500",
                },
                {
                  icon: <Linkedin className="w-6 h-6" />,
                  name: "LinkedIn",
                  color: "bg-blue-700",
                },
                {
                  icon: <Youtube className="w-6 h-6" />,
                  name: "YouTube",
                  color: "bg-red-600",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                  className={`${social.color} text-white p-6 rounded-2xl flex flex-col items-center shadow-lg w-28 h-28 justify-center`}
                >
                  {social.icon}
                  <span className="mt-2 text-sm font-medium">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Location Map & Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Interactive Map Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white p-6 rounded-xl shadow-lg overflow-hidden h-full"
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-800">
                Find Us
              </h3>

              {/* Interactive Map Preview */}
              <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 bg-[url('/images/map-bg.jpg')] bg-cover bg-center opacity-90"></div>

                {/* Animated location marker */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500"
                  variants={markerVariants}
                  initial="initial"
                  animate="animate"
                >
                  <MapPin className="w-10 h-10" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-4 h-4 bg-red-500 rounded-full opacity-50 animate-ping"></div>
                </motion.div>

                {/* Map controls mockup */}
                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded p-2 flex flex-col space-y-2">
                  <button className="w-8 h-8 bg-white rounded flex items-center justify-center shadow text-gray-600">
                    +
                  </button>
                  <button className="w-8 h-8 bg-white rounded flex items-center justify-center shadow text-gray-600">
                    −
                  </button>
                </div>
              </div>

              {/* Location Details */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Headquarters</h4>
                    <p className="text-gray-600">
                      Perfect Match Tower, 123 Matrimony Street
                      <br />
                      Electronic City, Bangalore 560100
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">
                      Support Hotline
                    </h4>
                    <p className="text-gray-600">+91 98765 43210 (Toll-Free)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 9AM to 8PM
                      <br />
                      Sunday: 10AM to 2PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-800">
                Send Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 mb-1 block"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email and Phone Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 mb-1 block"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 outline-none"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-gray-700 mb-1 block"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 outline-none"
                      placeholder="Your contact number"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-gray-700 mb-1 block"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 outline-none"
                    placeholder="What is your message about?"
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700 mb-1 block"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 outline-none resize-none"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center space-x-2 transition-all duration-200 ${
                      formStatus === "sending"
                        ? "bg-purple-300 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {formStatus === "sending" ? (
                      <>
                        <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Form Status Message */}
                  <AnimatePresence>
                    {formStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 flex items-start"
                      >
                        <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0">
                          <MessageSquare className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">
                            Message sent successfully!
                          </p>
                          <p className="text-sm text-green-600 mt-1">
                            Our team will get back to you within 24 hours.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-b from-purple-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-purple-800 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded mb-4"></div>
              <p className="text-gray-600">
                Find quick answers to common questions about our services
              </p>
            </motion.div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-800">
                      {faq.question}
                    </h3>
                    {activeIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Join thousands of happy couples who found love through our
              platform. Start your journey today!
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

export default ContactPage;