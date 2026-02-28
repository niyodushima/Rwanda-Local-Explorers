import React from "react";
import Button from "./ui/Button";  // default import matches Button.tsx

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/6131b870-f07f-4319-bd4c-2ecd04881339.png"
          alt="Kigali Convention Center at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Discover Rwanda's Hidden Treasures
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-200">
          Authentic local experiences with expert guidance at unbeatable prices
        </p>
        <Button
          onClick={() =>
            document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" })
          }
          className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 text-lg"
        >
          Explore Tours
        </Button>
      </div>
    </section>
  );
}
