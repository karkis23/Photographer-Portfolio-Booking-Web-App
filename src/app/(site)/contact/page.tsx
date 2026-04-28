"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineCheckCircle } from "react-icons/hi";

const contactInfo = [
  { icon: HiOutlineMail, label: "Email", value: "hello@lensandlight.com", href: "mailto:hello@lensandlight.com" },
  { icon: HiOutlinePhone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: HiOutlineLocationMarker, label: "Studio", value: "Mumbai, Maharashtra, India", href: "#" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  const inputClasses = "w-full bg-surface border border-border px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors";

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <FadeUp>
            <SectionHeading title="Get in Touch" subtitle="Contact Us" />
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <FadeUp>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-text mb-6">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="text-text-secondary leading-relaxed mb-10">
                  Whether you have a question about services, pricing, or just want to say
                  hello — I&apos;d love to hear from you. Reach out and I&apos;ll respond within 24 hours.
                </p>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center group-hover:border-accent transition-colors">
                        <item.icon className="text-accent" size={20} />
                      </div>
                      <div>
                        <p className="text-text-muted text-xs uppercase tracking-wider">{item.label}</p>
                        <p className="text-text text-sm group-hover:text-accent transition-colors">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex gap-4">
                  {[FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Contact Form */}
            <FadeUp delay={0.2}>
              {submitted ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <HiOutlineCheckCircle className="text-success text-5xl mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-semibold text-text mb-2">Message Sent!</h3>
                    <p className="text-text-secondary text-sm">We&apos;ll get back to you soon.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text text-sm font-medium mb-2" htmlFor="contact-name">Name</label>
                      <input id="contact-name" required className={inputClasses} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-text text-sm font-medium mb-2" htmlFor="contact-email">Email</label>
                      <input id="contact-email" type="email" required className={inputClasses} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-text text-sm font-medium mb-2" htmlFor="contact-subject">Subject</label>
                    <input id="contact-subject" required className={inputClasses} placeholder="How can I help?" />
                  </div>
                  <div>
                    <label className="block text-text text-sm font-medium mb-2" htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" required className={inputClasses} rows={5} placeholder="Tell me more..." />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-accent text-bg font-semibold uppercase tracking-wider text-sm hover:bg-accent-light transition-colors"
                    id="contact-submit"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
