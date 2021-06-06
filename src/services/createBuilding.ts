import { BuildingAttributes } from "../models/Building";
import db from "../models";
import { createUnit } from "./createUnit";

export const createBuilding = async ({
  name,
  type,
  unitName,
}: {
  name: string;
  type: string;
  unitName: string;
}) => {
  const building: BuildingAttributes = await db.building.create({
    name,
    unitName,
    type,
  });

  const foodDelivery = setInterval(async () => {
    console.log("food delivery");
    if (false) clearInterval(foodDelivery);
  }, 60000);

  await createUnit({ name: unitName, buildingId: building.id });

  return building;
};
