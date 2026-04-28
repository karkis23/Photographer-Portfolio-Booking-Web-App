import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: () => "💼",
  fields: [
    defineField({ name: "title", title: "Service Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "shortDescription", title: "Short Description", type: "text", rows: 2 }),
    defineField({ name: "description", title: "Full Description", type: "portableText" }),
    defineField({ name: "icon", title: "Icon Emoji", type: "string", description: "e.g. 📷 💒 🎬" }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "features",
      title: "What's Included",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "orderRank", title: "Display Order", type: "number", initialValue: 0 }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "orderRank", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "shortDescription", media: "coverImage" },
  },
});
