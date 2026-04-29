"use client";

import Image from "next/image";
import { useState } from "react";
import { urlFor } from "@/lib/sanity";

type Photo = {
  _id: string;
  title: string;
  image: { asset: { _ref: string } };
  category?: string;
  description?: string;
};

export default function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(photos.map((p) => p.category || "other")))];

  const filtered = filter === "all" ? photos : photos.filter((p) => (p.category || "other") === filter);

  const heights = ["h-[260px]", "h-[340px]", "h-[300px]", "h-[380px]", "h-[280px]", "h-[350px]"];

  return (
    <>
      {/* Category Filter */}
      {categories.length > 2 && (
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-300 border ${
                filter === cat
                  ? "bg-accent text-bg border-accent"
                  : "border-border text-muted hover:border-accent/50 hover:text-text"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((photo, i) => (
          <div
            key={photo._id}
            className="break-inside-avoid opacity-0 animate-fade-up"
            style={{ animationDelay: `${Math.min(i * 0.08, 0.5)}s`, animationFillMode: "forwards" }}
          >
            <button
              onClick={() => setLightbox(i)}
              className="group relative block w-full overflow-hidden cursor-zoom-in"
            >
              <div className={`relative ${heights[i % heights.length]} w-full`}>
                <Image
                  src={urlFor(photo.image).width(600).quality(80).url()}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-accent text-xs uppercase tracking-wider mb-1">
                    {photo.category || "Photo"}
                  </p>
                  <h3 className="text-white font-bold text-lg">{photo.title}</h3>
                  {photo.description && (
                    <p className="text-white/60 text-sm mt-1 line-clamp-1">{photo.description}</p>
                  )}
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl z-10"
            aria-label="Close"
          >
            ✕
          </button>
          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + filtered.length) % filtered.length);
            }}
            className="absolute left-6 text-white/60 hover:text-white text-4xl z-10"
            aria-label="Previous"
          >
            ‹
          </button>
          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % filtered.length);
            }}
            className="absolute right-6 text-white/60 hover:text-white text-4xl z-10"
            aria-label="Next"
          >
            ›
          </button>

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={urlFor(filtered[lightbox].image).width(1600).quality(90).url()}
              alt={filtered[lightbox].title}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 text-center">
            <p className="text-white font-bold">{filtered[lightbox].title}</p>
            <p className="text-white/50 text-sm">
              {lightbox + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
