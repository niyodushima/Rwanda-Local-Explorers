
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&h=1080&fit=crop"
          alt="Rwanda landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-sand">
          Discover Rwanda's Hidden Treasures
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-sand-light">
          Authentic local experiences with expert guidance at unbeatable prices
        </p>
        <Button 
          onClick={() => document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-primary-light text-sand px-8 py-6 text-lg transition-all duration-300"
        >
          Explore Tours
        </Button>
      </div>
    </div>
  );
};

