import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo / Brand */}
      <h1 className="text-xl font-bold">Rwanda Local Explorers</h1>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="/" className="hover:text-yellow-300 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#tours" className="hover:text-yellow-300 transition">
            Tours
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-yellow-300 transition">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-yellow-300 transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
