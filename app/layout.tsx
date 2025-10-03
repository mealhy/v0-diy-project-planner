import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "DIY Project Planner - Step-by-Step Home Improvement Guide",
  description:
    "Plan your DIY home improvement projects with our comprehensive tool. Get materials lists, budget estimates, time calculations, and step-by-step instructions for painting, flooring, carpentry, plumbing, and more.",
  keywords: [
    "DIY project planner",
    "home improvement calculator",
    "DIY guide",
    "project estimator",
    "home renovation planner",
    "DIY checklist",
    "painting guide",
    "flooring installation",
    "home repair",
  ],
  authors: [{ name: "DIY Project Planner" }],
  openGraph: {
    title: "DIY Project Planner - Home Improvement Made Easy",
    description:
      "Plan and execute your home improvement projects with confidence. Get personalized materials lists, budget estimates, and expert guidance.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "DIY Home Improvement Project Planner",
              description:
                "Comprehensive guide and planner for DIY home improvement projects including painting, flooring, carpentry, and plumbing.",
              tool: ["Paint roller", "Drill", "Level", "Measuring tape", "Brushes"],
              supply: ["Paint", "Primer", "Wood", "Screws", "Wall anchors"],
              totalTime: "PT4H",
              estimatedCost: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: "50-150",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
