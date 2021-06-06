import express from "express";

const feedUnitById = express.Router();

feedUnitById.put("/unit/:id", (req, res) => {
  res.send({});
});

export default feedUnitById;
