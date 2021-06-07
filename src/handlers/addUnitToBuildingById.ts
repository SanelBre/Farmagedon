import express from "express";
import { BadRequestError, NotFoundError } from "../utils/errors";
import * as services from "../services";

const addUnitToBuildingById = express.Router();

addUnitToBuildingById.patch("/building/:id/unit", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (!name) throw new BadRequestError("[name] is required");

  const buidling = await services.getBuildingById(id);

  if (!buidling)
    throw new NotFoundError("building with the provided [id] was not found");

  const unit = await services.createUnit({
    name,
    buildingId: id,
  });

  return res.status(201).send({
    id: unit.id,
    health: unit.health,
    type: buidling.type,
  });
});

export default addUnitToBuildingById;
