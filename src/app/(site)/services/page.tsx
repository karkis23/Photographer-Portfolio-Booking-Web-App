import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading, { SectionCTA } from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore our professional photography services — weddings, portraits, fashion, events, and cinematic films.",
};

const services = [
  { icon: "💒", title: "Wedding Photography", desc: "Your love story deserves to be told with breathtaking beauty. From intimate ceremonies to grand celebrations, I capture every emotion, every detail, and every precious moment.", features: ["Full day coverage", "Second photographer", "Engagement shoot", "Online gallery", "Print-ready files"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80" },
  { icon: "💑", title: "Pre-Wedding Shoots", desc: "Create stunning visual memories before the big day. Choose from exotic locations, creative themes, and cinematic styles.", features: ["4-6 hour session", "Location scouting", "Outfit guidance", "50+ edited photos", "Social media teasers"], image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80" },
  { icon: "📷", title: "Portrait Photography", desc: "Professional portraits that capture your authentic self. Perfect for personal branding, profiles, and artistic expression.", features: ["Studio or outdoor", "Professional lighting", "Multiple looks", "Retouched finals", "Quick turnaround"], image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" },
  { icon: "👗", title: "Fashion & Editorial", desc: "High-impact fashion photography for brands, designers, and models. Editorial quality that makes a statement.", features: ["Creative direction", "Styling collaboration", "Multiple setups", "High-end retouching", "Commercial license"], image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80" },
  { icon: "🎬", title: "Cinematic Films", desc: "Wedding films and highlight reels that bring your special day back to life. Cinematic storytelling with professional sound.", features: ["4K filming", "Highlight reel", "Full ceremony film", "Drone footage", "Licensed music"], image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80" },
  { icon: "🎉", title: "Event Coverage", desc: "Comprehensive event photography for corporate functions, social gatherings, and special occasions.", features: ["Multi-hour coverage", "Candid & posed", "Same-day previews", "Quick delivery", "Group photos"], image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <FadeUp>
            <SectionHeading title="Our Services" subtitle="What We Offer" />
            <p className="text-text-secondary text-center max-w-2xl mx-auto -mt-8 mb-14">
              Every service is tailored to deliver a premium experience with exceptional quality.
            </p>
          </FadeUp>

          <div className="space-y-24">
            {services.map((service, i) => (
              <FadeUp key={service.title} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="text-5xl mb-4 block">{service.icon}</span>
                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-text mb-4">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6">{service.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-text-secondary text-sm">
                          <span className="text-accent">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <SectionCTA href="/booking" label="Book a Session" />
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
