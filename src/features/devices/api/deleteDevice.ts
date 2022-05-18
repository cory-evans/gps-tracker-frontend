import { axios } from '../../../lib/axios';
import { DeleteDeviceResponse } from '../types';

export const deleteDevice = (deviceId: string): Promise<DeleteDeviceResponse> => {
  return axios.post(`/auth/device/${deviceId}/remove`);
};
