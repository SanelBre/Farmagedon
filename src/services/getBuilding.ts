import { BuildingType } from "../models/Building";
import db from "../models";

export const getBuildingById = async (id: string) => {
  const building: BuildingType = await db.building.findOne({
    where: {
      id,
    },
  });

  return building;
};

export const getBuildingByName = async (name: string) => {
  const building: BuildingType = await db.building.findOne({
    where: {
      name,
    },
  });

  return building;
};
