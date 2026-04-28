export const allBlogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc){
  _id, title, slug, excerpt, coverImage, author, publishedAt, categories
}`;

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0]{
  _id, title, slug, excerpt, coverImage, body, author, publishedAt, categories, seo
}`;
