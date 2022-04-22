import Axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from '../config';
import { store } from '../store';

function authRequestInterceptor(config: AxiosRequestConfig) {
  const state = store.getState();
  const token = state.auth.token;

  if (!config.headers) {
    config.headers = {};
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // TODO: push error to store
    // const message = error.response.data.message || error.message;

    return Promise.reject(error);
  }
);
