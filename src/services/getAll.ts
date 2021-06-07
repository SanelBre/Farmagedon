import { UnitType } from "../models/Unit";
import { BuildingType } from "../models/Building";
import db from "../models";

export const getAllBuildings = async () => {
  const buildings: BuildingType[] = await db.building.findAll();

  return buildings ?? [];
};

export const getAllBuildingUnitsById = async (id: string) => {
  const buildings: UnitType[] = await db.unit.findAll({
    where: {
      buildingId: id,
    },
  });

  return buildings ?? [];
};
