import { Token } from "../types/token.type";
import prisma from "../database";

export const createRefreshToken = async (tokenData: Token) => {
  return await prisma.tokens.create({
    data: {
      user_id: tokenData.userId,
      refresh_token: tokenData.refreshToken,
      logged_in_at: tokenData.loggedInAt,
      logged_out_at: tokenData.loggedOutAt
    }
  });
};

export const findRefreshTokensByUserId = async (userId: string) => {
  return await prisma.tokens.findMany({ where: { user_id: userId } });
};

export const findRefreshTokenById = async (id: string) => {
  return await prisma.tokens.findFirst({ where: { id } });
};

export const findRefreshTokenByRefreshToken = async (refreshToken: string) => {
  return await prisma.tokens.findFirst({ where: { refresh_token: refreshToken } });
};

export const updateRefreshTokenById = async (id: string, tokenData: Token) => {
  return await prisma.tokens.update({
    data: {
      user_id: tokenData.userId,
      refresh_token: tokenData.refreshToken,
      logged_in_at: tokenData.loggedInAt,
      logged_out_at: tokenData.loggedOutAt
    },
    where: { id }
  });
};
