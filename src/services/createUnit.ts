import { UnitType } from "../models/Unit";
import db from "../models";
import env from "../utils/env";
import { getUnitById } from "./getUnit";
import { hungerStrikeUnitById } from "./hungerStrikeUnit";

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

  console.log(`unit created, id: ${unit.id}`);

  const hungerStrike = setInterval(async () => {
    const u = await getUnitById(unit.id);
    if (u.isAlive) await hungerStrikeUnitById(u.id);
    else clearInterval(hungerStrike);
  }, env.hungerStrikeCountdown);

  return unit;
};
