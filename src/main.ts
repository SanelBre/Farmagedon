import "express-async-errors";
import express from "express";
import { json } from "body-parser";
import models from "./models";
import {
  feedUnitById,
  addUnitToBuildingById,
  createBuilding,
  getAllBuildings,
  getBuildingById,
  getUnitById,
} from "./handlers";
import { ErrorCatcher } from "./middlewares/ErrorCatcher";
import { logGreen } from "./utils/log";

const PORT = process.env.APP_PORT ?? 3000;

const app = express();

app.use(json());

app.use(createBuilding);
app.use(addUnitToBuildingById);
app.use(getAllBuildings);
app.use(feedUnitById);
app.use(getBuildingById);
app.use(getUnitById);

app.all("*", async () => {
  throw new Error("Not Found");
});

app.use(ErrorCatcher);

models.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => logGreen(`listening on port ${PORT}!!!`));
});
