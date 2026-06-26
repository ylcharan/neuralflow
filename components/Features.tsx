"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const FEATURES = [
  {
    title: "Smart Pipelines",
    description:
      "Build end-to-end data pipelines with drag-and-drop nodes. NeuralFlow auto-optimizes execution order and resource allocation.",
    icon: "/svgs/pipeline.svg",
    className: "bento-card-0",
  },
  {
    title: "Real-time Sync",
    description:
      "Keep every source in lockstep with sub-second CDC replication. Never miss a critical data event again.",
    icon: "/svgs/sync.svg",
    className: "",
  },
  {
    title: "AI Transforms",
    description:
      "Apply ML-powered cleansing, enrichment, and anomaly detection without writing a single line of code. Our models learn your data patterns.",
    icon: "/svgs/transform.svg",
    className: "bento-card-2",
  },
  {
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified with end-to-end encryption, role-based access, and comprehensive audit trails.",
    icon: "/svgs/shield.svg",
    className: "bento-card-3",
  },
  {
    title: "Live Analytics",
    description:
      "Monitor pipeline health, throughput, and data quality metrics in real-time dashboards.",
    icon: "/svgs/chart.svg",
    className: "",
  },
  {
    title: "Unified API",
    description:
      "One RESTful API to rule them all. Webhooks, SDKs, and native integrations for every major platform.",
    icon: "/svgs/api.svg",
    className: "bento-card-5",
  },
] as const;

function FeatureIcon({ src, alt, compact, visual }: { src: string; alt: string; compact?: boolean; visual?: boolean }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      className={
        visual ? "w-12 h-12" : compact ? "w-6 h-6 shrink-0" : "w-10 h-10 mb-4"
      }
    />
  );
}

function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeIndex = useRef(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [accordionOpen, setAccordionOpen] = useState(0);

  const handleBentoPointerEnter = (index: number) => {
    activeIndex.current = index;
  };

  const toggleAccordion = useCallback((index: number) => {
    setAccordionOpen((prev) => (prev === index ? -1 : index));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry && entry.contentRect.width < 768) {
        setAccordionOpen(activeIndex.current);
      }
    });

    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    panelRefs.current.forEach((panel, i) => {
      if (!panel) return;
      if (accordionOpen === i) {
        panel.style.setProperty("--panel-height", `${panel.scrollHeight}px`);
        panel.classList.add("is-open");
      } else {
        panel.classList.remove("is-open");
      }
    });
  }, [accordionOpen]);

  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="py-20 px-4 section-glow-top relative"
    >
      <div className="max-w-container mx-auto" ref={containerRef}>
        <div className="text-center mb-12">
          <span className="pill-badge mb-4 inline-block">Features</span>
          <h2
            id="features-heading"
            className="font-display text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Everything you need to automate data
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            From ingestion to insight — NeuralFlow handles the heavy lifting so
            your team can focus on strategy.
          </p>
        </div>

        <div className="features-bento features-grid-bg">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.title}
              className={`bento-card glass-card ${feature.className} p-6 cursor-default`}
              onPointerEnter={() => handleBentoPointerEnter(index)}
            >
              <div className="bento-card-visual">
                <FeatureIcon src={feature.icon} alt={`${feature.title} icon`} visual />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        <div className="features-accordion space-y-2">
          {FEATURES.map((feature, index) => {
            const isOpen = accordionOpen === index;
            return (
              <div
                key={feature.title}
                className="glass-card overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-4 text-left"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <FeatureIcon
                      src={feature.icon}
                      alt={`${feature.title} icon`}
                      compact
                    />
                    <span className="font-display font-semibold text-primary">
                      {feature.title}
                    </span>
                  </span>
                  <svg
                    className={`w-5 h-5 text-muted transition-transform duration-350 ease-in-out ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 8l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  ref={(el) => {
                    panelRefs.current[index] = el;
                  }}
                  className="accordion-panel-body"
                >
                  <p className="px-4 pb-4 text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
