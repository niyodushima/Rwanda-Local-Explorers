import { motion } from "framer-motion";

const destinations = [
  {
    title: "Volcanoes National Park",
    description: "Trek through misty bamboo forests to encounter mountain gorillas and golden monkeys in their natural habitat.",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80",
    location: "Northern Province",
    tag: "Gorilla Trekking",
  },
  {
    title: "Akagera National Park",
    description: "Rwanda's largest protected wetland and savanna ecosystem, home to the Big Five and over 500 bird species.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
    location: "Eastern Province",
    tag: "Safari",
  },
  {
    title: "Nyungwe Forest",
    description: "One of Africa's oldest rainforests with canopy walks, chimpanzee tracking, and 300+ bird species to discover.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
    location: "Southern Province",
    tag: "Rainforest",
  },
  {
    title: "Lake Kivu",
    description: "Relax on the shores of one of Africa's Great Lakes with stunning sunsets, island hopping, and kayaking.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    location: "Western Province",
    tag: "Lakeside",
  },
  {
    title: "Kigali City",
    description: "Explore the vibrant capital with its rich history, bustling markets, world-class dining, and cultural landmarks.",
    image: "https://images.unsplash.com/photo-1609198092458-38a293c7ac4b?w=600&q=80",
    location: "Kigali",
    tag: "Cultural",
  },
  {
    title: "Kings Palace Museum",
    description: "Step back in time at the restored royal residence in Nyanza and learn about Rwanda's rich monarchal heritage.",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=600&q=80",
    location: "Nyanza",
    tag: "Heritage",
  },
];

export function Destinations() {
  return (
    <section id="destinations" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-safari tracking-[0.3em] uppercase text-sm mb-4">
            Our Iconic Destinations
          </p>
          <h2 className="section-heading">
            Explore the Land of<br />a Thousand Hills
          </h2>
          <p className="section-subheading mt-4">
            From mist-covered volcanoes to sweeping savannas, discover the extraordinary
            diversity of Rwanda's landscapes and wildlife.
          </p>
        </div>

        {/* Destination Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-safari/90 text-white text-xs tracking-wider uppercase px-3 py-1.5 rounded-sm">
                    {dest.tag}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sand/60 text-xs tracking-[0.2em] uppercase mb-2">
                    {dest.location}
                  </p>
                  <h3 className="text-sand font-heading text-2xl font-semibold mb-2">
                    {dest.title}
                  </h3>
                  <p className="text-sand/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {dest.description}
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
