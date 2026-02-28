import { MapPin, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./Card";
import { Button } from "./ui/button";

interface Tour {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

const tours: Tour[] = [
  {
    title: "Golden Monkey Trekking",
    description:
      "Trek through bamboo forests in the Virunga Mountains to observe endangered golden monkeys in their natural habitat.",
    price: "$200/person",
    duration: "Half day",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
  },
  {
    title: "Akagera National Park Safari",
    description:
      "Experience the Big Five on a thrilling game drive through Rwanda's largest national park, home to lions, elephants, and more.",
    price: "$200/person",
    duration: "Full day",
    image:
      "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=600&h=400&fit=crop",
  },
  {
    title: "Dian Fossey Tomb",
    description:
      "Visit the final resting place of the legendary primatologist, nestled high in the Virunga Mountains near mountain gorillas.",
    price: "$250/person",
    duration: "Full day",
    image:
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600&h=400&fit=crop",
  },
  {
    title: "Kings Palace Museum - Nyanza",
    description:
      "Step back in time at the reconstructed royal palace and learn about Rwanda's rich monarchical heritage and traditions.",
    price: "$100/person",
    duration: "Half day",
    image:
      "https://images.unsplash.com/photo-1590011477387-6485ddba5e7a?w=600&h=400&fit=crop",
  },
  {
    title: "Kigali City Walking Tour",
    description:
      "Explore the vibrant capital city on foot, visiting local markets, art galleries, cafes, and cultural landmarks with a local guide.",
    price: "$20/person",
    duration: "3 hours",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=400&fit=crop",
  },
  {
    title: "Rwanda Mountain Hiking",
    description:
      "Conquer stunning volcanic peaks with breathtaking views across the Great Rift Valley and lush Rwandan landscapes.",
    price: "$150/person",
    duration: "Full day",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop",
  },
];

export function Tours() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tours" className="py-20 bg-gradient-to-b from-charcoal to-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-sand mb-4">
            Our Tours
          </h2>
          <p className="text-lg text-sand-light max-w-2xl mx-auto">
            Handpicked experiences that showcase the best of Rwanda, from wildlife encounters to cultural immersion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card
              key={tour.title}
              className="bg-white/5 border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {tour.price}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-sand text-lg">{tour.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sand-light text-sm leading-relaxed">
                  {tour.description}
                </p>
                <div className="flex items-center gap-4 mt-4 text-sand-light text-xs">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <DollarSign className="h-3.5 w-3.5" />
                    {tour.price}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    Rwanda
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={scrollToBooking}
                  className="w-full bg-primary hover:bg-primary-light text-white"
                >
                  Book This Tour
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
