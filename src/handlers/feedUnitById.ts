import express, { Request, Response } from "express";
import { NotFoundError } from "../utils/errors";
import * as services from "../services";
import env from "../utils/env";

const feedUnitById = express.Router();

feedUnitById.put("/unit/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const unit = await services.getUnitById(id);

  if (!unit) throw new NotFoundError("unit does not exist");

  const lastFeedAt = new Date(unit.lastFeedAt);
  const requestToFeedAt = new Date();

  const dif = lastFeedAt.getTime() - requestToFeedAt.getTime();

  const difInSec = Math.abs(dif / 1000);

  if (difInSec <= 5)
    res.status(200).send({ message: `can feed in ${5 - difInSec} seconds` });

  if (unit.lastFeedAt)
    services.feedUnitById({
      id: unit.id,
      value: env.feedVal,
    });

  res.status(204).send();
});

export default feedUnitById;
