import db from "../models";
import { UnitAttributes } from "../models/Unit";

export const feedUnitById = async ({
  id,
  value,
}: {
  id: string;
  value: number;
}) => {
  const unit: UnitAttributes = await db.unit.findOne({ where: { id } });
  const newHealth = unit.health + value;
  await db.unit.update({
    health: newHealth > 100 ? 100 : newHealth,
  });

  console.log(`feed unit with id: ${unit.id}, current health: ${unit.health}`);

  return unit;
};
