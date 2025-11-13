import data from "../public/data/contributors.json";

type Contributor = {
  id: number | string;
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string | null;
  contributions?: number;
  twitter_username?: string | null;
};

export default function ContributorsPreview() {
  const contributors = (data.contributors as Contributor[] | undefined) ?? [];
  const sorted = contributors.sort(
    (a, b) => (b.contributions ?? 0) - (a.contributions ?? 0)
  );
  const top = sorted.slice(0, 12);

  if (top.length === 0) {
    return <div className="text-text-secondary">Contributors will appear after the first sync.</div>;
  }

  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {top.map((c) => (
        <a
          key={c.id}
          href={c.html_url}
          className="card group flex items-center gap-3 rounded-2xl p-3 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,10,20,0.25)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.avatar_url}
            alt={c.login}
            className="h-9 w-9 flex-shrink-0 rounded-full border"
            style={{ borderColor: "var(--border)" }}
          />
          <div className="min-w-0">
            <div className="truncate text-sm font-medium text-text-primary">
              {c.name || c.login}
            </div>
            <div className="text-xs text-text-secondary">
              {c.contributions ?? 0} contributions
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

