import { postQuestionRequestValidation } from "../validations/question.validation";
import { createQuestion, findQuestionById, findQuestions } from "../repos/question.repo";
import { Question } from "../types/question.type";
import { apiResponse } from "../utils/response.util";
import { StatusCode } from "../types/api.type";
import { datetime } from "../utils/datetime.util";

export const postQuestion = async (questionData: Question) => {
  const { error } = postQuestionRequestValidation(questionData);
  if (error) {
    return apiResponse(false, StatusCode.BAD_REQUEST, error.message, null);
  }
  try {
    const question = await createQuestion({
      ...questionData,
      createdAt: datetime()
    });
    return apiResponse(true, StatusCode.CREATED, "Question created successfully!", question);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};

export const getQuestions = async () => {
  const questions = await findQuestions();
  if (!questions) {
    return apiResponse(false, StatusCode.NOT_FOUND, "Questions not found!", []);
  }

  return apiResponse(true, StatusCode.OK, "Get questions successfully!", questions);
};

export const getQuestionById = async (id: string) => {
  const question = await findQuestionById(id);
  if (!question) {
    return apiResponse(false, StatusCode.NOT_FOUND, "Question not found!", null);
  }

  return apiResponse(true, StatusCode.OK, "Get question successfully!", question);
};
