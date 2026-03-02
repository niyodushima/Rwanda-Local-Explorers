import React from "react";
import { useForm } from "react-hook-form";

interface BookingFormInputs {
  name: string;
  email: string;
  package: string;
  date: string;
}

export default function TourBookingForm() {
  const { register, handleSubmit } = useForm<BookingFormInputs>();

  const onSubmit = (data: BookingFormInputs) => {
    console.log("Booking submitted:", data);
    alert("Booking submitted! We’ll contact you soon.");
  };

  return (
    <section id="booking" className="section-padding">
      <h2 className="text-2xl font-bold mb-6">Book Your Tour</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="glass-card p-6 space-y-4 max-w-md"
      >
        <input
          {...register("name")}
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded"
        />
        <select {...register("package")} className="w-full p-2 border rounded">
          <option value="Volcanoes">Volcanoes National Park</option>
          <option value="Akagera">Akagera Safari</option>
          <option value="Lake Kivu">Lake Kivu Getaway</option>
        </select>
        <input
          {...register("date")}
          type="date"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Booking
        </button>
      </form>
    </section>
  );
}
