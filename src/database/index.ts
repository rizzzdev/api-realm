import { PrismaClient } from "@prisma/client";
import ENV from "../configs/env.config";

const prisma = new PrismaClient();

export default prisma;
