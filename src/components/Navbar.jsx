import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo2.png";

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
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50 px-5"> 
    <div className="w-full px-4 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Delta Academy Logo"
            className="w-11 h-11 object-contain rounded-xl shadow"
          />
          <div className="leading-tight">
            <h1 className="text-lg sm:text-xl font-extrabold text-gray-900">
              Delta Education Academy
            </h1>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">
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
                `relative py-1 transition ${
                  isActive
                    ? "text-indigo-600 font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indigo-600"
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
          shadow hover:scale-105 transition"
        >
          🎯 Free Demo
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-700">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-indigo-600 font-semibold"
                    : "hover:text-indigo-600"
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* MOBILE CTA */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex justify-center px-6 py-3 rounded-full font-semibold text-gray-900
              bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500
              shadow"
            >
              🎯 Free Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
