import { logGreen, logYellow } from "../utils/log";
import State from "../utils/statet";
import env from "../utils/env";
import db from "../models";
import { UnitType } from "../models/Unit";
import { getUnitById } from "./getUnit";
import { manageHungerStrikeIntervalById } from "./hungerStrikeUnit";

export const feedUnitById = async (id: string, value: number) => {
  const feedValue = Math.abs(value);

  const unit: UnitType = await db.unit.findOne({ where: { id } });

  const newHealth = unit.health + feedValue;

  await db.unit.update(
    {
      health: newHealth > 100 ? 100 : newHealth,
      lastFeedAt: new Date(),
    },
    { where: { id } }
  );

  logGreen(`feeding unit with id: ${unit.id}, current health: ${unit.health}`);
};

export const mangaeFeedUnitIntervalById = (unitId: string) => {
  const foodDelivery = setInterval(async () => {
    const u = await getUnitById(unitId);

    const buildingFeedValue =
      ((env.buildingFeedCountdown / env.hungerStrikeCountdown) *
        env.hungerStrikeVal) /
      2;

    if (u.isAlive) {
      await feedUnitById(u.id, buildingFeedValue);

      await db.building.update(
        {
          gaveFoodAt: new Date(),
        },
        { where: { id: u.buildingId } }
      );

      if (State[u.id]) manageHungerStrikeIntervalById(u.id);

      logYellow(`farm feeded unit with id: ${u.id}`);
    } else clearInterval(foodDelivery);
  }, env.buildingFeedCountdown);
};
