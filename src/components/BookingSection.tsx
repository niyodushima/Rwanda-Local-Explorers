import { TourBookingForm } from "./TourBookingForm";
import { motion } from "framer-motion";

export function BookingSection() {
  return (
    <section id="booking" className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&q=40"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-safari tracking-[0.3em] uppercase text-sm mb-4">
              Start Your Journey
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-semibold text-sand mb-6">
              Book Your<br />
              <span className="italic font-normal">Rwanda Adventure</span>
            </h2>
            <p className="text-sand/60 leading-relaxed mb-8">
              Ready to explore Rwanda? Fill out the form and our team will create
              a personalized itinerary just for you. Whether you're seeking gorilla
              encounters, safari thrills, or cultural immersion — we'll make it happen.
            </p>

            <div className="space-y-4">
              {[
                "Personalized itinerary within 24 hours",
                "No booking fees — pay directly to local providers",
                "Flexible cancellation policy",
                "24/7 support during your trip",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-safari flex-shrink-0" />
                  <p className="text-sand/70 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-sand/5 border border-sand/10 rounded-lg">
              <p className="text-sand/80 text-sm">
                <span className="text-safari font-semibold">Email: </span>
                murisaregis@gmail.com
              </p>
              <p className="text-sand/80 text-sm mt-2">
                <span className="text-safari font-semibold">WhatsApp: </span>
                +250 788 000 000
              </p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <TourBookingForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
