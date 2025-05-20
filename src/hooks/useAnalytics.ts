// src/hooks/useAnalytics.ts
import { useCallback } from "react";

// Update the type definition to allow undefined values
type EventPropertyValue = string | number | boolean | undefined;
type EventProperties = Record<string, EventPropertyValue>;

export function useAnalytics() {
  // Track custom events
  const trackEvent = useCallback(
    (eventName: string, properties?: Record<string, EventPropertyValue>) => {
      if (typeof window !== "undefined") {
        // Process properties to remove undefined values
        const cleanProperties: Record<string, string | number | boolean> = {};

        if (properties) {
          Object.entries(properties).forEach(([key, value]) => {
            // Only include defined values
            if (value !== undefined) {
              cleanProperties[key] = value;
            }
          });
        }

        // This works with Vercel Analytics to track custom events
        const event = new CustomEvent("analytics", {
          detail: {
            name: eventName,
            properties: cleanProperties,
          },
        });

        window.dispatchEvent(event);

        // Log in development for debugging
        if (process.env.NODE_ENV === "development") {
          console.log(`[Analytics Event]: ${eventName}`, cleanProperties);
        }
      }
    },
    [],
  );

  return { trackEvent };
}
