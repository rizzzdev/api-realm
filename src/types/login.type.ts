export interface LoginRequest {
  userId: string;
  password: string;
}

export interface LoginData {
  refreshToken: string;
  accessToken: string;
}
