import { defineField, defineType } from "sanity";

export const seoDefaults = defineType({
  name: "seoDefaults",
  title: "SEO Defaults",
  type: "document",
  icon: () => "🔍",
  fields: [
    defineField({ name: "defaultTitle", title: "Default Page Title", type: "string" }),
    defineField({ name: "titleTemplate", title: "Title Template", type: "string", description: "Use %s for page title, e.g. '%s | Studio Name'" }),
    defineField({ name: "defaultDescription", title: "Default Description", type: "text", rows: 3 }),
    defineField({
      name: "defaultOgImage",
      title: "Default Share Image",
      type: "image",
      description: "Used when a page doesn't have its own share image (1200x630 recommended)",
    }),
    defineField({ name: "googleVerification", title: "Google Site Verification", type: "string" }),
  ],
  preview: {
    prepare: () => ({ title: "SEO Defaults" }),
  },
});
