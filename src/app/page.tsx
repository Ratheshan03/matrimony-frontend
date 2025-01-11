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
      <section className="flex items-center py-20 px-4 bg-backgroundLight text-center md:text-left relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-secondary opacity-10 rounded-lg"></div>

        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 relative group">
            <Image
              src="/images/img1.jpg"
              alt="About Us"
              width={500}
              height={500}
              className="rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-primary mb-4">About Us</h2>
            <p className="text-dark mb-4">
              We are dedicated to helping people find their life partners
              through our trusted and user-friendly platform.
            </p>
            <p className="text-dark mb-4">
              Our mission is to bring people together and make the journey of
              finding love an enjoyable and fulfilling experience.
            </p>
            <Link
              href="/about"
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-accent shadow-md transition duration-300 transform hover:scale-105"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Our Specialty Section */}
      <section className="h-screen py-16 px-4 bg-white flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Our Specialty</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Personalized Matchmaking",
            "Advanced Search Filters",
            "Verified Profiles",
          ].map((service, index) => (
            <div
              key={index}
              className="bg-backgroundLight p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={`/images/logo-${index + 1}.png`} // Placeholder icons
                alt={`Service ${index + 1}`}
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-dark mb-2">
                {service}
              </h3>
              <p className="text-gray-600">
                Description of {service}. Highlighting our uniqueness and
                specialties in providing the best services.
              </p>
            </div>
          ))}
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
