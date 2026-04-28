// ============================================================
// Shared TypeScript types used across the application
// ============================================================

export type SanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export type SEOFields = {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
  noIndex?: boolean;
};

export type SocialLink = {
  platform: string;
  url: string;
};

export type PhotoAsset = {
  image: SanityImage;
  alt?: string;
  caption?: string;
};

export type VideoAsset = {
  type: "youtube" | "vimeo" | "hosted";
  url: string;
  thumbnail?: SanityImage;
  title?: string;
};

export type SiteSettings = {
  siteName: string;
  tagline?: string;
  description?: string;
  logo?: SanityImage;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  socialLinks?: SocialLink[];
  copyrightText?: string;
  whatsappNumber?: string;
};

export type Homepage = {
  heroImage: SanityImage;
  heroVideo?: string;
  heroTagline: string;
  heroSubtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  featuredGalleries?: GalleryPreview[];
  aboutPreviewText?: string;
  aboutPreviewImage?: SanityImage;
  stats?: { label: string; value: number; suffix?: string }[];
  seo?: SEOFields;
};

export type GalleryCategory = {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  coverImage?: SanityImage;
  orderRank?: number;
};

export type GalleryPreview = {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage: SanityImage;
  category?: { name: string; slug: { current: string } };
  date?: string;
  photoCount?: number;
};

export type GalleryFull = GalleryPreview & {
  description?: string;
  photos?: PhotoAsset[];
  videos?: VideoAsset[];
  location?: string;
  featured?: boolean;
  seo?: SEOFields;
};

export type Service = {
  _id: string;
  title: string;
  slug: { current: string };
  shortDescription?: string;
  icon?: string;
  coverImage?: SanityImage;
  features?: string[];
  orderRank?: number;
};

export type PricingPlan = {
  _id: string;
  name: string;
  price: number;
  currency?: string;
  period?: string;
  description?: string;
  features?: string[];
  popular?: boolean;
  ctaText?: string;
  relatedService?: { title: string };
  orderRank?: number;
};

export type Testimonial = {
  _id: string;
  clientName: string;
  role?: string;
  quote: string;
  avatar?: SanityImage;
  rating?: number;
  featured?: boolean;
};

export type BlogPostPreview = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  coverImage?: SanityImage;
  author?: string;
  publishedAt?: string;
  categories?: string[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BlogPostFull = BlogPostPreview & {
  body?: any[]; // Portable Text blocks
  seo?: SEOFields;
};

export type FAQ = {
  _id: string;
  question: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  answer?: any[]; // Portable Text blocks
  category?: string;
};
