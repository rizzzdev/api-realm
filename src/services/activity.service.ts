import { postActivityRequestValidation } from "../validations/activity.validation";
import { PostActivityRequest } from "../types/activity.type";
import { apiResponse } from "../utils/response.util";
import { StatusCode } from "../types/api.type";
import { createActivity, findActivities } from "../repos/activity.repo";
import { findUsers } from "../repos/user.repo";
import { datetime } from "../utils/datetime.util";

export const postActivity = async (activityData: PostActivityRequest) => {
  const { error } = postActivityRequestValidation(activityData);
  if (error) {
    return apiResponse(false, StatusCode.BAD_REQUEST, error.message, null);
  }

  try {
    const activity = await createActivity({
      ...activityData,
      doneAt: datetime()
    });
    return apiResponse(true, StatusCode.CREATED, "Activity created successfully!", activity);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};

export const getActivities = async () => {
  try {
    const activities = await findActivities();
    if (activities.length === 0) {
      return apiResponse(false, StatusCode.NOT_FOUND, "Activities not found!", []);
    }
    return apiResponse(true, StatusCode.OK, "Get activities successfully!", activities);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};

export const getActivitiesWithUserDetails = async () => {
  try {
    const activities = await findActivities();
    const users = await findUsers();
    const activitiesWithUserDetails = activities
      .map((activity) => {
        const user = users.find((user) => user.id === activity.userId);
        return {
          ...activity,
          username: user?.username,
          userFullname: user?.fullName
        };
      })
      .sort((a, b) => b.doneAt.getTime() - a.doneAt.getTime());
    if (activities.length === 0) {
      return apiResponse(false, StatusCode.NOT_FOUND, "Activities not found!", []);
    }
    return apiResponse(true, StatusCode.OK, "Get activities successfully!", activitiesWithUserDetails);
  } catch {
    return apiResponse(false, StatusCode.INTERNAL_SERVER_ERROR, "Something went wrong!", null);
  }
};
