import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png"; // <-- import your logo

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Gallery", to: "/gallery" },
    { name: "Program", to: "/program" },
    { name: "Results", to: "/result" },
    { name: "Admission", to: "/admission" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
  src={logo}
  alt="Delta Academy Logo"
  className="w-12 h-12 object-contain rounded-xl shadow"
/>

          <div className="leading-tight">
            <h1 className="text-xl font-extrabold text-gray-900">Delta Academy</h1>
            <p className="text-xs uppercase tracking-widest text-gray-500">
              Excellence in Education
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `relative py-1 transition-all ${
                  isActive
                    ? "text-indigo-600 font-semibold after:content-[''] after:block after:w-full after:h-0.5 after:bg-indigo-600 after:rounded-full after:absolute after:bottom-0 after:left-0"
                    : "hover:text-indigo-600"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:inline-flex group relative items-center gap-2 px-7 py-3 rounded-full font-semibold text-gray-900
          bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500
          shadow hover:scale-105 transition-all duration-300"
        >
          🎯 Free Demo
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white w-full transition-max-height duration-500 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block py-2 text-gray-700 font-medium transition-colors ${
                    isActive ? "text-indigo-600 font-semibold" : "hover:text-indigo-600"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
          {/* Mobile CTA */}
          <li>
            <Link
              to="/contact"
              className="block text-center py-2 mt-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 text-white rounded-full font-semibold hover:scale-105 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              🎯 Free Demo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
