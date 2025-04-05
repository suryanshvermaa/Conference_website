import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HiMenuAlt3,
  HiX,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";

export default function Navbar(fetch, setfetch) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  const toggleDropdown = (section) => {
    setOpenDropdown((prev) => (prev === section ? "" : section));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, [setfetch, fetch]);

  const menuSections = [
    { label: "About", key: "about", options: ["About the Conference","About Nit Patna", "Organising Committee", "Venue and Travels","Accomodations","About Nit Patna(Bihta Campus)"] },
    { label: "Authors", key: "authors", options: ["Guidelines To Authors", "Conference Tracks", "Paper Submissions", "Registrations"] },
    { label: "Programs", key: "programs", options: ["Speakers", "Workshops","Tours","Cultural Event"] },
    { label: "Sponsors", key: "sponsors", options: ["Become a Sponsor", "Benefits of Sponsorship"] },
    { label: "Contact", key: "contact", options: ["Contact Form", "FAQ"] },
  ];

  return (
    <nav className="bg-gray-100 text-gray-900 shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold">ICNARI</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-gray-500">Home</Link>

          {menuSections.map(({ label, key, options }) => (
            <div key={key} className="relative group capitalize">
              {/* Parent Link (just label with hover effect) */}
              <Link to={`/${key}`} className="hover:text-gray-500 cursor-pointer">{label}</Link>

              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-gray-100 py-2 rounded shadow-lg min-w-[160px] z-50">
                {options.map((opt, i) => (
                  <Link
                    key={i}
                    to={`/${key}/${opt.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-4 py-2 hover:bg-gray-200"
                  >
                    {opt}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {isAuthenticated && (
            <Link to="/admin" className="hover:text-gray-500 font-semibold">Admin</Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-100 p-4 space-y-2 z-40 shadow-lg">
          <Link to="/" className="hover:text-gray-500" onClick={() => setIsOpen(false)}>Home</Link>

          {menuSections.map(({ label, key, options }) => (
            <div key={key}>
              <div
                className="flex items-center justify-between w-full hover:text-gray-500 cursor-pointer"
                onClick={() => toggleDropdown(key)}
              >
                <span>{label}</span>
                {openDropdown === key ? <HiChevronUp /> : <HiChevronDown />}
              </div>

              {openDropdown === key && (
                <div className="ml-4 mt-1 flex flex-col space-y-1">
                  {options.map((opt, i) => (
                    <Link
                      key={i}
                      to={`/${key}/${opt.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-gray-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {opt}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {isAuthenticated && (
            <Link
              to="/admin"
              className="hover:text-gray-500 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
