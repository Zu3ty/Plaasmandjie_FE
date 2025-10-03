import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-1 px-4">
        {/* LEFT - Nav Links */}
        <div className="flex items-center">
          {/* Hamburger for small screens */}
          <div className="md:hidden mr-2">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Links */}
          <div
            className={`flex space-x-3 md:flex ${
              menuOpen
                ? "flex flex-col absolute top-12 left-0 w-full bg-white border-t md:border-none md:bg-transparent md:flex-row md:relative"
                : "hidden md:flex"
            }`}
          >
            <Link
              to="/About"
              className="border px-3 py-1 rounded-md hover:bg-gray-100 transition duration-200 text-black no-underline"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/Shop"
              className="border px-3 py-1 rounded-md hover:bg-gray-100 transition duration-200 text-black no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>

            {/* Support Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSupportOpen(!supportOpen)}
                className="border px-3 py-1 rounded-md hover:bg-gray-100 transition duration-200 text-black no-underline"
              >
                Support <span className="ml-1">▾</span>
              </button>

              {supportOpen && (
                <div className="absolute bg-white border rounded-md mt-1 w-36 shadow-md z-50">
                  <Link
                    to="/contact"
                    className="block px-4 py-2 text-black text-sm"
                    onClick={() => {
                      setSupportOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    Contact
                  </Link>
                  <Link
                    to="/faqs"
                    className="block px-4 py-2 text-black text-sm"
                    onClick={() => {
                      setSupportOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    FAQs
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CENTER - Logo */}
        <div className="flex justify-center items-center">
          <Link to="/about">
            <img src="/logo.png" alt="Plaasmandjie Logo" className="logo" />
          </Link>
        </div>

        {/* RIGHT - Search + Icons */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center border rounded-md px-2 py-1">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="search"
              className="outline-none text-sm"
            />
          </div>
          <FaUser className="text-gray-600 cursor-pointer hover:text-green-600" />
          <FaShoppingCart className="text-gray-600 cursor-pointer hover:text-green-600" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
