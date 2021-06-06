import db from "../models";

export const createUnit = async ({ name, buildingId }) => {
  const unit = await db.unit.create({
    name,
    health: Math.round(Math.random() * 50 + 50),
    buildingId,
  });

  console.log(`unit create, id: ${unit.id}`);

  setInterval(() => {
    console.log("hunger");
  }, 60000);

  return unit;
};
