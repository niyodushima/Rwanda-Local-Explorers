import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-sand/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-safari flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">R</span>
              </div>
              <span className="text-sand font-heading text-lg font-semibold">
                Rwanda Local Explorers
              </span>
            </div>
            <p className="text-sand/50 text-sm leading-relaxed mb-6">
              Your trusted local partner for authentic Rwanda experiences.
              Discover the land of a thousand hills with expert guides who call Rwanda home.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-sand/10 flex items-center justify-center text-sand/60 hover:bg-safari hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-sand/10 flex items-center justify-center text-sand/60 hover:bg-safari hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-sand/10 flex items-center justify-center text-sand/60 hover:bg-safari hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-sand font-heading font-semibold text-lg mb-6">Destinations</h4>
            <ul className="space-y-3">
              {[
                "Volcanoes National Park",
                "Akagera National Park",
                "Nyungwe Forest",
                "Lake Kivu",
                "Kigali City",
                "Kings Palace Museum",
              ].map((item) => (
                <li key={item}>
                  <a href="#destinations" className="text-sand/50 text-sm hover:text-safari transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-sand font-heading font-semibold text-lg mb-6">Experiences</h4>
            <ul className="space-y-3">
              {[
                "Gorilla Trekking",
                "Safari Adventures",
                "Mountain Hiking",
                "Cultural Tours",
                "Photography Tours",
                "Rainforest Walks",
              ].map((item) => (
                <li key={item}>
                  <a href="#experiences" className="text-sand/50 text-sm hover:text-safari transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sand font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-safari mt-0.5 flex-shrink-0" />
                <span className="text-sand/50 text-sm">Kigali, Rwanda</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-safari mt-0.5 flex-shrink-0" />
                <a href="mailto:murisaregis@gmail.com" className="text-sand/50 text-sm hover:text-safari transition-colors">
                  murisaregis@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-safari mt-0.5 flex-shrink-0" />
                <a href="tel:+250788000000" className="text-sand/50 text-sm hover:text-safari transition-colors">
                  +250 788 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sand/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sand/40 text-xs">
            Copyright &copy; {currentYear} Rwanda Local Explorers. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sand/40 text-xs hover:text-sand/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sand/40 text-xs hover:text-sand/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
