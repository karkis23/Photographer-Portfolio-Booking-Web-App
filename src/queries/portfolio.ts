export const categoriesQuery = `*[_type == "galleryCategory"] | order(orderRank asc){
  _id, name, slug, description, coverImage
}`;

export const galleriesByCategoryQuery = `*[_type == "gallery" && category->slug.current == $category] | order(date desc){
  _id, title, slug, coverImage,
  "category": category->{ name, slug },
  date,
  "photoCount": count(photos)
}`;

export const allGalleriesQuery = `*[_type == "gallery"] | order(date desc){
  _id, title, slug, coverImage,
  "category": category->{ name, slug },
  date,
  "photoCount": count(photos)
}`;

export const galleryBySlugQuery = `*[_type == "gallery" && slug.current == $slug][0]{
  _id, title, slug, coverImage, description, date, location, featured,
  "category": category->{ name, slug },
  photos[]{ image, alt, caption },
  videos[]{ type, url, thumbnail, title },
  "photoCount": count(photos),
  seo
}`;
