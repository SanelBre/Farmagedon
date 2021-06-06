import db from "../models";
import { createUnit } from "./createUnit";

export const createBuilding = async ({ name, type, unitName }) => {
  const building = await db.building.create({
    name,
    unitName,
    type,
  });

  console.log("i am in");

  setInterval(() => {
    console.log("object");
  }, 60000);

  await createUnit({ name: unitName, buildingId: building.id });

  return building;
};
