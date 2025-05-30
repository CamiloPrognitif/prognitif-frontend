export interface Medication{
  uuid: string;
  prescription_uuid: string;
  name?: string;
  dosageAmount?: number;
  dosageUnits?: string;
  intakeFrequency?: number;
  intakeFrequencyUnits?: string;
  notes?: string[];
  startDate?: string;
  endDate?: string;
};