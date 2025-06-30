import { useMemo } from "react";

/**
 * TEMP stub – returns fake energy data.
 * Swap out for a real API call later.
 */
export function useEnergyData(timeframe: "24h" | "7d" = "24h") {
  return useMemo(() => {
    if (timeframe === "24h") {
      return Array.from({ length: 24 }).map((_, i) => ({
        ts: `${i}:00`,
        kWh: +(Math.random() * 0.6 + 0.1).toFixed(2), // 0.10-0.70 kWh
      }));
    }
    return Array.from({ length: 7 }).map((_, i) => ({
      ts: `Day ${i + 1}`,
      kWh: +(Math.random() * 5 + 1).toFixed(2),      // 1-6 kWh
    }));
  }, [timeframe]);
}
