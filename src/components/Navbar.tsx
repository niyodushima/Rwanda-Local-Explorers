import { useState } from "react";
import { Menu, X, Mountain } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-sand">Rwanda Local Explorers</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo("hero")} className="text-sand-light hover:text-sand transition-colors text-sm">
              Home
            </button>
            <button onClick={() => scrollTo("tours")} className="text-sand-light hover:text-sand transition-colors text-sm">
              Tours
            </button>
            <button onClick={() => scrollTo("about")} className="text-sand-light hover:text-sand transition-colors text-sm">
              About
            </button>
            <button onClick={() => scrollTo("booking")} className="text-sand-light hover:text-sand transition-colors text-sm">
              Book Now
            </button>
            <Button
              onClick={() => scrollTo("booking")}
              className="bg-primary hover:bg-primary-light text-white text-sm"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-sand"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-charcoal/95 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollTo("hero")} className="block w-full text-left text-sand-light hover:text-sand transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollTo("tours")} className="block w-full text-left text-sand-light hover:text-sand transition-colors py-2">
              Tours
            </button>
            <button onClick={() => scrollTo("about")} className="block w-full text-left text-sand-light hover:text-sand transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollTo("booking")} className="block w-full text-left text-sand-light hover:text-sand transition-colors py-2">
              Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
