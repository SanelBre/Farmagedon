import { UnitAttributes } from "../models/Unit";
import { BuildingAttributes } from "../models/Building";
import db from "../models";

export const getAllBuildings = async () => {
  const buildings: BuildingAttributes[] = await db.building.findAll();

  return buildings ?? [];
};

export const getAllBuildingUnits = async ({ id }: { id: string }) => {
  const buildings: UnitAttributes[] = await db.unit.findAll({
    where: {
      id,
    },
  });

  return buildings ?? [];
};
