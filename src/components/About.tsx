import { Shield, Users, Heart, Globe } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Local Expertise",
    description:
      "Our guides are born and raised in Rwanda, offering insider knowledge and authentic cultural connections you won't find elsewhere.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every tour is carefully planned with safety protocols, licensed guides, and proper equipment to ensure a worry-free adventure.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description:
      "A portion of every booking supports local communities, conservation efforts, and sustainable tourism initiatives in Rwanda.",
  },
  {
    icon: Globe,
    title: "Tailored Experiences",
    description:
      "From solo travelers to large groups, we customize every itinerary to match your interests, pace, and budget.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-sand mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-sand-light max-w-2xl mx-auto">
            Rwanda Local Explorers connects you with the heart of Rwanda through
            authentic, responsible, and unforgettable travel experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/20 mb-4">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-sand mb-3">
                {feature.title}
              </h3>
              <p className="text-sand-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
