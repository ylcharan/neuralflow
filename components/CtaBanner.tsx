import { memo } from "react";

function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className="py-20 px-4">
      <div className="max-w-container mx-auto">
        <div className="cta-banner p-10 md:p-14 text-center relative">
          <span className="cta-banner__beam" aria-hidden="true" />
          <span className="cta-banner__flare-left" aria-hidden="true" />
          <span className="cta-banner__flare-right" aria-hidden="true" />
          <h2
            id="cta-heading"
            className="relative font-display text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Ready to automate your data pipeline?
          </h2>
          <p className="relative text-muted max-w-lg mx-auto mb-8">
            Join thousands of teams using NeuralFlow to turn raw data into
            business intelligence — faster than ever.
          </p>
          <a href="#pricing" className="btn-gradient btn-gradient--lg relative">
            Start your free trial
            <svg
              width="16"
              height="16"
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
        </div>
      </div>
    </section>
  );
}

export default memo(CtaBanner);
