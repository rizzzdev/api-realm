import { Request, Response } from "express";
import { getUsers, getUserById, getUserMarksById, postUser, signInUser, signOutUser } from "../services/user.service";
import logger from "../utils/logger.util";
import { verifyToken } from "../utils/jwt.util";
import { PostUserRequest, SignInUserRequest, UserPayload } from "../types/user.type";

export const getUsersController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const payload = verifyToken(accessToken, "access") as UserPayload;
  const users = await getUsers();

  if (!users.success) {
    logger.error(`${users.message.toUpperCase()}: REQUESTED BY ${payload.username.toUpperCase()}`);
    response.status(users.status).send(users);
    return;
  }

  logger.info(`${users.message.toUpperCase()}: REQUESTED BY ${payload.username.toUpperCase()}`);
  response.status(users.status).send(users);
  return;
};

export const getUserByIdController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const payload = verifyToken(accessToken, "access") as UserPayload;
  const id = request.params.id;
  const user = await getUserById(id);

  if (!user.success) {
    logger.error(`${user.message.toUpperCase()}: REQUESTED BY ${payload.username.toUpperCase()}`);
    response.status(user.status).send(user);
    return;
  }

  logger.info(`${user.message.toUpperCase()}: REQUESTED BY ${payload.username.toUpperCase()}`);
  response.status(user.status).send(user);
  return;
};

export const getUserMarksByIdController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const payload = verifyToken(accessToken, "access") as UserPayload;
  const id = request.params.id;
  const marks = await getUserMarksById(id);

  if (!marks.success) {
    logger.error(`${marks.message.toUpperCase()}: REQUESTED BY ${payload.username.toUpperCase()}`);
    response.status(marks.status).send(marks);
    return;
  }

  logger.info(`${marks.message.toUpperCase()}: REQUESTED BY ${payload.username.toUpperCase()}`);
  response.status(marks.status).send(marks);
};

export const signInUserController = async (request: Request, response: Response) => {
  const signInData = request.body as SignInUserRequest;
  const signInUserResponse = await signInUser(signInData);

  if (!signInUserResponse.success) {
    logger.error(`${signInUserResponse.message.toUpperCase()}: REQUESTED BY: ${signInData.username.toUpperCase()}`);
    response.status(signInUserResponse.status).send(signInUserResponse);
    return;
  }

  logger.info(`${signInUserResponse.message.toUpperCase()}: REQUESTED BY: ${signInData.username.toUpperCase()}`);
  response
    .cookie("refresh-token", signInUserResponse.data!.refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: true
    })
    .status(signInUserResponse.status)
    .send(signInUserResponse);
};

export const signOutUserController = async (request: Request, response: Response) => {
  const refreshToken = request.cookies["refresh-token"];
  const payload = verifyToken(refreshToken, "refresh") as UserPayload;
  const signOutUserResponse = await signOutUser(refreshToken!);

  if (!signOutUserResponse.success && !payload) {
    logger.error(`${signOutUserResponse.message.toUpperCase()}`);
    response.status(signOutUserResponse.status).send(signOutUserResponse);
    return;
  }

  logger.info(`${signOutUserResponse.message.toUpperCase()}: REQUESTED BY ${payload.username.toUpperCase()}`);
  response
    .cookie("refresh-token", "", { httpOnly: true, maxAge: 0, secure: true })
    .status(signOutUserResponse.status)
    .send(signOutUserResponse);
};

export const signUpUserController = async (request: Request, response: Response) => {
  const isAdmin = Boolean(request.query["isAdmin"]);
  const signUpData = request.body as PostUserRequest;
  const signUpUserResponse = await postUser(signUpData, isAdmin);

  if (!signUpUserResponse.success) {
    logger.error(`${signUpUserResponse.message.toUpperCase()}: REQUESTED BY: ${signUpData.username.toUpperCase()}`);
    response.status(signUpUserResponse.status).send(signUpUserResponse);
    return;
  }

  logger.info(`${signUpUserResponse.message.toUpperCase()}: REQUESTED BY: ${signUpData.username.toUpperCase()}`);
  response.status(signUpUserResponse.status).send(signUpUserResponse);
};
