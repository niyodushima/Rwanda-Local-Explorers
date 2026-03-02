import React, { useState } from "react";
import { Clock, DollarSign } from "lucide-react"; // ✅ icons

interface Tour {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
}

const tours: Tour[] = [
  {
    id: 1,
    title: "Golden Monkey Trekking",
    description:
      "Golden monkeys trekking takes place in Volcanoes National Park at 7:00 AM, similar to gorilla trekking. These endangered species live in bamboo vegetation and are very active, jumping from tree to tree. You’ll spend one hour with them once found.",
    image: "/images/golden.jpg",
    price: "200/person",
    duration: "Half Day"
  },
  {
    id: 2,
    title: "Dian Fossey Tomb",
    description:
      "Trek through Volcanoes National Park to visit the grave of Dian Fossey at Karisoke Research Center. Learn about her conservation legacy and efforts to protect mountain gorillas.",
    image: "/images/dian.jpg",
    price: "250/person",
    duration: "Full Day"
  },
  {
    id: 3,
    title: "Kings Palace Museum - Nyanza",
    description:
      "Explore Rwanda’s monarchy history at the Kings Palace Museum. See reconstructed royal residences, traditional architecture, and the famous Inyambo cattle.",
    image: "/images/palace.jpg",
    price: "100/person",
    duration: "Full Day"
  },
  {
    id: 4,
    title: "Pilgrimage to Kibeho",
    description:
      "Visit the sacred site of Kibeho, known for Marian apparitions in 1981. Experience its spiritual atmosphere and significance as a global pilgrimage destination.",
    image: "/images/pg.jpg",
    price: "100/person",
    duration: "Full Day"
  },
  {
    id: 5,
    title: "Akagera National Park Safari",
    description:
      "Discover Rwanda’s only Big Five park. Enjoy diverse habitats including lakes, savannah, and woodlands. Spot lions, rhinos, elephants, and over 480 bird species.",
    image: "/images/akager.jpg",
    price: "200/person",
    duration: "2 Days"
  },
  {
    id: 6,
    title: "Campaign Against Genocide & Richard Kandt Museums",
    description:
      "Learn Rwanda’s liberation history at the Campaign Against Genocide Museum and explore colonial history at Richard Kandt Museum.",
    image: "/images/muse.jpg",
    price: "50/person",
    duration: "Half Day"
  },
  {
    id: 7,
    title: "Kigali City Walking Tour",
    description:
      "Discover Kigali’s highlights including monuments, memorials, art galleries, and vibrant local culture.",
    image: "/images/kigali.jpg",
    price: "20/person",
    duration: "2-3 Hours"
  },
  {
    id: 8,
    title: "Museums of Rwanda Tour",
    description:
      "Visit the Ethnographic Museum and King’s Palace Museum to explore Rwanda’s rich cultural heritage.",
    image: "/images/museum.jpg",
    price: "50/person",
    duration: "Full Day"
  },
  {
    id: 9,
    title: "Mount Kigali Hiking Adventure",
    description:
      "Trek through scenic villages with breathtaking views of Kigali and surrounding hills.",
    image: "/images/mtkigali.jpg",
    price: "40/person",
    duration: "3-4 Hours"
  },
  {
    id: 10,
    title: "Rwanda Mountain Hiking Experience",
    description:
      "Explore Rwanda’s epic scenery from Volcanoes NP to Nyungwe. Enjoy diverse trails, wildlife, and panoramic views.",
    image: "/images/hiking.jpg",
    price: "50/person",
    duration: "Full Day"
  }
];

export default function TourPackages() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="tours" className="section-padding">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Tour Packages</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {tours.map((tour) => (
          <div key={tour.id} className="glass-card p-6 fade-in flex flex-col">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-48 object-cover rounded-base mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
            <div className="flex items-center text-gray-300 text-sm mb-2 space-x-4">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" /> {tour.duration}
              </span>
              <span className="flex items-center">
                <DollarSign className="h-4 w-4 mr-1" /> {tour.price}
              </span>
            </div>
            <p className="mb-4 text-gray-100 text-sm leading-relaxed">
              {expanded === tour.id
                ? tour.description
                : `${tour.description.substring(0, 120)}...`}
              <button
                onClick={() =>
                  setExpanded(expanded === tour.id ? null : tour.id)
                }
                className="ml-2 text-blue-400 hover:underline text-sm"
              >
                {expanded === tour.id ? "Show Less" : "Read More"}
              </button>
            </p>
            <a
              href="#booking"
              className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
