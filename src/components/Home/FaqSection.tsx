import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Clock,
  ShieldCheck,
  Layers,
  Users,
  CreditCard,
  Award,
  MessageCircle,
} from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = [
    { id: "all", name: "All Questions", icon: <Layers size={18} /> },
    { id: "account", name: "Account & Profile", icon: <Users size={18} /> },
    {
      id: "verification",
      name: "Verification",
      icon: <ShieldCheck size={18} />,
    },
    {
      id: "subscription",
      name: "Subscription",
      icon: <CreditCard size={18} />,
    },
    { id: "matching", name: "Matching Process", icon: <Award size={18} /> },
    {
      id: "communication",
      name: "Communication",
      icon: <MessageCircle size={18} />,
    },
  ];

  const faqData = [
    {
      id: 1,
      question: "How do I create a matrimonial profile?",
      answer:
        "Creating your profile is simple! Click on the 'Register' button, fill in your basic details, verify your email, and complete your profile with personal information, family background, education, career, and preferences. Upload recent, clear photos to enhance your profile visibility. Our administrators will review your profile before it becomes active.",
      category: "account",
    },
    {
      id: 2,
      question: "How does the verification process work?",
      answer:
        "Our verification process ensures authenticity and builds trust. After registration, our administrators will contact you to verify your details. This typically involves document verification (ID proof, education certificates), a brief video or phone interview, and validation of key profile information. Verified profiles receive a badge, signaling their authenticity to other members.",
      category: "verification",
    },
    {
      id: 3,
      question: "What subscription packages do you offer?",
      answer:
        "We offer several subscription tiers to suit different needs: Basic (3 months), Premium (6 months), and Elite (12 months). Each tier provides different levels of access, with higher tiers unlocking more profiles, advanced filtering options, priority matching assistance, and direct communication features. You can view detailed package information on our Subscription page.",
      category: "subscription",
    },
    {
      id: 4,
      question: "Can I browse profiles before subscribing?",
      answer:
        "Yes, you can browse limited profile information after registration and verification. However, complete profiles, contact information, and communication features are only available to subscribed members. This ensures serious commitment from our members and protects their privacy.",
      category: "subscription",
    },
    {
      id: 5,
      question: "How does the matching process work?",
      answer:
        "Our matching system combines technology and human expertise. We use advanced algorithms to identify compatible matches based on your preferences, values, and background. Additionally, our experienced matchmakers review potential matches to ensure quality. Premium and Elite subscribers receive personalized match recommendations from our administrators.",
      category: "matching",
    },
    {
      id: 6,
      question: "How can I communicate with potential matches?",
      answer:
        "Subscribed members can communicate through our secure platform using features like messaging, voice calls, and video chats. For higher-tier subscribers, our administrators can facilitate initial introductions and help arrange meetings after mutual interest is established. All communication is monitored for safety and quality assurance.",
      category: "communication",
    },
    {
      id: 7,
      question: "What information can others see on my profile?",
      answer:
        "Non-subscribed members can only see basic information like age, education level, and profession. Subscribed members can view detailed profiles including family background, preferences, and contact details if you approve. You can customize privacy settings to control what information is visible to different users.",
      category: "account",
    },
    {
      id: 8,
      question: "How long does verification typically take?",
      answer:
        "The verification process usually takes 24-48 hours after you submit all required documents. During peak times, it might take up to 72 hours. Our thorough verification ensures authentic profiles, creating a trustworthy environment for all members looking for life partners.",
      category: "verification",
    },
    {
      id: 9,
      question: "Can I upgrade or downgrade my subscription?",
      answer:
        "Yes, you can upgrade your subscription at any time, and the remaining value of your current subscription will be applied to the new one. Downgrades will take effect at the end of your current billing cycle. You can manage all subscription changes from your account settings.",
      category: "subscription",
    },
    {
      id: 10,
      question: "What happens after a match is confirmed?",
      answer:
        "Once both parties express interest, our administrators can facilitate an introduction. For Premium and Elite members, we offer guidance throughout the initial communication phase and can help arrange meetings. We provide support until both parties are comfortable taking the next steps in their relationship journey.",
      category: "matching",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Decorative elements for background
  const decorations = [];
  for (let i = 0; i < 5; i++) {
    decorations.push({
      id: i,
      size: Math.random() * 6 + 3,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    });
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      {/* Floating Decorative Elements */}
      {decorations.map((decoration) => (
        <motion.div
          key={decoration.id}
          className="absolute rounded-full opacity-30 bg-gradient-to-br from-primary/10 to-secondary/10 blur-md z-0"
          style={{
            width: `${decoration.size}rem`,
            height: `${decoration.size}rem`,
            left: `${decoration.x}%`,
            top: `${decoration.y}%`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: decoration.duration,
            repeat: Infinity,
            delay: decoration.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5 tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-400">
              FAQs
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our matrimonial service.
            Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-lg mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full py-3 pl-12 pr-4 bg-white/90 backdrop-blur-sm rounded-full shadow-md border-0 focus:ring-2 focus:ring-primary/50 focus:outline-none text-gray-700"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`flex items-center gap-2 py-2 px-4 rounded-full text-sm md:text-base transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                  : "bg-white/80 text-gray-600 hover:bg-white hover:shadow-sm"
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <motion.div key={faq.id} variants={itemVariants} className="mb-4">
                <div
                  className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-md overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  <button
                    className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                    onClick={() => toggleQuestion(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary">
                        <span className="text-sm font-semibold">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      {openIndex === index ? (
                        <ChevronUp size={20} className="text-primary" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-400" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-8 bg-white/70 backdrop-blur-sm rounded-2xl">
              <div className="flex justify-center mb-4">
                <Clock size={48} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No matching questions found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or category filter to find what you're
                looking for.
              </p>
            </div>
          )}
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-red-500/20 to-secondary/5 rounded-3xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Our dedicated support team is here to help you with any additional
            questions you might have about our matrimonial services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="/contact"
              className="py-3 px-6 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-md flex items-center justify-center gap-2 hover:from-primary/60 hover:to-primary/40 hover:text-gray-500 transition-all duration-300"
              whileHover={{
                scale: 1.03,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Support
            </motion.a>
            <motion.a
              href="/resources"
              className="py-3 px-6 rounded-full border border-gray-300 text-gray-700 font-medium flex items-center justify-center gap-2 bg-white/50"
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,0.8)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Visit Help Center
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
