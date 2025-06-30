import { useState } from "react";

/**
 * TEMP stub – toggles local state only.
 * Replace later with real MQTT / REST logic.
 */
export function useDeviceState(
  deviceId?: string,
  sceneId?: string
): ["on" | "off", () => void] {
  const [state, setState] = useState<"on" | "off">("off");

  const toggle = () => {
    setState((s) => (s === "on" ? "off" : "on"));
    console.log(
      `Toggled ${deviceId ?? sceneId} → ${state === "on" ? "off" : "on"}`
    );
  };

  return [state, toggle];
}
