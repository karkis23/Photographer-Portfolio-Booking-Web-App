"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading, { SectionCTA } from "@/components/ui/SectionHeading";

const services = [
  { icon: "💒", title: "Wedding Photography", desc: "Capturing your love story with cinematic elegance and timeless artistry." },
  { icon: "💑", title: "Pre-Wedding Shoots", desc: "Romantic sessions in stunning locations that celebrate your journey together." },
  { icon: "📷", title: "Portrait Sessions", desc: "Professional portraits that reveal your authentic personality and style." },
  { icon: "👗", title: "Fashion Photography", desc: "High-impact editorial and commercial fashion photography." },
  { icon: "🎬", title: "Cinematic Films", desc: "Wedding films and highlight reels that bring your day back to life." },
  { icon: "🎉", title: "Event Coverage", desc: "Comprehensive event photography for corporate and social gatherings." },
];

export default function ServicesPreview() {
  return (
    <section className="section-padding" id="services-preview">
      <div className="container-wide mx-auto">
        <FadeUp>
          <SectionHeading title="What I Offer" subtitle="My Services" />
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="group p-8 bg-surface border border-border rounded-sm hover:border-accent/40 transition-all duration-500 h-full">
                <span className="text-4xl mb-5 block">{service.icon}</span>
                <h3 className="font-heading text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.2}>
          <SectionCTA href="/services" label="Explore All Services" />
        </FadeUp>
      </div>
    </section>
  );
}
