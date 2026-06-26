import { memo } from "react";

const LOGOS = [
  {
    name: "NexaCorp",
    svg: (
      <svg viewBox="0 0 140 40" fill="none" aria-hidden="true" className="h-8 w-auto">
        <circle cx="20" cy="20" r="14" stroke="#a855f7" strokeWidth="2" />
        <text x="14" y="25" fill="currentColor" fontSize="14" fontWeight="700">N</text>
        <text x="42" y="26" fill="currentColor" fontSize="15" fontWeight="600">NexaCorp</text>
      </svg>
    ),
  },
  {
    name: "DataVault",
    svg: (
      <svg viewBox="0 0 140 40" fill="none" aria-hidden="true" className="h-8 w-auto">
        <rect x="8" y="10" width="24" height="20" rx="3" stroke="#3b82f6" strokeWidth="2" />
        <text x="40" y="26" fill="currentColor" fontSize="15" fontWeight="600">DataVault</text>
      </svg>
    ),
  },
  {
    name: "CloudSync",
    svg: (
      <svg viewBox="0 0 150 40" fill="none" aria-hidden="true" className="h-8 w-auto">
        <path d="M12 28a10 10 0 013-19.5A12 12 0 0132 20h-2a8 8 0 10-8 8H12z" stroke="#a855f7" strokeWidth="2" />
        <text x="38" y="26" fill="currentColor" fontSize="15" fontWeight="600">CloudSync</text>
      </svg>
    ),
  },
  {
    name: "MetricLabs",
    svg: (
      <svg viewBox="0 0 150 40" fill="none" aria-hidden="true" className="h-8 w-auto">
        <rect x="8" y="22" width="6" height="10" fill="#a855f7" opacity="0.6" />
        <rect x="16" y="16" width="6" height="16" fill="#3b82f6" opacity="0.6" />
        <rect x="24" y="10" width="6" height="22" fill="#a855f7" />
        <text x="38" y="26" fill="currentColor" fontSize="15" fontWeight="600">MetricLabs</text>
      </svg>
    ),
  },
  {
    name: "PipeForge",
    svg: (
      <svg viewBox="0 0 140 40" fill="none" aria-hidden="true" className="h-8 w-auto">
        <path d="M8 20h12l4-6 6 12 4-6h8" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
        <text x="46" y="26" fill="currentColor" fontSize="15" fontWeight="600">PipeForge</text>
      </svg>
    ),
  },
  {
    name: "OmniStack",
    svg: (
      <svg viewBox="0 0 150 40" fill="none" aria-hidden="true" className="h-8 w-auto">
        <rect x="8" y="12" width="20" height="16" rx="2" stroke="#a855f7" strokeWidth="2" />
        <rect x="14" y="8" width="20" height="16" rx="2" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />
        <text x="40" y="26" fill="currentColor" fontSize="15" fontWeight="600">OmniStack</text>
      </svg>
    ),
  },
];

function Logos() {
  return (
    <section aria-label="Trusted by leading companies" className="py-12 px-4 relative">
      <div className="max-w-container mx-auto">
        <p className="text-center text-sm text-muted mb-8">
          Trusted by data teams at innovative companies
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {LOGOS.map((logo) => (
            <li key={logo.name} className="logo-item text-primary" title={logo.name}>
              <span className="sr-only">{logo.name}</span>
              {logo.svg}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default memo(Logos);
