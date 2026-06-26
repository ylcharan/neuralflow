import type { Metadata } from "next";
import PageLoader from "@/components/PageLoader";
import PageBackground from "@/components/PageBackground";
import "./globals.css";

const siteDescription =
  "Automate your entire data pipeline with NeuralFlow. AI-powered ingestion, transformation, and delivery — built for modern data teams.";

export const metadata: Metadata = {
  metadataBase: new URL("https://neuralflow.ai"),
  title: "NeuralFlow — AI-Powered Data Automation Platform",
  description: siteDescription,
  openGraph: {
    title: "NeuralFlow — AI-Powered Data Automation Platform",
    description: siteDescription,
    url: "https://neuralflow.ai",
    siteName: "NeuralFlow",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralFlow — AI-Powered Data Automation Platform",
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <PageBackground />
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
