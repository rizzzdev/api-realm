import { Activity } from "../types/activity.type";
import prisma from "../database";

export const createActivity = async (activityData: Activity) => {
  return await prisma.activities.create({
    data: {
      activityType: activityData.activityType,
      message: activityData.message,
      userId: activityData.userId,
      doneAt: activityData.doneAt,
      quizId: activityData.quizId,
      materialId: activityData.materialId,
      testId: activityData.testId
    }
  });
};

export const findActivities = async () => {
  return await prisma.activities.findMany({
    orderBy: {
      id: "asc"
    }
  });
};

findActivities().then(console.log);

export const findActivityById = async (id: string) => {
  return await prisma.activities.findFirst({ where: { id } });
};

export const updateActivityById = async (id: string, activityData: Activity) => {
  return await prisma.activities.update({
    data: {
      activityType: activityData.activityType,
      message: activityData.message,
      userId: activityData.userId,
      doneAt: activityData.doneAt,
      quizId: activityData.quizId,
      materialId: activityData.materialId,
      testId: activityData.testId
    },
    where: { id }
  });
};

export const deleteActivitiesByUserId = async (userId: string) => {
  return await prisma.activities.deleteMany({
    where: { userId }
  });
};
