import { axios } from '../../../lib/axios';
import { LoginResponse } from '../types';

export type LoginCredentials = {
  email: string;
  password: string;
};

export const loginWithEmailPassword = (data: LoginCredentials): Promise<LoginResponse> => {
  return axios.post('/auth/session/create', data);
};
