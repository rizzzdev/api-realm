export interface LoginRequest {
  studentId: string;
  passWord: string;
}

export interface LoginData {
  refreshToken: string;
  accessToken: string;
}
