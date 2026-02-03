"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const SCROLL_THRESHOLDS = [25, 50, 75, 90];

export default function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const cta = target.closest<HTMLElement>("[data-cta]");
      if (cta) {
        const label = cta.getAttribute("data-cta") || cta.textContent?.trim() || "cta";
        const location = cta.getAttribute("data-cta-location") || "unknown";
        const destination = cta.getAttribute("data-cta-destination") || undefined;
        const params: Record<string, string> = {
          event_category: "engagement",
          event_label: label,
          cta_location: location,
          page: window.location.pathname || "unknown",
        };
        if (destination) params.destination = destination;
        trackEvent({ name: "cta_click", params });
      }

      const tab = target.closest<HTMLElement>("[data-tab]");
      if (tab) {
        const tabName = tab.getAttribute("data-tab") || "tab";
        trackEvent({
          name: "tab_click",
          params: {
            event_category: "engagement",
            event_label: tabName,
            page: window.location.pathname || "unknown",
          },
        });
      }
    };

    const tracked: number[] = [];
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const percent = (window.scrollY / total) * 100;
      SCROLL_THRESHOLDS.forEach((depth) => {
        if (percent >= depth && !tracked.includes(depth)) {
          tracked.push(depth);
          trackEvent({
            name: "scroll",
            params: {
              event_category: "engagement",
              event_label: `${depth}%`,
              page: window.location.pathname || "unknown",
            },
          });
        }
      });
    };

    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
