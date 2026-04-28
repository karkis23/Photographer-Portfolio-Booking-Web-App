import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/Animations";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the photographer behind Lens & Light Studio — a decade of experience capturing life's most beautiful moments.",
};

const timeline = [
  { year: "2012", title: "Started Photography", desc: "Picked up the first DSLR and fell in love with visual storytelling." },
  { year: "2015", title: "First Wedding Shoot", desc: "Shot my first full wedding and discovered my true calling." },
  { year: "2018", title: "Studio Founded", desc: "Officially launched Lens & Light Studio as a premium brand." },
  { year: "2020", title: "Award Recognition", desc: "Won the Best Wedding Photographer award at National Photography Awards." },
  { year: "2024", title: "500+ Weddings", desc: "Crossed the milestone of 500 weddings captured across India." },
];

const skills = ["Wedding Photography", "Portrait", "Fashion Editorial", "Cinematic Films", "Drone Aerials", "Photo Editing", "Lighting Design", "Creative Direction"];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="relative">
                <div className="relative h-[600px] w-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80"
                    alt="Portrait of the photographer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/30 -z-10" />
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div>
                <p className="font-accent text-accent text-xl italic mb-2">My Story</p>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-text mb-6">
                  Passionate About Capturing Life&apos;s Beautiful Moments
                </h1>
                <div className="h-[2px] w-16 bg-accent mb-8" />
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Hello! I&apos;m the creative force behind Lens & Light Studio. With over 12 years
                    of experience in professional photography, I&apos;ve dedicated my career to
                    capturing the essence of human emotions and creating visual narratives that
                    stand the test of time.
                  </p>
                  <p>
                    My journey began with a simple fascination for light and shadows, which evolved
                    into a deep passion for visual storytelling. Today, I specialize in wedding,
                    portrait, and fashion photography, bringing a unique artistic perspective to
                    every project.
                  </p>
                  <p>
                    I believe every photograph should evoke emotion, tell a story, and preserve a
                    moment exactly as it felt. This philosophy drives every shoot, every edit, and
                    every delivery.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-surface">
        <div className="container-narrow mx-auto">
          <FadeUp>
            <SectionHeading title="My Journey" subtitle="Career Timeline" />
          </FadeUp>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-px w-[2px] h-full bg-border hidden md:block" />
            <StaggerContainer className="space-y-12">
              {timeline.map((item, i) => (
                <StaggerItem key={item.year}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`flex-1 ${i % 2 === 1 ? "md:text-left" : "md:text-right"}`}>
                      <p className="text-accent font-heading text-2xl font-bold mb-1">{item.year}</p>
                      <h3 className="font-heading text-xl font-semibold text-text mb-2">{item.title}</h3>
                      <p className="text-text-secondary text-sm">{item.desc}</p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-bg shrink-0 hidden md:block" />
                    <div className="flex-1" />
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <FadeUp>
            <SectionHeading title="Skills & Expertise" subtitle="What I Do Best" />
          </FadeUp>
          <StaggerContainer className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <StaggerItem key={skill}>
                <span className="px-6 py-3 border border-border text-text-secondary text-sm uppercase tracking-wider hover:border-accent hover:text-accent transition-colors duration-300 cursor-default">
                  {skill}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
