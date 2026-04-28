import { siteSettings } from "./documents/siteSettings";
import { homepage } from "./documents/homepage";
import { aboutPage } from "./documents/aboutPage";
import { galleryCategory } from "./documents/galleryCategory";
import { gallery } from "./documents/gallery";
import { service } from "./documents/service";
import { pricingPlan } from "./documents/pricingPlan";
import { testimonial } from "./documents/testimonial";
import { bookingRequest } from "./documents/bookingRequest";
import { blogPost } from "./documents/blogPost";
import { faq } from "./documents/faq";
import { seoDefaults } from "./documents/seoDefaults";

import { photoAsset } from "./objects/photoAsset";
import { videoAsset } from "./objects/videoAsset";
import { portableText } from "./objects/portableText";
import { seoFields } from "./objects/seoFields";
import { socialLink } from "./objects/socialLink";

export const schemaTypes = [
  // Documents
  siteSettings,
  homepage,
  aboutPage,
  galleryCategory,
  gallery,
  service,
  pricingPlan,
  testimonial,
  bookingRequest,
  blogPost,
  faq,
  seoDefaults,
  // Objects
  photoAsset,
  videoAsset,
  portableText,
  seoFields,
  socialLink,
];
