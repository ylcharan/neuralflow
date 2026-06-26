"use client";

import { useState } from "react";
import {
  PRICING_MATRIX,
  computePrice,
  TIER_FEATURES,
  type Billing,
  type Currency,
} from "@/lib/pricingMatrix";

const CURRENCIES: Currency[] = ["USD", "INR", "EUR"];
const DEFAULT_BILLING: Billing = "monthly";
const DEFAULT_CURRENCY: Currency = "USD";

function PricingWidget() {
  const [billing, setBilling] = useState<Billing>(DEFAULT_BILLING);
  const [currency, setCurrency] = useState<Currency>(DEFAULT_CURRENCY);

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
        <div
          className="toggle-group inline-flex rounded-full p-1"
          role="group"
          aria-label="Billing period"
        >
          <button
            type="button"
            className={`toggle-btn px-4 py-2 rounded-full text-sm font-medium ${
              billing === "monthly"
                ? "toggle-active"
                : "text-muted hover:text-primary"
            }`}
            onClick={() => setBilling("monthly")}
            aria-pressed={billing === "monthly"}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`toggle-btn px-4 py-2 rounded-full text-sm font-medium ${
              billing === "annual"
                ? "toggle-active"
                : "text-muted hover:text-primary"
            }`}
            onClick={() => setBilling("annual")}
            aria-pressed={billing === "annual"}
          >
            Annual
            <span className="ml-1 text-xs text-accent-2">-20%</span>
          </button>
        </div>

        <div
          className="toggle-group inline-flex rounded-full p-1"
          role="group"
          aria-label="Currency"
        >
          {CURRENCIES.map((c) => (
            <button
              key={c}
              type="button"
              className={`toggle-btn px-3 py-2 rounded-full text-sm font-medium ${
                currency === c
                  ? "toggle-active"
                  : "text-muted hover:text-primary"
              }`}
              onClick={() => setCurrency(c)}
              aria-pressed={currency === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRICING_MATRIX.tiers.map((tier) => {
          const isPro = tier === "Pro";
          const price = computePrice(tier, billing, currency);

          return (
            <article
              key={tier}
              className={`glass-card relative p-6 flex flex-col ${
                isPro ? "glass-card-featured md:scale-105 md:z-10" : ""
              }`}
            >
              {isPro && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-semibold text-white toggle-active">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold text-primary mb-1">
                {tier}
              </h3>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-primary">
                  {price.formatted}
                </span>
                <span className="text-muted text-sm ml-1">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {TIER_FEATURES[tier].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0 text-accent-2"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={
                  isPro
                    ? "btn-gradient btn-gradient--block btn-gradient--rounded"
                    : "btn-ghost btn-ghost--block btn-ghost--rounded"
                }
              >
                Get started
                {isPro && (
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-20 px-4 section-glow-top relative"
    >
      <div className="max-w-container mx-auto">
        <div className="text-center mb-12">
          <span className="pill-badge mb-4 inline-block">Pricing</span>
          <h2
            id="pricing-heading"
            className="font-display text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Simple, transparent pricing
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Scale your data automation as you grow. Switch billing or currency
            anytime — no hidden fees.
          </p>
        </div>
        <PricingWidget />
      </div>
    </section>
  );
}
