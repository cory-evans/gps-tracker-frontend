import { axios } from '../../../lib/axios';
import { GetOwnedDevicesPositionResponse } from '../types';

export const getOwnedDevicesPosition = (): Promise<GetOwnedDevicesPositionResponse> => {
  return axios.get('/position/devices');
};
