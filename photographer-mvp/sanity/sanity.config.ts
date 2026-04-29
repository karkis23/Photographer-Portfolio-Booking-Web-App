"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import type { StructureResolver } from "sanity/structure";

const structure: StructureResolver = (S) =>
  S.list()
    .title("Dashboard")
    .items([
      S.listItem()
        .title("⚙️ Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.listItem()
        .title("📸 Photos")
        .schemaType("photo")
        .child(S.documentTypeList("photo").title("All Photos")),
    ]);

export default defineConfig({
  name: "photographer-mvp",
  title: "📷 Photographer Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: "2024-12-01" }),
  ],
  schema: { types: schemaTypes },
});
