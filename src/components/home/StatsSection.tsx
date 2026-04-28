"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FadeUp } from "@/components/ui/Animations";

const stats = [
  { label: "Weddings Shot", value: 500, suffix: "+" },
  { label: "Happy Clients", value: 1200, suffix: "+" },
  { label: "Years Experience", value: 12, suffix: "" },
  { label: "Awards Won", value: 25, suffix: "+" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-heading text-5xl md:text-6xl font-bold text-gradient">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      id="stats-section"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=60')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 container-wide mx-auto px-6">
        <FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-white/60 uppercase tracking-widest text-xs mt-3 font-semibold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
