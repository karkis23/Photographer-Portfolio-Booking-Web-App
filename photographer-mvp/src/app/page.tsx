import { client, urlFor, isSanityConfigured } from "@/lib/sanity";
import PhotoGrid from "@/components/PhotoGrid";
import Link from "next/link";

export const dynamic = "force-dynamic";

type Photo = {
  _id: string;
  title: string;
  image: { asset: { _ref: string } };
  category?: string;
  description?: string;
};

type Settings = {
  name?: string;
  tagline?: string;
  heroImage?: { asset: { _ref: string } };
  aboutText?: string;
  email?: string;
  phone?: string;
};

async function getPhotos(): Promise<Photo[]> {
  if (!isSanityConfigured || !client) return [];
  try {
    return await client.fetch(`*[_type == "photo"] | order(_createdAt desc) {
      _id, title, image, category, description
    }`);
  } catch {
    return [];
  }
}

async function getSettings(): Promise<Settings | null> {
  if (!isSanityConfigured || !client) return null;
  try {
    return await client.fetch(`*[_type == "siteSettings"][0] {
      name, tagline, heroImage, aboutText, email, phone
    }`);
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const [photos, settings] = await Promise.all([getPhotos(), getSettings()]);

  const heroBg = settings?.heroImage
    ? urlFor(settings.heroImage).width(1920).quality(80).url()
    : "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=80";

  const name = settings?.name || "Lens & Light Studio";
  const tagline = settings?.tagline || "Capturing Timeless Moments";

  return (
    <div className="min-h-screen">
      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            {name.split(" ")[0]}{" "}
            <span className="text-accent italic font-normal">&amp;</span>{" "}
            {name.split(" ").slice(1).join(" ") || "Light"}
          </Link>
          <div className="flex items-center gap-6">
            <a href="#gallery" className="text-sm text-muted hover:text-text transition-colors hidden sm:block">
              Gallery
            </a>
            <a href="#about" className="text-sm text-muted hover:text-text transition-colors hidden sm:block">
              About
            </a>
            <a href="#contact" className="text-sm text-muted hover:text-text transition-colors hidden sm:block">
              Contact
            </a>
            <Link
              href="/studio"
              className="px-4 py-2 bg-accent text-bg text-xs font-semibold uppercase tracking-wider hover:bg-accent-light transition-colors"
            >
              Studio
            </Link>
          </div>
        </div>
      </nav>

      {/* ─── SETUP BANNER (only when Sanity not configured) ─── */}
      {!isSanityConfigured && (
        <div className="fixed top-[60px] left-0 right-0 z-40 bg-accent/20 border-b border-accent/30 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-sm">
            <p className="text-accent">
              ⚠ Sanity not connected — update <code className="bg-bg/40 px-1.5 py-0.5 rounded text-xs">.env.local</code> with your project ID to see live photos
            </p>
            <a href="/SETUP.md" className="text-accent hover:underline font-semibold">
              Setup Guide →
            </a>
          </div>
        </div>
      )}

      {/* ─── HERO ─── */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('${heroBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-bg" />
        <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-up">
          <p className="text-accent text-lg italic mb-3 tracking-wide">{tagline}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {name}
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Premium photography for your most precious moments
          </p>
          <a
            href="#gallery"
            className="inline-block px-8 py-3 bg-accent text-bg font-semibold uppercase tracking-wider text-sm hover:bg-accent-light transition-colors"
          >
            View Gallery
          </a>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section id="gallery" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent italic text-lg mb-2">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold">My Work</h2>
            <div className="mt-4 h-[2px] w-16 bg-accent mx-auto" />
          </div>

          {photos.length > 0 ? (
            <PhotoGrid photos={photos} />
          ) : (
            <div className="text-center py-20 border border-dashed border-border rounded-lg">
              <p className="text-4xl mb-4">📸</p>
              <p className="text-muted text-lg mb-2">No photos yet</p>
              <p className="text-muted/60 text-sm mb-6 max-w-md mx-auto">
                {isSanityConfigured
                  ? "Go to the Studio to upload your first photo — it will appear here instantly!"
                  : "Connect Sanity first by updating .env.local, then upload photos in the Studio"}
              </p>
              <Link
                href="/studio"
                className="inline-block px-6 py-2.5 bg-accent text-bg text-sm font-semibold uppercase tracking-wider hover:bg-accent-light transition-colors"
              >
                Open Studio →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-20 px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent italic text-lg mb-2">About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Person Behind the Lens</h2>
          <div className="h-[2px] w-16 bg-accent mx-auto mb-8" />
          <p className="text-muted leading-relaxed">
            {settings?.aboutText ||
              "With years of experience in professional photography, I capture life's most beautiful moments with artistic excellence and timeless elegance. Every photograph tells a story — let me tell yours."}
          </p>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-accent italic text-lg mb-2">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
          <div className="h-[2px] w-16 bg-accent mx-auto mb-8" />
          <div className="space-y-3 text-muted">
            <p>{settings?.email || "hello@lensandlight.com"}</p>
            <p>{settings?.phone || "+91 98765 43210"}</p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-8 px-6 border-t border-border text-center">
        <p className="text-muted/60 text-sm">
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
