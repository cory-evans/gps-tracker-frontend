import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import type { User } from './types';

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  expiresAtUTC: number | null;
  user: User | null;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
  expiresAtUTC: null,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string | null>) => {
      state.refreshToken = action.payload;
    },
    setExpireAtUTC: (state, action: PayloadAction<number | null>) => {
      state.expiresAtUTC = action.payload;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setRefreshToken, setExpireAtUTC, setUser } = authSlice.actions;
export const selectToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;
export const selectExpiresAtUTC = (state: RootState) => state.auth.expiresAtUTC;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
export default authSlice.reducer;
