import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 text-gray-200 py-8 text-center space-y-2"
    >
      <p>&copy; {new Date().getFullYear()} Rwanda Local Explorers</p>
      <p>
        Email: <a href="mailto:info@rwandaexplorers.com" className="underline">info@rwandaexplorers.com</a>
      </p>
      <p>Follow us on social media for updates and travel inspiration.</p>
    </footer>
  );
}
