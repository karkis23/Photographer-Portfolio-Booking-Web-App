"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { HiOutlineCheckCircle } from "react-icons/hi";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  eventType: z.string().min(1, "Please select event type"),
  preferredDate: z.string().min(1, "Please select a date"),
  location: z.string().min(2, "Location is required"),
  budget: z.string().min(1, "Please select budget range"),
  message: z.string().optional(),
  honeypot: z.string().max(0), // Spam protection
});

type BookingFormData = z.infer<typeof bookingSchema>;

const eventTypes = [
  { value: "wedding", label: "Wedding" },
  { value: "pre-wedding", label: "Pre-Wedding" },
  { value: "portrait", label: "Portrait" },
  { value: "fashion", label: "Fashion" },
  { value: "event", label: "Event" },
  { value: "product", label: "Product" },
  { value: "corporate", label: "Corporate" },
  { value: "other", label: "Other" },
];

const budgetRanges = [
  { value: "under-25k", label: "Under ₹25,000" },
  { value: "25k-50k", label: "₹25,000 - ₹50,000" },
  { value: "50k-1l", label: "₹50,000 - ₹1,00,000" },
  { value: "1l-2.5l", label: "₹1,00,000 - ₹2,50,000" },
  { value: "above-2.5l", label: "Above ₹2,50,000" },
];

export default function BookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { honeypot: "" },
  });

  const onSubmit = async (data: BookingFormData) => {
    if (data.honeypot) return; // Bot detected
    setSubmitting(true);
    // Simulate API call (replace with real server action when Sanity is connected)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="pt-24">
        <section className="section-padding min-h-[60vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-lg mx-auto"
          >
            <HiOutlineCheckCircle className="text-success text-6xl mx-auto mb-6" />
            <h2 className="font-heading text-3xl font-bold text-text mb-4">
              Booking Request Sent!
            </h2>
            <p className="text-text-secondary mb-8">
              Thank you for reaching out! I&apos;ll review your request and get back to you
              within 24 hours with a personalized response.
            </p>
            <a
              href="/"
              className="inline-flex px-8 py-3 bg-accent text-bg text-sm font-semibold uppercase tracking-wider hover:bg-accent-light transition-colors"
            >
              Back to Home
            </a>
          </motion.div>
        </section>
      </div>
    );
  }

  const inputClasses = "w-full bg-surface border border-border px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-300";
  const labelClasses = "block text-text text-sm font-medium mb-2";
  const errorClasses = "text-error text-xs mt-1";

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeUp>
            <SectionHeading title="Book a Session" subtitle="Let's Create Together" />
            <p className="text-text-secondary text-center max-w-xl mx-auto -mt-8 mb-14">
              Fill out the form below and I&apos;ll get back to you within 24 hours to discuss your vision.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
              {/* Honeypot - hidden from users */}
              <div className="absolute opacity-0 pointer-events-none" aria-hidden>
                <input {...register("honeypot")} tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses} htmlFor="name">Full Name *</label>
                  <input id="name" {...register("name")} className={inputClasses} placeholder="John Doe" />
                  {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
                </div>
                <div>
                  <label className={labelClasses} htmlFor="email">Email *</label>
                  <input id="email" type="email" {...register("email")} className={inputClasses} placeholder="john@example.com" />
                  {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses} htmlFor="phone">Phone *</label>
                  <input id="phone" {...register("phone")} className={inputClasses} placeholder="+91 98765 43210" />
                  {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
                </div>
                <div>
                  <label className={labelClasses} htmlFor="eventType">Event Type *</label>
                  <select id="eventType" {...register("eventType")} className={inputClasses}>
                    <option value="">Select type</option>
                    {eventTypes.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  {errors.eventType && <p className={errorClasses}>{errors.eventType.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses} htmlFor="preferredDate">Preferred Date *</label>
                  <input id="preferredDate" type="date" {...register("preferredDate")} className={inputClasses} />
                  {errors.preferredDate && <p className={errorClasses}>{errors.preferredDate.message}</p>}
                </div>
                <div>
                  <label className={labelClasses} htmlFor="budget">Budget Range *</label>
                  <select id="budget" {...register("budget")} className={inputClasses}>
                    <option value="">Select range</option>
                    {budgetRanges.map((b) => (
                      <option key={b.value} value={b.value}>{b.label}</option>
                    ))}
                  </select>
                  {errors.budget && <p className={errorClasses}>{errors.budget.message}</p>}
                </div>
              </div>

              <div>
                <label className={labelClasses} htmlFor="location">Location *</label>
                <input id="location" {...register("location")} className={inputClasses} placeholder="City, Venue, or TBD" />
                {errors.location && <p className={errorClasses}>{errors.location.message}</p>}
              </div>

              <div>
                <label className={labelClasses} htmlFor="message">Additional Message</label>
                <textarea id="message" {...register("message")} className={inputClasses} rows={4} placeholder="Tell me about your vision, preferences, or any questions..." />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-accent text-bg font-semibold uppercase tracking-wider text-sm hover:bg-accent-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                id="booking-submit"
              >
                {submitting ? "Sending..." : "Send Booking Request"}
              </button>
            </form>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
