import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import StatsSection from "@/components/home/StatsSection";
import BookingCTA from "@/components/home/BookingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <AboutPreview />
      <ServicesPreview />
      <TestimonialsSlider />
      <StatsSection />
      <BookingCTA />
    </>
  );
}
