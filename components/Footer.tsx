import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-base/50">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 text-sm text-text-secondary">
            <p className="font-medium text-text-primary">
              © {currentYear} FreeOps Tool. All rights reserved.
            </p>
            <p className="text-xs">
              Built with{" "}
              <span className="text-accent-primary" aria-label="love">
                ❤️
              </span>{" "}
              for open-source by the community
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary">
            <Link href="/projects" className="transition hover:text-text-primary">
              Projects
            </Link>
            <Link href="/contributors" className="transition hover:text-text-primary">
              Contributors
            </Link>
            <Link href="/community" className="transition hover:text-text-primary">
              Community
            </Link>
            <Link href="/roadmap" className="transition hover:text-text-primary">
              Roadmap
            </Link>
            <a
              href="https://github.com/FreeOps-Tools"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-text-primary"
            >
              GitHub
            </a>
            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-text-primary"
            >
              Discord
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-xs text-text-secondary/80">
          <p>
            Free and open-source DevOps tools. Made with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-primary transition hover:underline"
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-primary transition hover:underline"
            >
              Tailwind CSS
            </a>
            , and the power of open-source.
          </p>
        </div>
      </div>
    </footer>
  );
}

