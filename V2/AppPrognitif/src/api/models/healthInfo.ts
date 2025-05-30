export interface HealthInformation {
  uuid: string;
  careGroup_uuid: string;
  careCenter?: string;
  height?: number;
  weight?: number;
  bloodType?: string;
  limitations?: string[];
  allergies?: string[];
  diagnosedDiseases?: string[];
  dietaryRestrictions?: string[];
  smokingStatus?: string;
  alcoholConsumption?: string;
  notes?: string[];
};

