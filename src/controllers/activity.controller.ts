import { Request, Response } from "express";
import { UserPayload } from "../types/user.type";
import { verifyToken } from "../utils/jwt.util";
import logger from "../utils/logger.util";
import { getActivities, getActivitiesWithUserDetails, postActivity } from "../services/activity.service";

export const postActivityController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  const activityData = request.body;
  const activity = await postActivity(activityData);

  if (!activity.success) {
    logger.error(`${activity.message.toUpperCase()}: ${userPayload.username}`);
    response.status(activity.status).send(activity);
    return;
  }

  logger.info(`${activity.message.toUpperCase()}: ${userPayload.username}`);
  response.status(activity.status).send(activity);
};

export const getActivitiesController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const userPayload = verifyToken(accessToken, "access") as UserPayload;
  let activities;
  const withDetails = Boolean(request.query.withDetails);
  if (withDetails) {
    activities = await getActivitiesWithUserDetails();
  } else {
    activities = await getActivities();
  }

  if (!activities.success) {
    logger.error(`${activities.message.toUpperCase()}: ${userPayload.username}`);
    response.status(activities.status).send(activities);
    return;
  }

  logger.info(`${activities.message.toUpperCase()}: ${userPayload.username}`);
  response.status(activities.status).send(activities);
};
