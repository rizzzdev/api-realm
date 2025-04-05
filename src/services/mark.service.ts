import { apiResponse } from "../utils/response.util";
import { StatusCode } from "../types/api.type";
import { createMark, findMarkByUserIdAndQuizId, findMarkByUserIdAndTestId, findMarks } from "../repos/mark.repo";
import { postMarkRequestValidation } from "../validations/mark.validation";
import { PostMarkRequest } from "../types/mark.type";
import { datetime } from "../utils/datetime.util";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { findUserById } from "../repos/user.repo";

export const postMark = async (markData: PostMarkRequest) => {
  const { error } = postMarkRequestValidation(markData);
  if (error) {
    return apiResponse(false, StatusCode.BAD_REQUEST, error.message, null);
  }

  if (markData.quizId) {
    const markByUserIdAndQuizId = await findMarkByUserIdAndQuizId(markData.userId, markData.quizId);
    if (markByUserIdAndQuizId) {
      return apiResponse(true, StatusCode.OK, "Mark already exists, not created!", markByUserIdAndQuizId);
    }
  }

  if (markData.testId) {
    const markByUserIdAndTestId = await findMarkByUserIdAndTestId(markData.userId, markData.testId);
    if (markByUserIdAndTestId) {
      return apiResponse(true, StatusCode.OK, "Mark already exists, not created!", markByUserIdAndTestId);
    }
  }

  try {
    const mark = await createMark({
      ...markData,
      markedAt: datetime()
    });
    return apiResponse(true, StatusCode.CREATED, "Mark created successfully!", mark);
  } catch (error) {
    if (error instanceof PrismaClientValidationError) {
      return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, `Something went wrong! ${error.message}`, null);
    }
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, `Something went wrong!`, null);
  }
};

export const getMarks = async (userId: string) => {
  try {
    const marks = await findMarks();
    const user = await findUserById(userId);
    const markWithUserFullName = marks.map((mark) => {
      return {
        ...mark,
        userFullName: user?.fullName
      };
    });

    if (marks.length === 0) {
      return apiResponse(false, StatusCode.NOT_FOUND, "Marks not found!", []);
    }
    return apiResponse(true, StatusCode.OK, "Get marks successfully!", markWithUserFullName);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};

export const getMarkByUserIdAndQuizId = async (userId: string, quizId: string) => {
  try {
    const user = await findUserById(userId);
    const mark = await findMarkByUserIdAndQuizId(userId, quizId);
    const markWithUserFullName = { ...mark, userFullName: user?.fullName };
    if (!mark) {
      return apiResponse(false, StatusCode.NOT_FOUND, "Mark not found!", null);
    }
    return apiResponse(true, StatusCode.OK, "Get mark successfully!", markWithUserFullName);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};

export const getMarkByUserIdAndTestId = async (userId: string, testId: string) => {
  try {
    const user = await findUserById(userId);
    const mark = await findMarkByUserIdAndTestId(userId, testId);
    const markWithUserFullName = { ...mark, userFullName: user?.fullName };
    if (!mark) {
      return apiResponse(false, StatusCode.NOT_FOUND, "Mark not found!", null);
    }
    return apiResponse(true, StatusCode.OK, "Get mark successfully!", markWithUserFullName);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};
