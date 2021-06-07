import { Model, Sequelize, DataTypes } from "sequelize";

interface UnitAttributes {
  id: string;
  name: string;
  health: number;
  lastFeedAt: Date;
  isAlive: boolean;
}

export interface UnitType extends UnitAttributes {
  buildingId: string;
}

module.exports = (sequelize: Sequelize) => {
  class Unit extends Model<UnitAttributes> {}
  Unit.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
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
      isAlive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "unit",
    }
  );
  return Unit;
};
