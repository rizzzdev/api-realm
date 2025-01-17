import { datetime } from "../utils/datetime.util";
import { createQuiz, findQuizById, findQuizzes } from "../repos/quiz.repo";
import { apiResponse } from "../utils/response.util";
import { StatusCode } from "../types/api.type";
import { postQuizRequestValidation } from "../validations/quiz.validation";
import { PostQuizRequest } from "../types/quiz.type";

export const postQuiz = async (quizData: PostQuizRequest) => {
  const { error } = postQuizRequestValidation(quizData);
  if (error) {
    return apiResponse(false, StatusCode.BAD_REQUEST, error.message, null);
  }

  try {
    const quiz = await createQuiz({
      materialId: quizData.materialId,
      createdAt: datetime()
    });
    return apiResponse(true, StatusCode.CREATED, "Quiz created successfully!", quiz);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};

export const getQuizzes = async () => {
  try {
    const quizzes = await findQuizzes();
    return apiResponse(true, StatusCode.OK, "Get quizzes successfully!", quizzes);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};

export const getQuizById = async (id: string) => {
  try {
    const quiz = await findQuizById(id);
    return apiResponse(true, StatusCode.OK, "Get quiz successfully!", quiz);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};
