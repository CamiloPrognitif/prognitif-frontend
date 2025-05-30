import type { Medication } from '../models/medication';

export const mapMedication = (data: any): Medication => {
  return {
    uuid: data.uuid,
    prescription_uuid: data.prescription_uuid,
    name: data.name,
    dosageAmount: data.dosage_amount,
    dosageUnits: data.dosage_units,
    intakeFrequency: data.intake_frequency,
    intakeFrequencyUnits: data.intake_frequency_units,
    notes: data.notes,
    startDate: data.start_date,
    endDate: data.end_date,
  }
}

