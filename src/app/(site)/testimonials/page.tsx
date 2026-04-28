import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";
import { FaStar } from "react-icons/fa";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read what our clients say about their photography experience with Lens & Light Studio.",
};

const testimonials = [
  { name: "Priya & Rahul", role: "Wedding", quote: "Every photo from our wedding feels like a masterpiece. The attention to detail and ability to capture candid emotions was truly remarkable. We'll cherish these memories forever.", rating: 5, image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&q=80" },
  { name: "Ananya Sharma", role: "Fashion Shoot", quote: "Working with Lens & Light was transformative. The creative direction, lighting, and final results exceeded my expectations. A truly world-class experience.", rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" },
  { name: "Vikram Patel", role: "Corporate Event", quote: "Professional, punctual, and incredibly talented. The corporate event coverage was comprehensive and every single photograph was of exceptional quality.", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { name: "Neha & Arjun", role: "Pre-Wedding", quote: "The pre-wedding shoot was magical! From location scouting to the final edits, every step was handled with care and creativity. The results were beyond dreamy.", rating: 5, image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80" },
  { name: "Ritu Kapoor", role: "Portrait", quote: "I was nervous about a portrait session, but the photographer made me feel so comfortable. The photos captured my personality perfectly — confident yet natural.", rating: 5, image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80" },
  { name: "Sanjay Mehta", role: "Product Photography", quote: "The product shots elevated our brand to a whole new level. Clean, professional, and incredibly detailed. Our online sales improved significantly after the rebrand.", rating: 5, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <FadeUp>
            <SectionHeading title="Client Stories" subtitle="What They Say" />
            <p className="text-text-secondary text-center max-w-2xl mx-auto -mt-8 mb-14">
              Every project is built on trust, creativity, and a shared vision. Here&apos;s what our clients have to say.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="p-8 bg-surface border border-border h-full flex flex-col hover:border-accent/30 transition-colors duration-300">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <FaStar key={i} className="text-accent text-sm" />
                    ))}
                  </div>
                  <blockquote className="text-text-secondary text-sm leading-relaxed italic flex-1 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image src={t.image} alt={t.name} fill className="object-cover" sizes="40px" />
                    </div>
                    <div>
                      <p className="text-text text-sm font-semibold">{t.name}</p>
                      <p className="text-text-muted text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
