import { memo } from "react";

const TESTIMONIALS = [
  {
    quote:
      "NeuralFlow cut our ETL development time by 70%. What used to take weeks now ships in days.",
    name: "Sarah Chen",
    role: "VP of Data, NexaCorp",
    initials: "SC",
  },
  {
    quote:
      "The AI transforms are genuinely impressive. Our data quality scores jumped from 82% to 97% in the first month.",
    name: "Marcus Webb",
    role: "Head of Analytics, MetricLabs",
    initials: "MW",
  },
  {
    quote:
      "Enterprise-grade security without enterprise-grade complexity. Our compliance team approved it in one review.",
    name: "Priya Sharma",
    role: "CTO, DataVault",
    initials: "PS",
  },
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20 px-4 section-glow-top relative"
    >
      <div className="max-w-container mx-auto">
        <div className="text-center mb-12">
          <span className="pill-badge mb-4 inline-block">Testimonials</span>
          <h2
            id="testimonials-heading"
            className="font-display text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Loved by data teams everywhere
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            See why engineering leaders choose NeuralFlow to power their data
            infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="testimonial-card glass-card p-6"
            >
              <p className="text-primary text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "var(--gradient-brand)" }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic font-semibold text-primary text-sm block">
                    {t.name}
                  </cite>
                  <span className="text-xs text-muted">{t.role}</span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Testimonials);
