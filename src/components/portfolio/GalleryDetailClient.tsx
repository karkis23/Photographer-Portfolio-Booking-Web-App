"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import { HiOutlineX, HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

const galleryPhotos = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
  "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&q=80",
  "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
];

const heights = ["h-[250px]", "h-[350px]", "h-[300px]", "h-[400px]", "h-[280px]", "h-[320px]"];

export default function GalleryDetailClient({ category }: { category: string }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const categoryName = category.replace(/-/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase());

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + galleryPhotos.length) % galleryPhotos.length : null));
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % galleryPhotos.length : null));

  return (
    <>
      <div className="pt-24">
        <section className="section-padding">
          <div className="container-wide mx-auto">
            <FadeUp>
              <div className="mb-6">
                <Link href={`/portfolio/${category}`} className="text-text-muted text-sm hover:text-accent transition-colors">
                  ← Back to {categoryName}
                </Link>
              </div>
              <div className="mb-14">
                <p className="font-accent text-accent text-lg italic mb-2">{categoryName}</p>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">
                  A Love Story
                </h1>
                <div className="flex items-center gap-4 text-text-muted text-sm">
                  <span>48 Photos</span>
                  <span>•</span>
                  <span>Mumbai, India</span>
                  <span>•</span>
                  <span>December 2024</span>
                </div>
              </div>
            </FadeUp>

            <StaggerContainer className="masonry-grid">
              {galleryPhotos.map((photo, i) => (
                <StaggerItem key={i} className="masonry-item">
                  <button
                    onClick={() => openLightbox(i)}
                    className="group relative block w-full overflow-hidden cursor-zoom-in"
                    id={`gallery-photo-${i}`}
                  >
                    <div className={`relative ${heights[i % heights.length]} w-full`}>
                      <Image
                        src={photo}
                        alt={`Gallery photo ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                  </button>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
              aria-label="Close lightbox"
              id="lightbox-close"
            >
              <HiOutlineX size={32} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-6 text-white/70 hover:text-white z-10"
              aria-label="Previous"
              id="lightbox-prev"
            >
              <HiOutlineChevronLeft size={40} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-6 text-white/70 hover:text-white z-10"
              aria-label="Next"
              id="lightbox-next"
            >
              <HiOutlineChevronRight size={40} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryPhotos[lightboxIndex]}
                alt={`Photo ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            <p className="absolute bottom-6 text-white/50 text-sm">
              {lightboxIndex + 1} / {galleryPhotos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
