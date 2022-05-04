export type User = {
  userId: string;
  displayName: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type LoginResponse = {
  session: {
    token: string;
    refreshToken: string;
    expiresAt: string;
    user: User;
    name: string;
  };
};
