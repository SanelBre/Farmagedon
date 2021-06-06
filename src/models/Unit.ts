import { Model, Sequelize, DataTypes } from "sequelize";

export interface UnitAttributes {
  id: number;
  name: string;
  health: number;
  lastFeedAt: Date;
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
    },
    {
      sequelize,
      modelName: "unit",
    }
  );
  return Unit;
};
