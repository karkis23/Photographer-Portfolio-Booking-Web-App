import Image from "next/image";
import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const name = category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return { title: `${name} Photography`, description: `Browse our ${name.toLowerCase()} photography galleries.` };
}

const sampleGalleries = [
  { title: "A Love Story", slug: "a-love-story", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", photos: 48, date: "2024-12-15" },
  { title: "Sunset Dreams", slug: "sunset-dreams", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80", photos: 36, date: "2024-11-20" },
  { title: "Golden Moments", slug: "golden-moments", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80", photos: 52, date: "2024-10-08" },
  { title: "Timeless Beauty", slug: "timeless-beauty", image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=600&q=80", photos: 40, date: "2024-09-22" },
  { title: "Ethereal Light", slug: "ethereal-light", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80", photos: 28, date: "2024-08-14" },
  { title: "The Celebration", slug: "the-celebration", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", photos: 64, date: "2024-07-30" },
];

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryName = category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <FadeUp>
            <div className="mb-6">
              <Link href="/portfolio" className="text-text-muted text-sm hover:text-accent transition-colors">
                ← Back to Portfolio
              </Link>
            </div>
            <SectionHeading title={`${categoryName} Photography`} subtitle="Gallery Collection" />
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleGalleries.map((gallery) => (
              <StaggerItem key={gallery.slug}>
                <Link
                  href={`/portfolio/${category}/${gallery.slug}`}
                  className="group block"
                  id={`gallery-${gallery.slug}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={gallery.image}
                      alt={gallery.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-text group-hover:text-accent transition-colors">
                    {gallery.title}
                  </h3>
                  <p className="text-text-muted text-sm mt-1">
                    {gallery.photos} photos · {new Date(gallery.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
