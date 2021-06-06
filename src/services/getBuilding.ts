import { BuildingAttributes } from "../models/Building";
import db from "../models";

export const getBuildingById = async (id: string) => {
  const building: BuildingAttributes = await db.building.findOne({
    where: {
      id,
    },
  });

  return building;
};
