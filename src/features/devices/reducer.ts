import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Device } from './types';

interface DeviceState {
  devices: Device[];
}

const initialState: DeviceState = {
  devices: [],
};

export const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setDevices: (state, action: PayloadAction<Device[]>) => {
      state.devices = action.payload;
    },
  },
});

export const { setDevices } = deviceSlice.actions;
export const selectDevices = (state: RootState) => state.devices.devices;
export default deviceSlice.reducer;
