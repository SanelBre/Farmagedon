import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";

const basename = path.basename(__filename);
const env = "development";
const config = require(`${__dirname}/../../config/config.json`)[env];
const db: Record<string, any> = {};

let sequelize: Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    ...config,
    ...(process.env.PSQL_HOST && { host: process.env.PSQL_HOST }),
  });
}

fs.readdirSync(__dirname)
  .filter(
    (file: string) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.split(".").length === 2 &&
      (file.slice(-3) === ".ts" || file.slice(-3) === ".js")
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

export default db;
