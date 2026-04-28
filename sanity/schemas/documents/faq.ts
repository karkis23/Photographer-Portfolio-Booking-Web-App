import { defineField, defineType } from "sanity";

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  icon: () => "❓",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Answer", type: "portableText" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: ["General", "Booking", "Pricing", "Delivery", "Equipment", "Other"],
      },
    }),
    defineField({ name: "orderRank", title: "Display Order", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "orderRank", direction: "asc" }] },
  ],
  preview: {
    select: { title: "question", subtitle: "category" },
  },
});
