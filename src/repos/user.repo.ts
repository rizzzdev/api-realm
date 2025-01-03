import { User } from "../types/user.type";
import prisma from "../database";

export const createUser = async (userData: User) => {
  return await prisma.users.create({
    data: {
      full_name: userData.fullName,
      id: userData.userId,
      pass_word: userData.password,
      avatar_url: userData.avatarUrl,
      gender: userData.gender,
      role: userData.role,
      registered_at: userData.registeredAt,
      deleted_at: userData.deletedAt
    }
  });
};

export const findUsers = async () => {
  return await prisma.users.findMany();
};

export const findUserById = async (id: string) => {
  return await prisma.users.findFirst({ where: { id } });
};

export const updateUserById = async (id: string, userData: User) => {
  return await prisma.users.update({
    data: {
      full_name: userData.fullName,
      id: userData.userId,
      pass_word: userData.password,
      avatar_url: userData.avatarUrl,
      gender: userData.gender,
      role: userData.role,
      registered_at: userData.registeredAt,
      deleted_at: userData.deletedAt
    },
    where: { id }
  });
};
