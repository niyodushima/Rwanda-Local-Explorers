import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=700&q=80"
                alt="Rwandan landscape with traditional culture"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-safari text-white p-6 rounded-lg shadow-xl hidden md:block">
              <p className="text-3xl font-heading font-bold">5+</p>
              <p className="text-sm tracking-wider uppercase">Years of Experience</p>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-safari tracking-[0.3em] uppercase text-sm mb-4">
              Why Travel With Us
            </p>
            <h2 className="section-heading text-left">
              Pioneering Local<br />Tourism Excellence
            </h2>
            <div className="space-y-4 mt-6 text-charcoal/70 leading-relaxed">
              <p>
                Rwanda Local Explorers was born from a deep love for Rwanda and a desire to share
                its wonders with the world. As a locally-owned and operated company, we bring
                authentic insider knowledge that no international agency can match.
              </p>
              <p>
                Our guides aren't just experts — they're storytellers, conservationists, and
                passionate ambassadors of Rwandan culture. Every tour is designed to create
                meaningful connections between travelers and the communities they visit.
              </p>
              <p>
                We believe in sustainable tourism that benefits local communities. A portion of
                every booking goes directly to conservation efforts and community development
                projects across Rwanda.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                { title: "Local Expertise", desc: "Born and raised Rwandan guides" },
                { title: "Best Prices", desc: "Direct local operator, no middlemen" },
                { title: "Sustainability", desc: "Supporting conservation & communities" },
                { title: "Bespoke Tours", desc: "Customized to your interests" },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-safari pl-4">
                  <h4 className="font-semibold text-charcoal text-sm">{item.title}</h4>
                  <p className="text-xs text-charcoal/60 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
