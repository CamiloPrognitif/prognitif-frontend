import axios from 'axios';
import { mapMedication } from '../mappers/medicationMapper';
import { Medication } from '../models/medication';

const BASE_URI = "http://localhost:6565/api/v1"; // TO DO: Adjust?

export const MedicationService = {

  getHealthInfo: async (uuid: string): Promise<Medication> => {
    try {
      const response = await axios.get(BASE_URI + '/medicaments/' + uuid)
      console.log(response.data)
      return mapMedication(response.data)
    
    } catch (error) {
      throw error
    }
  }
}