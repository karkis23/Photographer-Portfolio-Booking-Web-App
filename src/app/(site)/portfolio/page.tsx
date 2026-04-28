import Image from "next/image";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse stunning photography galleries — weddings, portraits, fashion, events, and more.",
};

const categories = [
  { name: "Wedding", slug: "wedding", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", count: 12 },
  { name: "Pre Wedding", slug: "pre-wedding", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80", count: 8 },
  { name: "Portrait", slug: "portrait", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80", count: 15 },
  { name: "Fashion", slug: "fashion", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80", count: 10 },
  { name: "Event", slug: "event", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", count: 7 },
  { name: "Travel", slug: "travel", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", count: 6 },
  { name: "Product", slug: "product", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80", count: 9 },
  { name: "Cinematic", slug: "cinematic", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80", count: 5 },
];

export default function PortfolioPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <FadeUp>
            <SectionHeading title="My Portfolio" subtitle="Explore My Work" />
            <p className="text-text-secondary text-center max-w-2xl mx-auto -mt-8 mb-14">
              Browse through different categories to discover the moments I&apos;ve had the honor of capturing.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <StaggerItem key={cat.slug}>
                <Link
                  href={`/portfolio/${cat.slug}`}
                  className="group relative block overflow-hidden aspect-[3/4]"
                  id={`portfolio-cat-${cat.slug}`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading text-2xl font-semibold text-white mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-white/60 text-sm">{cat.count} galleries</p>
                  </div>
                  <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/40 transition-all duration-500" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
