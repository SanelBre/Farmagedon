import express, { Request, Response } from "express";
import { BadRequestError, NotFoundError } from "../utils/errors";
import * as services from "../services";
import env from "../utils/env";

const feedUnitById = express.Router();

feedUnitById.put("/unit/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  const unit = await services.getUnitById(id);

  if (!unit) throw new NotFoundError("unit does not exist");

  if (!unit.isAlive) throw new BadRequestError("unit is dead");

  const lastFeedAt = new Date(unit.lastFeedAt).getTime();
  const requestToFeedAt = new Date().getTime();

  const dif = requestToFeedAt - lastFeedAt;

  const difInSec = Math.ceil(dif / 1000);

  if (difInSec < env.feedInterval)
    return res
      .status(200)
      .send({ message: `can feed in ${5 - difInSec} seconds` });

  await services.feedUnitById(unit.id, env.feedVal);

  return res.status(204).send();
});

export default feedUnitById;
