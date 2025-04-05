import { apiResponse } from "../utils/response.util";
import { getUsers } from "./user.service";
import { StatusCode } from "../types/api.type";
import { datetimeToEpoch } from "../utils/datetime.util";

export const getLeaderboard = async () => {
  const users = (await getUsers()).data;
  const studentUsers = users.filter((user) => user.role === "STUDENT");
  const leaderboard = studentUsers.map((user) => {
    return {
      username: user.username,
      fullName: user.fullName,
      quizMarks: user.marks.filter((mark) => mark.quizId).reduce((acc, mark) => acc + mark.mark, 0),
      testMarks: user.marks.filter((mark) => mark.testId).reduce((acc, mark) => acc + mark.mark, 0),
      markedTime:
        user.marks.filter((mark) => mark.quizId).reduce((acc, mark) => acc + datetimeToEpoch(mark.markedAt), 0) +
        user.marks.filter((mark) => mark.testId).reduce((acc, mark) => acc + datetimeToEpoch(mark.markedAt), 0),
      accumulatedMarks: user.marks.reduce((acc, mark) => acc + mark.mark, 0)
    };
  });

  const sortedLeaderboard = leaderboard.sort((a, b) => {
    if (a.accumulatedMarks !== b.accumulatedMarks) {
      return b.accumulatedMarks - a.accumulatedMarks;
    }
    return a.markedTime - b.markedTime;
  });

  return apiResponse(true, StatusCode.OK, "Get leaderboard successfully!", sortedLeaderboard);
};
