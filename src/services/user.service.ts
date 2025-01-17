import { hashPassword, verifyPassword } from "../utils/hash.util";
import { Gender, PostUserRequest, Role, SignInUserRequest, UserPayload } from "../types/user.type";
import { StatusCode } from "../types/api.type";
import { postUserRequestValidation, signInUserRequestValidation } from "../validations/user.validation";
import { createUser, findUserById, findUserByUsername, findUsers, updateUserById } from "../repos/user.repo";
import avatarShuffle from "../utils/avatar.util";
import { datetime } from "../utils/datetime.util";
import { signToken, verifyToken } from "../utils/jwt.util";
import { createToken, findTokenByToken, updateTokenById } from "../repos/token.repo";
import { apiResponse } from "../utils/response.util";

export const postUser = async (userData: PostUserRequest, isAdmin: boolean = false) => {
  const { error } = postUserRequestValidation(userData);
  if (error) {
    return apiResponse(false, StatusCode.BAD_REQUEST, error.message, null);
  }

  const user = await findUserByUsername(userData.username);
  if (user) {
    return apiResponse(false, StatusCode.BAD_REQUEST, "Username already exists!", null);
  }

  try {
    const newUser = await createUser({
      username: userData.username.toLowerCase().replace(" ", ""),
      password: await hashPassword(userData.password),
      fullName: userData.fullName
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      gender: userData.gender,
      avatarUrl: avatarShuffle(userData.gender),
      signedUpAt: datetime(),
      role: isAdmin ? Role.ADMIN : Role.STUDENT
    });
    return apiResponse(true, StatusCode.CREATED, "User created successfully!", newUser);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};

export const getUsers = async () => {
  const users = await findUsers();
  if (users.length === 0) {
    return apiResponse(false, StatusCode.NOT_FOUND, "Users not found!", []);
  } else {
    return apiResponse(true, StatusCode.OK, "Get all users successfully!", users);
  }
};

export const getUserById = async (id: string) => {
  const user = await findUserById(id);
  if (!user) {
    return apiResponse(false, StatusCode.NOT_FOUND, "User not found!", null);
  }

  return apiResponse(true, StatusCode.OK, "Get user successfully!", user);
};

export const getUserMarksById = async (id: string) => {
  const user = await findUserById(id);
  if (!user) {
    return apiResponse(false, StatusCode.NOT_FOUND, `User not found!`, null);
  }

  const marks = user.marks;
  if (marks.length === 0) {
    return apiResponse(
      false,
      StatusCode.NOT_FOUND,
      `User marks not found for user with username ${user.username}!`,
      marks
    );
  }

  return apiResponse(
    true,
    StatusCode.OK,
    `Get user marks successfully for user with username ${user.username}!`,
    marks
  );
};

export const signInUser = async (userData: SignInUserRequest) => {
  const { error } = signInUserRequestValidation(userData);
  if (error) {
    return apiResponse(false, StatusCode.BAD_REQUEST, error.message, null);
  }

  const user = await findUserByUsername(userData.username);
  if (!user) {
    return apiResponse(false, StatusCode.NOT_FOUND, "User ID or Password is incorrect!", null);
  }

  const isPasswordCorrect = await verifyPassword(userData.password, user.password);
  if (!isPasswordCorrect) {
    return apiResponse(false, StatusCode.NOT_FOUND, "User ID or Password is incorrect!", null);
  }

  const payload: UserPayload = {
    id: user.id,
    username: user.username,
    fullName: user.fullName,
    avatarUrl: user.avatarUrl,
    gender: user.gender === "MALE" ? Gender.MALE : Gender.FEMALE
  };
  const accessToken = signToken(payload, "access");
  const refreshToken = signToken(payload, "refresh");
  await createToken({
    userId: user.id,
    refreshToken: refreshToken,
    loggedInAt: datetime()
  });

  return apiResponse(true, StatusCode.OK, "Sign in successfully!", { accessToken, refreshToken });
};

export const signOutUser = async (refreshToken: string) => {
  const payload = verifyToken(refreshToken, "refresh") as UserPayload;
  if (!payload) {
    return apiResponse(false, StatusCode.UNAUTHORIZED, "Unauthorized!", null);
  }

  const refreshTokenDB = await findTokenByToken(refreshToken);
  if (!refreshTokenDB) {
    return apiResponse(false, StatusCode.UNAUTHORIZED, "Unauthorized!", null);
  }

  await updateTokenById(refreshTokenDB!.id, {
    userId: refreshTokenDB!.userId,
    refreshToken: "",
    loggedInAt: refreshTokenDB!.loggedInAt,
    loggedOutAt: datetime()
  });

  return apiResponse(true, StatusCode.OK, "Sign out successfully!", null);
};
