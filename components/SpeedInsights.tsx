"use client";

import { useReportWebVitals } from "next/web-vitals";

export function SpeedInsights() {
  useReportWebVitals((metric) => {
    // Log metrics in development mode
    if (process.env.NODE_ENV === "development") {
      console.log(`[Speed Insights] ${metric.name}:`, metric.value);
    }

    // Send Core Web Vitals metrics to Google Analytics if available
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", metric.name, {
        value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });

  return null;
}
