"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { HiOutlineChevronDown } from "react-icons/hi";

const faqs = [
  { q: "How far in advance should I book?", a: "For weddings, I recommend booking 6-12 months in advance as dates fill up quickly. For other sessions, 2-4 weeks notice is usually sufficient." },
  { q: "How long does it take to receive the final photos?", a: "Wedding galleries are delivered within 2-3 weeks. Portrait and fashion sessions are typically delivered within 5-7 business days. Rush delivery is available upon request." },
  { q: "Do you travel for shoots?", a: "Absolutely! I love destination shoots. Travel within India is included for wedding packages, and international travel can be arranged with additional logistics discussed upfront." },
  { q: "What happens if it rains on my outdoor shoot?", a: "Weather is unpredictable, but rain can create some of the most magical photos! We'll have a backup plan ready, and rescheduling is always an option at no extra charge." },
  { q: "How many photos will I receive?", a: "The number varies by package and event duration. Typically: portraits (50-80), events (200-400), weddings (400-800+). All photos are professionally edited." },
  { q: "Do you provide raw/unedited files?", a: "I provide fully edited, high-resolution files. Raw files are not included as they don't represent the final artistic vision, but can be discussed for commercial projects." },
  { q: "Can I print the photos myself?", a: "Yes! All delivered photos are print-ready at full resolution. I also offer premium printing services through my studio partnerships if you'd prefer professional prints." },
  { q: "What's your cancellation policy?", a: "Cancellations made 30+ days before the event receive a full refund minus the booking deposit. Within 30 days, the deposit is non-refundable but can be applied to a future date." },
];

function AccordionItem({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-border">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        id={`faq-${q.slice(0, 20).replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="font-heading text-lg font-medium text-text group-hover:text-accent transition-colors pr-4">
          {q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-accent shrink-0"
        >
          <HiOutlineChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeUp>
            <SectionHeading title="FAQ" subtitle="Common Questions" />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  toggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
