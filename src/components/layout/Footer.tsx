import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube, FaPinterestP } from "react-icons/fa";

const footerLinks = {
  explore: [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

const socialIcons = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaPinterestP, href: "#", label: "Pinterest" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-wide mx-auto section-padding">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-2xl font-bold text-text">
                LENS <span className="text-accent font-accent italic">&</span> LIGHT
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Capturing life&apos;s most beautiful moments with artistry,
              passion, and timeless elegance.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all duration-300"
                  aria-label={social.label}
                  id={`footer-social-${social.label.toLowerCase()}`}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-text mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-text mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-widest text-text mb-6">
              Get in Touch
            </h4>
            <address className="not-italic space-y-3 text-text-secondary text-sm">
              <p>hello@lensandlight.com</p>
              <p>+91 98765 43210</p>
              <p>Mumbai, India</p>
            </address>
            <Link
              href="/booking"
              className="inline-flex mt-6 px-6 py-2.5 bg-accent text-bg text-xs font-semibold uppercase tracking-wider hover:bg-accent-light transition-colors duration-300"
              id="footer-book-cta"
            >
              Book a Session
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Lens & Light Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted text-xs hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
