export const PRICING_MATRIX = {
  tiers: ["Starter", "Pro", "Enterprise"] as const,
  baseRates: { Starter: 29, Pro: 79, Enterprise: 199 },
  annualMultiplier: 0.8,
  currencyConfig: {
    USD: { symbol: "$", tariff: 1.0 },
    INR: { symbol: "₹", tariff: 83.5 },
    EUR: { symbol: "€", tariff: 0.92 },
  },
} as const;

export type Tier = (typeof PRICING_MATRIX.tiers)[number];
export type Currency = keyof typeof PRICING_MATRIX.currencyConfig;
export type Billing = "monthly" | "annual";

export function computePrice(
  tier: Tier,
  billing: Billing,
  currency: Currency
): { amount: number; formatted: string } {
  const baseRate = PRICING_MATRIX.baseRates[tier];
  const annualFactor =
    billing === "annual" ? PRICING_MATRIX.annualMultiplier : 1;
  const { symbol, tariff } = PRICING_MATRIX.currencyConfig[currency];
  const amount = baseRate * annualFactor * tariff;

  const formatted =
    currency === "INR"
      ? `${symbol}${Math.round(amount).toLocaleString("en-IN")}`
      : `${symbol}${amount.toFixed(2)}`;

  return { amount, formatted };
}

export const TIER_FEATURES: Record<Tier, string[]> = {
  Starter: [
    "5 data pipelines",
    "10K records/month",
    "Email support",
    "Basic analytics",
  ],
  Pro: [
    "Unlimited pipelines",
    "500K records/month",
    "Priority support",
    "Advanced AI transforms",
    "Custom integrations",
  ],
  Enterprise: [
    "Everything in Pro",
    "Unlimited records",
    "Dedicated account manager",
    "SLA guarantee",
    "On-premise deployment",
    "SSO & audit logs",
  ],
};
