import express from "express";
import { BadRequestError, NotFoundError } from "../utils/errors";
import * as services from "../services";

const addUnitToBuildingById = express.Router();

addUnitToBuildingById.patch("/building/:id", async (req, res) => {
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

  res.status(201).send(unit);
});

export default addUnitToBuildingById;
