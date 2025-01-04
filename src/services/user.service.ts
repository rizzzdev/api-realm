import { hashPassword } from "../utils/hash.util";
import { User } from "../types/user.type";
import { ApiResponse, StatusCode } from "../types/api-response.type";
import userValidation from "../validations/user.validation";
import { createUser, findUserById, findUsers } from "../repos/user.repo";
import { Users } from ".prisma/client";

export const postUser = async (userData: User): Promise<ApiResponse<null | Users>> => {
  const { error } = userValidation(userData);
  if (error) {
    return {
      success: false,
      status: StatusCode.BAD_REQUEST,
      message: error.message,
      data: null
    };
  }
  try {
    const data = await createUser({
      userId: userData.userId.toLowerCase().split(" ").join(""),
      fullName: userData.fullName
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      password: hashPassword(userData.password),
      avatarUrl: userData.avatarUrl,
      registeredAt: userData.registeredAt,
      gender: userData.gender,
      role: userData.role,
      deletedAt: userData.deletedAt
    });
    return {
      success: true,
      status: StatusCode.CREATED,
      message: "User created successfully!",
      data: data
    };
  } catch {
    return {
      success: false,
      status: StatusCode.INTERNAL_SERVER_ERROR,
      message: "Something went wrong!",
      data: null
    };
  }
};

export const getAllUsers = async (): Promise<ApiResponse<null | Users[]>> => {
  const data = await findUsers();
  if (data.length === 0) {
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: "No users found!",
      data: null
    };
  } else {
    return {
      success: true,
      status: StatusCode.OK,
      message: "Users found successfully!",
      data: data
    };
  }
};

export const getUserById = async (id: string): Promise<ApiResponse<null | Users>> => {
  const data = await findUserById(id);
  if (!data) {
    return {
      success: false,
      status: StatusCode.NOT_FOUND,
      message: `User not found!`,
      data: null
    };
  } else {
    return {
      success: true,
      status: StatusCode.OK,
      message: `Get User successfully!`,
      data: data
    };
  }
};
