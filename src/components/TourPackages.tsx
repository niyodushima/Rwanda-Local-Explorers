import React from "react";

interface Tour {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

const tours: Tour[] = [
  {
    id: 1,
    title: "Volcanoes National Park",
    description: "Experience gorilla trekking in the lush forests of Volcanoes National Park.",
    image: "/images/volcanoes.jpg",
    price: "$1200"
  },
  {
    id: 2,
    title: "Akagera Safari",
    description: "Discover Rwanda’s savannah wildlife including lions, elephants, and giraffes.",
    image: "/images/akagera.jpg",
    price: "$950"
  },
  {
    id: 3,
    title: "Lake Kivu Getaway",
    description: "Relax by the scenic Lake Kivu with boat rides and cultural experiences.",
    image: "/images/lake-kivu.jpg",
    price: "$700"
  }
];

export default function TourPackages() {
  return (
    <section className="section-padding">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Tour Packages</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {tours.map((tour) => (
          <div key={tour.id} className="glass-card p-6 fade-in">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-48 object-cover rounded-base mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
            <p className="mb-4">{tour.description}</p>
            <p className="font-bold text-lg">{tour.price}</p>
            <a
              href="#booking"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
