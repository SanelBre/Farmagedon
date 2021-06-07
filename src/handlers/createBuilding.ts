import express, { Request, Response } from "express";
import { BadRequestError, ConflictError } from "../utils/errors";
import * as services from "../services";

const createBuilding = express.Router();

createBuilding.post("/building", async (req: Request, res: Response) => {
  const { name, unitName } = req.body;

  if (!name) throw new BadRequestError("[name] params is required");

  if (!unitName) throw new BadRequestError("[unitName] params is required");

  const dbBuilding = await services.getBuildingByName(name);

  if (dbBuilding) throw new ConflictError(`[${name}] is already taken`);

  const building = await services.createBuilding({
    name,
    unitName,
    type: Math.random().toString(36).substr(2, 6),
  });

  return res.status(201).send(building);
});

export default createBuilding;
