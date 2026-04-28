import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
};

export default function SectionHeading({ title, subtitle, center = true, className = "" }: Props) {
  return (
    <div className={`mb-14 ${center ? "text-center" : ""} ${className}`}>
      {subtitle && (
        <p className="font-accent text-accent text-lg italic tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text">
        {title}
      </h2>
      <div className={`mt-4 h-[2px] w-16 bg-accent ${center ? "mx-auto" : ""}`} />
    </div>
  );
}

export function SectionCTA({ href, label }: { href: string; label: string }) {
  return (
    <div className="text-center mt-12">
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-8 py-3 border border-accent text-accent text-sm font-semibold uppercase tracking-wider hover:bg-accent hover:text-bg transition-all duration-300"
      >
        {label}
        <span className="text-lg">→</span>
      </Link>
    </div>
  );
}
