import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&q=80"
          alt="Mountain gorilla in Rwanda's Volcanoes National Park"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Coordinates Tag */}
      <div className="absolute top-28 right-8 z-10 hidden md:block">
        <p className="text-sand/50 text-xs tracking-[0.3em] font-light">
          1.9403° S, 29.8739° E
        </p>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-20">
        <p className="text-safari tracking-[0.4em] uppercase text-sm md:text-base mb-6 fade-in">
          Welcome to Rwanda
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-semibold mb-8 text-sand leading-tight fade-in-delay-1">
          Discover Rwanda's<br />
          <span className="italic font-normal">Hidden Treasures</span>
        </h1>

        <p className="text-lg md:text-xl mb-12 text-sand/80 max-w-2xl mx-auto leading-relaxed font-light fade-in-delay-2">
          Rwanda Local Explorers takes you on an unrivalled journey through
          the land of a thousand hills — from gorilla encounters to lakeside retreats.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-delay-3">
          <Button
            onClick={() => document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-safari hover:bg-safari-light text-white px-10 py-6 text-base tracking-wider uppercase rounded-none"
          >
            Explore Destinations
          </Button>
          <Button
            onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
            variant="outline"
            className="border-sand/40 text-sand hover:bg-sand/10 px-10 py-6 text-base tracking-wider uppercase rounded-none"
          >
            Enquire Now
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-sand/60" />
      </div>
    </section>
  );
};
