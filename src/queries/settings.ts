export const settingsQuery = `*[_type == "siteSettings"][0]{
  siteName, tagline, description, logo, contactEmail, contactPhone,
  address, socialLinks, copyrightText, whatsappNumber
}`;

export const seoDefaultsQuery = `*[_type == "seoDefaults"][0]{
  defaultTitle, titleTemplate, defaultDescription, defaultOgImage
}`;
