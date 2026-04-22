import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Page Not Found</h2>
        <div className="w-24 h-1 bg-[#5F6FFF] mx-auto mb-8 rounded-full" />

        <p className="text-gray-600 text-xl md:text-2xl mb-12 leading-relaxed max-w-lg mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved,
          deleted, or you entered the wrong URL.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/"
            className="bg-[#5F6FFF] text-white px-8 py-4 rounded-lg hover:bg-[#4a5ae8] transition-colors duration-200 flex items-center gap-3 font-semibold text-lg"
          >
            <Home className="w-6 h-6" />
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;