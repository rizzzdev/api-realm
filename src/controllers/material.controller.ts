import { Request, Response } from "express";
import logger from "../utils/logger.util";
import { JwtPayload } from "../types/api-response.type";
import { verifyToken } from "../utils/jwt.util";
import { GetAllMaterials, getMaterialById, postMaterial } from "../services/material.service";
import { Material } from "../types/material.type";

export const getMaterialsController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const payload = verifyToken(accessToken, "access") as JwtPayload;
  const materials = await GetAllMaterials();

  if (!materials.success) {
    logger.error(`${materials.message.toUpperCase()}: ${payload.userId}`);
    response.status(materials.status).send(materials);
    return;
  }

  logger.info(`GET ALL MATERIALS: ${payload.userId}`);
  response.status(materials.status).send(materials);
  return;
};

export const getMaterialByIdController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const payload = verifyToken(accessToken, "access") as JwtPayload;
  const id = request.params.id;
  const material = await getMaterialById(id);

  if (!material.success) {
    logger.error(`${material.message.toUpperCase()}: ${payload.userId}`);
    response.status(material.status).send(material);
    return;
  }

  logger.info(`GET MATERIAL BY ID ${id}: ${payload.userId}`);
  response.status(material.status).send(material);
  return;
};

export const postMaterialController = async (request: Request, response: Response) => {
  const accessToken = request.headers.authorization!.split(" ")[1];
  const payload = verifyToken(accessToken, "access") as JwtPayload;
  const materialData: Material = request.body;
  const material = await postMaterial(materialData);

  if (!material.success) {
    logger.error(`${material.message.toUpperCase()}: ${payload.userId}`);
    response.status(material.status).send(material);
    return;
  }

  logger.info(`POST MATERIAL: ${payload.userId}`);
  response.status(material.status).send(material);
  return;
};
