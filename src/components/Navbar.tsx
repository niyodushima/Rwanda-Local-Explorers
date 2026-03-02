import React from "react";

interface NavbarProps {
  logo?: string; // path to your logo image
}

export default function Navbar({ logo = "/images/logo.png" }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
        <span className="font-bold text-xl">Rwanda Local Explorers</span>
      </div>
      <ul className="flex space-x-6 font-medium">
        <li><a href="#tours" className="hover:text-blue-600">Tours</a></li>
        <li><a href="#booking" className="hover:text-blue-600">Booking</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  );
}
