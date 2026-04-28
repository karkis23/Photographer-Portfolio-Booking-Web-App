"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/ui/Animations";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-surface" id="about-preview">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeUp>
            <div className="relative">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                  alt="Photographer at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 -z-10" />
            </div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.2}>
            <div>
              <p className="font-accent text-accent text-lg italic mb-2">About Me</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-6">
                The Person Behind the Lens
              </h2>
              <div className="h-[2px] w-16 bg-accent mb-8" />
              <p className="text-text-secondary leading-relaxed mb-6">
                With over a decade of experience in professional photography, I&apos;ve had the
                privilege of capturing thousands of precious moments — from intimate weddings
                to grand celebrations, from quiet portraits to dynamic fashion shoots.
              </p>
              <p className="text-text-secondary leading-relaxed mb-8">
                Every photograph I take is guided by a simple philosophy: to find the
                extraordinary in every moment and preserve it with artistic excellence.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-semibold uppercase tracking-wider text-sm hover:gap-4 transition-all duration-300"
                id="about-preview-cta"
              >
                Read My Story <span>→</span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
