import Image from "next/image";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Photography tips, behind-the-scenes stories, and creative inspiration from Lens & Light Studio.",
};

const posts = [
  { title: "10 Tips for Perfect Wedding Photography", slug: "wedding-photography-tips", excerpt: "Essential tips I've learned from shooting over 500 weddings. From lighting to timing, here's what makes the difference.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", date: "2024-12-10", category: "Tips" },
  { title: "Behind the Lens: A Day in My Life", slug: "behind-the-lens", excerpt: "A candid look at what goes into a typical shoot day — from preparation to post-processing.", image: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80", date: "2024-11-22", category: "Behind the Scenes" },
  { title: "How to Prepare for Your Portrait Session", slug: "portrait-session-preparation", excerpt: "Everything you need to know before your portrait session to ensure amazing results.", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80", date: "2024-10-15", category: "Guide" },
  { title: "The Art of Natural Light Photography", slug: "natural-light-photography", excerpt: "Why natural light remains my favorite tool and how to make the most of it.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", date: "2024-09-08", category: "Technique" },
  { title: "Best Locations for Pre-Wedding Shoots", slug: "prewedding-locations", excerpt: "A curated list of stunning locations perfect for your pre-wedding photoshoot.", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80", date: "2024-08-20", category: "Locations" },
  { title: "Choosing the Right Photography Package", slug: "choosing-photography-package", excerpt: "A guide to understanding photography packages and selecting the right one for your needs.", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80", date: "2024-07-12", category: "Guide" },
];

export default function BlogPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <FadeUp>
            <SectionHeading title="Stories & Insights" subtitle="Our Blog" />
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block h-full" id={`blog-${post.slug}`}>
                  <div className="relative aspect-[16/10] overflow-hidden mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-accent text-xs uppercase tracking-wider font-semibold">{post.category}</span>
                    <span className="text-text-muted text-xs">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-text group-hover:text-accent transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{post.excerpt}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
