import { defineField, defineType } from "sanity";

export const socialLink = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "object",
  fields: [
    defineField({
      name: "platform",
      title: "Platform",
      type: "string",
      options: {
        list: ["Instagram", "Facebook", "YouTube", "Twitter", "LinkedIn", "Pinterest", "TikTok", "Vimeo"],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "url", title: "URL", type: "url", validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "platform", subtitle: "url" },
  },
});
