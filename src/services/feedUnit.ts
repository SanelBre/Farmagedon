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

  console.log(
    "\x1b[32m",
    `feeding unit with id: ${unit.id}, current health: ${unit.health}`,
    "\x1b[37m"
  );
};

export const mangaeFeedUnitIntervalById = (unitId: string) => {
  const foodDelivery = setInterval(async () => {
    const u = await getUnitById(unitId);

    const buildingFeedValue =
      (env.buildingFeedCountdown / env.hungerStrikeCountdown) *
      env.hungerStrikeVal;

    if (u.isAlive) {
      await feedUnitById(u.id, buildingFeedValue);

      if (State[u.id]) manageHungerStrikeIntervalById(u.id);

      console.log("\x1b[33m", `farm feeded unit with id: ${u.id}`, "\x1b[37m");
    } else clearInterval(foodDelivery);
  }, env.buildingFeedCountdown);
};
