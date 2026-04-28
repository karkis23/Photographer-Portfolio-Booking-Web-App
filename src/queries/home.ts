export const homepageQuery = `*[_type == "homepage"][0]{
  heroImage, heroVideo, heroTagline, heroSubtitle,
  ctaPrimary, ctaSecondary,
  aboutPreviewText, aboutPreviewImage,
  stats,
  "featuredGalleries": featuredGalleries[]->{
    _id, title, slug, coverImage,
    "category": category->{ name, slug },
    date,
    "photoCount": count(photos)
  },
  seo
}`;
