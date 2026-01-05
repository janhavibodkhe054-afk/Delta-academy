import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

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
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src={logo}
            alt="Delta Academy Logo"
            className="w-11 h-11 object-contain rounded-xl shadow shrink-0"
          />
          <div className="leading-tight truncate">
            <h1 className="text-lg sm:text-xl font-extrabold text-gray-900 truncate">
              Delta Academy
            </h1>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 truncate">
              Excellence in Education
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-gray-700">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `relative py-1 transition-all ${
                  isActive
                    ? "text-indigo-600 font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indigo-600 after:rounded-full"
                    : "hover:text-indigo-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-gray-900
          bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500
          shadow hover:scale-105 transition-transform duration-300"
        >
          🎯 Free Demo
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-white transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block py-2 text-base font-medium transition ${
                    isActive
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-700 hover:text-indigo-600"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* MOBILE CTA */}
          <li className="pt-2">
            <Link
              to="/contact"
              className="block text-center py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500
              shadow hover:scale-105 transition-transform"
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
