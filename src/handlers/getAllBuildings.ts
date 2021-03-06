import express, { Request, Response } from "express";
import { BuildingType } from "../models/Building";
import * as services from "../services";

const getAllBuildings = express.Router();

getAllBuildings.get("/building", async (req: Request, res: Response) => {
  const buildings = await services.getAllBuildings();

  const buildingsWithUnits = await Promise.all(
    buildings.map(async (building: BuildingType) => {
      const units = await services.getAllBuildingUnitsById(building.id);
      return {
        name: building.name,
        type: building.type,
        numberOfUnits: units.length,
      };
    })
  );

  res.status(200).send(buildingsWithUnits);
});

export default getAllBuildings;
