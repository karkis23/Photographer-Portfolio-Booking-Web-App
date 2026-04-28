"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BookingCTA() {
  return (
    <section
      className="relative py-32 overflow-hidden"
      id="booking-cta"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1920&q=60')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
      <div className="relative z-10 container-narrow mx-auto text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-accent text-accent text-xl italic mb-4"
        >
          Ready to Create Something Beautiful?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          Let&apos;s Tell Your Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/70 text-lg max-w-xl mx-auto mb-10"
        >
          Book a consultation and let&apos;s plan the perfect shoot for your special occasion.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/booking"
            className="inline-flex px-12 py-4 bg-accent text-bg font-semibold uppercase tracking-wider text-sm hover:bg-accent-light transition-colors duration-300"
            id="cta-book-session"
          >
            Book Your Session
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
