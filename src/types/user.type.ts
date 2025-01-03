import { RegisterRequest } from "./register.type";

export interface User extends RegisterRequest {
  avatarUrl: string;
  registeredAt: Date;
  deletedAt?: Date;
  role: Role;
}

export enum Role {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT"
}
