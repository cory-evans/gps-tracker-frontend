export type Device = {
  deviceId: string;
  ownerId: string;
  name: string;
};

export type Position = {
  createdAt: string;
  latitude: number;
  longitude: number;
  altitude: number;
  speedKnots: number;
  accuracy: number;
  deviceId: string;
};

export type GetOwnedDevicesResponse = {
  devices: Device[];
};

export type GetOwnedDevicesPositionResponse = {
  positions: Position[];
};

export type CreateDeviceResponse = {
  token: string;
  device: Device;
};

export type DeleteDeviceResponse = {};
