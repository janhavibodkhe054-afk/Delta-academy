import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 overflow-x-hidden">
      
      {/* TOP GRADIENT LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500" />

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ABOUT */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
            <span className="text-sky-400"></span> Delta Education Academy
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            <span className="font-semibold text-slate-200 block mb-2">
              Excellence in Science & Competitive Exam Coaching
            </span>
            Nurturing scientific temperament and enabling aspirants to compete boldly.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-base font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
  {[
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Gallery", to: "/gallery" },
    { name: "Program", to: "/program" },
    { name: "Results", to: "/result" },
    { name: "Admissions", to: "/admission" },
    { name: "Contact", to: "/contact" },
  ].map((item) => (
    <li key={item.name}>
      <Link
        to={item.to}
        className="hover:text-sky-400 transition flex items-center gap-2"
      >
        <span className="text-sky-400">›</span>
        <span>{item.name}</span>
      </Link>
    </li>
  ))}
</ul>

        </div>

        {/* PROGRAMS */}
        <div>
          <h3 className="text-base font-semibold text-white mb-4">
            Programs
          </h3>
         <ul className="space-y-2 text-sm text-slate-400">
  <li>
    <a href="/program" className="hover:text-white transition">
      Classes 11–12 (PCM / PCB)
    </a>
  </li>
  <li>
    <a href="/program" className="hover:text-white transition">
      Foundation (8–10)
    </a>
  </li>
  <li>
    <a href="/program" className="hover:text-white transition">
      JEE / NEET Coaching
    </a>
  </li>
  <li>
    <a href="/program" className="hover:text-white transition">
      Crash Courses
    </a>
  </li>
  <li>
    <a href="/program" className="hover:text-white transition">
      Olympiad Preparation
    </a>
  </li>
</ul>

        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-base font-semibold text-white mb-4">
            Contact Info
          </h3>

          <div className="space-y-2 text-sm text-slate-400 leading-relaxed break-words">
            <p>
              📍 Shri Bhekrai Mata Madhyamik Vidyalaya Road,
              Green Divine Society, Bhekrai Nagar,
              Hadapsar, Pune – 412308
            </p>

            <p>📞 +91 93712 91136</p>
            <p>☎️ +91 93712 91137</p>
            <p>📧 info@deltaacademy.edu</p>
            <p className="text-slate-500">🕒 Open 24 Hours</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4
          flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">

          <p className="text-slate-500 text-center sm:text-left">
            © 2024 Delta Education Academy. All rights reserved.
          </p>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
