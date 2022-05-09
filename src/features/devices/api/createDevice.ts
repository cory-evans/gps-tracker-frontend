import { axios } from '../../../lib/axios';
import { CreateDeviceResponse } from '../types';

export const createDevice = (deviceName: string): Promise<CreateDeviceResponse> => {
  return axios.post('/auth/device/create', {
    deviceName,
  });
};
