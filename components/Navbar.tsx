"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/contributors", label: "Contributors" },
  { href: "/community", label: "Community" },
  { href: "/roadmap", label: "Roadmap" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent-primary/40 px-4 py-2 font-medium text-text-primary transition hover:border-accent-primary"
          >
            Join Discord
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`h-0.5 w-6 bg-text-primary transition-all ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span className={`h-0.5 w-6 bg-text-primary transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-6 bg-text-primary transition-all ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`border-t border-border/60 bg-base/95 backdrop-blur-xl transition-all md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="mx-auto max-w-7xl space-y-1 px-6 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-4 py-3 text-sm text-text-secondary transition hover:bg-elevated hover:text-text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="block rounded-lg border border-accent-primary/40 px-4 py-3 text-center text-sm font-medium text-text-primary transition hover:border-accent-primary hover:bg-elevated"
          >
            Join Discord
          </a>
        </nav>
      </div>
    </header>
  );
}

