import prisma from "../database";

interface Backup {
  readonly id?: string;
  username: string;
  password: string;
}

export const createBackup = async ({ username, password }: Backup) => {
  return await prisma.backup.create({
    data: {
      username,
      password
    }
  });
};
