import { TourBookingForm } from "./TourBookingForm";

export function BookingSection() {
  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-charcoal-light to-charcoal">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-sand mb-4">
            Book Your Adventure
          </h2>
          <p className="text-lg text-sand-light">
            Fill out the form below and we'll get back to you within 24 hours to
            confirm your tour
          </p>
        </div>
        <TourBookingForm />
      </div>
    </section>
  );
}
