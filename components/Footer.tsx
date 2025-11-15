export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-base/50">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10">
        <div className="flex flex-col items-center gap-4 text-center text-sm text-text-secondary md:flex-row md:justify-between md:text-left">
          <div className="flex flex-col gap-1">
            <p className="font-medium text-text-primary">
              © {currentYear} FreeOps Tool. All rights reserved.
            </p>
            <p className="text-xs">
              Built with{" "}
              <span className="text-accent-primary" aria-label="love">
                ❤️
              </span>{" "}
              for open-source
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-text-secondary/70">
            <a
              href="https://github.com/FreeOps-Tools"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-text-primary"
            >
              GitHub
            </a>
            <span className="text-border">•</span>
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
      </div>
    </footer>
  );
}

