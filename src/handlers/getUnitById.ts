import express, { Request, Response } from "express";
import { NotFoundError } from "../utils/errors";
import * as services from "../services";

const getUnitById = express.Router();

getUnitById.get("/unit/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const unit = await services.getUnitById(id);

  if (!unit) throw new NotFoundError("did not find the required unit");

  const building = await services.getBuildingById(unit.buildingId);

  return res.status(200).send({
    id: unit.id,
    name: unit.name,
    type: building.type,
  });
});

export default getUnitById;
