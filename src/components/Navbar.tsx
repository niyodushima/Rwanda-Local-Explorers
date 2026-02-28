import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Destinations", href: "#destinations" },
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "Book Now", href: "#booking" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-safari flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">R</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-sand font-heading text-xl font-semibold tracking-wide">
                Rwanda Local Explorers
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${
                  link.label === "Book Now"
                    ? "bg-safari hover:bg-safari-light text-white px-6 py-2.5 rounded"
                    : "text-sand/90 hover:text-sand"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center gap-4 text-sand/70 text-sm">
            <a href="tel:+250788000000" className="flex items-center gap-1.5 hover:text-sand transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>+250 788 000 000</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-sand p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-6 border-t border-sand/10">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`py-3 px-4 rounded text-sm font-medium tracking-wider uppercase transition-colors ${
                    link.label === "Book Now"
                      ? "bg-safari text-white text-center mt-2"
                      : "text-sand/80 hover:text-sand hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
