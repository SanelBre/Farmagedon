import { logRed } from "../utils/log";
import env from "../utils/env";
import State from "../utils/statet";
import { UnitType } from "../models/Unit";
import db from "../models";
import { getUnitById } from "./getUnit";

export const hungerStrikeUnitById = async (id: string) => {
  const value = -env.hungerStrikeVal;

  const unit: UnitType = await db.unit.findOne({ where: { id } });

  const newHealth = unit.health + value;

  await db.unit.update(
    {
      health: newHealth,
      isAlive: !(newHealth <= 0),
    },
    { where: { id } }
  );

  logRed(
    `hunger striking unit with id: ${unit.id}, current health: ${unit.health}`
  );
};

export const manageHungerStrikeIntervalById = (unitId: string): void => {
  if (State[unitId]) {
    clearInterval(State[unitId]);
    delete State[unitId];
  }
  const hungerStrikeIntervalReference = setInterval(async () => {
    const u = await getUnitById(unitId);

    if (!u.isAlive) return clearInterval(hungerStrikeIntervalReference);

    return hungerStrikeUnitById(unitId);
  }, env.hungerStrikeCountdown);

  State[unitId] = hungerStrikeIntervalReference;
};
