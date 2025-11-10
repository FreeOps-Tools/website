import Link from "next/link";
import data from "../public/data/projects.json";

type Project = {
  id: number | string;
  name: string;
  description?: string;
  html_url: string;
  homepage?: string | null;
  stargazers_count?: number;
  open_issues_count?: number;
  updated_at?: string;
  topics?: string[];
};

export default function ProjectsPreview() {
  const projects = (data.projects as Project[] | undefined) ?? [];
  const top = projects.slice(0, 6);

  if (top.length === 0) {
    return (
      <div className="text-text-secondary">
        No projects found yet. They will appear after the first sync.
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {top.map((p) => (
        <article
          key={p.id}
          className="card flex h-full flex-col gap-4 rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(6,10,20,0.35)]"
        >
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-xl tracking-tight text-text-primary">{p.name}</h3>
            {p.homepage ? (
              <span className="rounded-full border border-accent-primary/40 px-3 py-1 text-xs text-accent-primary">
                Live
              </span>
            ) : null}
          </div>
          <p className="text-sm text-text-secondary line-clamp-3">
            {p.description || "Open-source project by FreeOps"}
          </p>
          <div className="flex flex-wrap gap-2">
            {(p.topics ?? []).slice(0, 4).map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary opacity-80">
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs text-text-secondary opacity-80">
            <div className="flex items-center gap-1 font-medium text-text-primary">
              <StarIcon />
              {p.stargazers_count?.toLocaleString("en-US") ?? 0}
            </div>
            <div>Issues: {p.open_issues_count ?? 0}</div>
            <div>
              Updated {p.updated_at ? new Date(p.updated_at).toLocaleDateString() : "—"}
            </div>
          </div>
          <div className="mt-auto flex gap-3 text-sm font-medium">
            <a
              href={p.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-primary transition hover:underline"
            >
              View Code
            </a>
            {p.homepage ? (
              <a
                href={p.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-primary transition hover:underline"
              >
                Live Demo
              </a>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 text-accent-primary"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 2.5 7.9 7.4l-5.4.4 4.1 3.4-1.3 5.2L10 13.6l4.7 2.8-1.3-5.2L17.5 8l-5.4-.4z" />
    </svg>
  );
}

