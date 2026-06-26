import { memo } from "react";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

function Footer() {
  return (
    <footer className="border-t border-border py-16 px-4 relative">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-display text-xl font-bold text-primary">
              Neural
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-2">
                Flow
              </span>
            </a>
            <p className="text-sm text-muted mt-3 max-w-xs">
              AI-powered data automation for modern teams. San Francisco, CA.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <nav key={category} aria-label={`${category} links`}>
              <h3 className="font-semibold text-primary text-sm mb-4">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-primary transition-colors duration-180 ease-out"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; 2026 NeuralFlow, Inc. All rights reserved.
          </p>
          <address className="text-sm text-muted not-italic">
            100 Market Street, San Francisco, CA 94105
          </address>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
