import express from "express";

const getAllBuildings = express.Router();

getAllBuildings.get("/building", (req, res) => {
  res.send({});
});

export default getAllBuildings;
