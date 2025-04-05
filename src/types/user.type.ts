import { Activity } from "./activity.type";
import { Mark } from "./mark.type";
import { Token } from "./token.type";

export interface User {
  readonly id?: string;
  username: string;
  password: string;
  fullName: string;
  gender: Gender;
  avatarUrl: string;
  signedUpAt: Date;
  deletedAt?: Date;
  role: Role;
  tokens?: Token[];
  marks?: Mark[];
  activities?: Activity[];
}

export interface PostUserRequest {
  username: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  gender: Gender;
}

export interface SignInUserRequest {
  username: string;
  password: string;
}

export interface UserPayload {
  readonly id?: string;
  username: string;
  fullName: string;
  gender: Gender;
  avatarUrl: string;
  role: Role;
  signedUpAt: Date;
  deletedAt?: Date | null;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}
export enum Role {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT"
}
