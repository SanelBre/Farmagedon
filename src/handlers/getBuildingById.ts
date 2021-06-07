import express, { Request, Response } from "express";
import { NotFoundError } from "../utils/errors";
import * as services from "../services";

const getBuilding = express.Router();

getBuilding.get("/building/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const building = await services.getBuildingById(id);

  if (!building) throw new NotFoundError("did not find the required building");

  res.status(200).send({
    id: building.id,
    name: building.name,
    type: building.type,
  });
});

export default getBuilding;
