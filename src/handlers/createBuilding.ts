import express, { Request, Response } from "express";
import { BadRequestError } from "../utils/errors";
import * as services from "../services";

const createBuilding = express.Router();

createBuilding.post("/building", async (req: Request, res: Response) => {
  const { name, unitName } = req.body;

  if (!name) throw new BadRequestError("[name] params is required");
  if (!unitName) throw new BadRequestError("[unitName] params is required");

  const building = await services.createBuilding({
    name,
    unitName,
    type: Math.random().toString(36).substr(2, 6),
  });

  res.send(building);
});

export default createBuilding;
