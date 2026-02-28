import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";   // ✅ default import matches default export
import TourBookingForm from "./components/TourBookingForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to Rwanda Local Explorers</h1>
        <p className="mb-6">
          Discover Rwanda’s breathtaking landscapes, vibrant culture, and unforgettable wildlife tours.
        </p>
        <TourBookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
