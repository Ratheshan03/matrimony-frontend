import React from 'react';
import Image from 'next/image';

const SuccessStories = () => {
  return (
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
                  "This platform changed my life. I found the most amazing
                  person, and we couldn't be happier."
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
  );
};

export default SuccessStories;