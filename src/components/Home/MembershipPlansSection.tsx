import React from 'react'
import Image from "next/image";
import Link from "next/link";


const MembershipPlansSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#fffaf0] via-[#fff5f5] to-[#faf5ff] rounded-t-3xl overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-gradient-to-br from-[#ffab73] to-[#ffdfba] opacity-20 absolute top-8 left-16 w-[450px] h-[450px] rounded-full filter blur-3xl"></div>
        <div className="bg-gradient-to-bl from-[#d5bdfc] to-[#a686f9] opacity-20 absolute bottom-16 right-16 w-[500px] h-[500px] rounded-full filter blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto text-center relative z-20">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-12 tracking-wide">
          Membership Plans
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          Choose the plan that suits your needs and start your journey to find
          your perfect match.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Free",
              price: "0",
              features: [
                "Create a profile",
                "Browse profiles",
                "Limited search filters",
                "View public photos",
                "5 likes per day",
              ],
              isPopular: false,
              cta: "Get Started",
            },
            {
              name: "Premium",
              price: "29.99",
              features: [
                "All Free features",
                "Advanced search filters",
                "Send unlimited messages",
                "View all photos",
                "See who viewed your profile",
                "Profile highlighting",
                "Priority customer support",
              ],
              isPopular: true,
              cta: "Go Premium",
            },
            {
              name: "VIP",
              price: "49.99",
              features: [
                "All Premium features",
                "Personalized matchmaking",
                "Profile boosting",
                "Video calling",
                "Read receipts",
                "Exclusive events access",
                "Dedicated relationship advisor",
              ],
              isPopular: false,
              cta: "Get VIP Access",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 ${
                plan.isPopular ? "ring-4 ring-primary" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-bl-lg font-semibold">
                  Most Popular
                </div>
              )}

              {/* Plan Header */}
              <div className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center">
                  <span className="text-2xl font-semibold text-gray-500">
                    $
                  </span>
                  <span className="text-5xl font-bold text-gray-800 mx-2">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>

              {/* Plan Features */}
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-3 text-primary">✓</div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-full font-bold text-lg shadow-lg ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-primary to-secondary text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  } transition-all duration-300`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipPlansSection
