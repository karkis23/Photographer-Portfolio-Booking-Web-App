import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/ui/Animations";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return { title, description: `Read "${title}" on the Lens & Light Studio blog.` };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="pt-24">
      <article className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeUp>
            <div className="mb-6">
              <Link href="/blog" className="text-text-muted text-sm hover:text-accent transition-colors">
                ← Back to Blog
              </Link>
            </div>

            <div className="mb-8">
              <span className="text-accent text-xs uppercase tracking-wider font-semibold">Tips</span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text mt-2 mb-4">
                {title}
              </h1>
              <div className="flex items-center gap-4 text-text-muted text-sm">
                <span>December 10, 2024</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>

            <div className="relative aspect-[16/9] overflow-hidden mb-10">
              <Image
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80"
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 900px"
                priority
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-text-secondary leading-relaxed text-lg">
                Photography is not just about capturing images — it&apos;s about telling stories,
                preserving emotions, and creating timeless memories. In this post, I share some
                of the most valuable lessons I&apos;ve learned throughout my career.
              </p>
              <h2 className="font-heading text-2xl font-bold text-text mt-10 mb-4">
                Understanding Light
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Light is the foundation of all photography. Whether you&apos;re shooting in a dimly
                lit church or under the bright midday sun, understanding how to work with light
                — and sometimes against it — is what separates good photos from great ones.
              </p>
              <h2 className="font-heading text-2xl font-bold text-text mt-10 mb-4">
                Composition & Framing
              </h2>
              <p className="text-text-secondary leading-relaxed">
                The rule of thirds is just the beginning. Great composition involves leading
                lines, symmetry, negative space, and knowing when to break all the rules.
                Each frame should guide the viewer&apos;s eye to the story you&apos;re telling.
              </p>
              <h2 className="font-heading text-2xl font-bold text-text mt-10 mb-4">
                Capturing Emotion
              </h2>
              <p className="text-text-secondary leading-relaxed">
                The best photographs aren&apos;t posed — they&apos;re felt. Being present, patient,
                and ready to capture those fleeting moments of genuine emotion is what creates
                truly memorable images.
              </p>
            </div>
          </FadeUp>
        </div>
      </article>
    </div>
  );
}
