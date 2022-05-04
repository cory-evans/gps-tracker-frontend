import { axios } from '../../../lib/axios';
import { LoginResponse } from '../types';

export const refreshSession = (refreshToken: string): Promise<LoginResponse> => {
  return axios.post('/auth/session/refresh?refreshToken=' + refreshToken);
};
