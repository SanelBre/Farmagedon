import { UnitAttributes } from "../models/Unit";
import db from "../models";

export const createUnit = async ({
  name,
  buildingId,
}: {
  name: string;
  buildingId: string;
}) => {
  const unit: UnitAttributes = await db.unit.create({
    name,
    health: Math.round(Math.random() * 50 + 50),
    buildingId,
  });

  console.log(`unit created, id: ${unit.id}`);

  const hungerStrike = setInterval(async () => {
    console.log("hunger");
    if (false) clearInterval(hungerStrike);
  }, 10000);

  return unit;
};
