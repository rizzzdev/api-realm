export interface User<TokenType, MarkType, ActivityType> {
  readonly id?: string;
  username: string;
  password: string;
  fullName: string;
  gender: Gender;
  avatarUrl: string;
  signedUpAt: Date;
  deletedAt?: Date;
  role: Role;
  tokens?: TokenType[];
  marks?: MarkType[];
  activities?: ActivityType[];
}

export interface PostUserRequest {
  username: string;
  password: string;
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
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}
export enum Role {
  ADMIN = "ADMIN",
  STUDENT = "STUDENT"
}
