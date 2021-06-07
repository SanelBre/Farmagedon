import { BuildingType } from "../models/Building";
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
  const building: BuildingType = await db.building.create({
    name,
    unitName,
    type,
  });

  const unit = await createUnit({ name: unitName, buildingId: building.id });

  return {
    building,
    unit,
  };
};
