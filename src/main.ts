import express from "express";
import { json } from "body-parser";
import { sequelize } from "./models";

const app = express();
app.use(json());

app.all("*", async () => {
  throw new Error("Not Found");
});

sequelize.sync().then(() => {
  app.listen(3000, () => console.log("listening on port 3000!!!"));
});
