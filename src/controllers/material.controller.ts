import { Request, Response } from "express";
import logger from "../utils/logger.util";
import { verifyToken } from "../utils/jwt.util";
import { GetAllMaterials, getMaterialById, postMaterial } from "../services/material.service";
import { Material } from "../types/material.type";
import { UserPayload } from "../types/user.type";

export const getMaterialsController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const payload = verifyToken(accessToken, "access") as UserPayload;
  const materials = await GetAllMaterials();

  if (!materials.success) {
    logger.error(`${materials.message.toUpperCase()}: ${payload.username}`);
    response.status(materials.status).send(materials);
    return;
  }

  logger.info(`GET ALL MATERIALS: ${payload.username}`);
  response.status(materials.status).send(materials);
  return;
};

export const getMaterialByIdController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const payload = verifyToken(accessToken, "access") as UserPayload;
  const id = request.params.id;
  const material = await getMaterialById(id);

  if (!material.success) {
    logger.error(`${material.message.toUpperCase()}: ${payload.username}`);
    response.status(material.status).send(material);
    return;
  }

  logger.info(`GET MATERIAL BY ID ${id}: ${payload.username}`);
  response.status(material.status).send(material);
  return;
};

export const postMaterialController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const payload = verifyToken(accessToken, "access") as UserPayload;
  const material = await postMaterial(request.body);

  if (!material.success) {
    logger.error(`${material.message.toUpperCase()}: ${payload.username}`);
    response.status(material.status).send(material);
    return;
  }

  logger.info(`POST MATERIAL: ${payload.username}`);
  response.status(material.status).send(material);
  return;
};
