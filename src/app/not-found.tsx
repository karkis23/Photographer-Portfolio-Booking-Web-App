import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-6">
      <div className="text-center">
        <p className="font-accent text-accent text-lg italic mb-2">Oops</p>
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-text mb-4">404</h1>
        <p className="text-text-secondary mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex px-8 py-3 bg-accent text-bg text-sm font-semibold uppercase tracking-wider hover:bg-accent-light transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
