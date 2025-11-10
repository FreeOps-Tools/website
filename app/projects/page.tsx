import projectsData from "../../public/data/projects.json";

type Project = {
  id: number | string;
  name: string;
  description?: string | null;
  html_url: string;
  homepage?: string | null;
  stargazers_count?: number;
  open_issues_count?: number;
  updated_at?: string;
  topics?: string[];
  language?: string | null;
};

const projects = (projectsData.projects as Project[] | undefined) ?? [];

const groupedByLanguage = projects.reduce<Record<string, Project[]>>((acc, project) => {
  const key = project.language ?? "Misc";
  acc[key] = acc[key] ?? [];
  acc[key].push(project);
  return acc;
}, {});

const languageSections = Object.entries(groupedByLanguage).sort((a, b) => b[1].length - a[1].length);

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-10">
      <header className="glass flex flex-col gap-4 rounded-3xl px-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-text-secondary">Explore FreeOps</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">All Open-source Projects</h1>
          <p className="mt-3 max-w-2xl text-text-secondary">
            Filter initiatives across the FreeOps Tool organization. Each card links directly to the repository and, when
            available, the live deployment.
          </p>
        </div>
        <div className="grid h-fit min-w-[220px] gap-3 rounded-2xl border border-border/70 px-4 py-5 text-sm text-text-secondary">
          <div className="flex items-center justify-between">
            <span>Projects</span>
            <span className="font-semibold text-text-primary">{projects.length}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Languages</span>
            <span className="font-semibold text-text-primary">{languageSections.length}</span>
          </div>
        </div>
      </header>

      <div className="mt-12 space-y-12">
        {languageSections.map(([language, items]) => (
          <section key={language} className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl text-text-primary">{language}</h2>
              <span className="text-sm text-text-secondary">{items.length} repositories</span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((project) => (
                <article
                  key={project.id}
                  className="card flex h-full flex-col gap-4 rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(6,10,20,0.3)]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl text-text-primary">{project.name}</h3>
                    {project.homepage ? (
                      <span className="rounded-full border border-accent-primary/40 px-3 py-1 text-xs text-accent-primary">
                        Live
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-text-secondary line-clamp-4">
                    {project.description ?? "FreeOps community project."}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-text-secondary/80">
                    {(project.topics ?? []).slice(0, 6).map((topic) => (
                      <span key={topic} className="rounded-full border border-border px-3 py-1">
                        {topic}
                      </span>
                    ))}
                  </div>
                  <dl className="grid grid-cols-2 gap-3 text-xs text-text-secondary/80">
                    <div>
                      <dt>Stars</dt>
                      <dd className="font-semibold text-text-primary">
                        {project.stargazers_count?.toLocaleString("en-US") ?? 0}
                      </dd>
                    </div>
                    <div>
                      <dt>Issues</dt>
                      <dd className="font-semibold text-text-primary">{project.open_issues_count ?? 0}</dd>
                    </div>
                    <div>
                      <dt>Updated</dt>
                      <dd>{project.updated_at ? new Date(project.updated_at).toLocaleDateString() : "—"}</dd>
                    </div>
                    <div>
                      <dt>Language</dt>
                      <dd>{project.language ?? "—"}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto flex flex-wrap gap-4 text-sm font-medium text-accent-primary">
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      View Repository
                    </a>
                    {project.homepage ? (
                      <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {projects.length === 0 ? (
        <div className="mt-16 text-center text-text-secondary">
          No repositories tagged <code className="text-text-primary">opensource</code> yet. Add the topic to any repo to
          surface it here.
        </div>
      ) : null}

      <footer className="mt-20 flex flex-col items-center gap-4 rounded-3xl border border-border/60 px-8 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h3 className="font-display text-2xl text-text-primary">Have something to ship?</h3>
          <p className="mt-2 max-w-xl text-text-secondary">
            Submit a pull request to any FreeOps Tool repository or propose a new project in community channels. Once the
            <code className="mx-1 rounded bg-elevated px-2 py-0.5 text-xs">opensource</code> topic is added, it will appear
            automatically after the next sync.
          </p>
        </div>
        <a
          href="https://github.com/FreeOps-Tools"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-accent-primary/40 px-6 py-3 text-sm font-semibold text-accent-primary transition hover:border-accent-primary"
        >
          Browse the organization
        </a>
      </footer>
    </div>
  );
}

