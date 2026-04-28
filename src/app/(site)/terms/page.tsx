import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Lens & Light Studio photography services.",
};

export default function TermsPage() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <h1 className="font-heading text-4xl font-bold text-text mb-8">Terms of Service</h1>
          <div className="space-y-6 text-text-secondary leading-relaxed text-sm">
            <p>Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
            <h2 className="font-heading text-xl font-semibold text-text mt-8">1. Booking & Payment</h2>
            <p>A non-refundable booking fee of 30% is required to secure your date. The remaining balance is due 7 days before the event. Payment can be made via bank transfer or UPI.</p>
            <h2 className="font-heading text-xl font-semibold text-text mt-8">2. Cancellation</h2>
            <p>Cancellations made more than 30 days before the event will receive a refund minus the booking deposit. Cancellations within 30 days are non-refundable but may be rescheduled subject to availability.</p>
            <h2 className="font-heading text-xl font-semibold text-text mt-8">3. Delivery</h2>
            <p>Edited photographs will be delivered within the timeframe specified in your package. Rush delivery is available for an additional fee.</p>
            <h2 className="font-heading text-xl font-semibold text-text mt-8">4. Copyright</h2>
            <p>All photographs remain the intellectual property of Lens & Light Studio. Clients receive a personal license for non-commercial use. Commercial licensing is available upon request.</p>
            <h2 className="font-heading text-xl font-semibold text-text mt-8">5. Liability</h2>
            <p>While we take every precaution, we are not liable for circumstances beyond our control including equipment failure, weather, or venue restrictions. In such cases, we will make every effort to provide the best possible service.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
