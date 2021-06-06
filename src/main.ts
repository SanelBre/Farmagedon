import express from "express";
import { json } from "body-parser";
import models from "./models";
import {
  feedUnitById,
  addUnitToBuildingById,
  createBuilding,
  getAllBuildings,
  getBuildingById,
} from "./handlers";
import { ErrorCatcher } from "./middlewares/ErrorCatcher";

const app = express();

app.use(json());
app.use(ErrorCatcher);

app.use(createBuilding);
app.use(getBuildingById);
app.use(addUnitToBuildingById);
app.use(getAllBuildings);
app.use(feedUnitById);

app.all("*", async () => {
  throw new Error("Not Found");
});

models.sequelize.sync({ alter: true }).then(() => {
  app.listen(3000, () => console.log("listening on port 3000!!!"));
});
