import { defineField, defineType } from "sanity";

export const bookingRequest = defineType({
  name: "bookingRequest",
  title: "Booking Request",
  type: "document",
  icon: () => "📅",
  fields: [
    defineField({ name: "name", title: "Client Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "email", title: "Email", type: "string", validation: (r) => r.required().email() }),
    defineField({ name: "phone", title: "Phone", type: "string" }),
    defineField({
      name: "eventType",
      title: "Event Type",
      type: "string",
      options: {
        list: [
          { title: "Wedding", value: "wedding" },
          { title: "Pre-Wedding", value: "pre-wedding" },
          { title: "Portrait", value: "portrait" },
          { title: "Fashion", value: "fashion" },
          { title: "Event", value: "event" },
          { title: "Product", value: "product" },
          { title: "Corporate", value: "corporate" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({ name: "preferredDate", title: "Preferred Date", type: "date" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "budget",
      title: "Budget Range",
      type: "string",
      options: {
        list: [
          { title: "Under ₹25,000", value: "under-25k" },
          { title: "₹25,000 - ₹50,000", value: "25k-50k" },
          { title: "₹50,000 - ₹1,00,000", value: "50k-1l" },
          { title: "₹1,00,000 - ₹2,50,000", value: "1l-2.5l" },
          { title: "Above ₹2,50,000", value: "above-2.5l" },
        ],
      },
    }),
    defineField({ name: "message", title: "Message", type: "text", rows: 4 }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Confirmed", value: "confirmed" },
          { title: "Completed", value: "completed" },
          { title: "Cancelled", value: "cancelled" },
        ],
        layout: "radio",
      },
      initialValue: "new",
    }),
    defineField({ name: "adminNotes", title: "Admin Notes", type: "text", rows: 3 }),
    defineField({ name: "submittedAt", title: "Submitted At", type: "datetime", readOnly: true }),
  ],
  orderings: [
    { title: "Newest First", name: "dateDesc", by: [{ field: "submittedAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "eventType", date: "preferredDate" },
    prepare: ({ title, subtitle, date }) => ({
      title: title || "Unknown",
      subtitle: `${subtitle || "N/A"} — ${date || "No date"}`,
    }),
  },
});
