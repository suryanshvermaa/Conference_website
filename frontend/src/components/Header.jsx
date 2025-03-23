import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-blue-800 to-purple-700 text-white py-8 px-6">
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      <div className="container mx-auto text-center relative z-10">
        <div className="flex justify-center items-center space-x-6 mb-2">
          {/* Logo */}
          <img
            src="https://via.placeholder.com/200x200?text=Logo"
            alt="Conference Logo"
            className="rounded-full w-20 h-20 object-cover border-4 border-white"
          />
          {/* Conference Name */}
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white flex items-center">
            <h1>International Conference on Next-Generation Adaptive Research and Innovations 2026</h1>
          </div>
        </div>

        {/* Event Date */}
        <div className="text-lg sm:text-xl font-semibold mb-4">
          <p className="bg-yellow-400 inline-block py-2 px-4 rounded-md text-gray-900">
            Event Date: 7th & 8th of March, 2026
          </p>
        </div>

        {/* Subheading / Call to Action */}
        <div className="hidden md:block text-lg text-gray-200">
          <p>Join the most innovative minds for a transformative event that pushes the boundaries of research and innovation.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
