import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Device } from './types';

interface DeviceState {
  devices: Device[];
  hiddenDevices: string[];
}

const initialState: DeviceState = {
  devices: [],
  hiddenDevices: [],
};

export const deviceSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    setDevices: (state, action: PayloadAction<Device[]>) => {
      state.devices = action.payload;
      const hiddenDevices = [];
      for (const deviceId of state.hiddenDevices) {
        const device = action.payload.find((d) => d.deviceId === deviceId);

        if (!device) {
          continue;
        }
        // save device to hiddenDevices as it was in the old list
        hiddenDevices.push(deviceId);
      }
      state.hiddenDevices = hiddenDevices;
    },
    hideDevice: (state, action: PayloadAction<string>) => {
      if (!state.hiddenDevices.includes(action.payload)) {
        state.hiddenDevices = [...state.hiddenDevices, action.payload];
      }
    },
    showDevice: (state, action: PayloadAction<string>) => {
      state.hiddenDevices = state.hiddenDevices.filter((deviceId) => deviceId !== action.payload);
    },
  },
});

export const { setDevices, hideDevice, showDevice } = deviceSlice.actions;
export const selectDevices = (state: RootState) => state.devices.devices;
export const selectHiddenDevices = (state: RootState) => state.devices.hiddenDevices;
export default deviceSlice.reducer;
