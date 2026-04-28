import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About",
  type: "document",
  icon: () => "👤",
  fields: [
    defineField({ name: "title", title: "Page Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "portrait",
      title: "Portrait Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "bio", title: "Biography", type: "portableText" }),
    defineField({ name: "shortBio", title: "Short Bio", type: "text", rows: 3, description: "Used in previews" }),
    defineField({
      name: "timeline",
      title: "Career Timeline",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "year", title: "Year", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: {
            select: { title: "title", subtitle: "year" },
          },
        },
      ],
    }),
    defineField({
      name: "skills",
      title: "Skills / Specialties",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: {
    prepare: () => ({ title: "About Page" }),
  },
});
