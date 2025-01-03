import bcrypt from "bcrypt";

export const hashPassword = (passWord: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(passWord, salt);
};

export const verifyPassword = (passWord: string, hashedPassWord: string) =>
  bcrypt.compareSync(passWord, hashedPassWord);
