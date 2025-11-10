import Link from "next/link";
import { Suspense } from "react";
import ProjectsPreview from "../components/ProjectsPreview";
import ContributorsPreview from "../components/ContributorsPreview";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="relative rounded-2xl p-10 glass">
        <div className="relative z-10">
          <h1 className="font-display text-5xl md:text-6xl leading-tight">
            Building Free DevOps for Everyone
          </h1>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl">
            Discover community-built, production-grade tooling. Explore projects, meet contributors, and join FreeOps.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/projects" className="rounded-full px-5 py-3 bg-accent-primary text-black font-medium">
              Explore Projects
            </Link>
            <a href="https://github.com/your-org" className="rounded-full px-5 py-3 border border-accent-primary/50">
              Star the Org
            </a>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl mb-4">Featured Projects</h2>
        <Suspense fallback={<div className="opacity-70">Loading projects…</div>}>
          <ProjectsPreview />
        </Suspense>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl mb-4">Contributors</h2>
        <Suspense fallback={<div className="opacity-70">Loading contributors…</div>}>
          <ContributorsPreview />
        </Suspense>
      </section>
    </main>
  );
}

