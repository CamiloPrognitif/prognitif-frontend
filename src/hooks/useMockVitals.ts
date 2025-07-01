// src/hooks/useMockVitals.ts
import { useState, useEffect } from "react";

interface VitalConfig {
  label: string;
  icon: string;
  unit: string;
  min: number;
  max: number;
}

export interface Vital extends VitalConfig {
  value: string;
}

const CONFIG: VitalConfig[] = [
  { label: "HR", icon: "❤︎", unit: "bpm", min: 60, max: 100 },
  { label: "RR", icon: "🫁", unit: "bpm", min: 12, max: 20 },
  { label: "SpO₂", icon: "🩸", unit: "%", min: 95, max: 100 },
  { label: "Temp", icon: "🌡️", unit: "°C", min: 36.5, max: 37.5 },
];

export function useMockVitals(intervalMs = 5000): Vital[] {
  const [vitals, setVitals] = useState<Vital[]>(() =>
    CONFIG.map((v) => ({
      ...v,
      value:
        v.unit === "%"
          ? `${Math.round((v.min + v.max) / 2)}%`
          : `${((v.min + v.max) / 2).toFixed(1)} ${v.unit}`,
    }))
  );

  useEffect(() => {
    const id = setInterval(() => {
      setVitals((prev) =>
        prev.map((v) => {
          const raw = Math.random() * (v.max - v.min) + v.min;
          const formatted =
            v.unit === "%"
              ? `${Math.round(raw)}%`
              : `${raw.toFixed(1)} ${v.unit}`;
          return { ...v, value: formatted };
        })
      );
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return vitals;
}
