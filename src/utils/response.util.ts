import { ApiResponse } from "../types/api.type";

export const apiResponse = <T>(success: boolean, status: number, message: string, data: T): ApiResponse<T> => {
  return {
    success,
    status,
    message,
    data
  };
};
