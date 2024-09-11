"use client";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url('/path/to/hero-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Welcome to Our Matrimony Site
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Find your perfect match and start your journey today.
          </p>
          <Link
            href="/register"
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="h-screen flex items-center py-16 px-4 bg-gray-100 text-center md:text-left">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/path/to/about-us-image.jpg" // Placeholder image
              alt="About Us"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-red-500 mb-4">About Us</h2>
            <p className="text-gray-700 mb-4">
              We are dedicated to helping people find their life partners
              through our trusted and user-friendly platform.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to bring people together and make the journey of
              finding love an enjoyable and fulfilling experience.
            </p>
            <Link
              href="/about"
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Services/Specialty Section */}
      <section className="h-screen py-16 px-4 bg-white flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-8">Our Specialty</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Service 1", "Service 2", "Service 3"].map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={`/path/to/logo-${index + 1}.png`} // Placeholder icons
                alt={`Service ${index + 1}`}
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
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
          <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
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
                    src={`/path/to/story-${story}.jpg`} // Placeholder profile pics
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
        <h2 className="text-3xl font-bold text-red-500 mb-8">Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((profile) => (
            <div
              key={profile}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={`/path/to/profile-${profile}.png`} // Placeholder profile pictures
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
          className="mt-8 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        >
          Check Out More Profiles
        </Link>
      </section>

      {/* Questions Section */}
      <section className="h-screen py-16 px-4 bg-gray-100 flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-8">
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
                <summary className="cursor-pointer text-lg font-semibold text-red-500 flex justify-between items-center">
                  {item.question}
                  <span className="ml-2 text-gray-500 group-open:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                </summary>
                <p className="text-gray-700 mt-2">{item.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
