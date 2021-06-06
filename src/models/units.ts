import { Model, Sequelize, DataTypes } from "sequelize";

export interface UnitAttributes {
  id: number;
  name: string;
  health: number;
  lastFeedAt: Date;
}

module.exports = (sequelize: Sequelize) => {
  class Units extends Model<UnitAttributes> {}
  Units.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      health: {
        type: DataTypes.INTEGER,
      },
      lastFeedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "units",
    }
  );
  return Units;
};
