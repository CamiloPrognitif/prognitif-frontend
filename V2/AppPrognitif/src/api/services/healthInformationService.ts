import axios from 'axios';
import { mapHealthInformation } from '../mappers/healthInformationMapper';
import { HealthInformation } from '../models/healthInfo';

const BASE_URI = "http://localhost:6565/api/v1"; // TO DO: Adjust?

export const healthInfoService = {

  getHealthInfo: async (uuid: string): Promise<HealthInformation> => {
    try {
      const response = await axios.get(BASE_URI + '/care-groups/?' + {uuid} + '/health-info')
      console.log(response.data)
      return mapHealthInformation(response.data)
    
    } catch (error) {
      throw error
    }
  }
}