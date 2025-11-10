import Image from "next/image";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {top.map((p) => (
        <article key={p.id} className="glass p-5">
          <div className="flex items-start justify-between">
            <h3 className="font-display text-xl">{p.name}</h3>
            {p.homepage ? (
              <span className="text-xs rounded-full px-2 py-1 bg-accent-primary/20 border border-accent-primary/30">
                Live
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm text-text-secondary line-clamp-3">
            {p.description || "Open-source project by FreeOps"}
          </p>
          <div className="mt-4 flex gap-2 flex-wrap">
            {(p.topics ?? []).slice(0, 4).map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 flex gap-3">
            <a href={p.html_url} className="text-sm underline">View Code</a>
            {p.homepage ? <a href={p.homepage} className="text-sm underline">Live Demo</a> : null}
          </div>
        </article>
      ))}
    </div>
  );
}

