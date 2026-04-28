import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

// Map document types to revalidation tags
const TYPE_TO_TAGS: Record<string, string[]> = {
  homepage: ["homepage"],
  gallery: ["gallery", "homepage"],
  galleryCategory: ["galleryCategory", "gallery"],
  service: ["service"],
  pricingPlan: ["pricingPlan"],
  testimonial: ["testimonial", "homepage"],
  blogPost: ["blogPost"],
  faq: ["faq"],
  aboutPage: ["aboutPage"],
  siteSettings: ["siteSettings"],
  seoDefaults: ["seoDefaults"],
};

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: string;
    }>(req, process.env.SANITY_WEBHOOK_SECRET);

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new NextResponse("Bad request", { status: 400 });
    }

    const tags = TYPE_TO_TAGS[body._type] || [body._type];
    for (const tag of tags) {
      revalidateTag(tag, "max");
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      tags,
      now: Date.now(),
    });
  } catch (err) {
    console.error("Webhook error:", err);
    return new NextResponse("Internal error", { status: 500 });
  }
}
