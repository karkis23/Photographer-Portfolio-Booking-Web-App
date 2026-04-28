import { defineField, defineType } from "sanity";

export const galleryCategory = defineType({
  name: "galleryCategory",
  title: "Gallery Category",
  type: "document",
  icon: () => "📁",
  fields: [
    defineField({ name: "name", title: "Category Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "orderRank",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "orderRank", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", media: "coverImage" },
  },
});
