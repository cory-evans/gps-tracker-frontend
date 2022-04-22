import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

interface AuthState {
  token: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  token: null,
  refreshToken: null,
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
  },
});

export const { setToken, setRefreshToken } = authSlice.actions;
export const selectToken = (state: RootState) => state.auth.token;
export default authSlice.reducer;
