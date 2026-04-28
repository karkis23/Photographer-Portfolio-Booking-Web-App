import { defineField, defineType } from "sanity";

export const videoAsset = defineType({
  name: "videoAsset",
  title: "Video",
  type: "object",
  fields: [
    defineField({
      name: "type",
      title: "Video Type",
      type: "string",
      options: {
        list: [
          { title: "YouTube", value: "youtube" },
          { title: "Vimeo", value: "vimeo" },
          { title: "Self Hosted", value: "hosted" },
        ],
      },
      initialValue: "youtube",
      validation: (r) => r.required(),
    }),
    defineField({ name: "url", title: "Video URL", type: "url", validation: (r) => r.required() }),
    defineField({
      name: "thumbnail",
      title: "Custom Thumbnail",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "title", title: "Title", type: "string" }),
  ],
  preview: {
    select: { title: "title", subtitle: "type" },
    prepare: ({ title, subtitle }) => ({
      title: title || "Video",
      subtitle: subtitle?.toUpperCase(),
    }),
  },
});
