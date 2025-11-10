import { Suspense } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";
import ProjectsPreview from "../components/ProjectsPreview";
import ContributorsPreview from "../components/ContributorsPreview";
import projectsData from "../public/data/projects.json";
import contributorsData from "../public/data/contributors.json";

const projects = (projectsData.projects as Array<{ stargazers_count?: number }> | undefined) ?? [];
const contributors = (contributorsData.contributors as unknown[] | undefined) ?? [];
const totalStars = projects.reduce((sum, proj) => sum + (proj.stargazers_count ?? 0), 0);

const heroStats = [
  { label: "Open-source projects", value: projects.length },
  { label: "Community contributors", value: contributors.length },
  { label: "GitHub stars collected", value: totalStars }
];

const heroGradient: CSSProperties = {
  background:
    "radial-gradient(120% 100% at 50% 0%, rgba(80, 244, 255, 0.25) 0%, rgba(147, 107, 255, 0.15) 45%, rgba(4, 6, 10, 0.85) 70%, rgba(4, 6, 10, 0.95) 100%)"
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 md:px-10 py-16">
      <section className="relative overflow-hidden rounded-3xl border border-border/60" style={heroGradient}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent-primary/20 blur-3xl" />
          <div className="absolute left-1/3 bottom-[-120px] h-[420px] w-[420px] rounded-full bg-accent-secondary/25 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-14 text-center md:px-16">
          <span className="rounded-full border border-accent-primary/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-text-secondary">
            FreeOps Community
          </span>
          <h1 className="text-balance font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Building Free DevOps for Everyone
          </h1>
          <p className="text-balance max-w-3xl text-lg text-text-secondary md:text-xl">
            Discover production-ready open infrastructure crafted in the open. Browse our projects, celebrate
            contributors, and join the movement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/projects"
              className="group rounded-full bg-accent-primary px-7 py-3 text-sm font-semibold text-black transition hover:shadow-[0_0_30px_rgba(80,244,255,0.45)]"
            >
              Explore Projects
            </Link>
            <a
              href="https://github.com/FreeOps-Tools"
              className="rounded-full border border-accent-primary/50 px-7 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-primary"
            >
              Star the Org
            </a>
          </div>
          <dl className="mt-4 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="card rounded-2xl px-5 py-4 text-left shadow-lg shadow-black/10 backdrop-blur"
              >
                <dt className="text-xs uppercase tracking-wide text-text-secondary">{stat.label}</dt>
                <dd className="mt-2 font-display text-2xl text-text-primary">
                  {stat.value.toLocaleString("en-US")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl md:text-3xl">Featured Projects</h2>
          <Link href="/projects" className="text-sm font-medium text-accent-primary hover:underline">
            View all
          </Link>
        </div>
        <Suspense fallback={<div className="opacity-70">Loading projects…</div>}>
          <ProjectsPreview />
        </Suspense>
      </section>

      <section className="mt-20">
        <div className="flex items-center justify-between gap-4">
          <h2 className="font-display text-2xl md:text-3xl">Contributors</h2>
          <Link href="/contributors" className="text-sm font-medium text-accent-primary hover:underline">
            Meet the community
          </Link>
        </div>
        <Suspense fallback={<div className="opacity-70">Loading contributors…</div>}>
          <ContributorsPreview />
        </Suspense>
      </section>
    </main>
  );
}

