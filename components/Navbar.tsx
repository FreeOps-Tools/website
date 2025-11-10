import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/contributors", label: "Contributors" },
  { href: "/community", label: "Community" },
  { href: "/roadmap", label: "Roadmap" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-base/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2 font-display text-lg tracking-wide text-text-primary">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent-primary/20 text-accent-primary">
            F
          </span>
          FreeOps Tool
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-text-secondary md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-text-primary">
              {link.label}
            </Link>
          ))}
          <a
            href="https://discord.gg/"
            className="rounded-full border border-accent-primary/40 px-4 py-2 font-medium text-text-primary transition hover:border-accent-primary"
          >
            Join Discord
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

