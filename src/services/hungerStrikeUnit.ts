import db from "../models";
import env from "../utils/env";
import { UnitType } from "../models/Unit";

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

  console.log(
    `hunger striking unit with id: ${unit.id}, current health: ${unit.health}`
  );
};
