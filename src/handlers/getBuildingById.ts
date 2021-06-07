import express, { Request, Response } from "express";
import { NotFoundError } from "../utils/errors";
import * as services from "../services";

const getBuilding = express.Router();

getBuilding.get("/building/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const building = await services.getBuildingById(id);

  if (!building) throw new NotFoundError("did not find the required building");

  const units = await services.getAllBuildingUnitsById(building.id);

  const unitsMap = units.map((unit) => ({
    id: unit.id,
    unit: unit.health,
    isAlive: unit.isAlive,
  }));

  res.status(200).send({
    id: building.id,
    name: building.name,
    type: building.type,
    units: unitsMap,
  });
});

export default getBuilding;
