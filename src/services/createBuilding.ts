import { BuildingType } from "../models/Building";
import db from "../models";
import env from "../utils/env";
import { createUnit } from "./createUnit";
import { getUnitById } from "./getUnit";
import { feedUnitById } from "./feedUnit";

export const createBuilding = async ({
  name,
  type,
  unitName,
}: {
  name: string;
  type: string;
  unitName: string;
}) => {
  const building: BuildingType = await db.building.create({
    name,
    unitName,
    type,
  });

  const unit = await createUnit({ name: unitName, buildingId: building.id });

  const foodDelivery = setInterval(async () => {
    const u = await getUnitById(unit.id);
    const buildingFeedValue =
      (env.buildingFeedCountdown / env.hungerStrikeCountdown) *
      env.hungerStrikeVal;
    if (u.isAlive) await feedUnitById(u.id, buildingFeedValue);
    else clearInterval(foodDelivery);
  }, env.buildingFeedCountdown);

  return {
    building,
    unit,
  };
};
