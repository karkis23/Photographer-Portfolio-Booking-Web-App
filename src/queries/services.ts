export const servicesQuery = `*[_type == "service"] | order(orderRank asc){
  _id, title, slug, shortDescription, icon, coverImage, features
}`;

export const pricingQuery = `*[_type == "pricingPlan"] | order(orderRank asc){
  _id, name, price, currency, period, description, features, popular, ctaText,
  "relatedService": relatedService->{ title }
}`;

export const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt desc){
  _id, clientName, role, quote, avatar, rating, featured
}`;

export const featuredTestimonialsQuery = `*[_type == "testimonial" && featured == true]{
  _id, clientName, role, quote, avatar, rating
}`;
