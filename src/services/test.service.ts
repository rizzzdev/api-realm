import { datetime } from "../utils/datetime.util";
import { apiResponse } from "../utils/response.util";
import { StatusCode } from "../types/api.type";
import { createTest, findTests } from "../repos/test.repo";
import { Test } from "../types/test.type";

export const postTest = async (testData: Test) => {
  try {
    const test = await createTest({
      title: testData.title,
      description: testData.description,
      imageUrl: testData.imageUrl,
      createdAt: datetime()
    });
    return apiResponse(true, StatusCode.CREATED, "Test created successfully!", test);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};

export const getTests = async () => {
  try {
    const tests = await findTests();
    const testsSorted = tests.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    return apiResponse(true, StatusCode.OK, "Get tests successfully!", testsSorted);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};
