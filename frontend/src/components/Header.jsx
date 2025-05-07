import React from 'react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r bg-[#5F6FFF] text-white py-20 px-6 mt-6">
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-black opacity-40 z-0 "></div>

      <div className="container mx-auto text-center relative z-10 ">
        <div className="flex justify-center items-center space-x-6 mb-4">
          {/* Logo */}
          <img
            src="/vite.svg"
            alt="Conference Logo"
            className="rounded-full w-20 h-20 object-cover border-4 border-white"
          />
          {/* Conference Name */}
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white flex items-center">
            <h1>International Conference on Next-Generation Adaptive Research and Innovations 2026</h1>
          </div>
        </div>

        {/* Event Date */}
        <div className="text-lg sm:text-xl font-semibold mb-6">
          <p className="bg-[#FFFFFF] inline-block py-2 px-4 rounded-md text-gray-900 m-1.5 font-bold">
            Event Date: 6th, 7th & 8th of March, 2026
          </p>
        </div>

        {/* Subheading / Call to Action */}
        <div className="hidden md:block text-lg text-gray-200 font-bold">
          <p>Join the most innovative minds for a transformative event that pushes the boundaries of research and innovation.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
