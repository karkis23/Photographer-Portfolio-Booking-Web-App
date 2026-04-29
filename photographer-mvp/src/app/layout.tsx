import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lens & Light Studio | Photography Portfolio",
  description: "Premium photography portfolio — powered by Sanity CMS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
