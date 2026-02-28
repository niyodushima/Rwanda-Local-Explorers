import { motion } from "framer-motion";
import { Binoculars, Mountain, TreePine, Camera, Compass, Users } from "lucide-react";

const experiences = [
  {
    icon: Binoculars,
    title: "Gorilla Trekking",
    description: "Get face-to-face with endangered mountain gorillas in Volcanoes National Park, guided by expert trackers.",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=500&q=80",
    price: "From $200",
  },
  {
    icon: Compass,
    title: "Safari Adventures",
    description: "Game drives through Akagera National Park to spot elephants, lions, rhinos, giraffes and hundreds of bird species.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=500&q=80",
    price: "From $200",
  },
  {
    icon: Mountain,
    title: "Mountain Hiking",
    description: "Scale the peaks of the Virunga Mountains and enjoy breathtaking views from Rwanda's volcanic highlands.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80",
    price: "From $40",
  },
  {
    icon: TreePine,
    title: "Rainforest Walks",
    description: "Explore Nyungwe Forest's ancient canopy walkway suspended above the jungle floor and track chimpanzees.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&q=80",
    price: "From $100",
  },
  {
    icon: Users,
    title: "Cultural Tours",
    description: "Visit traditional villages, royal palaces, and vibrant markets. Experience authentic Rwandan hospitality and dance.",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=500&q=80",
    price: "From $20",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description: "Capture Rwanda's incredible biodiversity with expert guides who know the best vantage points and golden hours.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80",
    price: "From $150",
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="section-padding bg-charcoal">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-safari tracking-[0.3em] uppercase text-sm mb-4">
            Unforgettable Experiences
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-semibold text-sand mb-4">
            Your Journey,<br />
            <span className="italic font-normal">Your Way</span>
          </h2>
          <p className="text-lg md:text-xl text-sand/60 max-w-2xl mx-auto">
            Every experience is crafted by local experts who call Rwanda home.
            Authentic, personal, and truly unforgettable.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-charcoal-light/50 border border-sand/10 rounded-lg overflow-hidden hover:border-safari/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-charcoal/30" />
                  <div className="absolute top-4 right-4 bg-safari/90 text-white text-xs tracking-wider px-3 py-1 rounded-sm">
                    {exp.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-safari/20 flex items-center justify-center">
                      <exp.icon className="w-5 h-5 text-safari" />
                    </div>
                    <h3 className="text-sand font-heading text-xl font-semibold">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-sand/60 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
