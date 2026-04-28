import { defineField, defineType } from "sanity";

export const pricingPlan = defineType({
  name: "pricingPlan",
  title: "Pricing Plan",
  type: "document",
  icon: () => "💰",
  fields: [
    defineField({ name: "name", title: "Plan Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "price", title: "Price", type: "number", validation: (r) => r.required().min(0) }),
    defineField({ name: "currency", title: "Currency Symbol", type: "string", initialValue: "₹" }),
    defineField({ name: "period", title: "Period", type: "string", description: "e.g. per session, per day" }),
    defineField({ name: "description", title: "Short Description", type: "text", rows: 2 }),
    defineField({
      name: "features",
      title: "Features Included",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "popular", title: "Most Popular?", type: "boolean", initialValue: false }),
    defineField({ name: "ctaText", title: "Button Text", type: "string", initialValue: "Book Now" }),
    defineField({
      name: "relatedService",
      title: "Related Service",
      type: "reference",
      to: [{ type: "service" }],
    }),
    defineField({ name: "orderRank", title: "Display Order", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "orderRank", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "price" },
    prepare: ({ title, subtitle }) => ({ title, subtitle: `₹${subtitle}` }),
  },
});
