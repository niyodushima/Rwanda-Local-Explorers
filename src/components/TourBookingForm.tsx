import React, { useState } from "react";

function TourBookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tour: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}, your booking request has been submitted!`);
    // Later you can connect this to a backend or email service
  };

  return (
    <section id="tours" className="bg-white shadow-md rounded p-6 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book Your Tour</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Tour</label>
          <select
            name="tour"
            value={formData.tour}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select a tour</option>
            <option value="kigali">Kigali City Tour</option>
            <option value="volcanoes">Volcanoes National Park</option>
            <option value="akagera">Akagera Safari</option>
            <option value="nyungwe">Nyungwe Forest Experience</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          Submit Booking
        </button>
      </form>
    </section>
  );
}

export default TourBookingForm;
