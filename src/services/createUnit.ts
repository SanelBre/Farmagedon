import { UnitType } from "../models/Unit";
import db from "../models";
import { manageHungerStrikeIntervalById } from "./hungerStrikeUnit";
import { mangaeFeedUnitIntervalById } from "./feedUnit";

export const createUnit = async ({
  name,
  buildingId,
}: {
  name: string;
  buildingId: string;
}) => {
  const randomHealthUponCreation50to100 = Math.round(Math.random() * 50 + 50);

  const unit: UnitType = await db.unit.create({
    name,
    health: randomHealthUponCreation50to100,
    buildingId,
  });

  mangaeFeedUnitIntervalById(unit.id);

  manageHungerStrikeIntervalById(unit.id);

  return unit;
};
