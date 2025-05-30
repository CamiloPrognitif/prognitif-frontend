import type { HealthInformation } from '../models/healthInfo';

export const mapHealthInformation = (data: any): HealthInformation => {
  return {
    uuid: data.uuid,
    careGroup_uuid: data.care_group_uuid,
    careCenter : data.care_center,
    height : data.height_cm,
    weight: data.weight_kg,
    bloodType: data.blood_type,
    limitations: data.known_limitations,
    allergies: data.known_allergies,
    diagnosedDiseases: data.diagnosed_diseases,
    dietaryRestrictions: data.dietary_restrictions,
    smokingStatus: data.smoking_status,
    alcoholConsumption: data.alcohol_consumption,
    notes: data.notes,
  }
}
 