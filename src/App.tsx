import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Tours } from "./components/Tours";
import { About } from "./components/About";
import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Tours />
        <About />
        <BookingSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
