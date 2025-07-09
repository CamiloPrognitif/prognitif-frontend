// src/services/vitalsService.ts

/**
 * Configuration for each vital sign.
 */
export interface VitalConfig {
  label: string;
  icon: string;
  unit: string;
  min: number;
  max: number;
}

/**
 * A vital with its current value.
 */
export interface Vital extends VitalConfig {
  value: string;
}

/**
 * Default vitals configuration.
 */
export const VITALS_CONFIG: VitalConfig[] = [
  { label: "HR", icon: "❤︎", unit: "bpm", min: 60, max: 100 },
  { label: "RR", icon: "🫁", unit: "bpm", min: 12, max: 20 },
  { label: "SpO₂", icon: "🩸", unit: "%", min: 95, max: 100 },
  { label: "Temp", icon: "🌡️", unit: "°C", min: 36.5, max: 37.5 },
];

/**
 * Given a previous array of vitals, returns a new array with randomized values within each range.
 */
export function generateRandomVitals(prev: Vital[]): Vital[] {
  return prev.map((v) => {
    const raw = Math.random() * (v.max - v.min) + v.min;
    const formatted =
      v.unit === "%" ? `${Math.round(raw)}%` : `${raw.toFixed(1)} ${v.unit}`;
    return { ...v, value: formatted };
  });
}
