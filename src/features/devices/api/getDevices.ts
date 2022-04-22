import { axios } from '../../../lib/axios';
import { GetOwnedDevicesResponse } from '../types';

export const getOwnedDevices = (): Promise<GetOwnedDevicesResponse> => {
  return axios.get('/auth/devices');
};
