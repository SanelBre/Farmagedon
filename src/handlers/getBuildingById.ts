import express, { Request, Response } from "express";
import * as services from "../services";

const getBuilding = express.Router();

getBuilding.get("/building/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const building = await services.getBuildingById(id);

  res.status(200).send(building);
});

export default getBuilding;
