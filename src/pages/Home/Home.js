import React from "react";
import HeroSection from "./HomeComponents/HeroSection";
import FeaturesSection from "./HomeComponents/FeaturesSection";
import HowItWorksSection from "./HomeComponents/HowItWorksSection";
import ServicesSection from "./HomeComponents/ServicesSection";
import ServicesAreaSection from "./HomeComponents/ServicesAreaSection";
import CallToActionSection from "./HomeComponents/CallToActionSection";
import AdvertisingSection from "./HomeComponents/AdvertisingSection";
import TestimonialsSection from "./HomeComponents/TestimonialsSection";
import FloatingButtons from "./HomeComponents/FloatingButtons"; // Add this import

const Home = () => {
  return (
    <main style={{ padding: 0, margin: 0 }}>
      <HeroSection />
      <CallToActionSection />
      <ServicesSection />
      <ServicesAreaSection />
      <AdvertisingSection />
      <TestimonialsSection />
      <FloatingButtons />
    </main>
  );
};

export default Home;