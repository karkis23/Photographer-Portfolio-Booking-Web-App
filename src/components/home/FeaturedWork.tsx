"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading, { SectionCTA } from "@/components/ui/SectionHeading";

const placeholderGalleries = [
  { id: "1", title: "Eternal Vows", category: "Wedding", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", slug: "eternal-vows", catSlug: "wedding", photos: 48 },
  { id: "2", title: "Golden Hour", category: "Portrait", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80", slug: "golden-hour", catSlug: "portrait", photos: 24 },
  { id: "3", title: "Urban Fashion", category: "Fashion", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80", slug: "urban-fashion", catSlug: "fashion", photos: 36 },
  { id: "4", title: "Dreamy Prewedding", category: "Pre Wedding", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80", slug: "dreamy-prewedding", catSlug: "pre-wedding", photos: 52 },
  { id: "5", title: "Corporate Gala", category: "Event", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", slug: "corporate-gala", catSlug: "event", photos: 64 },
  { id: "6", title: "Wanderlust", category: "Travel", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", slug: "wanderlust", catSlug: "travel", photos: 42 },
];

const heights = ["h-[280px]", "h-[360px]", "h-[320px]", "h-[400px]", "h-[300px]", "h-[350px]"];

export default function FeaturedWork() {
  return (
    <section className="section-padding" id="featured-work">
      <div className="container-wide mx-auto">
        <FadeUp>
          <SectionHeading title="Featured Work" subtitle="Portfolio Highlights" />
        </FadeUp>

        <StaggerContainer className="masonry-grid">
          {placeholderGalleries.map((gallery, i) => (
            <StaggerItem key={gallery.id} className="masonry-item">
              <Link
                href={`/portfolio/${gallery.catSlug}/${gallery.slug}`}
                className="group relative block overflow-hidden rounded-sm"
                id={`featured-gallery-${gallery.id}`}
              >
                <div className={`relative ${heights[i % heights.length]} w-full overflow-hidden`}>
                  <Image
                    src={gallery.image}
                    alt={gallery.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-accent text-xs uppercase tracking-wider mb-1">
                      {gallery.category}
                    </p>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {gallery.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1">
                      {gallery.photos} photos
                    </p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.2}>
          <SectionCTA href="/portfolio" label="View All Galleries" />
        </FadeUp>
      </div>
    </section>
  );
}
