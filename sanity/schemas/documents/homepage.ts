import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Home Page",
  type: "document",
  icon: () => "🏠",
  fields: [
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "heroVideo",
      title: "Hero Background Video (optional)",
      type: "url",
      description: "URL to a background video (MP4)",
    }),
    defineField({ name: "heroTagline", title: "Hero Tagline", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 2 }),
    defineField({
      name: "ctaPrimary",
      title: "Primary CTA Text",
      type: "string",
      initialValue: "View Portfolio",
    }),
    defineField({
      name: "ctaSecondary",
      title: "Secondary CTA Text",
      type: "string",
      initialValue: "Book a Session",
    }),
    defineField({
      name: "featuredGalleries",
      title: "Featured Galleries",
      type: "array",
      of: [{ type: "reference", to: [{ type: "gallery" }] }],
      validation: (r) => r.max(8),
    }),
    defineField({ name: "aboutPreviewText", title: "About Preview Text", type: "text", rows: 3 }),
    defineField({
      name: "aboutPreviewImage",
      title: "About Preview Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "stats",
      title: "Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "number" }),
            defineField({ name: "suffix", title: "Suffix", type: "string", description: "e.g. +, K, %" }),
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    }),
    defineField({ name: "seo", title: "SEO", type: "seoFields" }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
