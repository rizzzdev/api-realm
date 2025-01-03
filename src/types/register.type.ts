import { LoginRequest } from "./login.type";

export interface RegisterRequest extends LoginRequest {
  fullName: string;
  gender: Gender;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}
