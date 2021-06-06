import { UnitAttributes } from "../models/Unit";
import db from "../models";

export const getUnitById = async (id: string) => {
  const unit: UnitAttributes = await db.unit.findOne({
    where: {
      id,
    },
  });

  return unit;
};
