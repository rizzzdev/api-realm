import { datetime } from "../utils/datetime.util";
import { apiResponse } from "../utils/response.util";
import { StatusCode } from "../types/api.type";
import { createTest, findTests } from "../repos/test.repo";

export const postTest = async () => {
  try {
    const test = await createTest({
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
    return apiResponse(true, StatusCode.OK, "Get tests successfully!", tests);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};
