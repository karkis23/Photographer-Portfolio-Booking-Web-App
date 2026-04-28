import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Dashboard")
    .items([
      // Pages
      S.listItem()
        .title("🏠 Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("Home Page")
                .child(S.document().schemaType("homepage").documentId("homepage")),
              S.listItem()
                .title("About Page")
                .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
              S.listItem()
                .title("SEO Defaults")
                .child(S.document().schemaType("seoDefaults").documentId("seoDefaults")),
            ])
        ),
      S.divider(),

      // Portfolio
      S.listItem()
        .title("📸 Portfolio")
        .child(
          S.list()
            .title("Portfolio")
            .items([
              S.listItem()
                .title("Categories")
                .schemaType("galleryCategory")
                .child(S.documentTypeList("galleryCategory").title("Categories")),
              S.listItem()
                .title("Galleries")
                .schemaType("gallery")
                .child(S.documentTypeList("gallery").title("Galleries")),
            ])
        ),
      S.divider(),

      // Business
      S.listItem()
        .title("💼 Business")
        .child(
          S.list()
            .title("Business")
            .items([
              S.listItem()
                .title("Services")
                .schemaType("service")
                .child(S.documentTypeList("service").title("Services")),
              S.listItem()
                .title("Pricing Plans")
                .schemaType("pricingPlan")
                .child(S.documentTypeList("pricingPlan").title("Pricing Plans")),
              S.listItem()
                .title("Testimonials")
                .schemaType("testimonial")
                .child(S.documentTypeList("testimonial").title("Testimonials")),
            ])
        ),
      S.divider(),

      // Bookings
      S.listItem()
        .title("📅 Bookings")
        .schemaType("bookingRequest")
        .child(
          S.documentTypeList("bookingRequest")
            .title("Booking Requests")
            .defaultOrdering([{ field: "submittedAt", direction: "desc" }])
        ),
      S.divider(),

      // Blog
      S.listItem()
        .title("📝 Blog")
        .schemaType("blogPost")
        .child(S.documentTypeList("blogPost").title("Blog Posts")),

      // FAQ
      S.listItem()
        .title("❓ FAQ")
        .schemaType("faq")
        .child(S.documentTypeList("faq").title("FAQ")),
      S.divider(),

      // Settings
      S.listItem()
        .title("⚙️ Site Settings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
    ]);
