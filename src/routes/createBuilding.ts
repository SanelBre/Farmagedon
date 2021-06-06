import express from "express";

const createBuilding = express.Router();

createBuilding.post("/building", (req, res) => {
  res.send({});
});

export default createBuilding;
