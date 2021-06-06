import express from "express";
import { json } from "body-parser";
import { sequelize } from "./models";
import {
  feedUnitById,
  addUnitToBuildingById,
  createBuilding,
  getAllBuildings,
  getBuildingById,
} from "./routes";

const app = express();
app.use(json());

app.use(createBuilding);
app.use(getBuildingById);
app.use(addUnitToBuildingById);
app.use(getAllBuildings);
app.use(feedUnitById);

app.all("*", async () => {
  throw new Error("Not Found");
});

sequelize.sync({ force: true }).then(() => {
  app.listen(3000, () => console.log("listening on port 3000!!!"));
});
