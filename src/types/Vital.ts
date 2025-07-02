export interface VitalConfig {
  label: string;
  icon: string;
  unit: string;
  min: number;
  max: number;
}

export interface Vital extends VitalConfig {
  value: string;
}
