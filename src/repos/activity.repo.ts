import { Activity } from "../types/activity.type";
import prisma from "../database";

export const createActivity = async (activityData: Activity) => {
  return await prisma.activities.create({
    data: {
      materialId: activityData.materialId,
      userId: activityData.userId
    }
  });
};

export const findActivities = async () => {
  return await prisma.activities.findMany();
};

export const findActivityById = async (id: string) => {
  return await prisma.activities.findFirst({ where: { id } });
};

export const updateActivityById = async (id: string, activityData: Activity) => {
  return await prisma.activities.update({
    data: {
      materialId: activityData.materialId,
      userId: activityData.userId
    },
    where: { id }
  });
};
