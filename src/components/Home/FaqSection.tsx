import React from "react";
import Image from "next/image";
import Link from "next/link";

const FaqSection = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#ffecd2] via-[#fcb69f] to-[#ff9a8b] rounded-t-3xl overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-to-tr from-[#ffb6b9] to-[#fae3d9] opacity-20 absolute top-12 left-10 w-[400px] h-[400px] rounded-full filter blur-3xl"></div>
        <div className="bg-gradient-to-bl from-[#a8d1ff] to-[#ffdfba] opacity-30 absolute bottom-12 right-12 w-[500px] h-[500px] rounded-full filter blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wide mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Have questions? We’ve got answers. Here’s everything you need to know!
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="container mx-auto space-y-6 max-w-4xl">
        {[
          {
            question: "How do I register?",
            answer:
              "Click the register button and fill in the required details. It’s quick, easy, and free!",
          },
          {
            question: "Is my data secure?",
            answer:
              "Yes, your data is completely secure with us. We prioritize your privacy and use industry-leading security measures.",
          },
          {
            question: "How to find matches?",
            answer:
              "Use our advanced search filters to discover profiles that align with your preferences.",
          },
          {
            question: "What are the membership plans?",
            answer:
              "We offer flexible membership plans. Enjoy basic features for free, or upgrade for premium benefits.",
          },
          {
            question: "How can I contact support?",
            answer:
              "Reach out to us anytime via the contact page or call our 24/7 helpline.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <details className="group">
              <summary className="cursor-pointer text-lg font-semibold text-primary flex justify-between items-center">
                <span className="flex items-center gap-3">
                  <span className="bg-gradient-to-r from-blue-400 to-pink-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-primary capitalize p-3">
                    {item.question}
                  </span>
                </span>
                <span className="text-gray-400 group-open:rotate-180 transform transition-transform duration-300">
                  ▼
                </span>
              </summary>
              <p className="text-gray-800 italic mt-4 pl-11">{item.answer}</p>
            </details>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-md hover:opacity-90 hover:text-purple-600 transition-all duration-300"
        >
          Still have questions? Contact Us
        </Link>
      </div>
    </section>
  );
};

export default FaqSection;
