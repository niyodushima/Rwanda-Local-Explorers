import { motion } from "framer-motion";
import { MapPin, Mountain, Users, Star, Compass } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    value: "10+",
    label: "Tour Destinations",
    description: "Across all provinces of Rwanda",
  },
  {
    icon: Mountain,
    value: "3",
    label: "National Parks",
    description: "Volcanoes, Akagera & Nyungwe",
  },
  {
    icon: Users,
    value: "500+",
    label: "Happy Travelers",
    description: "From around the world",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    description: "Based on guest reviews",
  },
  {
    icon: Compass,
    value: "100%",
    label: "Local Experts",
    description: "Authentic Rwandan guides",
  },
];

export function Stats() {
  return (
    <section className="section-padding bg-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-safari/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-safari" />
              </div>
              <p className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-charcoal/80 uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-charcoal/50">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
