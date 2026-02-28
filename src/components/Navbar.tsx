import React from "react";

function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Rwanda Local Explorers</h1>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="/tours" className="hover:underline">Tours</a></li>
        <li><a href="/about" className="hover:underline">About</a></li>
        <li><a href="/contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
