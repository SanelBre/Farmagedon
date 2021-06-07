import { UnitType } from "../models/Unit";
import db from "../models";

export const getUnitById = async (id: string) => {
  const unit: UnitType = await db.unit.findOne({
    where: {
      id,
    },
  });

  return unit;
};
