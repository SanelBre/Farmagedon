import express from "express";

const addUnitToBuildingById = express.Router();

addUnitToBuildingById.patch("/building/:id", (req, res) => {
  res.send({});
});

export default addUnitToBuildingById;
