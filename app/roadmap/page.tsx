import projectsData from "../../public/data/projects.json";

type Project = {
  id: number | string;
  name: string;
  updated_at?: string;
  html_url: string;
};

const projects = (projectsData.projects as Project[] | undefined) ?? [];

const updates = [...projects]
  .filter((project) => project.updated_at)
  .sort((a, b) => new Date(b.updated_at ?? 0).getTime() - new Date(a.updated_at ?? 0).getTime())
  .slice(0, 8)
  .map((project) => ({
    title: project.name,
    date: project.updated_at ? new Date(project.updated_at) : new Date(),
    link: project.html_url
  }));

const focusAreas = [
  {
    title: "Automation pipelines",
    description: "Reusable workflows, CLI tooling, and integrations that accelerate infrastructure rollouts."
  },
  {
    title: "Telemetry & observability",
    description: "Shared dashboards and log pipelines for managing multi-cloud deployments."
  },
  {
    title: "Developer experience",
    description: "Templates, docs, and starter kits to help new contributors ship production-ready code quickly."
  }
];

export default function RoadmapPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-10">
      <header className="glass rounded-3xl px-8 py-10">
        <p className="text-xs uppercase tracking-[0.35em] text-text-secondary">Roadmap</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl">What’s Coming Next</h1>
        <p className="mt-3 max-w-2xl text-text-secondary">
          Track current initiatives, recent releases, and longer-term areas of investment. This page synthesizes repo
          activity and community planning.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {focusAreas.map((area) => (
          <div key={area.title} className="card rounded-3xl px-6 py-8">
            <h2 className="font-display text-xl text-text-primary">{area.title}</h2>
            <p className="mt-3 text-sm text-text-secondary">{area.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-text-primary">Latest releases & milestones</h2>
        <p className="mt-2 text-text-secondary">
          Derived from repository activity. For detailed milestones, follow GitHub Projects on each repository.
        </p>
        <div className="relative mt-8">
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-border/70" />
          <ol className="space-y-8 pl-10">
            {updates.length > 0 ? (
              updates.map((item) => (
                <li key={item.title} className="relative">
                  <span className="absolute left-[-36px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-accent-primary/50 bg-base" />
                  <div className="card rounded-2xl px-6 py-5">
                    <div className="text-xs uppercase tracking-wide text-text-secondary">
                      {item.date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                    </div>
                    <div className="mt-2 font-semibold text-text-primary">{item.title}</div>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:underline"
                    >
                      View on GitHub
                      <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M5 11 11 5" />
                        <path d="M5 5h6v6" />
                      </svg>
                    </a>
                  </div>
                </li>
              ))
            ) : (
              <li className="text-text-secondary">No recent updates yet. Sync data to populate this timeline.</li>
            )}
          </ol>
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-border/60 px-8 py-10 md:px-12">
        <h2 className="font-display text-2xl text-text-primary">Propose a roadmap item</h2>
        <p className="mt-3 text-text-secondary">
          Have an idea that aligns with the mission? Create a GitHub discussion or open an issue with the{" "}
          <code className="rounded bg-elevated px-2 py-1 text-xs">proposal</code> label. Roadmap updates are announced
          after triage during community calls.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://github.com/orgs/FreeOps-Tools/discussions/new?category=ideas"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-black transition hover:shadow-[0_0_30px_rgba(80,244,255,0.45)]"
          >
            Start a discussion
          </a>
          <a
            href="https://github.com/FreeOps-Tools"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent-primary/50 px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-primary"
          >
            View all repositories
          </a>
        </div>
      </section>
    </div>
  );
}

