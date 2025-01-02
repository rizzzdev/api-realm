import bcrypt from "bcrypt";

export const hashPassWord = (passWord: string) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(passWord, salt);
};

export const verifyPassWord = (passWord: string, hashedPassWord: string) =>
  bcrypt.compareSync(passWord, hashedPassWord);
