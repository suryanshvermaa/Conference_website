import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar(fetch, setfetch) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for token in localStorage when component mounts
  useEffect(() => {
    const token = localStorage.getItem("token"); // Change "token" to your actual key
    if (token) {
      setIsAuthenticated(true);
    }
  }, [setfetch, fetch]);

  return (
    <nav className="bg-blue-600 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          ICNARI
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/authors" className="hover:text-gray-200">Authors</Link>
          <Link to="/programs" className="hover:text-gray-200">Programs</Link>
          <Link to="/sponsors" className="hover:text-gray-200">Sponsors</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
          {isAuthenticated && (
            <Link to="/admin" className="hover:text-gray-200 font-semibold">Admin</Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-blue-700 p-4 space-y-2">
          <Link to="/" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/authors" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Authors</Link>
          <Link to="/programs" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Programs</Link>
          <Link to="/sponsors" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Sponsors</Link>
          <Link to="/contact" className="hover:text-gray-200" onClick={() => setIsOpen(false)}>Contact</Link>
          {isAuthenticated && (
            <Link to="/admin" className="hover:text-gray-200 font-semibold" onClick={() => setIsOpen(false)}>Admin</Link>
          )}
        </div>
      )}
    </nav>
  );
}
