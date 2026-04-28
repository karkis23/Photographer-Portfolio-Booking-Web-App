import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Lens & Light Studio photography services.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h1 className="font-heading text-4xl font-bold text-text mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-text-secondary leading-relaxed text-sm">
            <p>Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
            <h2 className="font-heading text-xl font-semibold text-text mt-8">1. Information We Collect</h2>
            <p>We collect personal information you provide when booking sessions, contacting us, or browsing our website. This includes your name, email, phone number, event details, and any other information you choose to share.</p>
            <h2 className="font-heading text-xl font-semibold text-text mt-8">2. How We Use Your Information</h2>
            <p>Your information is used to provide our photography services, communicate with you about bookings, send confirmations and updates, and improve our website experience.</p>
            <h2 className="font-heading text-xl font-semibold text-text mt-8">3. Photo Usage & Rights</h2>
            <p>Unless otherwise agreed in writing, we reserve the right to use photographs from our sessions for portfolio, marketing, and social media purposes. Client privacy is always respected, and any sensitive content will not be shared without explicit consent.</p>
            <h2 className="font-heading text-xl font-semibold text-text mt-8">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information. However, no method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            <h2 className="font-heading text-xl font-semibold text-text mt-8">5. Contact</h2>
            <p>For any privacy-related inquiries, please contact us at hello@lensandlight.com.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
