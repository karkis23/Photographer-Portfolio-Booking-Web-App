import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: () => "⭐",
  fields: [
    defineField({ name: "clientName", title: "Client Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Role / Context", type: "string", description: "e.g. Bride, Corporate Client" }),
    defineField({ name: "quote", title: "Testimonial Quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({
      name: "avatar",
      title: "Client Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (r) => r.min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: "relatedService",
      title: "Related Service",
      type: "reference",
      to: [{ type: "service" }],
    }),
    defineField({ name: "featured", title: "Show on Homepage?", type: "boolean", initialValue: false }),
  ],
  preview: {
    select: { title: "clientName", subtitle: "role", media: "avatar" },
  },
});
