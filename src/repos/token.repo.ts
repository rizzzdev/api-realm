import { Token } from "../types/token.type";
import prisma from "../database";

export const createToken = async (tokenData: Token) => {
  return await prisma.tokens.create({
    data: {
      userId: tokenData.userId,
      refreshToken: tokenData.refreshToken,
      loggedInAt: tokenData.loggedInAt,
      loggedOutAt: tokenData.loggedOutAt
    }
  });
};

export const findTokens = async () => {
  return await prisma.tokens.findMany();
};
export const findTokenById = async (id: string) => {
  return await prisma.tokens.findFirst({ where: { id } });
};

export const findTokenByToken = async (token: string) => {
  return await prisma.tokens.findFirst({ where: { refreshToken: token } });
};

export const updateTokenById = async (id: string, tokenData: Token) => {
  return await prisma.tokens.update({
    data: {
      userId: tokenData.userId,
      refreshToken: tokenData.refreshToken,
      loggedInAt: tokenData.loggedInAt,
      loggedOutAt: tokenData.loggedOutAt
    },
    where: { id }
  });
};

export const deleteTokensByUserId = async (userId: string) => {
  return await prisma.tokens.deleteMany({
    where: { userId }
  });
};
