import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section: Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img src="/vite.svg" alt="ICNARI" className="w-28 h-auto mb-4" />
          <p className="text-gray-400 text-center md:text-left">
            International Conference on <br /> Next-Generation Adaptive Research and Innovations
          </p>
          <div className="flex space-x-4 mt-3">
            <FaFacebook className="text-blue-500 hover:text-blue-400 text-2xl cursor-pointer" />
            <FaTwitter className="text-blue-400 hover:text-blue-300 text-2xl cursor-pointer" />
            <FaInstagram className="text-pink-500 hover:text-pink-400 text-2xl cursor-pointer" />
          </div>
        </div>

        {/* Middle Section: Contact Info */}
        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Organizing Member</h3>
          <p className="text-gray-300">John Doe</p>
          <p className="text-gray-400">Event Coordinator</p>
          <div className="flex items-center justify-center md:justify-start mt-2">
            <FaPhone className="text-green-400 mr-2" />
            <span className="text-gray-300">+123 456 7890</span>
          </div>
          <div className="flex items-center justify-center md:justify-start mt-1">
            <FaEnvelope className="text-red-400 mr-2" />
            <span className="text-gray-300">johndoe@nasl.org</span>
          </div>
        </div>

        {/* Right Section: Quick Links (Now in 2 Columns on Large Screens) */}
        <div className="flex flex-col text-center md:text-left">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
            <Link to="/" className="text-gray-300 hover:text-gray-100">Home</Link>
            <Link to="/about" className="text-gray-300 hover:text-gray-100">About</Link>
            <Link to="/authors" className="text-gray-300 hover:text-gray-100">Authors</Link>
            <Link to="/programs" className="text-gray-300 hover:text-gray-100">Programs</Link>
            <Link to="/sponsors" className="text-gray-300 hover:text-gray-100">Sponsors</Link>
            <Link to="/contact" className="text-gray-300 hover:text-gray-100">Contact</Link>
            <Link to="/admin" className="text-gray-300 hover:text-gray-100">Admin</Link>
            <Link to="/login" className="text-yellow-400 hover:text-yellow-300 font-semibold">Login</Link>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ICNARI. All Rights Reserved.
      </div>
    </footer>
  );
}
