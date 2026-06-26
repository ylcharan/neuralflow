"use client";

import { memo } from "react";

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4"
    >
      <div className="hero-rays" aria-hidden="true" />
      <div className="hero-aurora" aria-hidden="true" />
      <div className="hero-floor" aria-hidden="true" />

      <div className="relative max-w-4xl mx-auto py-32 w-full">
        <p className="animate-fade-up pill-badge mb-6">
          AI-Powered Data Automation
        </p>

        <h1
          id="hero-heading"
          className="animate-fade-up animate-fade-up-delay-1 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6"
        >
          Automate your entire data pipeline
        </h1>

        <p className="animate-fade-up animate-fade-up-delay-2 text-muted text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          NeuralFlow connects, transforms, and delivers your data with
          intelligent automation — so your team ships insights, not
          spreadsheets.
        </p>

        <div className="animate-fade-up animate-fade-up-delay-2 flex justify-center mb-10">
          <div className="social-pill">
            <div className="social-pill__avatars" aria-hidden="true">
              <span className="social-pill__avatar bg-accent">SC</span>
              <span className="social-pill__avatar bg-accent-2">MW</span>
              <span className="social-pill__avatar bg-accent-deep">PS</span>
            </div>
            <span className="text-sm text-muted">
              1,000+ teams already automating with NeuralFlow
            </span>
          </div>
        </div>

        <div className="animate-fade-up animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="btn-gradient btn-gradient--lg">
            Start free trial
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
          <a href="#features" className="btn-ghost">
            Watch demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
