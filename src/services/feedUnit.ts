import db from "../models";
import { UnitType } from "../models/Unit";

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

  console.log(`feed unit with id: ${unit.id}, current health: ${unit.health}`);
};
