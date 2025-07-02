// src/hooks/useMockVitals.ts
import { useState, useEffect } from "react";
import { VITALS_CONFIG, generateRandomVitals } from "@services/vitalsService";
import type { Vital } from "@types";

export function useMockVitals(intervalMs = 5000): Vital[] {
  const [vitals, setVitals] = useState<Vital[]>(() =>
    VITALS_CONFIG.map((v) => ({
      ...v,
      value:
        v.unit === "%"
          ? `${Math.round((v.min + v.max) / 2)}%`
          : `${((v.min + v.max) / 2).toFixed(1)} ${v.unit}`,
    }))
  );

  useEffect(() => {
    const id = setInterval(() => {
      setVitals((prev) => generateRandomVitals(prev));
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return vitals;
}
