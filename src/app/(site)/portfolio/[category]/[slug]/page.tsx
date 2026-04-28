import GalleryDetailClient from "@/components/portfolio/GalleryDetailClient";
import type { Metadata } from "next";

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return { title, description: `View the "${title}" photography gallery.` };
}

export default async function GalleryPage({ params }: Props) {
  const { category } = await params;
  return <GalleryDetailClient category={category} />;
}
