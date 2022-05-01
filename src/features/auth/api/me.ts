import { axios } from '../../../lib/axios';
import { User } from '../types';

type MeResponse = {
  user: User;
};

export const getMe = (): Promise<MeResponse> => {
  return axios.get('/auth/me');
};
