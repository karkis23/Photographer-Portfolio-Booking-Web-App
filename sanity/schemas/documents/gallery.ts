import { defineField, defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  icon: () => "📸",
  fields: [
    defineField({ name: "title", title: "Gallery Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "galleryCategory" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      of: [{ type: "photoAsset" }],
    }),
    defineField({
      name: "videos",
      title: "Videos",
      type: "array",
      of: [{ type: "videoAsset" }],
    }),
    defineField({ name: "date", title: "Shoot Date", type: "date" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "featured",
      title: "Featured on Homepage?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  orderings: [
    { title: "Date (Newest)", name: "dateDesc", by: [{ field: "date", direction: "desc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "category.name", media: "coverImage" },
  },
});
