"use client";

import { memo, useState } from "react";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 nav-glass">
      <div className="max-w-container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold text-primary">
          Neural
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">
            Flow
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted hover:text-primary transition-colors duration-180 ease-out"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#pricing" className="btn-gradient btn-gradient--sm">
                Get started
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="md:hidden p-2 text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-border bg-bg-deep/95 backdrop-blur-md px-4 py-4"
        >
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 text-muted hover:text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pricing"
                className="btn-gradient btn-gradient--sm block text-center"
                onClick={() => setMenuOpen(false)}
              >
                Get started
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default memo(Nav);
