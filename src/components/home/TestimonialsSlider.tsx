"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { FaStar } from "react-icons/fa";

const testimonials = [
  { id: 1, name: "Priya & Rahul", role: "Wedding Couple", quote: "The photos exceeded every expectation we had. Each image feels like a piece of art that perfectly captures the emotions of our special day. We couldn't be happier!", rating: 5, image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80" },
  { id: 2, name: "Ananya Sharma", role: "Fashion Model", quote: "Working with Lens & Light was an incredible experience. The attention to detail, creative direction, and final results were absolutely stunning. Truly world-class.", rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
  { id: 3, name: "Vikram Patel", role: "Corporate Event", quote: "Professional, punctual, and incredibly talented. The event coverage was comprehensive and the quality of each photograph was remarkable. Highly recommended!", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-surface" id="testimonials-slider">
      <div className="container-narrow mx-auto">
        <FadeUp>
          <SectionHeading title="Client Love" subtitle="Testimonials" />
        </FadeUp>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} className="text-accent text-lg" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-accent text-2xl md:text-3xl text-text leading-relaxed italic mb-8 max-w-3xl mx-auto">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                </div>
                <div className="text-left">
                  <p className="text-text font-semibold">{t.name}</p>
                  <p className="text-text-muted text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-accent" : "bg-border-light"
              }`}
              aria-label={`Testimonial ${i + 1}`}
              id={`testimonial-dot-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
