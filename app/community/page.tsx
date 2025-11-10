import Link from "next/link";

const channels = [
  {
    title: "Discord",
    description: "Join live discussions, pairing sessions, and weekly updates.",
    href: "https://discord.gg/Q6cH6pr2N6",
    cta: "Join Discord"
  },
  {
    title: "Newsletter",
    description: "Monthly highlights from FreeOps Tool projects and community events.",
    href: "https://freeops-tool.org/newsletter",
    cta: "Subscribe"
  },
  {
    title: "GitHub Discussions",
    description: "Share RFCs, raise questions, and collaborate on roadmap threads.",
    href: "https://github.com/orgs/FreeOps-Tools/discussions",
    cta: "Browse discussions"
  }
];

const events = [
  {
    title: "Monthly Demo Day",
    description: "Showcase new releases, integrations, and tooling experiments.",
    cadence: "First Thursday"
  },
  {
    title: "Contributor Office Hours",
    description: "Drop in for pairing on issues and architecture deep-dives.",
    cadence: "Every Wednesday"
  },
  {
    title: "Release Retrospective",
    description: "Review learnings from major launches and share playbooks.",
    cadence: "Quarterly"
  }
];

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:px-10">
      <header className="glass flex flex-col gap-4 rounded-3xl px-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-text-secondary">Community</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">Welcome to FreeOps Tool</h1>
          <p className="mt-3 max-w-2xl text-text-secondary">
            Connect with DevOps practitioners, share your work, and help define the roadmap for open infrastructure tooling.
          </p>
        </div>
        <div className="rounded-3xl border border-border/70 px-6 py-5 text-sm text-text-secondary">
          <p className="text-text-primary font-semibold">Code of Conduct</p>
          <p className="mt-2">
            We believe in respectful collaboration. Review the guidelines before joining events or conversations.
          </p>
          <a
            href="https://github.com/FreeOps-Tools/.github/blob/main/CODE_OF_CONDUCT.md"
            className="mt-4 inline-block text-sm font-medium text-accent-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the code of conduct
          </a>
        </div>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {channels.map((channel) => (
          <a
            key={channel.title}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card group flex flex-col gap-4 rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,10,20,0.25)]"
          >
            <h2 className="font-display text-xl text-text-primary">{channel.title}</h2>
            <p className="text-sm text-text-secondary">{channel.description}</p>
            <span className="mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent-primary group-hover:underline">
              {channel.cta}
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 11 11 5" />
                <path d="M5 5h6v6" />
              </svg>
            </span>
          </a>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-border/60 px-8 py-10 md:px-12">
        <h2 className="font-display text-2xl text-text-primary">Community cadence</h2>
        <p className="mt-2 max-w-2xl text-text-secondary">
          We host regular touchpoints to keep everyone aligned and growing together. Items are announced in Discord with
          calendar invites for subscribers.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {events.map((event) => (
            <div key={event.title} className="card rounded-2xl px-5 py-6">
              <p className="text-xs uppercase tracking-wide text-text-secondary">{event.cadence}</p>
              <h3 className="mt-2 font-semibold text-text-primary">{event.title}</h3>
              <p className="mt-3 text-sm text-text-secondary">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 glass rounded-3xl px-8 py-12 text-center">
        <h2 className="font-display text-3xl text-text-primary">Ready to collaborate?</h2>
        <p className="mt-3 text-text-secondary">
          Introduce yourself, share what you’re building, and let’s ship the next generation of open DevOps tools together.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://discord.gg/Q6cH6pr2N6"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent-primary px-7 py-3 text-sm font-semibold text-black transition hover:shadow-[0_0_30px_rgba(80,244,255,0.45)]"
          >
            Join the conversation
          </a>
          <Link
            href="/contributors"
            className="rounded-full border border-accent-primary/50 px-7 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-primary"
          >
            Meet the contributors
          </Link>
        </div>
      </section>
    </div>
  );
}

