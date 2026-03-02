import React from "react";

interface NavbarProps {
  logo?: string; // path to your logo image
}

export default function Navbar({ logo = "/images/logo.png" }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-md">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
        <span className="font-bold text-xl text-gray-100">Rwanda Local Explorers</span>
      </div>
      <ul className="flex space-x-6 font-medium text-gray-200">
        <li><a href="#tours" className="hover:text-blue-400">Tours</a></li>
        <li><a href="#booking" className="hover:text-blue-400">Booking</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
}
