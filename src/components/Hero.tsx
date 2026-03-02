import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/images/volcanoes.jpg",
    caption: "Gorilla Trekking in Volcanoes National Park"
  },
  {
    id: 2,
    image: "/images/akagera.jpg",
    caption: "Safari Adventure in Akagera"
  },
  {
    id: 3,
    image: "/images/lake-kivu.jpg",
    caption: "Relax by Lake Kivu"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
              {slide.caption}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
}
