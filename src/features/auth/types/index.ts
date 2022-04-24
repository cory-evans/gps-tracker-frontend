export type User = {
  userId: string;
  displayName: string;
  email: string;
};

export type LoginResponse = {
  session: {
    token: string;
    refreshToken: string;
    expiresAtUTC: number;
    user: User;
    name: string;
  };
};
