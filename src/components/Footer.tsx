import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-6 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side: branding */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Rwanda Local Explorers</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center: navigation links */}
        <nav className="flex space-x-4 mb-4 md:mb-0">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/tours" className="hover:text-white">Tours</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>

        {/* Right side: social media */}
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
