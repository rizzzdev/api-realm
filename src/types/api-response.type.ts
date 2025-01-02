import { string } from "joi/lib";

export interface ApiResponse<T> {
  success: boolean;
  status: StatusCode;
  message: string;
  data: T;
}

export enum StatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

export interface JwtPayload {
  id: string;
  fullName: string;
  gender: string;
  avatarUrl: string | null;
}
