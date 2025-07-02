import { VitalConfig } from "@types";

export const VITALS_CONFIG: VitalConfig[] = [
  { label: "HR", icon: "❤︎", unit: "bpm", min: 60, max: 100 },
  { label: "RR", icon: "🫁", unit: "bpm", min: 12, max: 20 },
  { label: "SpO₂", icon: "🩸", unit: "%", min: 95, max: 100 },
  { label: "Temp", icon: "🌡️", unit: "°C", min: 36.5, max: 37.5 },
];
