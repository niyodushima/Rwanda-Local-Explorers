import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Destinations } from "./components/Destinations";
import { Experiences } from "./components/Experiences";
import { Stats } from "./components/Stats";
import { About } from "./components/About";
import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" richColors />
      <Navbar />
      <Hero />
      <Destinations />
      <Experiences />
      <Stats />
      <About />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default App;
