import { Mountain, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-sand">
                Rwanda Local Explorers
              </span>
            </div>
            <p className="text-sand-light text-sm leading-relaxed">
              Authentic local experiences with expert guidance at unbeatable
              prices. Discover Rwanda's hidden treasures with us.
            </p>
          </div>

          <div>
            <h3 className="text-sand font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Tours", "About", "Book Now"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(
                          link === "Home"
                            ? "hero"
                            : link === "Book Now"
                            ? "booking"
                            : link.toLowerCase()
                        )
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-sand-light hover:text-sand transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sand font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sand-light text-sm">
                <Mail className="h-4 w-4 text-primary" />
                murisaregis@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sand-light text-sm">
                <Phone className="h-4 w-4 text-primary" />
                Contact via booking form
              </li>
              <li className="flex items-center gap-2 text-sand-light text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                Kigali, Rwanda
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-sand-light text-sm">
            &copy; {currentYear} Rwanda Local Explorers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
