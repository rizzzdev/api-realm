export interface Token {
  userId: string;
  loggedInAt: Date;
  loggedOutAt?: Date;
  refreshToken: string;
}
