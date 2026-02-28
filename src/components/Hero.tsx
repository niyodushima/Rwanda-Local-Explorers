import React from "react";
import Button from "./ui/Button";  // default import

export default function Hero() {
  return (
    <div>
      <h1>Discover Rwanda's Hidden Treasures</h1>
      <p>Authentic local experiences with expert guidance at unbeatable prices</p>
      <Button onClick={() => document.getElementById("tours")?.scrollIntoView({ behavior: "smooth" })}>
        Explore Tours
      </Button>
    </div>
  );
}
