import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-12-01";

// Check if Sanity is configured
export const isSanityConfigured =
  projectId.length > 0 && projectId !== "your_project_id_here";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false, // Disable CDN for instant updates
    })
  : null;

const builder = isSanityConfigured
  ? imageUrlBuilder(client!)
  : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!builder) return { url: () => "", width: () => ({ quality: () => ({ url: () => "" }), url: () => "" }), quality: () => ({ url: () => "" }) };
  return builder.image(source);
}
