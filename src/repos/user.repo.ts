import { User } from "../types/user.type";
import prisma from "../database";
import { Token } from "../types/token.type";
import { Mark } from "../types/mark.type";
import { Activity } from "../types/activity.type";

export const createUser = async (userData: User<Token, Mark, Activity>) => {
  return await prisma.users.create({
    data: {
      fullName: userData.fullName,
      username: userData.username,
      password: userData.password,
      gender: userData.gender,
      avatarUrl: userData.avatarUrl,
      role: userData.role,
      signedUpAt: userData.signedUpAt,
      deletedAt: userData.deletedAt,
      tokens: {
        create: []
      },
      marks: {
        create: []
      },
      activities: {
        create: []
      }
    }
  });
};

export const findUsers = async () => {
  return await prisma.users.findMany({
    include: {
      tokens: true,
      marks: true,
      activities: true
    }
  });
};

export const findUserById = async (id: string) => {
  return await prisma.users.findFirst({
    include: {
      tokens: true,
      marks: true,
      activities: true
    },
    where: { id }
  });
};

export const findUserByUsername = async (username: string) => {
  return await prisma.users.findFirst({
    include: {
      tokens: true,
      marks: true,
      activities: true
    },
    where: { username }
  });
};

export const updateUserById = async (id: string, userData: User<Token, Mark, Activity>) => {
  return await prisma.users.update({
    data: {
      fullName: userData.fullName,
      username: userData.username,
      password: userData.password,
      gender: userData.gender,
      avatarUrl: userData.avatarUrl,
      role: userData.role,
      signedUpAt: userData.signedUpAt,
      deletedAt: userData.deletedAt
    },
    where: { id }
  });
};
