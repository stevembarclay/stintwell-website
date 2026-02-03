export const GA_ID = "G-X7YHYYWXDL";

export type AnalyticsEvent = {
  name: string;
  params?: Record<string, string | number | boolean>;
};

export function trackEvent(event: AnalyticsEvent) {
  if (typeof window === "undefined") return;
  if (typeof (window as any).gtag !== "function") return;
  (window as any).gtag("event", event.name, event.params || {});
}
