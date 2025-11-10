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
  const top = contributors.slice(0, 12);

  if (top.length === 0) {
    return <div className="text-text-secondary">Contributors will appear after the first sync.</div>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {top.map((c) => (
        <a key={c.id} href={c.html_url} className="glass p-3 flex items-center gap-3 hover:scale-[1.01] transition">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.avatar_url} alt={c.login} className="w-8 h-8 rounded-full" />
          <div className="min-w-0">
            <div className="truncate text-sm">{c.name || c.login}</div>
            <div className="text-xs text-text-secondary">{c.contributions ?? 0} contributions</div>
          </div>
        </a>
      ))}
    </div>
  );
}

