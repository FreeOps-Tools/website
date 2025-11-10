import Link from "next/link";
import contributorsData from "../../public/data/contributors.json";
import projectsData from "../../public/data/projects.json";

type Contributor = {
  id: number | string;
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string | null;
  contributions?: number;
};

type Project = {
  id: number | string;
  name: string;
  html_url: string;
};

const contributors = (contributorsData.contributors as Contributor[] | undefined) ?? [];
const projects = (projectsData.projects as Project[] | undefined) ?? [];

const sortedContributors = [...contributors].sort(
  (a, b) => (b.contributions ?? 0) - (a.contributions ?? 0)
);

export default function ContributorsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-10">
      <header className="glass flex flex-col gap-4 rounded-3xl px-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-text-secondary">Community</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">Meet the Builders</h1>
          <p className="mt-3 max-w-2xl text-text-secondary">
            Every project is powered by contributors across the globe. Explore top collaborators, find their work, and
            connect with them directly on GitHub.
          </p>
        </div>
        <div className="grid h-fit min-w-[220px] gap-3 rounded-2xl border border-border/70 px-4 py-5 text-sm text-text-secondary">
          <div className="flex items-center justify-between">
            <span>Contributors</span>
            <span className="font-semibold text-text-primary">{contributors.length}</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Projects</span>
            <span className="font-semibold text-text-primary">{projects.length}</span>
          </div>
        </div>
      </header>

      <section className="mt-12">
        <h2 className="font-display text-2xl text-text-primary">Top contributors</h2>
        <p className="mt-2 text-text-secondary">
          Sorted by total contributions across tagged repositories. Counts include commits, PRs, and issues as reported by
          GitHub.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedContributors.map((person) => (
            <a
              key={person.id}
              href={person.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 rounded-3xl p-4 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,10,20,0.25)]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={person.avatar_url}
                alt={person.login}
                className="h-12 w-12 flex-shrink-0 rounded-full border"
                style={{ borderColor: "var(--border)" }}
              />
              <div className="min-w-0">
                <div className="truncate text-base font-semibold text-text-primary">{person.name || person.login}</div>
                <div className="text-sm text-text-secondary">
                  @{person.login} · {person.contributions ?? 0} contributions
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-border/60 px-8 py-10 md:px-12">
        <h2 className="font-display text-2xl text-text-primary">Start contributing</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-text-primary">1. Find an issue</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Browse repositories tagged <code className="rounded bg-elevated px-2 py-1 text-xs">good first issue</code>{" "}
              or <code className="rounded bg-elevated px-2 py-1 text-xs">help wanted</code>.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">2. Join the community</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Introduce yourself in Discord, share what you’re tackling, and collaborate with maintainers.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">3. Open a pull request</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Submit your work and add context. Once merged, your contributions will be counted automatically.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/FreeOps-Tools"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-black transition hover:shadow-[0_0_30px_rgba(80,244,255,0.45)]"
          >
            Explore repositories
          </a>
          <Link
            href="/community"
            className="rounded-full border border-accent-primary/50 px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-primary"
          >
            Visit the community hub
          </Link>
        </div>
      </section>
    </div>
  );
}

