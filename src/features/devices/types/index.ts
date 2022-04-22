export type Device = {
  deviceId: string;
  ownerId: string;
  name: string;
};
export type GetOwnedDevicesResponse = {
  devices: Device[];
};
