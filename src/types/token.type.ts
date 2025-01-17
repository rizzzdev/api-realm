export interface Token {
  readonly id?: string;
  userId: string;
  loggedInAt: Date;
  loggedOutAt?: Date;
  refreshToken?: string;
}
