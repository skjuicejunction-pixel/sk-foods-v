"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-green-800/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">

            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-400 shadow-lg bg-white">
              <Image
                src="/about.jpg"
                alt="SK Foods"
                width={56}
                height={56}
                priority
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold tracking-wide">
                <span className="text-yellow-400">SK</span>{" "}
                <span className="text-white">Foods</span>
              </h1>

              <p className="text-xs text-yellow-200 tracking-[2px] uppercase">
                Corporate Catering & Food Solutions
              </p>
            </div>

          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8 font-medium">

            <a href="#" className="text-white hover:text-yellow-300 transition">
              Home
            </a>

            <a href="#about" className="text-white hover:text-yellow-300 transition">
              About
            </a>

            <a href="#services" className="text-white hover:text-yellow-300 transition">
              Services
            </a>

            <a href="#gallery" className="text-white hover:text-yellow-300 transition">
              Gallery
            </a>

            <a href="#clients" className="text-white hover:text-yellow-300 transition">
              Clients
            </a>

            <a href="#contact" className="text-white hover:text-yellow-300 transition">
              Contact
            </a>

            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg font-semibold shadow-lg transition">
              Get a Quote
            </button>

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-green-900 border-t border-green-700">

          <a
            href="#"
            className="block px-6 py-4 text-white hover:bg-green-700"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#about"
            className="block px-6 py-4 text-white hover:bg-green-700"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#services"
            className="block px-6 py-4 text-white hover:bg-green-700"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>

          <a
            href="#gallery"
            className="block px-6 py-4 text-white hover:bg-green-700"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </a>

          <a
            href="#clients"
            className="block px-6 py-4 text-white hover:bg-green-700"
            onClick={() => setMenuOpen(false)}
          >
            Clients
          </a>

          <a
            href="#contact"
            className="block px-6 py-4 text-white hover:bg-green-700"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

          <div className="p-6">
            <button className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-3 rounded-lg font-semibold shadow-md">
              Get a Quote
            </button>
          </div>

        </div>
      )}
    </header>
  );
}