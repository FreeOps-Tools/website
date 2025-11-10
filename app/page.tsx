import Link from "next/link";
import { Suspense } from "react";
import ProjectsPreview from "../components/ProjectsPreview";
import ContributorsPreview from "../components/ContributorsPreview";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 md:px-10 py-16">
      <section className="relative rounded-2xl p-8 md:p-12 glass">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1
            className="font-display tracking-tight text-5xl md:text-7xl leading-[1.05]"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Building Free DevOps for Everyone
          </h1>
          <p className="mt-4 text-text-secondary text-lg md:text-xl max-w-3xl">
            Discover community-built, production-grade tooling. Explore projects, meet contributors, and join FreeOps.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/projects" className="rounded-full px-6 py-3 bg-accent-primary text-black font-medium">
              Explore Projects
            </Link>
            <a
              href="https://github.com/FreeOps-Tools"
              className="rounded-full px-6 py-3 border border-accent-primary/50"
            >
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

