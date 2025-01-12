"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-fixed bg-center"
        style={{ backgroundImage: 'url("/images/hero.jpg")' }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-500 to-red-400 opacity-75 z-10"></div>

        {/* Floating Decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-lg animate-pulse z-5"></div>
        <div className="absolute bottom-16 right-20 w-40 h-40 bg-gradient-to-br from-blue-400 to-green-300 rounded-full blur-xl opacity-50 z-5"></div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl px-6 text-white">
          <h1 className="text-5xl md:text-8xl font-extrabold leading-tight drop-shadow-lg animate-fadeInUp">
            Find{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
              Your Soulmate
            </span>{" "}
            Here
          </h1>
          <p className="mt-6 text-lg md:text-2xl font-light text-gray-200 leading-relaxed animate-fadeInUp delay-200">
            Join millions on the journey of love. Experience a trusted platform
            designed for meaningful connections and lifelong happiness.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-center animate-fadeInUp delay-400">
            <Link
              href="/register"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-red-500 text-white text-lg font-bold rounded-full shadow-lg hover:opacity-90 hover:scale-105 transform transition duration-300"
            >
              Get Started
            </Link>
            <Link
              href="/learn-more"
              className="px-8 py-4 bg-white bg-opacity-20 text-white text-lg font-bold rounded-full shadow-lg hover:bg-opacity-30 hover:scale-105 transform transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center">
            <span className="text-gray-300 font-light text-sm">
              Scroll Down
            </span>
            <div className="mt-2 w-6 h-6 border-2 border-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative h-screen px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#ffffff] via-[#f9f9f9] to-[#eeeeee] rounded-b-3xl shadow-lg overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-to-r from-[#ffefd5] to-[#ffd1dc] opacity-40 absolute top-8 left-8 w-[400px] h-[400px] rounded-full filter blur-3xl"></div>
          <div className="bg-gradient-to-b from-[#cce5ff] to-[#e6f7ff] opacity-30 absolute bottom-16 right-16 w-[350px] h-[350px] rounded-full filter blur-2xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 h-full">
          {/* Left Column: Image/Illustration */}
          <div className="flex justify-center items-center relative">
            <div className="relative group w-full max-w-md mx-auto">
              <div className="absolute -top-8 -left-8 w-36 h-36 bg-gradient-to-br from-[#f9c2ff] to-[#ffab73] rounded-full filter blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
              <Image
                src="/images/aboutus.jpg" // Placeholder for image
                alt="About Us"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wide">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We’re on a mission to connect people and help them discover
              meaningful relationships through our unique and trusted platform.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700 flex items-center justify-center lg:justify-start gap-4">
                <span className="bg-primary text-white p-3 rounded-full shadow-lg">
                  🌍
                </span>
                Connecting people globally with advanced matchmaking technology.
              </p>
              <p className="text-gray-700 flex items-center justify-center lg:justify-start gap-4">
                <span className="bg-secondary text-white p-3 rounded-full shadow-lg">
                  🤝
                </span>
                Building trust with verified profiles and personalized matches.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block mt-4 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Specialty Section */}
      <section className="relative h-screen px-6 md:px-12 lg:px-20 bg-gradient-to-br from-[#eeeeee] via-[#f9f9f9] to-[#ffffff] rounded-t-3xl overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-to-r from-[#ffefd5] to-[#ffd1dc] opacity-30 absolute top-8 right-8 w-[300px] h-[300px] rounded-full filter blur-3xl"></div>
          <div className="bg-gradient-to-b from-[#cce5ff] to-[#e6f7ff] opacity-40 absolute bottom-16 left-16 w-[400px] h-[400px] rounded-full filter blur-2xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-20 container mx-auto text-center h-full flex flex-col items-center justify-center">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Our Specialty
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We pride ourselves on offering innovative features designed to make
            your journey seamless, personalized, and secure. Explore what sets
            us apart.
          </p>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Personalized Matchmaking",
                description:
                  "Experience tailored recommendations designed specifically for you to find the perfect match.",
                icon: "/images/couple.png", // Placeholder for icon
              },
              {
                title: "Advanced Search Filters",
                description:
                  "Filter through profiles with precision using advanced search options that cater to your preferences.",
                icon: "/images/search1.png", // Placeholder for icon
              },
              {
                title: "Verified Profiles",
                description:
                  "Interact with real, verified profiles to ensure authenticity and safety during your search.",
                icon: "/images/user.png", // Placeholder for icon
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500 group relative"
              >
                {/* Gradient Accent Circle */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-primary to-secondary p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-12 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="h-screen py-16 px-4 bg-gray-50 flex items-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Success Stories
          </h2>
          <div className="overflow-x-auto">
            <div className="flex gap-8">
              {[1, 2, 3, 4].map((story) => (
                <div
                  key={story}
                  className="min-w-[300px] bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    src={`/images/story-${story}.jpg`} // Placeholder profile pics
                    alt={`Success Story ${story}`}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">User {story}</h3>
                  <p className="text-gray-600">
                    This site helped me find the love of my life. Couldn’t have
                    been happier.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section className="h-screen py-16 px-4 bg-white flex items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((profile) => (
            <div
              key={profile}
              className="bg-backgroundLight p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={`/images/profile-${profile}.png`} // Placeholder profile pictures
                alt={`Profile ${profile}`}
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Name {profile}</h3>
              <p className="text-gray-600">
                Age: 29 | Status: Single | Height: 5-6 | Occupation: Engineer
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/profiles"
          className="mt-8 px-6 py-2 bg-primary text-white rounded-lg hover:bg-accent transition duration-300"
        >
          Check Out More Profiles
        </Link>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="h-screen py-16 px-4 bg-backgroundLight flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 w-full max-w-3xl">
          {[
            {
              question: "How do I register?",
              answer:
                "Click the register button and fill in the required details.",
            },
            {
              question: "Is my data secure?",
              answer: "Yes, your data is completely secure with us.",
            },
            {
              question: "How to find matches?",
              answer:
                "Use the search options to filter profiles according to your preference.",
            },
            {
              question: "What are the membership plans?",
              answer:
                "We offer free and premium membership plans tailored to your needs.",
            },
            {
              question: "How can I contact support?",
              answer:
                "Reach out to us via the contact page or call our helpline.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <details className="group">
                <summary className="cursor-pointer text-lg font-semibold text-primary flex justify-between items-center">
                  {item.question}
                  <span className="ml-2 text-gray-500 group-open:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                </summary>
                <p className="text-dark mt-2">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
