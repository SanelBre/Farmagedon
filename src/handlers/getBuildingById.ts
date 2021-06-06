import express from "express";

const getBuilding = express.Router();

getBuilding.get("/building/:id", (req, res) => {
  res.send({});
});

export default getBuilding;
