import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for wedding, portrait, fashion, and event photography packages.",
};

const plans = [
  {
    name: "Essential",
    price: "25,000",
    period: "per session",
    desc: "Perfect for portrait sessions and small events.",
    features: ["2-hour session", "1 location", "50+ edited photos", "Online gallery", "Print-ready files", "Delivered in 7 days"],
    popular: false,
  },
  {
    name: "Premium",
    price: "75,000",
    period: "per event",
    desc: "Ideal for weddings and major celebrations.",
    features: ["Full day coverage", "Second photographer", "200+ edited photos", "Highlight reel", "Online gallery", "Premium album", "Delivered in 14 days"],
    popular: true,
  },
  {
    name: "Luxury",
    price: "1,50,000",
    period: "per event",
    desc: "The ultimate experience for grand celebrations.",
    features: ["Multi-day coverage", "2 photographers + videographer", "500+ edited photos", "Cinematic film", "Drone footage", "Premium album", "Engagement shoot included", "Priority delivery"],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <FadeUp>
            <SectionHeading title="Investment" subtitle="Pricing Plans" />
            <p className="text-text-secondary text-center max-w-2xl mx-auto -mt-8 mb-14">
              Transparent pricing with no hidden costs. Every package includes professional editing and a premium experience.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div
                  className={`relative p-8 border h-full flex flex-col ${
                    plan.popular
                      ? "border-accent bg-surface-2"
                      : "border-border bg-surface"
                  } transition-all duration-300 hover:border-accent/60`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-bg text-xs font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <h3 className="font-heading text-xl font-semibold text-text mb-2">{plan.name}</h3>
                  <p className="text-text-muted text-sm mb-4">{plan.desc}</p>

                  <div className="mb-6">
                    <span className="text-accent text-sm">₹</span>
                    <span className="font-heading text-4xl font-bold text-text">{plan.price}</span>
                    <span className="text-text-muted text-sm ml-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-text-secondary text-sm">
                        <span className="text-accent mt-0.5">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/booking"
                    className={`block text-center py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      plan.popular
                        ? "bg-accent text-bg hover:bg-accent-light"
                        : "border border-accent text-accent hover:bg-accent hover:text-bg"
                    }`}
                    id={`pricing-cta-${plan.name.toLowerCase()}`}
                  >
                    Book Now
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.3}>
            <p className="text-center text-text-muted text-sm mt-12">
              Need something custom?{" "}
              <Link href="/contact" className="text-accent hover:underline">
                Contact us
              </Link>{" "}
              for a tailored quote.
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
