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
      <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-tr from-[#fffbf0] via-[#ffe4e1] to-[#dfeffd] rounded-t-3xl overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-to-br from-[#ffd1dc] to-[#ffab73] opacity-20 absolute top-8 left-16 w-[450px] h-[450px] rounded-full filter blur-3xl"></div>
          <div className="bg-gradient-to-bl from-[#cce5ff] to-[#a8d1ff] opacity-25 absolute bottom-16 right-16 w-[500px] h-[500px] rounded-full filter blur-2xl"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto text-center relative z-20">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-12 tracking-wide">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Real people. Real connections. See how our platform has changed
            lives and brought people closer together.
          </p>

          {/* Story Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((story) => (
              <div
                key={story}
                className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500 group relative overflow-hidden"
              >
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#fffbf0] via-[#ffe4e1] to-[#dfeffd] opacity-20 -z-10"></div>
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full filter blur-2xl opacity-50"></div>

                <div className="relative z-10">
                  {/* User Image */}
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 shadow-lg">
                    <Image
                      src={`/images/story-${story}.jpg`} // Placeholder profile pics
                      alt={`Success Story ${story}`}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>

                  {/* Story Details */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    User {story}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    “This platform changed my life. I found the most amazing
                    person, and we couldnt be happier.”
                  </p>

                  <button className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full shadow-md hover:opacity-90 transition-all duration-300">
                    Read Full Story
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-[#f0f9ff] via-[#eaf4ff] to-[#f7d9ff] rounded-t-3xl overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 -z-10">
          <div className="bg-gradient-to-tr from-[#ffab73] to-[#ffdfba] opacity-25 absolute top-8 left-12 w-[300px] h-[300px] rounded-full filter blur-3xl"></div>
          <div className="bg-gradient-to-bl from-[#a8d1ff] to-[#cce5ff] opacity-30 absolute bottom-12 right-12 w-[350px] h-[350px] rounded-full filter blur-3xl"></div>
        </div>

        {/* Header */}
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-wide">
            Meet New People
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Check out a preview of our most popular profiles. Log in to discover
            even more details and connect with amazing people!
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((profile) => (
            <div
              key={profile}
              className="relative bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500 group overflow-hidden"
            >
              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

              {/* Profile Image */}
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 shadow-lg">
                <Image
                  src={`/images/profile-${profile}.png`} // Replace with actual profile pics
                  alt={`Profile ${profile}`}
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </div>

              {/* Profile Details */}
              <div className="relative z-10 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-2">
                  User {profile}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-200">
                  Age: {20 + profile} | Occupation: Designer
                </p>
              </div>

              {/* CTA Overlay */}
              <div className="absolute inset-x-0 bottom-0 py-2 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm text-gray-200">
                  Log in to see more details!
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/login"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Log in to Explore More Profiles
          </Link>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
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
            Have questions? We’ve got answers. Here’s everything you need to
            know!
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
                    {item.question}
                  </span>
                  <span className="text-gray-400 group-open:rotate-180 transform transition-transform duration-300">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-700 mt-4 pl-11">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full shadow-md hover:opacity-90 transition-all duration-300"
          >
            Still have questions? Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
