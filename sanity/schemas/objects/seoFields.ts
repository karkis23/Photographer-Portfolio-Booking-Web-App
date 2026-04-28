import { defineField, defineType } from "sanity";

export const seoFields = defineType({
  name: "seoFields",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
    defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 3 }),
    defineField({ name: "ogImage", title: "Share Image", type: "image" }),
    defineField({ name: "noIndex", title: "Hide from Search Engines", type: "boolean", initialValue: false }),
  ],
});
